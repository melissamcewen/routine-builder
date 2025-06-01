import { describe, it, expect } from 'vitest';
import { GET as getConcerns } from '../concerns/+server';
import {
	GET as getProductsByConcerns,
	POST as postProductsByConcerns
} from '../products/by-concerns/+server';

describe('Concerns API Tests', () => {
	describe('GET /api/concerns', () => {
		it('should return all available concerns', async () => {
			const response = await getConcerns();
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.concerns).toBeDefined();
			expect(Array.isArray(data.concerns)).toBe(true);
			expect(data.count).toBeGreaterThan(0);
			expect(data.message).toContain('retrieved successfully');

			// Should contain some known concerns
			expect(data.concerns).toContain('Dullness');
			expect(data.concerns).toContain('Signs of Aging');
			expect(data.concerns).toContain('Textural Irregularities');

			// Should be sorted alphabetically
			const sortedConcerns = [...data.concerns].sort();
			expect(data.concerns).toEqual(sortedConcerns);
		});
	});

	describe('GET /api/products/by-concerns', () => {
		it('should filter products by a single concern', async () => {
			const url = new URL('http://localhost/api/products/by-concerns?concerns=Dullness');
			const response = await getProductsByConcerns({ url } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.products).toBeDefined();
			expect(Array.isArray(data.products)).toBe(true);
			expect(data.count).toBeGreaterThan(0);
			expect(data.requestedConcerns).toContain('Dullness');

			// All returned products should target dullness
			data.products.forEach((product: any) => {
				expect(product.targets.some((target: string) => target.toLowerCase() === 'dullness')).toBe(
					true
				);
			});
		});

		it('should filter products by multiple concerns', async () => {
			const url = new URL(
				'http://localhost/api/products/by-concerns?concerns=Dullness,Signs of Aging'
			);
			const response = await getProductsByConcerns({ url } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.products).toBeDefined();
			expect(data.count).toBeGreaterThan(0);
			expect(data.requestedConcerns).toContain('Dullness');
			expect(data.requestedConcerns).toContain('Signs of Aging');

			// Products should target at least one of the requested concerns
			data.products.forEach((product: any) => {
				const hasTargetedConcern = product.targets.some(
					(target: string) =>
						target.toLowerCase() === 'dullness' || target.toLowerCase() === 'signs of aging'
				);
				expect(hasTargetedConcern).toBe(true);
			});
		});

		it('should handle case-insensitive concern matching', async () => {
			const url = new URL('http://localhost/api/products/by-concerns?concerns=dullness');
			const response = await getProductsByConcerns({ url } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.count).toBeGreaterThan(0);
			expect(data.requestedConcerns).toContain('Dullness'); // Should normalize to proper case
		});

		it('should return 400 for missing concerns parameter', async () => {
			const url = new URL('http://localhost/api/products/by-concerns');
			const response = await getProductsByConcerns({ url } as any);
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.success).toBe(false);
			expect(data.error).toContain('must be provided');
		});

		it('should handle invalid concerns gracefully', async () => {
			const url = new URL(
				'http://localhost/api/products/by-concerns?concerns=Invalid Concern,Dullness'
			);
			const response = await getProductsByConcerns({ url } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.invalidConcerns).toContain('Invalid Concern');
			expect(data.requestedConcerns).toContain('Dullness');
			expect(data.message).toContain('Invalid concerns');
		});
	});

	describe('POST /api/products/by-concerns', () => {
		it('should filter products with array input', async () => {
			const request = {
				json: async () => ({
					concerns: ['Dullness', 'Signs of Aging']
				})
			};

			const response = await postProductsByConcerns({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.products).toBeDefined();
			expect(data.count).toBeGreaterThan(0);
			expect(data.requestedConcerns).toContain('Dullness');
			expect(data.requestedConcerns).toContain('Signs of Aging');
		});

		it('should filter products with string input', async () => {
			const request = {
				json: async () => ({
					concerns: 'Dullness,Signs of Aging'
				})
			};

			const response = await postProductsByConcerns({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.count).toBeGreaterThan(0);
			expect(data.requestedConcerns).toContain('Dullness');
			expect(data.requestedConcerns).toContain('Signs of Aging');
		});

		it('should return 400 for malformed request body', async () => {
			const request = {
				json: async () => ({
					wrongField: 'some-value'
				})
			};

			const response = await postProductsByConcerns({ request } as any);
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.success).toBe(false);
			expect(data.error).toContain('must be provided');
		});

		it('should return 400 for empty concerns array', async () => {
			const request = {
				json: async () => ({
					concerns: []
				})
			};

			const response = await postProductsByConcerns({ request } as any);
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.success).toBe(false);
			expect(data.error).toContain('At least one valid concern');
		});
	});
});

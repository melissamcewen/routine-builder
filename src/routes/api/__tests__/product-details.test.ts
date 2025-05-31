import { describe, it, expect } from 'vitest';
import { GET } from '../products/[id]/+server';
import { POST } from '../products/details/+server';

describe('Product Details API Tests', () => {
	describe('GET /api/products/{id}', () => {
		it('should return detailed product information for valid ID', async () => {
			const response = await GET({
				params: { id: 'glycolic-acid-7-exfoliating-toner' }
			} as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.product).toBeDefined();
			expect(data.product.id).toBe('glycolic-acid-7-exfoliating-toner');
			expect(data.product.name).toBe('Glycolic Acid 7% Exfoliating Toner');
			expect(data.message).toContain('retrieved successfully');

			// Verify detailed product structure
			expect(data.product).toHaveProperty('timeOfDay');
			expect(data.product).toHaveProperty('step');
			expect(data.product).toHaveProperty('targets');
			expect(data.product).toHaveProperty('format');
			expect(data.product).toHaveProperty('excludes');
			expect(data.product).toHaveProperty('tags');
			expect(data.product).toHaveProperty('skinTypes');
		});

		it('should return 404 for invalid product ID', async () => {
			const response = await GET({
				params: { id: 'invalid-product-id' }
			} as any);
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.success).toBe(false);
			expect(data.error).toContain('not found');
		});

		it('should return 400 for missing product ID', async () => {
			const response = await GET({
				params: {}
			} as any);
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.success).toBe(false);
			expect(data.error).toContain('required');
		});
	});

	describe('POST /api/products/details', () => {
		it('should return details for multiple products with array input', async () => {
			const request = {
				json: async () => ({
					products: ['glycolic-acid-7-exfoliating-toner', 'niacinamide-10-zinc-1']
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.products).toBeDefined();
			expect(Array.isArray(data.products)).toBe(true);
			expect(data.products.length).toBe(2);
			expect(data.count).toBe(2);
			expect(data.message).toContain('2 product(s) retrieved successfully');

			// Verify both products have detailed information
			data.products.forEach((product: any) => {
				expect(product).toHaveProperty('id');
				expect(product).toHaveProperty('name');
				expect(product).toHaveProperty('timeOfDay');
				expect(product).toHaveProperty('step');
				expect(product).toHaveProperty('targets');
				expect(product).toHaveProperty('format');
			});
		});

		it('should return details for multiple products with string input', async () => {
			const request = {
				json: async () => ({
					products: 'glycolic-acid-7-exfoliating-toner,hyaluronic-acid-2-b5-hydrating-serum'
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.products.length).toBe(2);
			expect(data.count).toBe(2);
		});

		it('should handle all invalid product IDs', async () => {
			const request = {
				json: async () => ({
					products: ['invalid-id-1', 'invalid-id-2']
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.success).toBe(false);
			expect(data.error).toContain('Product IDs not found');
			expect(data.notFoundIds).toEqual(['invalid-id-1', 'invalid-id-2']);
		});

		it('should handle mixed valid and invalid product IDs', async () => {
			const request = {
				json: async () => ({
					products: ['glycolic-acid-7-exfoliating-toner', 'invalid-id']
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.success).toBe(false);
			expect(data.error).toContain('Product IDs not found');
			expect(data.notFoundIds).toEqual(['invalid-id']);
			expect(data.foundProducts).toBeDefined();
			expect(data.foundProducts.length).toBe(1);
			expect(data.foundProducts[0].id).toBe('glycolic-acid-7-exfoliating-toner');
		});

		it('should return 400 for malformed request body', async () => {
			const request = {
				json: async () => ({
					wrongField: 'some-value'
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.success).toBe(false);
			expect(data.error).toContain('must be provided');
		});

		it('should return 400 for empty product list', async () => {
			const request = {
				json: async () => ({
					products: []
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.success).toBe(false);
			expect(data.error).toContain('At least one product ID');
		});
	});
});

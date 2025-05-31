import { describe, it, expect } from 'vitest';
import { GET } from '../products/+server';
import { POST } from '../generate-routine/+server';

describe('API Integration Tests', () => {
	describe('GET /api/products', () => {
		it('should return all products with correct structure', async () => {
			const response = await GET();
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.products).toBeDefined();
			expect(Array.isArray(data.products)).toBe(true);
			expect(data.count).toBeGreaterThan(0);
			expect(data.message).toContain('successfully');

			// Verify product structure - simplified to only id and name
			const firstProduct = data.products[0];
			expect(firstProduct).toHaveProperty('id');
			expect(firstProduct).toHaveProperty('name');
			expect(typeof firstProduct.id).toBe('string');
			expect(typeof firstProduct.name).toBe('string');
			expect(firstProduct.id.length).toBeGreaterThan(0);
			expect(firstProduct.name.length).toBeGreaterThan(0);
		});
	});

	describe('POST /api/generate-routine', () => {
		it('should generate routines with comma-separated string input', async () => {
			const request = {
				json: async () => ({
					products: 'glycolic-acid-7-exfoliating-toner,niacinamide-10-zinc-1'
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.routines).toBeDefined();
			expect(Array.isArray(data.routines)).toBe(true);
			expect(data.routines.length).toBeGreaterThan(0);
			expect(data.summary).toBeDefined();
			expect(data.message).toBeDefined();

			// Verify routine structure
			const firstRoutine = data.routines[0];
			expect(firstRoutine).toHaveProperty('id');
			expect(firstRoutine).toHaveProperty('timeOfDay');
			expect(firstRoutine).toHaveProperty('routineNumber');
			expect(firstRoutine).toHaveProperty('products');
			expect(firstRoutine).toHaveProperty('productCount');
		});

		it('should generate routines with array input', async () => {
			const request = {
				json: async () => ({
					products: ['glycolic-acid-7-exfoliating-toner', 'hyaluronic-acid-2-b5-hydrating-serum']
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.routines.length).toBeGreaterThan(0);
		});

		it('should handle invalid product IDs', async () => {
			const request = {
				json: async () => ({
					products: ['invalid-product-id', 'another-invalid-id']
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(false);
			expect(data.error).toContain('Invalid product IDs');
			expect(data.invalidIds).toBeDefined();
			expect(data.invalidIds).toEqual(['invalid-product-id', 'another-invalid-id']);
		});

		it('should handle mixed valid and invalid product IDs', async () => {
			const request = {
				json: async () => ({
					products: ['glycolic-acid-7-exfoliating-toner', 'invalid-product-id']
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(false);
			expect(data.error).toContain('Invalid product IDs');
			expect(data.invalidIds).toEqual(['invalid-product-id']);
		});

		it('should handle malformed request body', async () => {
			const request = {
				json: async () => ({
					wrongField: 'some-value'
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(false);
			expect(data.error).toContain('Products must be provided');
		});

		it('should separate day and night routines correctly', async () => {
			const request = {
				json: async () => ({
					products:
						'glycolic-acid-7-exfoliating-toner,niacinamide-10-zinc-1,hyaluronic-acid-2-b5-hydrating-serum'
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			expect(data.dayRoutines).toBeDefined();
			expect(data.nightRoutines).toBeDefined();
			expect(Array.isArray(data.dayRoutines)).toBe(true);
			expect(Array.isArray(data.nightRoutines)).toBe(true);

			// Should have both day and night routines for these products
			expect(data.summary.dayRoutines).toBeGreaterThan(0);
			expect(data.summary.nightRoutines).toBeGreaterThan(0);
		});

		it('should provide appropriate message for multiple routines', async () => {
			const request = {
				json: async () => ({
					products: ['glycolic-acid-7-exfoliating-toner', 'argireline-solution-10'] // These conflict
				})
			};

			const response = await POST({ request } as any);
			const data = await response.json();

			expect(data.success).toBe(true);
			if (data.routines.length > 1) {
				expect(data.message).toContain('rotate between them');
			}
		});
	});
});

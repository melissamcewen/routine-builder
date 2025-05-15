import { describe, it, expect } from 'vitest';
import { products } from '../products';
import { popularComparisons } from '../popularComparisons';

describe('Product Data Validation', () => {
	describe('Product ID Consistency', () => {
		it('should have matching object keys and id fields', () => {
			for (const [key, product] of Object.entries(products)) {
				expect(product.id).toBe(
					key,
					`Product "${product.Name}" has mismatched ID. Object key: ${key}, id field: ${product.id}`
				);
			}
		});

		it('should have unique product IDs', () => {
			const ids = new Set<string>();
			for (const product of Object.values(products)) {
				expect(ids.has(product.id)).toBe(
					false,
					`Duplicate product ID found: ${product.id} (${product.Name})`
				);
				ids.add(product.id);
			}
		});

		it('should have valid product IDs in popular comparisons', () => {
			for (const comparison of popularComparisons) {
				for (const id of comparison.ids) {
					expect(products[id]).toBeDefined(),
						`Product ID "${id}" in popular comparisons does not exist in products data`;
				}
			}
		});
	});
});

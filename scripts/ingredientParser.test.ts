import { describe, it, expect } from 'vitest';
import { products } from '../src/lib/products.js';
import type { Ingredient } from '../src/lib/types/ingredients.js';
import {
	generateIngredientId,
	normalizeIngredientName,
	parseIngredientString,
	parseIngredients
} from './ingredientParser.js';

describe('Ingredient Parsing', () => {
	describe('generateIngredientId', () => {
		it('should convert to lowercase and replace spaces with hyphens', () => {
			expect(generateIngredientId('Multi Peptide')).toBe('multi-peptide');
		});

		it('should handle special characters', () => {
			expect(generateIngredientId('1,2-Hexanediol')).toBe('1-2-hexanediol');
		});

		it('should remove multiple hyphens and trailing hyphens', () => {
			expect(generateIngredientId('Multi--Peptide!')).toBe('multi-peptide');
		});
	});

	describe('normalizeIngredientName', () => {
		it('should capitalize first letter of each word', () => {
			expect(normalizeIngredientName('multi peptide')).toBe('Multi Peptide');
		});

		it('should handle special characters correctly', () => {
			expect(normalizeIngredientName('1,2-hexanediol')).toBe('1,2-Hexanediol');
		});

		it('should preserve spaces', () => {
			expect(normalizeIngredientName('multi peptide serum')).toBe('Multi Peptide Serum');
		});

		it('should trim whitespace', () => {
			expect(normalizeIngredientName('  Multi Peptide  ')).toBe('Multi Peptide');
		});
	});

	describe('parseIngredientString', () => {
		it('should split ingredients by comma', () => {
			const input = 'Water, Glycerin, Niacinamide';
			expect(parseIngredientString(input)).toEqual(['Water', 'Glycerin', 'Niacinamide']);
		});

		it('should handle special case ingredients with commas', () => {
			const input = 'Water, 1,2-Hexanediol, Niacinamide';
			expect(parseIngredientString(input)).toEqual(['Water', '1,2-Hexanediol', 'Niacinamide']);
		});

		it('should trim whitespace', () => {
			const input = 'Water,  Glycerin ,Niacinamide';
			expect(parseIngredientString(input)).toEqual(['Water', 'Glycerin', 'Niacinamide']);
		});

		it('should filter out empty entries', () => {
			const input = 'Water,,Glycerin, , Niacinamide';
			expect(parseIngredientString(input)).toEqual(['Water', 'Glycerin', 'Niacinamide']);
		});
	});

	describe('Integration', () => {
		it('should handle real product ingredient lists', () => {
			// Get a real product's ingredients
			const product = products['glycolic-acid-7-exfoliating-toner'];
			if (!product.Ingredients) {
				throw new Error('Test product has no ingredients');
			}

			const ingredients = parseIngredientString(product.Ingredients);

			// Test a few specific ingredients we expect to find
			expect(ingredients).toContain('Aqua (Water)');
			expect(ingredients).toContain('Glycolic Acid');

			// Make sure all ingredients are properly formatted
			ingredients.forEach((ingredient) => {
				const normalized = normalizeIngredientName(ingredient);
				const id = generateIngredientId(ingredient);

				// Each ingredient should have an ID
				expect(id).toBeTruthy();
				expect(id).not.toContain(' ');

				// Each normalized name should be properly capitalized (if it starts with a letter)
				if (/^[a-zA-Z]/.test(normalized)) {
					expect(normalized).toMatch(/^[A-Z]/);
				}
			});
		});

		it('should handle ingredient tags correctly', () => {
			const testProducts = {
				'test-product': {
					id: 'test-product',
					Ingredients: 'Arginine, Sodium Lactate',
					KeyIngredients: 'Arginine'
				}
			};

			const parsedIngredients = parseIngredients(testProducts);

			// Check Arginine (should have both key-ingredient and amino-acids tags)
			const arginine = parsedIngredients['arginine'];
			expect(arginine).toBeDefined();
			expect(arginine.tags || []).toContain('key-ingredient');
			expect(arginine.tags || []).toContain('amino-acids');

			// Check Sodium Lactate (should  have lactates tag)
			const sodiumLactate = parsedIngredients['sodium-lactate'];
			expect(sodiumLactate).toBeDefined();
			expect(sodiumLactate.tags || []).toContain('lactates');

		});

		it('should preserve existing tags when updating ingredients', () => {
			const existingIngredients: Record<string, Ingredient> = {
				arginine: {
					id: 'arginine',
					name: 'Arginine',
					tags: ['existing-tag']
				}
			};

			const testProducts = {
				'test-product': {
					id: 'test-product',
					Ingredients: 'Arginine',
					KeyIngredients: 'Arginine'
				}
			};

			const parsedIngredients = parseIngredients(testProducts, existingIngredients);
			const arginine = parsedIngredients['arginine'];
			expect(arginine).toBeDefined();
			expect(arginine.tags || []).toContain('existing-tag');
			expect(arginine.tags || []).toContain('key-ingredient');
			expect(arginine.tags || []).toContain('amino-acids');
			expect(arginine.tags?.length).toBe(3);
		});

		it('should parse all products and generate unique ingredients', () => {
			const parsedIngredients = parseIngredients(products);

			// Should have ingredients
			expect(Object.keys(parsedIngredients).length).toBeGreaterThan(0);

			// Each ingredient should be properly formatted
			Object.values(parsedIngredients).forEach((ingredient) => {
				// Each ingredient should have an ID without spaces
				expect(ingredient.id).not.toContain(' ');

				// Each normalized name should be properly capitalized (if it starts with a letter)
				if (/^[a-zA-Z]/.test(ingredient.name)) {
					expect(ingredient.name).toMatch(/^[A-Z]/);
				}
			});
		});

		it('should preserve existing ingredient data when merging', () => {
			const existingIngredients: Record<string, Ingredient> = {
				glycerin: {
					id: 'glycerin',
					name: 'Glycerin',
					category: 'Humectant',
					description: 'Common humectant',
					concerns: ['Hydration']
				}
			};

			const testProducts = {
				'test-product': {
					id: 'test-product',
					Ingredients: 'Glycerin, Niacinamide, Arginine'
				}
			};

			const parsedIngredients = parseIngredients(testProducts, existingIngredients);

			// Should preserve existing data and include new fields
			expect(parsedIngredients['glycerin']).toEqual({
				...existingIngredients['glycerin'],
				products: ['test-product'],
				tags: [],
				synonyms: []
			});

			// Should also include new ingredients
			expect(Object.keys(parsedIngredients).length).toBe(3);
			expect(parsedIngredients['niacinamide']).toBeDefined();
			expect(parsedIngredients['arginine']).toBeDefined();
		});

		it('should track and resolve missing key ingredients', () => {
			const testProducts = {
				'test-product': {
					id: 'test-product',
					Ingredients: 'Niacinamide',
					KeyIngredients: 'Missing Ingredient'
				}
			};

			// First parse should log the missing ingredient
			parseIngredients(testProducts);

			// Add the ingredient as a synonym
			const updatedProducts = {
				'test-product': {
					id: 'test-product',
					Ingredients: 'Niacinamide, New Ingredient',
					KeyIngredients: 'New Ingredient'
				}
			};

			// Second parse should resolve the warning
			const parsedIngredients = parseIngredients(updatedProducts);
			expect(parsedIngredients['new-ingredient']).toBeDefined();
		});
	});
});

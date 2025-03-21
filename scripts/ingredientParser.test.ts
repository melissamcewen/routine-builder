import { describe, it, expect } from 'vitest';
import { products } from '../src/lib/products.js';
import { type Ingredient } from '../src/lib/ingredients.js';
import {
	generateIngredientId,
	normalizeIngredientName,
	parseIngredientString,
	parseIngredients
} from './ingredientParser.js';

describe('Ingredient Parsing', () => {
	describe('generateIngredientId', () => {
		it('should convert to lowercase and replace spaces with hyphens', () => {
			expect(generateIngredientId('Acetyl Glucosamine')).toBe('acetyl-glucosamine');
		});

		it('should handle special characters', () => {
			expect(generateIngredientId('1,2-Hexanediol')).toBe('1-2-hexanediol');
		});

		it('should remove multiple hyphens and trailing hyphens', () => {
			expect(generateIngredientId('Acetyl--Glucosamine!')).toBe('acetyl-glucosamine');
		});
	});

	describe('normalizeIngredientName', () => {
		it('should capitalize first letter of each word', () => {
			expect(normalizeIngredientName('acetyl glucosamine')).toBe('Acetyl Glucosamine');
		});

		it('should handle special characters correctly', () => {
			expect(normalizeIngredientName('1,2-hexanediol')).toBe('1,2-Hexanediol');
		});

		it('should preserve spaces', () => {
			expect(normalizeIngredientName('sodium hyaluronate crosspolymer')).toBe(
				'Sodium Hyaluronate Crosspolymer'
			);
		});

		it('should trim whitespace', () => {
			expect(normalizeIngredientName('  Water  ')).toBe('Water');
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
				water: {
					id: 'water',
					name: 'Water',
					category: 'Solvent',
					description: 'Universal solvent',
					concerns: ['Hydration']
				}
			};

			const parsedIngredients = parseIngredients(products, existingIngredients);

			// Should preserve existing data
			expect(parsedIngredients['water']).toEqual(existingIngredients['water']);

			// Should also include new ingredients
			expect(Object.keys(parsedIngredients).length).toBeGreaterThan(1);
		});
	});
});

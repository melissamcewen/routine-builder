import { describe, it, expect } from 'vitest';
import { products } from '$lib/products';
import {
	getIncompatibilityReason,
	canAddToRoutine,
	generateRoutines,
	type Routine
} from '../routineGenerator';

describe('Routine Generator Utils', () => {
	describe('getIncompatibilityReason', () => {
		it('should return null for compatible products', () => {
			const cleanser = products['glycolipid-cream-cleanser'];
			const moisturizer = products['natural-moisturizing-factors-phytoceramides'];

			const result = getIncompatibilityReason(cleanser, [
				'natural-moisturizing-factors-phytoceramides'
			]);
			expect(result).toBeNull();
		});

		it('should return reason for incompatible products', () => {
			const glycolicAcid = products['glycolic-acid-7-exfoliating-toner'];
			const argireline = products['argireline-solution-10'];

			const result = getIncompatibilityReason(glycolicAcid, ['argireline-solution-10']);
			expect(result).not.toBeNull();
			expect(result).toContain('Not compatible with');
		});
	});

	describe('canAddToRoutine', () => {
		it('should allow compatible day products in day routine', () => {
			const dayProduct = products['hyaluronic-acid-2-b5-hydrating-serum'];
			const routine: Routine = {
				id: 1,
				timeOfDay: 'day',
				products: ['glycolipid-cream-cleanser']
			};

			expect(canAddToRoutine(dayProduct, routine)).toBe(true);
		});

		it('should not allow night-only products in day routine', () => {
			const nightProduct = products['mandelic-acid-10-ha'];
			const routine: Routine = {
				id: 1,
				timeOfDay: 'day',
				products: ['glycolipid-cream-cleanser']
			};

			expect(canAddToRoutine(nightProduct, routine)).toBe(false);
		});

		it('should not allow more than 3 serums', () => {
			const serum = products['hyaluronic-acid-2-b5-hydrating-serum'];
			const routine: Routine = {
				id: 1,
				timeOfDay: 'night',
				products: [
					'hyaluronic-acid-2-b5-hydrating-serum',
					'balancing-clarifying-serum',
					'mandelic-acid-10-ha'
				]
			};

			expect(canAddToRoutine(serum, routine)).toBe(false);
		});

		it('should not allow incompatible products', () => {
			const glycolicAcid = products['glycolic-acid-7-exfoliating-toner'];
			const routine: Routine = {
				id: 1,
				timeOfDay: 'night',
				products: ['argireline-solution-10']
			};

			expect(canAddToRoutine(glycolicAcid, routine)).toBe(false);
		});
	});

	describe('generateRoutines', () => {
		it('should handle empty product list', () => {
			const routines = generateRoutines([]);
			expect(routines.length).toBe(0);
		});

		it('should include base products in all routines', () => {
			const testProducts = [
				'glycolipid-cream-cleanser',
				'hyaluronic-acid-2-b5-hydrating-serum',
				'natural-moisturizing-factors-phytoceramides'
			];

			const routines = generateRoutines(testProducts);

			for (const routine of routines) {
				expect(routine.products).toContain('glycolipid-cream-cleanser');
				expect(routine.products).toContain('natural-moisturizing-factors-phytoceramides');
			}
		});

		it('should create separate routines for incompatible products', () => {
			const testProducts = [
				'glycolipid-cream-cleanser',
				'glycolic-acid-7-exfoliating-toner', // night only
				'argireline-solution-10', // can be used day or night
				'natural-moisturizing-factors-phytoceramides',
				'hyaluronic-acid-2-b5-hydrating-serum' // compatible with both
			];

			const routines = generateRoutines(testProducts);

			// Find day and night routines
			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
			const nightRoutines = routines.filter((r) => r.timeOfDay === 'night');

			// Should have at least one day routine with argireline
			expect(dayRoutines.length).toBeGreaterThanOrEqual(1);
			const dayRoutine = dayRoutines[0];
			expect(dayRoutine.products).toContain('argireline-solution-10');

			// Should have at least one night routine with glycolic acid
			expect(nightRoutines.length).toBeGreaterThanOrEqual(1);
			const glycolicRoutine = nightRoutines.find((r) =>
				r.products.includes('glycolic-acid-7-exfoliating-toner')
			);
			expect(glycolicRoutine).toBeDefined();

			// Verify base products are in all routines
			for (const routine of routines) {
				expect(routine.products).toContain('glycolipid-cream-cleanser');
				expect(routine.products).toContain('natural-moisturizing-factors-phytoceramides');
			}

			// Verify hyaluronic acid (compatible with both) is used in at least one routine
			const hasHyaluronic = routines.some((r) =>
				r.products.includes('hyaluronic-acid-2-b5-hydrating-serum')
			);
			expect(hasHyaluronic).toBe(true);

			// Verify glycolic acid and argireline are never in the same routine
			for (const routine of routines) {
				const hasGlycolic = routine.products.includes('glycolic-acid-7-exfoliating-toner');
				const hasArgireline = routine.products.includes('argireline-solution-10');
				expect(hasGlycolic && hasArgireline).toBe(false);
			}
		});

		it('should properly order products by phase within each routine', () => {
			const testProducts = [
				'natural-moisturizing-factors-phytoceramides', // Seal phase
				'glycolipid-cream-cleanser', // Prep phase
				'hyaluronic-acid-2-b5-hydrating-serum', // Treat phase
				'glycolic-acid-7-exfoliating-toner' // Prep phase
			];

			const routines = generateRoutines(testProducts);

			for (const routine of routines) {
				const productPhases = routine.products
					.filter((id) => id !== 'sunscreen') // Skip sunscreen as it's always last
					.map((id) => products[id].Step)
					.filter((step) => step !== ''); // Skip empty steps

				// Verify phases are in order
				for (let i = 1; i < productPhases.length; i++) {
					const currentPhase = productPhases[i];
					const previousPhase = productPhases[i - 1];
					const currentPhaseOrder = currentPhase === 'Prep' ? 0 : currentPhase === 'Treat' ? 1 : 2;
					const previousPhaseOrder =
						previousPhase === 'Prep' ? 0 : previousPhase === 'Treat' ? 1 : 2;
					expect(currentPhaseOrder).toBeGreaterThanOrEqual(previousPhaseOrder);
				}
			}
		});

		it('should prioritize even distribution of serums', () => {
			const testProducts = [
				'glycolipid-cream-cleanser',
				'hyaluronic-acid-2-b5-hydrating-serum',
				'balancing-clarifying-serum',
				'mandelic-acid-10-ha',
				'natural-moisturizing-factors-phytoceramides'
			];

			const routines = generateRoutines(testProducts);
			const serumCounts = routines.map(
				(routine) => routine.products.filter((id) => products[id].Format === 'Serum').length
			);

			// Check that serum counts don't differ by more than 1
			const maxSerums = Math.max(...serumCounts);
			const minSerums = Math.min(...serumCounts);
			expect(maxSerums - minSerums).toBeLessThanOrEqual(1);

			// Verify no routine has more than 3 serums
			expect(Math.max(...serumCounts)).toBeLessThanOrEqual(3);
		});

		it('should use each product at least once', () => {
			const testProducts = [
				'glycolipid-cream-cleanser',
				'hyaluronic-acid-2-b5-hydrating-serum',
				'balancing-clarifying-serum',
				'mandelic-acid-10-ha',
				'glycolic-acid-7-exfoliating-toner',
				'natural-moisturizing-factors-phytoceramides'
			];

			const routines = generateRoutines(testProducts);

			// Create a set of all products used across all routines
			const usedProducts = new Set<string>();
			for (const routine of routines) {
				routine.products.forEach((id) => {
					if (id !== 'sunscreen') {
						usedProducts.add(id);
					}
				});
			}

			// Verify each input product is used at least once
			for (const productId of testProducts) {
				expect(usedProducts.has(productId)).toBe(true);
			}

			// Verify the total number of unique products matches the input
			expect(usedProducts.size).toBe(testProducts.length);
		});

		it('should create minimal day routine when only night products are selected', () => {
			const testProducts = ['glycolic-acid-7-exfoliating-toner']; // night-only product

			const routines = generateRoutines(testProducts);
			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
			const nightRoutines = routines.filter((r) => r.timeOfDay === 'night');

			// Should have exactly one day routine with just sunscreen
			expect(dayRoutines.length).toBe(1);
			expect(dayRoutines[0].products).toEqual(['sunscreen']);

			// Should have one night routine with glycolic acid
			expect(nightRoutines.length).toBe(1);
			expect(nightRoutines[0].products).toContain('glycolic-acid-7-exfoliating-toner');
		});

		it('should create both day and night routines for a day/night compatible product', () => {
			const testProducts = ['saccharomyces-ferment-30-milky-toner']; // product with TOD='both'

			const routines = generateRoutines(testProducts);
			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
			const nightRoutines = routines.filter((r) => r.timeOfDay === 'night');

			// Should have exactly one day routine with the product + sunscreen
			expect(dayRoutines.length).toBe(1);
			expect(dayRoutines[0].products).toContain('saccharomyces-ferment-30-milky-toner');
			expect(dayRoutines[0].products).toContain('sunscreen');
			expect(dayRoutines[0].products.length).toBe(2);

			// Should have exactly one night routine with just the product
			expect(nightRoutines.length).toBe(1);
			expect(nightRoutines[0].products).toContain('saccharomyces-ferment-30-milky-toner');
			expect(nightRoutines[0].products).not.toContain('sunscreen');
			expect(nightRoutines[0].products.length).toBe(1);
		});

		it('should distribute serums evenly based on usage count', () => {
			const testProducts = [
				'hyaluronic-acid-2-b5-hydrating-serum',
				'balancing-clarifying-serum',
				'matrixyl-10-ha',
				'argireline-solution-10',
				'glycolipid-cream-cleanser',
				'natural-moisturizing-factors-phytoceramides',
				'mandelic-acid-10-ha',
				'ascorbyl-glucoside-solution-12'
			];

			const routines = generateRoutines(testProducts);

			// Count how many times each serum is used across all routines
			const serumUsageCounts = new Map<string, number>();
			const serums = testProducts.filter((id) => products[id].Format === 'Serum');

			// Initialize counts
			serums.forEach((serum) => serumUsageCounts.set(serum, 0));

			// Count serum usage
			routines.forEach((routine) => {
				routine.products.forEach((productId) => {
					if (serums.includes(productId)) {
						serumUsageCounts.set(productId, serumUsageCounts.get(productId)! + 1);
					}
				});
			});

			// Log the usage counts for debugging
			console.log('Serum usage counts:', Object.fromEntries(serumUsageCounts));

			// Get min and max usage counts
			const usageCounts = Array.from(serumUsageCounts.values());
			const maxUsage = Math.max(...usageCounts);
			const minUsage = Math.min(...usageCounts);

			// No serum should be used more than once more than any other serum
			expect(maxUsage - minUsage).toBeLessThanOrEqual(1);

			// Each serum should be used at least once
			expect(minUsage).toBeGreaterThan(0);

			// Log the usage counts for debugging
			console.log('Serum usage counts:', Object.fromEntries(serumUsageCounts));
		});

		it('should use uv-filters-spf-45-serum instead of generic sunscreen in day routines when selected', () => {
			const testProducts = ['uv-filters-spf-45-serum'];
			const routines = generateRoutines(testProducts);
			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
			expect(dayRoutines.length).toBeGreaterThan(0);
			for (const routine of dayRoutines) {
				expect(routine.products).toContain('uv-filters-spf-45-serum');
				expect(routine.products).not.toContain('sunscreen');
			}
		});
	});
});

import { describe, it, expect } from 'vitest';
import { products } from '$lib/products';
import { sortProductsByPhase } from '$lib/utils';
import { generateRoutines, canAddToRoutine, type Routine } from '$lib/routineGenerator';

describe('Scheduler Integration Tests', () => {
	describe('Basic Routine Generation', () => {
		it('should generate at least one day and one night routine when given compatible products', () => {
			const testProducts = [
				'saccharomyces-ferment-30-milky-toner',
				'glycolipid-cream-cleanser',
				'natural-moisturizing-factors-phytoceramides'
			];

			const routines = generateRoutines(testProducts);
			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
			const nightRoutines = routines.filter((r) => r.timeOfDay === 'night');

			expect(dayRoutines.length).toBeGreaterThanOrEqual(1);
			expect(nightRoutines.length).toBeGreaterThanOrEqual(1);
		});

		it('should not exceed 3 serums per routine', () => {
			const testProducts = [
				'hyaluronic-acid-2-b5-hydrating-serum',
				'balancing-clarifying-serum',
				'mandelic-acid-10-ha',
				'glycolipid-cream-cleanser'
			];

			const routines = generateRoutines(testProducts);

			for (const routine of routines) {
				const serumCount = routine.products.filter((id) => products[id].Format === 'Serum').length;
				expect(serumCount).toBeLessThanOrEqual(3);
			}
		});

		it('should add sunscreen to day routines', () => {
			const testProducts = ['glycolipid-cream-cleanser'];
			const routines = generateRoutines(testProducts);

			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
			for (const routine of dayRoutines) {
				expect(routine.products).toContain('sunscreen');
			}
		});

		it('should not put night-only products in day routines', () => {
			const testProducts = [
				'glycolipid-cream-cleanser',
				'mandelic-acid-10-ha' // night-only
			];

			const routines = generateRoutines(testProducts);
			const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');

			for (const routine of dayRoutines) {
				const hasNightOnlyProducts = routine.products.some((id) => {
					const product = products[id];
					return product.TOD === 'night';
				});
				expect(hasNightOnlyProducts).toBe(false);
			}
		});

		it('should maintain proper day/night routine ratio', () => {
			const testProducts = [
				'saccharomyces-ferment-30-milky-toner',
				'glycolipid-cream-cleanser',
				'balancing-clarifying-serum',
				'natural-moisturizing-factors-phytoceramides',
				'mandelic-acid-10-ha',
				'glycolic-acid-7-exfoliating-toner',
				'hyaluronic-acid-2-b5-hydrating-serum'
			];

			const routines = generateRoutines(testProducts);
			const dayCount = routines.filter((r) => r.timeOfDay === 'day').length;
			const nightCount = routines.filter((r) => r.timeOfDay === 'night').length;

			// Should have at least one day and one night routine
			expect(dayCount).toBeGreaterThanOrEqual(1);
			expect(nightCount).toBeGreaterThanOrEqual(1);

			// If there are more night routines than day routines, verify we couldn't create more day routines
			if (nightCount > dayCount) {
				const dayCompatibleProducts = testProducts.filter((id) => {
					const product = products[id];
					return product.TOD === 'day' || product.TOD === 'both';
				});

				// The number of day routines should be appropriate for the number of day-compatible products
				expect(dayCount).toBeGreaterThanOrEqual(Math.floor(dayCompatibleProducts.length / 3));
			}
		});
	});

	describe('Product Distribution and Compatibility', () => {
		it('should try to add compatible products to existing routines', () => {
			const testProducts = [
				'glycolipid-cream-cleanser',
				'saccharomyces-ferment-30-milky-toner',
				'hyaluronic-acid-2-b5-hydrating-serum'
			];

			const routines = generateRoutines(testProducts);

			// Check if hyaluronic acid (compatible with all) is added to at least one routine
			const hasHyaluronic = routines.some((r) =>
				r.products.includes('hyaluronic-acid-2-b5-hydrating-serum')
			);
			expect(hasHyaluronic).toBe(true);
		});

		it('should not put incompatible products in the same routine', () => {
			const testProducts = [
				'glycolic-acid-7-exfoliating-toner',
				'argireline-solution-10',
				'glycolipid-cream-cleanser'
			];

			const routines = generateRoutines(testProducts);

			for (const routine of routines) {
				const hasGlycolic = routine.products.includes('glycolic-acid-7-exfoliating-toner');
				const hasArgireline = routine.products.includes('argireline-solution-10');
				expect(hasGlycolic && hasArgireline).toBe(false);
			}
		});

		it('should distribute serums evenly across routines when possible', () => {
			const testProducts = [
				'hyaluronic-acid-2-b5-hydrating-serum',
				'balancing-clarifying-serum',
				'mandelic-acid-10-ha',
				'glycolipid-cream-cleanser'
			];

			const routines = generateRoutines(testProducts);
			const serumCounts = routines.map(
				(routine) => routine.products.filter((id) => products[id].Format === 'Serum').length
			);

			const maxSerums = Math.max(...serumCounts);
			const minSerums = Math.min(...serumCounts);
			expect(maxSerums - minSerums).toBeLessThanOrEqual(1);
		});

		it('should not put saccharomyces ferment with direct acids', () => {
			const testProducts = [
				'saccharomyces-ferment-30-milky-toner',
				'glycolic-acid-7-exfoliating-toner',
				'glycolipid-cream-cleanser'
			];

			const routines = generateRoutines(testProducts);

			for (const routine of routines) {
				const hasSaccharomyces = routine.products.includes('saccharomyces-ferment-30-milky-toner');
				const hasGlycolic = routine.products.includes('glycolic-acid-7-exfoliating-toner');
				expect(hasSaccharomyces && hasGlycolic).toBe(false);
			}
		});

		it('should distribute compatible products evenly across routines', () => {
			const testProducts = [
				'saccharomyces-ferment-30-milky-toner',
				'glycolipid-cream-cleanser',
				'balancing-clarifying-serum',
				'natural-moisturizing-factors-phytoceramides',
				'hyaluronic-acid-2-b5-hydrating-serum'
			];

			const routines = generateRoutines(testProducts);

			// Count how many routines each compatible product appears in
			const productCounts = new Map<string, number>();
			for (const id of testProducts) {
				const product = products[id];
				if (product.Excludes.length === 0) {
					// If product is compatible with everything
					productCounts.set(id, 0);
					for (const routine of routines) {
						if (routine.products.includes(id)) {
							productCounts.set(id, productCounts.get(id)! + 1);
						}
					}
				}
			}

			// For each compatible product, check that it appears in a similar number of routines
			const counts = Array.from(productCounts.values());
			if (counts.length > 0) {
				const maxCount = Math.max(...counts);
				const minCount = Math.min(...counts);
				expect(maxCount - minCount).toBeLessThanOrEqual(1);
			}
		});
	});

	describe('Example Product Combinations', () => {
		describe('Mandelic Acid Routine', () => {
			it('should create a proper night routine with mandelic acid', () => {
				const testProducts = [
					'glycolipid-cream-cleanser',
					'mandelic-acid-10-ha',
					'hyaluronic-acid-2-b5-hydrating-serum',
					'natural-moisturizing-factors-phytoceramides'
				];

				const routines = generateRoutines(testProducts);
				const mandelicRoutine = routines.find((r) => r.products.includes('mandelic-acid-10-ha'));

				expect(mandelicRoutine).toBeDefined();
				expect(mandelicRoutine?.timeOfDay).toBe('night');
				expect(mandelicRoutine?.products).toContain('glycolipid-cream-cleanser');
				expect(mandelicRoutine?.products).toContain('hyaluronic-acid-2-b5-hydrating-serum');
				expect(mandelicRoutine?.products).toContain('natural-moisturizing-factors-phytoceramides');
			});
		});

		describe('Glycolic Acid Routine', () => {
			it('should create a proper night routine with glycolic acid', () => {
				const testProducts = [
					'glycolipid-cream-cleanser',
					'glycolic-acid-7-exfoliating-toner',
					'hyaluronic-acid-2-b5-hydrating-serum',
					'natural-moisturizing-factors-phytoceramides'
				];

				const routines = generateRoutines(testProducts);
				const glycolicRoutine = routines.find((r) =>
					r.products.includes('glycolic-acid-7-exfoliating-toner')
				);

				expect(glycolicRoutine).toBeDefined();
				expect(glycolicRoutine?.timeOfDay).toBe('night');
				expect(glycolicRoutine?.products).toContain('glycolipid-cream-cleanser');
				expect(glycolicRoutine?.products).toContain('hyaluronic-acid-2-b5-hydrating-serum');
				expect(glycolicRoutine?.products).toContain('natural-moisturizing-factors-phytoceramides');
			});
		});

		describe('Complete Example from Test Plan', () => {
			const exampleProducts = [
				'saccharomyces-ferment-30-milky-toner',
				'glycolipid-cream-cleanser',
				'balancing-clarifying-serum',
				'natural-moisturizing-factors-phytoceramides',
				'mandelic-acid-10-ha',
				'glycolic-acid-7-exfoliating-toner',
				'hyaluronic-acid-2-b5-hydrating-serum'
			];

			it('should generate correct day routine', () => {
				const routines = generateRoutines(exampleProducts);
				const dayRoutine = routines.find((r) => r.timeOfDay === 'day');

				expect(dayRoutine).toBeDefined();
				expect(dayRoutine?.products).toContain('glycolipid-cream-cleanser');
				expect(dayRoutine?.products).toContain('saccharomyces-ferment-30-milky-toner');
				expect(dayRoutine?.products).toContain('balancing-clarifying-serum');
				expect(dayRoutine?.products).toContain('hyaluronic-acid-2-b5-hydrating-serum');
				expect(dayRoutine?.products).toContain('natural-moisturizing-factors-phytoceramides');
				expect(dayRoutine?.products).toContain('sunscreen');
			});

			it('should generate correct night routines with proper product distribution', () => {
				const routines = generateRoutines(exampleProducts);
				const nightRoutines = routines.filter((r) => r.timeOfDay === 'night');

				// Should have at least one night routine for each incompatible acid
				expect(nightRoutines.length).toBeGreaterThanOrEqual(2);

				// Find glycolic acid routine
				const glycolicRoutine = nightRoutines.find((r) =>
					r.products.includes('glycolic-acid-7-exfoliating-toner')
				);
				expect(glycolicRoutine).toBeDefined();
				expect(glycolicRoutine?.products).toContain('glycolipid-cream-cleanser');
				expect(glycolicRoutine?.products).not.toContain('saccharomyces-ferment-30-milky-toner');
				expect(glycolicRoutine?.products).toContain('balancing-clarifying-serum');
				expect(glycolicRoutine?.products).toContain('hyaluronic-acid-2-b5-hydrating-serum');
				expect(glycolicRoutine?.products).toContain('natural-moisturizing-factors-phytoceramides');

				// Find mandelic acid routine
				const mandelicRoutine = nightRoutines.find((r) =>
					r.products.includes('mandelic-acid-10-ha')
				);
				expect(mandelicRoutine).toBeDefined();
				expect(mandelicRoutine?.products).toContain('glycolipid-cream-cleanser');
				expect(mandelicRoutine?.products).not.toContain('saccharomyces-ferment-30-milky-toner');
				expect(mandelicRoutine?.products).toContain('balancing-clarifying-serum');
				expect(mandelicRoutine?.products).toContain('hyaluronic-acid-2-b5-hydrating-serum');
				expect(mandelicRoutine?.products).toContain('natural-moisturizing-factors-phytoceramides');

				// Verify acids are not in the same routine
				for (const routine of nightRoutines) {
					const hasGlycolic = routine.products.includes('glycolic-acid-7-exfoliating-toner');
					const hasMandelic = routine.products.includes('mandelic-acid-10-ha');
					expect(hasGlycolic && hasMandelic).toBe(false);
				}
			});
		});

		describe('Complex Product Combination', () => {
			const complexProducts = [
				'caffeine-solution-5-egcg',
				'argireline-solution-10',
				'salicylic-acid-2-solution',
				'azelaic-acid-suspension-10',
				'lactic-acid-10-ha',
				'matrixyl-10-ha',
				'ascorbyl-glucoside-solution-12',
				'hyaluronic-acid-2-b5-original-formulation',
				'alpha-arbutin-2-ha',
				'saccharomyces-ferment-30-milky-toner',
				'niacinamide-5-face-and-body-emulsion',
				'prescription-tretinoin',
				'gf-15-solution'
			];

			it('should not put night-only products in day routines', () => {
				const routines = generateRoutines(complexProducts);
				const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');

				for (const routine of dayRoutines) {
					const hasNightOnlyProducts = routine.products.some((id) => {
						const product = products[id];
						return product.TOD === 'night';
					});
					expect(hasNightOnlyProducts).toBe(false);
				}
			});

			it('should properly distribute incompatible products across routines', () => {
				const routines = generateRoutines(complexProducts);

				// Check that tretinoin is not in same routine as direct acids
				for (const routine of routines) {
					const hasTretinoin = routine.products.includes('prescription-tretinoin');
					const hasDirectAcids = routine.products.some((id) =>
						products[id].Tags.includes('Direct Acids')
					);
					expect(hasTretinoin && hasDirectAcids).toBe(false);
				}

				// Check that saccharomyces ferment is not with direct acids
				for (const routine of routines) {
					const hasSaccharomyces = routine.products.includes(
						'saccharomyces-ferment-30-milky-toner'
					);
					const hasDirectAcids = routine.products.some((id) =>
						products[id].Tags.includes('Direct Acids')
					);
					expect(hasSaccharomyces && hasDirectAcids).toBe(false);
				}
			});

			it('should maintain proper serum distribution', () => {
				const routines = generateRoutines(complexProducts);

				// Check serum count in each routine
				for (const routine of routines) {
					const serumCount = routine.products.filter(
						(id) => products[id].Format === 'Serum'
					).length;
					expect(serumCount).toBeLessThanOrEqual(3);
				}

				// Check that serums are distributed evenly
				const serumCounts = routines.map(
					(routine) => routine.products.filter((id) => products[id].Format === 'Serum').length
				);
				const maxSerums = Math.max(...serumCounts);
				const minSerums = Math.min(...serumCounts);
				expect(maxSerums - minSerums).toBeLessThanOrEqual(1);
			});

			it('should use each product at least once', () => {
				const routines = generateRoutines(complexProducts);

				// Create a set of all products used across all routines
				const usedProducts = new Set<string>();
				for (const routine of routines) {
					routine.products.forEach((id) => {
						if (id !== 'sunscreen') {
							// Exclude sunscreen as it's automatically added
							usedProducts.add(id);
						}
					});
				}

				// Check that each input product is used at least once
				for (const productId of complexProducts) {
					expect(
						usedProducts.has(productId),
						`Product ${products[productId].Name} was not used in any routine`
					).toEqual(true);
				}

				// Verify the total number of unique products matches the input
				// (excluding sunscreen which is automatically added)
				expect(usedProducts.size).toBe(complexProducts.length);
			});
		});
	});
});

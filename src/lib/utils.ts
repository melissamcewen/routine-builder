import type { Product } from './products';

export function getPhaseOrder(phase: string): number {
	const phaseOrder: Record<string, number> = {
		'': 0, // Prep items like cleansers
		Milky: 1,
		Water: 2,
		Anhydrous: 3,
		Oil: 4,
		Cream: 5,
		Suspension: 6,
		Emulsion: 7,
		Gel: 8,
		'Rich cream': 9
	};

	return phaseOrder[phase] ?? 999;
}

export function sortProductsByPhase(products: Product[]): Product[];
export function sortProductsByPhase(
	productIds: string[],
	productsMap: Record<string, Product>
): string[];
export function sortProductsByPhase(
	input: Product[] | string[],
	productsMap?: Record<string, Product>
): Product[] | string[] {
	if (productsMap) {
		// Handle string[] input
		return (input as string[]).sort((a, b) => {
			const productA = productsMap[a];
			const productB = productsMap[b];

			// Always put tretinoin first
			if (productA.id === 'prescription-tretinoin') return -1;
			if (productB.id === 'prescription-tretinoin') return 1;

			return getPhaseOrder(productA.Phase) - getPhaseOrder(productB.Phase);
		});
	} else {
		// Handle Product[] input
		return (input as Product[]).sort((a, b) => {
			// Always put tretinoin first
			if (a.id === 'prescription-tretinoin') return -1;
			if (b.id === 'prescription-tretinoin') return 1;

			return getPhaseOrder(a.Phase) - getPhaseOrder(b.Phase);
		});
	}
}

import { products, type Product } from './products';
import { sortProductsByPhase } from './utils';

export interface Routine {
	id: number;
	timeOfDay: 'day' | 'night';
	products: string[];
}

export function getIncompatibilityReason(
	product: Product,
	existingProducts: string[]
): string | null {
	const incompatibleProducts = existingProducts.filter((id) => {
		const existingProduct = products[id];
		return (
			product.Excludes.includes(existingProduct.Tags[0]) ||
			existingProduct.Excludes.includes(product.Tags[0])
		);
	});

	if (incompatibleProducts.length === 0) return null;

	return `Not compatible with: ${incompatibleProducts.map((id) => products[id].Name).join(', ')}`;
}

export function canAddToRoutine(product: Product, routine: Routine): boolean {
	// Check if product is compatible with time of day
	if (routine.timeOfDay === 'day' && product.TOD === 'night') return false;

	// Check if product is compatible with existing products
	if (getIncompatibilityReason(product, routine.products)) return false;

	// Check if adding another serum would exceed limit
	const currentSerums = routine.products.filter((id) => products[id].Format === 'Serum').length;
	if (product.Format === 'Serum' && currentSerums >= 3) return false;

	return true;
}

function createRoutine(
	timeOfDay: 'day' | 'night',
	startingProduct: string,
	compatibleProducts: string[],
	routineId: number
): Routine {
	const routine: Routine = {
		id: routineId,
		timeOfDay,
		products: [startingProduct]
	};

	// Try to add all compatible products
	for (const productId of compatibleProducts) {
		if (productId === startingProduct) continue;
		const product = products[productId];
		if (canAddToRoutine(product, routine)) {
			routine.products.push(productId);
		}
	}

	// Add sunscreen to day routines
	if (timeOfDay === 'day') {
		routine.products.push('sunscreen');
	}

	// Sort products by phase
	routine.products = sortProductsByPhase(routine.products, products);
	return routine;
}

export function generateRoutines(productIds: string[]): Routine[] {
	if (productIds.length === 0) return [];

	const routines: Routine[] = [];
	let routineId = 1;

	// Create sets for day and night products
	const allDayProducts = productIds.filter((id) => {
		const product = products[id];
		return product.TOD === 'day' || product.TOD === 'both';
	});

	const allNightProducts = productIds.filter((id) => {
		const product = products[id];
		return product.TOD === 'night' || product.TOD === 'both';
	});

	// Track which products still need to be used
	const unusedDayProducts = new Set(allDayProducts);
	const unusedNightProducts = new Set(allNightProducts);

	// Generate day routines until all day products are used
	while (unusedDayProducts.size > 0) {
		const startingProduct = Array.from(unusedDayProducts)[0];
		const routine = createRoutine('day', startingProduct, allDayProducts, routineId++);

		// Remove used products from the unused set
		routine.products.forEach((id) => {
			if (id !== 'sunscreen') {
				unusedDayProducts.delete(id);
			}
		});

		routines.push(routine);
	}

	// Generate night routines until all night products are used
	while (unusedNightProducts.size > 0) {
		const startingProduct = Array.from(unusedNightProducts)[0];
		const routine = createRoutine('night', startingProduct, allNightProducts, routineId++);

		// Remove used products from the unused set
		routine.products.forEach((id) => unusedNightProducts.delete(id));

		routines.push(routine);
	}

	return routines;
}

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

// Add this at the top level
const serumUsageCounts = new Map<string, number>();

function createRoutine(
	timeOfDay: 'day' | 'night',
	startingProduct: string,
	compatibleProducts: string[],
	routineId: number,
	sunscreenReplacement: string | null
): Routine {
	const routine: Routine = {
		id: routineId,
		timeOfDay,
		products: [startingProduct]
	};

	// Get all compatible serums and sort by usage count
	const compatibleSerums = compatibleProducts
		.filter((id) => products[id].Format === 'Serum' && id !== startingProduct)
		.sort((a, b) => (serumUsageCounts.get(a) || 0) - (serumUsageCounts.get(b) || 0));

	// Get all non-serums
	const nonSerums = compatibleProducts.filter(
		(id) => products[id].Format !== 'Serum' && id !== startingProduct
	);

	// Try to add serums first, prioritizing least used ones
	for (const serumId of compatibleSerums) {
		if (canAddToRoutine(products[serumId], routine)) {
			routine.products.push(serumId);
		}
	}

	// Then add non-serums
	for (const productId of nonSerums) {
		if (canAddToRoutine(products[productId], routine)) {
			routine.products.push(productId);
		}
	}

	// Add sunscreen to day routines
	if (timeOfDay === 'day') {
		if (sunscreenReplacement) {
			routine.products.push(sunscreenReplacement);
		} else {
			routine.products.push('sunscreen');
		}
	}

	// Update serum usage counts
	routine.products.forEach((productId) => {
		if (products[productId].Format === 'Serum') {
			serumUsageCounts.set(productId, (serumUsageCounts.get(productId) || 0) + 1);
		}
	});

	// Sort products by phase
	routine.products = sortProductsByPhase(routine.products, products);
	return routine;
}

function findNextStartingProduct(
	unusedProducts: Set<string>,
	timeOfDay: 'day' | 'night',
	productIds: string[]
): string | null {
	// First try to find an unused product that matches the time of day
	for (const productId of productIds) {
		if (!unusedProducts.has(productId)) continue;
		const product = products[productId];
		if (
			timeOfDay === 'day'
				? product.TOD === 'day' || product.TOD === 'both'
				: product.TOD === 'night' || product.TOD === 'both'
		) {
			return productId;
		}
	}
	return null;
}

function copyRoutineToOtherTimeOfDay(
	routine: Routine,
	newTimeOfDay: 'day' | 'night',
	routineId: number
): Routine {
	const newRoutine: Routine = {
		id: routineId,
		timeOfDay: newTimeOfDay,
		// Filter out sunscreen if copying to night
		products:
			newTimeOfDay === 'night'
				? routine.products.filter((id) => id !== 'sunscreen')
				: [...routine.products, 'sunscreen']
	};
	return newRoutine;
}

export function generateRoutines(productIds: string[]): Routine[] {
	if (productIds.length === 0) return [];

	// Reset serum usage counts at the start of routine generation
	serumUsageCounts.clear();
	productIds.forEach((id) => {
		if (products[id].Format === 'Serum') {
			serumUsageCounts.set(id, 0);
		}
	});

	const routines: Routine[] = [];
	let routineId = 1;

	// Create arrays for day and night compatible products
	const dayProducts = productIds.filter((id) => products[id].TOD === 'both');
	const nightProducts = productIds.filter(
		(id) => products[id].TOD === 'night' || products[id].TOD === 'both'
	);

	// Track all unused products in one set, excluding sunscreen
	const unusedProducts = new Set(
		productIds.filter((id) => id !== 'sunscreen' && id !== 'uv-filters-spf-45-serum')
	);

	// Check for The Ordinary sunscreen
	const hasOrdinarySunscreen = productIds.includes('uv-filters-spf-45-serum');
	const sunscreenReplacement = hasOrdinarySunscreen ? 'uv-filters-spf-45-serum' : null;

	// Keep track of whether we can still create day routines
	let canCreateDayRoutine = dayProducts.length > 0;

	// Alternate between day and night routines until all products are used
	while (unusedProducts.size > 0) {
		let routine: Routine | null = null;

		if (canCreateDayRoutine) {
			// Try to create a day routine
			const startingProduct = findNextStartingProduct(unusedProducts, 'day', productIds);
			if (startingProduct) {
				routine = createRoutine(
					'day',
					startingProduct,
					dayProducts,
					routineId++,
					sunscreenReplacement
				);
			} else {
				canCreateDayRoutine = false;
			}
		}

		if (!routine) {
			// Try to create a night routine
			const startingProduct = findNextStartingProduct(unusedProducts, 'night', productIds);
			if (startingProduct) {
				routine = createRoutine('night', startingProduct, nightProducts, routineId++, null);
			} else if (!canCreateDayRoutine) {
				// If we can't create either type of routine, we're done
				break;
			}
		}

		if (routine) {
			// Remove used products from the unused set
			routine.products.forEach((id) => {
				unusedProducts.delete(id);
			});
			routines.push(routine);
		}

		// If we created a day routine, try night next time and vice versa
		canCreateDayRoutine = routine ? routine.timeOfDay === 'night' : canCreateDayRoutine;
	}

	// Ensure at least one routine of each type
	const dayRoutines = routines.filter((r) => r.timeOfDay === 'day');
	const nightRoutines = routines.filter((r) => r.timeOfDay === 'night');

	if (dayRoutines.length === 0) {
		// Create a minimal day routine with just sunscreen or replacement
		routines.push({
			id: routineId++,
			timeOfDay: 'day',
			products: [sunscreenReplacement ? sunscreenReplacement : 'sunscreen']
		});
	}

	if (nightRoutines.length === 0 && dayRoutines.length > 0) {
		// Copy the first day routine to night, but remove sunscreen or replacement
		const dayProducts = dayRoutines[0].products.filter(
			(p) => p !== 'sunscreen' && p !== 'uv-filters-spf-45-serum'
		);
		if (dayProducts.length > 0) {
			routines.push({
				id: routineId++,
				timeOfDay: 'night',
				products: dayProducts
			});
		}
	}

	return routines;
}

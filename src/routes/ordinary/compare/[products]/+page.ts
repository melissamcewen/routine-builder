import { error } from '@sveltejs/kit';
import { products } from '$lib/products';
import { popularComparisons } from '$lib/popularComparisons';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const productIds = params.products.split(',');
	const productsToCompare = productIds.map((id) => {
		const product = products[id];
		if (!product) {
			throw error(404, `Product ${id} not found`);
		}
		return product;
	});

	// Find if this is a popular comparison
	const popularComparison = popularComparisons.find((comparison) => {
		const comparisonIds = new Set(comparison.ids);
		const currentIds = new Set(productIds);
		return (
			comparisonIds.size === currentIds.size &&
			[...comparisonIds].every((id) => currentIds.has(id))
		);
	});

	return {
		products: productsToCompare,
		comparisonNote: popularComparison?.note || null
	};
};

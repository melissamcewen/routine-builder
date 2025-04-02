import { error } from '@sveltejs/kit';
import { products } from '$lib/products';
import { popularComparisons } from '$lib/popularComparisons';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
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
			comparisonIds.size === currentIds.size && [...comparisonIds].every((id) => currentIds.has(id))
		);
	});

	// Fetch key ingredients data
	const keyIngredientsResponse = await fetch(`/api/key-ingredients/${params.products}`);
	const keyIngredients = await keyIngredientsResponse.json();

	return {
		products: productsToCompare,
		comparisonNote: popularComparison?.note || null,
		comparisonTitle: popularComparison?.title || null,
		keyIngredients
	};
};

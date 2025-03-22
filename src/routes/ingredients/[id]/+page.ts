import { error } from '@sveltejs/kit';
import { ingredients } from '$lib/ingredients';
import { products } from '$lib/products';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const ingredient = ingredients[params.id];

	if (!ingredient) {
		throw error(404, 'Ingredient not found');
	}

	// Get the full product details for each product that contains this ingredient
	// Filter out any products that don't exist in the products object
	const relatedProducts = ingredient.products
		?.map((productId) => products[productId])
		.filter((product) => product !== undefined) || [];

	return {
		ingredient,
		relatedProducts
	};
};

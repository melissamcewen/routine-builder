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
	const relatedProducts = ingredient.products?.map((productId) => products[productId]) || [];

	return {
		ingredient,
		relatedProducts
	};
};

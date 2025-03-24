import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ingredients } from '$lib/ingredients';
import type { Ingredient } from '$lib/types/ingredients';

export const GET: RequestHandler = async ({ params }) => {
	const productIds = params.products.split(',');

	// Filter ingredients to find those that:
	// 1. Have the "key-ingredient" tag
	// 2. Are used in any of the requested products
	const keyIngredients = Object.values(ingredients).filter((ingredient: Ingredient) =>
		ingredient.tags?.includes('key-ingredient') &&
		ingredient.products?.some(productId => productIds.includes(productId))
	);

	// Group ingredients by product
	const ingredientsByProduct = productIds.reduce((acc, productId) => {
		acc[productId] = keyIngredients.filter(
			ingredient => ingredient.products?.includes(productId)
		);
		return acc;
	}, {} as Record<string, Ingredient[]>);

	return json(ingredientsByProduct);
};

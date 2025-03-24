import { error } from '@sveltejs/kit';
import { products } from '$lib/products';
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

	return {
		products: productsToCompare
	};
};

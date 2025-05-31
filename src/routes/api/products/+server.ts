import { json } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		// Return minimal product data optimized for LLM name matching
		const productList = Object.values(products).map((product) => ({
			id: product.id,
			name: product.Name
		}));

		return json({
			success: true,
			products: productList,
			count: productList.length,
			message: 'Current The Ordinary product list retrieved successfully'
		});
	} catch (error) {
		console.error('Error fetching products:', error);
		return json(
			{
				success: false,
				error: 'Failed to retrieve products'
			},
			{ status: 500 }
		);
	}
};

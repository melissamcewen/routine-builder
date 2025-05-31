import { json } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const { id } = params;

		if (!id) {
			return json(
				{
					success: false,
					error: 'Product ID is required'
				},
				{ status: 400 }
			);
		}

		const product = Object.values(products).find((p) => p.id === id);

		if (!product) {
			return json(
				{
					success: false,
					error: `Product with ID '${id}' not found`
				},
				{ status: 404 }
			);
		}

		// Return full product details
		const productDetails = {
			id: product.id,
			name: product.Name,
			timeOfDay: product.TOD,
			step: product.Step,
			targets: product.Targets,
			format: product.Format,
			excludes: product.Excludes,
			tags: product.Tags,
			skinTypes: product['Skin Types'],
			phase: product.Phase,
			conflicts: product.Conflicts,
			regimen: product.Regimen
		};

		return json({
			success: true,
			product: productDetails,
			message: `Product details for '${product.Name}' retrieved successfully`
		});
	} catch (error) {
		console.error('Error fetching product details:', error);
		return json(
			{
				success: false,
				error: 'Failed to retrieve product details'
			},
			{ status: 500 }
		);
	}
};

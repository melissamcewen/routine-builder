import { json } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		let productIds: string[] = [];

		// Handle both string and array formats
		if (typeof body.products === 'string') {
			productIds = body.products.split(',').map((id: string) => id.trim());
		} else if (Array.isArray(body.products)) {
			productIds = body.products;
		} else {
			return json(
				{
					success: false,
					error: 'Products must be provided as a comma-separated string or array of IDs'
				},
				{ status: 400 }
			);
		}

		if (productIds.length === 0) {
			return json(
				{
					success: false,
					error: 'At least one product ID must be provided'
				},
				{ status: 400 }
			);
		}

		const foundProducts = [];
		const notFoundIds = [];

		// Find products and track which ones weren't found
		for (const id of productIds) {
			const product = Object.values(products).find((p) => p.id === id);
			if (product) {
				foundProducts.push({
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
				});
			} else {
				notFoundIds.push(id);
			}
		}

		// If some products weren't found, return error
		if (notFoundIds.length > 0) {
			return json(
				{
					success: false,
					error: `Product IDs not found: ${notFoundIds.join(', ')}`,
					notFoundIds,
					foundProducts: foundProducts.length > 0 ? foundProducts : undefined
				},
				{ status: 404 }
			);
		}

		return json({
			success: true,
			products: foundProducts,
			count: foundProducts.length,
			message: `Details for ${foundProducts.length} product(s) retrieved successfully`
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

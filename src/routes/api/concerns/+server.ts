import { json } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		// Get all unique concerns from all products
		const allConcerns = new Set<string>();

		Object.values(products).forEach((product) => {
			if (product.Targets && Array.isArray(product.Targets)) {
				product.Targets.forEach((target) => {
					if (target && target.trim()) {
						allConcerns.add(target.trim());
					}
				});
			}
		});

		// Convert to sorted array
		const concernsList = Array.from(allConcerns).sort();

		return json({
			success: true,
			concerns: concernsList,
			count: concernsList.length,
			message: 'Available skincare concerns retrieved successfully'
		});
	} catch (error) {
		console.error('Error fetching concerns:', error);
		return json(
			{
				success: false,
				error: 'Failed to retrieve concerns'
			},
			{ status: 500 }
		);
	}
};

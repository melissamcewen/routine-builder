import { json } from '@sveltejs/kit';
import { products } from '$lib/products';
import { generateRoutines } from '$lib/routineGenerator';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		// Accept both comma-separated string and array formats for flexibility
		let productIds: string[] = [];

		if (typeof body.products === 'string') {
			// Handle comma-separated string: "product1,product2,product3"
			productIds = body.products
				.split(',')
				.map((id: string) => id.trim())
				.filter((id: string) => id.length > 0);
		} else if (Array.isArray(body.products)) {
			// Handle array format: ["product1", "product2", "product3"]
			productIds = body.products;
		} else {
			return json(
				{
					success: false,
					error: 'Products must be provided as a comma-separated string or array of product IDs'
				},
				{ status: 400 }
			);
		}

		// Validate that all product IDs exist
		const invalidIds = productIds.filter((id) => !products[id]);
		if (invalidIds.length > 0) {
			return json(
				{
					success: false,
					error: `Invalid product IDs: ${invalidIds.join(', ')}`,
					invalidIds
				},
				{ status: 400 }
			);
		}

		// Generate routines using the same logic as the scheduler page
		const routines = generateRoutines(productIds);

		// Format response with detailed routine information for LLM
		const formattedRoutines = routines.map((routine, index) => ({
			id: routine.id,
			timeOfDay: routine.timeOfDay,
			routineNumber: index + 1,
			products: routine.products.map((productId) => ({
				id: productId,
				name: products[productId]?.Name || productId,
				step: products[productId]?.Step || '',
				format: products[productId]?.Format || '',
				phase: products[productId]?.Phase || ''
			})),
			productCount: routine.products.length
		}));

		// Create filtered routines with renumbered IDs starting from 1 for each category
		const dayRoutines = formattedRoutines
			.filter((r) => r.timeOfDay === 'day')
			.map((routine, index) => ({
				...routine,
				id: index + 1
			}));

		const nightRoutines = formattedRoutines
			.filter((r) => r.timeOfDay === 'night')
			.map((routine, index) => ({
				...routine,
				id: index + 1
			}));

		return json({
			success: true,
			routines: formattedRoutines,
			dayRoutines,
			nightRoutines,
			summary: {
				totalRoutines: formattedRoutines.length,
				dayRoutines: dayRoutines.length,
				nightRoutines: nightRoutines.length,
				inputProducts: productIds.length
			},
			message:
				routines.length > 1
					? 'Multiple routines generated. Users should rotate between them (e.g., Routine 1 one day, Routine 2 the next).'
					: 'Single routine generated for the selected products.'
		});
	} catch (error) {
		console.error('Error generating routine:', error);
		return json(
			{
				success: false,
				error: 'Failed to generate routine'
			},
			{ status: 500 }
		);
	}
};

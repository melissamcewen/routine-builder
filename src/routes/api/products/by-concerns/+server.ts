import { json } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const concernsParam = url.searchParams.get('concerns');

		if (!concernsParam) {
			return json(
				{
					success: false,
					error: 'At least one concern must be provided. Use ?concerns=concern1,concern2'
				},
				{ status: 400 }
			);
		}

		const requestedConcerns = concernsParam
			.split(',')
			.map((c) => c.trim())
			.filter((c) => c.length > 0);

		if (requestedConcerns.length === 0) {
			return json(
				{
					success: false,
					error: 'At least one valid concern must be provided'
				},
				{ status: 400 }
			);
		}

		return filterProductsByConcerns(requestedConcerns);
	} catch (error) {
		console.error('Error filtering products by concerns:', error);
		return json(
			{
				success: false,
				error: 'Failed to filter products by concerns'
			},
			{ status: 500 }
		);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		let requestedConcerns: string[] = [];

		// Handle both string and array formats
		if (typeof body.concerns === 'string') {
			requestedConcerns = body.concerns
				.split(',')
				.map((c: string) => c.trim())
				.filter((c: string) => c.length > 0);
		} else if (Array.isArray(body.concerns)) {
			requestedConcerns = body.concerns.filter(
				(c: any) => typeof c === 'string' && c.trim().length > 0
			);
		} else {
			return json(
				{
					success: false,
					error: 'Concerns must be provided as a comma-separated string or array'
				},
				{ status: 400 }
			);
		}

		if (requestedConcerns.length === 0) {
			return json(
				{
					success: false,
					error: 'At least one valid concern must be provided'
				},
				{ status: 400 }
			);
		}

		return filterProductsByConcerns(requestedConcerns);
	} catch (error) {
		console.error('Error filtering products by concerns:', error);
		return json(
			{
				success: false,
				error: 'Failed to filter products by concerns'
			},
			{ status: 500 }
		);
	}
};

function filterProductsByConcerns(requestedConcerns: string[]) {
	const matchingProducts = [];
	const notFoundConcerns = [];
	const foundConcerns = new Set<string>();

	// Get all available concerns for validation
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

	// Validate requested concerns (case-insensitive)
	requestedConcerns.forEach((concern) => {
		const matchedConcern = Array.from(allConcerns).find(
			(availableConcern) => availableConcern.toLowerCase() === concern.toLowerCase()
		);
		if (matchedConcern) {
			foundConcerns.add(matchedConcern);
		} else {
			notFoundConcerns.push(concern);
		}
	});

	// Filter products that target any of the valid concerns
	Object.values(products).forEach((product) => {
		if (product.Targets && Array.isArray(product.Targets)) {
			const hasMatchingConcern = product.Targets.some((target) =>
				Array.from(foundConcerns).some((concern) => target.toLowerCase() === concern.toLowerCase())
			);

			if (hasMatchingConcern) {
				matchingProducts.push({
					id: product.id,
					name: product.Name,
					targets: product.Targets,
					timeOfDay: product.TOD,
					step: product.Step,
					format: product.Format
				});
			}
		}
	});

	// Sort by name for consistent results
	matchingProducts.sort((a, b) => a.name.localeCompare(b.name));

	const response: any = {
		success: true,
		products: matchingProducts,
		count: matchingProducts.length,
		requestedConcerns: Array.from(foundConcerns),
		message: `Found ${matchingProducts.length} product(s) targeting the specified concern(s)`
	};

	// Include invalid concerns if any
	if (notFoundConcerns.length > 0) {
		response.invalidConcerns = notFoundConcerns;
		response.message += `. Invalid concerns: ${notFoundConcerns.join(', ')}`;
	}

	return json(response);
}

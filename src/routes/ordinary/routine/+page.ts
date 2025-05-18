import { products } from '$lib/products';
import { sortProductsByPhase } from '$lib/utils';
import type { ServerLoad } from '@sveltejs/kit';

interface PageData {
	timeOfDay: 'day' | 'night';
	selectedProducts: string[];
	routineName: string;
	metaDescription: string;
	structuredData: {
		'@context': string;
		'@type': string;
		name: string;
		description: string;
		step: Array<{
			'@type': string;
			position: number;
			name: string;
			text: string;
		}>;
	};
}

export const load = (async ({ url }: { url: URL }): Promise<PageData> => {
	const timeOfDay = (url.searchParams.get('tod') as 'day' | 'night') || 'day';
	const selectedProducts =
		url.searchParams
			.get('products')
			?.split(',')
			.filter((id: string) => products[id]) || [];
	const routineName = url.searchParams.get('name') || '';

	const sortedSelectedProducts = sortProductsByPhase(selectedProducts, products);

	// Generate dynamic meta description based on selected products
	const metaDescription =
		selectedProducts.length > 0
			? `${routineName ? `${routineName}: ` : ''}${timeOfDay} skincare routine with The Ordinary products: ${selectedProducts.map((id: string) => products[id].Name).join(', ')}`
			: 'Create and share your personalized skincare routine with The Ordinary products. Features compatibility checks and proper product ordering.';

	// Generate structured data for the routine
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: routineName || `${timeOfDay} Skincare Routine`,
		description: metaDescription,
		step: sortedSelectedProducts.map((productId: string, index: number) => ({
			'@type': 'HowToStep',
			position: index + 1,
			name: products[productId].Name,
			text: `Apply ${products[productId].Name} (${products[productId].Phase} phase)`
		}))
	};

	return {
		timeOfDay,
		selectedProducts,
		routineName,
		metaDescription,
		structuredData
	};
}) satisfies ServerLoad;

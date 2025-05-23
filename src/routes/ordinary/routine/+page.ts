import { products } from '$lib/products';
import { sortProductsByPhase } from '$lib/utils';
import type { PageLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: PageLoad = async ({ url }) => {
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

	// Generate dynamic title
	const title = `${routineName ? `${routineName} - ` : ''}${timeOfDay === 'day' ? 'Day' : 'Night'} Routine`;

	// Generate keywords
	const keywords = [
		'The Ordinary',
		'skincare routine',
		`${timeOfDay} routine`,
		...selectedProducts.map((id: string) => products[id].Name.toLowerCase())
	];

	// Generate structured data for the routine
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: routineName || `${timeOfDay} Skincare Routine`,
		description: metaDescription,
		author: {
			'@type': 'Organization' as const,
			name: 'My Routine Builder'
		},
		publisher: {
			'@type': 'Organization' as const,
			name: 'My Routine Builder',
			url: 'https://www.myroutinebuilder.com'
		}
	};

	const pageMetaTags: Partial<MetaTagsProps> = {
		title,
		description: metaDescription,
		keywords,
		openGraph: {
			title,
			description: metaDescription,
			type: 'website'
		},
		twitter: {
			title,
			description: metaDescription
		}
	};

	return {
		timeOfDay,
		selectedProducts,
		routineName,
		pageMetaTags,
		pageStructuredData
	};
};

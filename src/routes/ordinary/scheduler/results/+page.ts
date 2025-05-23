import { products } from '$lib/products';
import type { PageLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: PageLoad = async ({ url }) => {
	const selectedProducts =
		url.searchParams
			.get('products')
			?.split(',')
			.filter((id: string) => products[id]) || [];

	// Generate dynamic meta description based on selected products
	const metaDescription =
		selectedProducts.length > 0
			? `Generated skincare routines incorporating ${selectedProducts.length} The Ordinary products: ${selectedProducts.map((id: string) => products[id].Name).join(', ')}`
			: 'Generated skincare routines that incorporate all your selected The Ordinary products efficiently.';

	const title = 'Generated Routines - The Ordinary Routine Scheduler';
	const keywords = [
		'The Ordinary',
		'routine scheduler',
		'generated routines',
		'skincare routine',
		...selectedProducts.map((id: string) => products[id].Name.toLowerCase())
	];

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

	// Structured data for the generated routines
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: title,
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

	return {
		selectedProducts,
		pageMetaTags,
		pageStructuredData
	};
};

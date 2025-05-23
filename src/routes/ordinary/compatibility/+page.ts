import type { ServerLoad } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = (async ({ url }) => {
	// Generate SEO-friendly title and description
	const title = 'Product Compatibility Matrix | The Ordinary Products';
	const description =
		'Check compatibility between The Ordinary products. See which products can be used together and which ones should be kept separate.';

	const pageUrl = new URL(url.pathname, url.origin).href;

	const pageMetaTags: Partial<MetaTagsProps> = {
		title,
		description,
		keywords: [
			'The Ordinary',
			'product compatibility',
			'skincare compatibility',
			'ingredient conflicts',
			'skincare routine'
		],
		openGraph: {
			title,
			description,
			type: 'website',
			url: pageUrl
		},
		twitter: {
			title,
			description,
			cardType: 'summary' as const
		}
	};

	// Generate structured data for SEO
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: title,
		description,
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
		pageMetaTags,
		pageStructuredData
	};
}) satisfies ServerLoad;

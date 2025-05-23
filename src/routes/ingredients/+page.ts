import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const pageUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags
	const pageMetaTags = Object.freeze({
		title: 'Ingredients in The Ordinary Products',
		description:
			'Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits.',
		openGraph: {
			type: 'website',
			url: pageUrl,
			title: 'Ingredients in The Ordinary Products',
			description:
				'Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits.'
		},
		twitter: {
			title: 'Ingredients in The Ordinary Products',
			description:
				'Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits.'
		}
	}) satisfies MetaTagsProps;

	// Page-specific structured data for the ingredients directory
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Ingredients in The Ordinary Products',
		description:
			'Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits.',
		url: pageUrl,
		mainEntity: {
			'@type': 'ItemList',
			name: 'The Ordinary Ingredients Dictionary',
			description: 'Comprehensive list of skincare ingredients used in The Ordinary products',
			numberOfItems: 'Multiple ingredients',
			itemListElement: {
				'@type': 'ListItem',
				name: 'Skincare Ingredients',
				description: 'Active and inactive ingredients found in The Ordinary skincare products'
			}
		},
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Home',
					item: 'https://www.myroutinebuilder.com'
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Ingredients',
					item: pageUrl
				}
			]
		}
	};

	return {
		pageMetaTags,
		pageStructuredData
	};
};

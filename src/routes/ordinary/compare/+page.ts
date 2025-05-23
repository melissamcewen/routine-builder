import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const pageUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags
	const pageMetaTags = Object.freeze({
		title: 'Compare The Ordinary Products',
		description:
			'Compare different products from The Ordinary side by side to find the best options for your skincare routine.',
		openGraph: {
			type: 'website',
			url: pageUrl,
			title: 'Compare The Ordinary Products',
			description:
				'Compare different products from The Ordinary side by side to find the best options for your skincare routine.'
		},
		twitter: {
			title: 'Compare The Ordinary Products',
			description:
				'Compare different products from The Ordinary side by side to find the best options for your skincare routine.'
		}
	}) satisfies MetaTagsProps;

	// Page-specific structured data for the comparison tool
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'Compare The Ordinary Products',
		description:
			'Compare different products from The Ordinary side by side to find the best options for your skincare routine.',
		url: pageUrl,
		applicationCategory: 'LifestyleApplication',
		operatingSystem: 'Web',
		featureList: [
			'Side-by-side product comparison',
			'Filter by skin concerns',
			'Filter by product type',
			'Popular comparison suggestions'
		],
		provider: {
			'@type': 'Organization',
			name: 'My Routine Builder',
			url: 'https://www.myroutinebuilder.com'
		}
	};

	return {
		pageMetaTags,
		pageStructuredData
	};
};

import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const pageUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags
	const pageMetaTags = Object.freeze({
		title: 'The Ordinary Routine Scheduler - Generate Multiple Routines',
		description:
			'Generate multiple skincare routines that incorporate all your The Ordinary products efficiently.',
		openGraph: {
			type: 'website',
			url: pageUrl,
			title: 'The Ordinary Routine Scheduler - Generate Multiple Routines',
			description:
				'Generate multiple skincare routines that incorporate all your The Ordinary products efficiently.'
		},
		twitter: {
			title: 'The Ordinary Routine Scheduler - Generate Multiple Routines',
			description:
				'Generate multiple skincare routines that incorporate all your The Ordinary products efficiently.'
		}
	}) satisfies MetaTagsProps;

	// Page-specific structured data for the scheduler tool
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'The Ordinary Routine Scheduler',
		description:
			'Generate multiple skincare routines that incorporate all your The Ordinary products efficiently.',
		url: pageUrl,
		applicationCategory: 'LifestyleApplication',
		operatingSystem: 'Web',
		featureList: [
			'Select multiple skincare products',
			'Generate optimized routines',
			'Account for product compatibility',
			'Proper product ordering by phase'
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

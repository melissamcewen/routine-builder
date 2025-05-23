import type { LayoutServerLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: LayoutServerLoad = ({ url }) => {
	const canonicalUrl = new URL(
		url.pathname + url.search,
		'https://www.myroutinebuilder.com'
	).toString();

	const baseMetaTags = Object.freeze({
		title: 'The Ordinary Advanced Routine Builder',
		titleTemplate: '%s | The Ordinary Advanced Routine Builder',
		description:
			'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
		canonical: canonicalUrl,
		openGraph: {
			type: 'website',
			url: canonicalUrl,
			locale: 'en_US',
			title: 'The Ordinary Advanced Routine Builder',
			description:
				'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
			siteName: 'My Routine Builder'
		},
		twitter: {
			cardType: 'summary_large_image' as const,
			site: '@myroutinebuilder',
			creator: '@myroutinebuilder',
			title: 'The Ordinary Advanced Routine Builder',
			description:
				'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.'
		},
		additionalLinkTags: [
			{
				rel: 'alternate',
				type: 'application/rss+xml',
				title: 'Blog RSS Feed',
				href: 'https://www.myroutinebuilder.com/rss.xml'
			}
		]
	}) satisfies MetaTagsProps;

	// Base structured data for the website
	const baseStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'The Ordinary Advanced Routine Builder',
		description: 'Advanced routine builder for The Ordinary skincare products',
		applicationCategory: 'LifestyleApplication',
		operatingSystem: 'Web',
		url: 'https://www.myroutinebuilder.com',
		author: {
			'@type': 'Person',
			name: 'My Routine Builder'
		}
	};

	return {
		canonicalUrl,
		baseMetaTags,
		baseStructuredData
	};
};

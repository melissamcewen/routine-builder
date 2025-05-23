import type { PageLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: PageLoad = ({ url }) => {
	const postUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags that will override base meta tags
	const pageMetaTags: MetaTagsProps = {
		title: 'Welcome to The Ordinary Advanced Builder',
		description:
			'Learn how to use The Ordinary Advanced Builder to create perfect skincare routines with real-time compatibility checking and proper product ordering.',
		openGraph: {
			type: 'article',
			url: postUrl,
			title: 'Welcome to The Ordinary Advanced Builder',
			description:
				'Learn how to use The Ordinary Advanced Builder to create perfect skincare routines with real-time compatibility checking and proper product ordering.',
			article: {
				publishedTime: '2024-01-09',
				authors: ['https://www.myroutinebuilder.com/authors/melissa-mcewen'],
				tags: [
					'The Ordinary',
					'skincare routine',
					'product compatibility',
					'skincare guide',
					'routine builder'
				]
			}
		},
		twitter: {
			title: 'Welcome to The Ordinary Advanced Builder',
			description:
				'Learn how to use The Ordinary Advanced Builder to create perfect skincare routines with real-time compatibility checking and proper product ordering.'
		},
		additionalMetaTags: [
			{
				name: 'keywords',
				content:
					'The Ordinary, skincare routine, product compatibility, skincare guide, routine builder'
			}
		]
	};

	// Article structured data
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: 'Welcome to The Ordinary Advanced Builder',
		datePublished: '2024-01-09',
		author: {
			'@type': 'Person' as const,
			name: 'Melissa McEwen'
		},
		description:
			'Learn how to use The Ordinary Advanced Builder to create perfect skincare routines with real-time compatibility checking and proper product ordering.',
		keywords:
			'The Ordinary, skincare routine, product compatibility, skincare guide, routine builder',
		url: postUrl,
		publisher: {
			'@type': 'Organization' as const,
			name: 'My Routine Builder',
			url: 'https://myroutinebuilder.com'
		}
	};

	return {
		pageMetaTags,
		pageStructuredData
	};
};

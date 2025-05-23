import type { PageLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: PageLoad = ({ url }) => {
	const postUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags that will override base meta tags
	const pageMetaTags: MetaTagsProps = {
		title: 'Why Lactic Acid is My Winter BFF',
		description:
			'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!',
		openGraph: {
			type: 'article',
			url: postUrl,
			title: 'Why Lactic Acid is My Winter BFF',
			description:
				'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!',
			article: {
				publishedTime: '2025-02-02',
				authors: ['https://www.myroutinebuilder.com/authors/melissa-mcewen'],
				tags: [
					'lactic acid',
					'winter',
					'dry skin',
					'humectant',
					'exfoliant',
					'antioxidant',
					'anti-aging',
					'anti-acne'
				]
			}
		},
		twitter: {
			title: 'Why Lactic Acid is My Winter BFF',
			description:
				'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!'
		},
		additionalMetaTags: [
			{
				name: 'keywords',
				content:
					'lactic acid, winter, dry skin, humectant, exfoliant, antioxidant, anti-aging, anti-acne'
			}
		]
	};

	// Article structured data
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: 'Why Lactic Acid is My Winter BFF',
		datePublished: '2025-02-02',
		author: {
			'@type': 'Person' as const,
			name: 'Melissa McEwen'
		},
		description:
			'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!',
		keywords:
			'lactic acid, winter, dry skin, humectant, exfoliant, antioxidant, anti-aging, anti-acne',
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

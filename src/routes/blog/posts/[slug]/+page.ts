import type { ServerLoad } from '@sveltejs/kit';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { error } from '@sveltejs/kit';

interface Post {
	title: string;
	slug: string;
	date: string;
	description: string;
	keywords: string;
	author: string;
}

const posts: Post[] = [
	{
		title: 'Why Lactic Acid is My Winter BFF',
		slug: 'why-lactic-acid-is-my-winter-bff',
		date: '2025-02-02',
		description:
			'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!',
		keywords:
			'lactic acid, winter, dry skin, humectant, exfoliant, antioxidant, anti-aging, anti-acne',
		author: 'Melissa McEwen'
	},
	{
		title: 'Welcome to The Ordinary Advanced Builder',
		slug: 'welcome-to-the-ordinary-advanced-builder',
		date: '2024-01-09',
		description:
			'Learn how to use The Ordinary Advanced Builder to create perfect skincare routines with real-time compatibility checking and proper product ordering.',
		keywords:
			'The Ordinary, skincare routine, product compatibility, skincare guide, routine builder',
		author: 'Melissa McEwen'
	}
];

export const load = (async ({ params, url }) => {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	const postUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags that will override base meta tags
	const pageMetaTags = Object.freeze({
		title: post.title,
		description: post.description,
		openGraph: {
			type: 'article',
			url: postUrl,
			title: post.title,
			description: post.description,
			article: {
				publishedTime: post.date,
				authors: [
					`https://www.myroutinebuilder.com/authors/${post.author.toLowerCase().replace(' ', '-')}`
				],
				tags: post.keywords.split(', ')
			}
		},
		twitter: {
			title: post.title,
			description: post.description
		},
		additionalMetaTags: [
			{
				name: 'keywords',
				content: post.keywords
			}
		]
	}) satisfies MetaTagsProps;

	// Article structured data
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: post.title,
		datePublished: post.date,
		author: {
			'@type': 'Person' as const,
			name: post.author
		},
		description: post.description,
		keywords: post.keywords,
		url: postUrl,
		publisher: {
			'@type': 'Organization' as const,
			name: 'My Routine Builder',
			url: 'https://myroutinebuilder.com'
		}
	};

	return {
		post,
		pageMetaTags,
		pageStructuredData
	};
}) satisfies ServerLoad;

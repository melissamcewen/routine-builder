import type { ServerLoad } from '@sveltejs/kit';
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

export const load = (async ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	const articleData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		datePublished: post.date,
		author: {
			'@type': 'Person',
			name: post.author
		},
		description: post.description,
		keywords: post.keywords,
		url: `https://myroutinebuilder.com/blog/posts/${post.slug}`,
		publisher: {
			'@type': 'Organization',
			name: 'My Routine Builder',
			url: 'https://myroutinebuilder.com'
		}
	};

	return {
		post,
		structuredData: articleData
	};
}) satisfies ServerLoad;

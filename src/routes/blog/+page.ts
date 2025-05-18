import type { ServerLoad } from '@sveltejs/kit';

interface Post {
	title: string;
	slug: string;
	date: string;
	description: string;
	author: string;
}

const posts: Post[] = [
	{
		title: 'Why Lactic Acid is My Winter BFF',
		slug: 'why-lactic-acid-is-my-winter-bff',
		date: '2025-02-02',
		description:
			'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!',
		author: 'Melissa McEwen'
	},
	{
		title: 'Welcome to The Ordinary Advanced Builder',
		slug: 'welcome-to-the-ordinary-advanced-builder',
		date: '2024-01-09',
		description: 'Learn about how to use this tool to build your perfect skincare routine.',
		author: 'Melissa McEwen'
	}
];

export const load = (async () => {
	const blogData = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Routine Builder Blog',
		description:
			'Tips, guides, and updates about using The Ordinary skincare products and building effective routines.',
		url: 'https://myroutinebuilder.com/blog',
		publisher: {
			'@type': 'Organization',
			name: 'My Routine Builder',
			url: 'https://myroutinebuilder.com'
		},
		blogPost: posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.description,
			datePublished: post.date,
			url: `https://myroutinebuilder.com/blog/posts/${post.slug}`,
			author: {
				'@type': 'Person',
				name: post.author
			}
		}))
	};

	return {
		posts,
		structuredData: blogData
	};
}) satisfies ServerLoad;

<script>
	import { Book } from 'lucide-svelte';
	import { formatDate } from '$lib/blog';

	const posts = [
		{
			title: 'Why Lactic Acid is My Winter BFF',
			slug: 'why-lactic-acid-is-my-winter-bff',
			date: '2025-02-02',
			description:
				'Lactic acid is a humectant and exfoliant, and also works as an antioxidant/anti-aging/anti-acne!'
		},
		{
			title: 'Welcome to The Ordinary Advanced Builder',
			slug: 'welcome-to-the-ordinary-advanced-builder',
			date: '2024-01-09',
			description: 'Learn about how to use this tool to build your perfect skincare routine.'
		}
	];

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
				name: 'Melissa McEwen'
			}
		}))
	};
</script>

<svelte:head>
	<title>Blog - Routine Builder</title>
	<meta
		name="description"
		content="Tips, guides, and updates about using The Ordinary skincare products and building effective routines."
	/>
	<meta
		name="keywords"
		content="The Ordinary, skincare blog, routine guides, skincare tips, product compatibility"
	/>
	<script type="application/ld+json">
		{JSON.stringify(blogData)}
	</script>
</svelte:head>

<div class="container mx-auto p-4">
	<h1 class="text-4xl font-bold mb-8 flex items-center gap-2">
		<Book class="w-8 h-8" /> Blog
	</h1>
	<div class="flex flex-col gap-4">
		{#each posts as post}
			<a
				href="/blog/posts/{post.slug}"
				class="card glass hover:shadow-lg transition-all no-underline"
			>
				<div class="card-body">
					<h2 class="card-title">{post.title}</h2>
					<p class="text-sm opacity-70">
						{post.description}
					</p>
					<div class="card-actions justify-end">
						<span class="text-xs opacity-50">{formatDate(post.date)}</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

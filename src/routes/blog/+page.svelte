<script>
	import { Book } from 'lucide-svelte';
	import { formatDate } from '$lib/blog';

	const blogData = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'The Ordinary Advanced Builder Blog',
		description:
			'Tips, guides, and updates about using The Ordinary skincare products and building effective routines.',
		publisher: {
			'@type': 'Organization',
			name: 'My Routine Builder'
		}
	};

	const posts = [
		{
			title: 'Welcome to The Ordinary Advanced Builder',
			slug: 'welcome-to-the-ordinary-advanced-builder',
			date: '2024-01-09',
			description: 'Learn about how to use this tool to build your perfect skincare routine.'
		}
	];
</script>

<svelte:head>
	<title>Blog - The Ordinary Advanced Builder</title>
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
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<a href="/blog/posts/{post.slug}" class="card glass hover:shadow-lg transition-all">
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

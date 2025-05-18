<script lang="ts">
	import { Book } from 'lucide-svelte';
	import { formatDate } from '$lib/blog';
	import type { PageData } from './$types';

	export let data: PageData;
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
		{JSON.stringify(data.structuredData)}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 flex items-center gap-2">
		<Book class="w-8 h-8" /> Blog
	</h1>

	<div class="grid gap-8">
		{#each data.posts as post}
			<article class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">
						<a href="/blog/posts/{post.slug}" class="hover:link">{post.title}</a>
					</h2>
					<p class="text-sm opacity-70">Published on {formatDate(post.date)}</p>
					<p class="mt-4">{post.description}</p>
					<div class="card-actions justify-end mt-4">
						<a href="/blog/posts/{post.slug}" class="btn btn-primary">Read More</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>

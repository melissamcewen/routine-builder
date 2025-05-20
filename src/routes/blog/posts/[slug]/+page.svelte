<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/blog';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title} - My Routine Builder</title>
	<meta name="description" content={data.post.description} />
	<meta name="keywords" content={data.post.keywords} />
	{@html `<script type="application/ld+json">${JSON.stringify(data.structuredData)}</script>`}
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<article class="prose prose-lg mx-auto">
		<h1>{data.post.title}</h1>
		<div class="text-sm opacity-70 mb-8">Published on {formatDate(data.post.date)}</div>
		<slot />
	</article>
</div>

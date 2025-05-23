<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/blog';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';

	export let data: PageData;
</script>

<MetaTags {...data.pageMetaTags} />
<JsonLd schema={data.pageStructuredData} />

<div class="container mx-auto px-4 py-8">
	<article class="prose prose-lg mx-auto">
		<h1>{data.post.title}</h1>
		<div class="text-sm opacity-70 mb-8">Published on {formatDate(data.post.date)}</div>
		<slot />
	</article>
</div>

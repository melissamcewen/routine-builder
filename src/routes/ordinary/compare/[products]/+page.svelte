<script lang="ts">
	import type { PageData } from './$types';
	import type { Product } from '$lib/products';
	import type { Ingredient } from '$lib/types/ingredients';
	import ProductComparison from '$lib/components/product/ProductComparison.svelte';
	import { Info } from 'lucide-svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { JsonLd } from 'svelte-meta-tags';

	export let data: PageData;
</script>

<MetaTags {...data.pageMetaTags} />
<JsonLd schema={data.pageStructuredData} />

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-6">
		{#if data.comparisonTitle}
			{data.comparisonTitle}
		{:else}
			Compare {data.products.map((p: Product) => p.Name).join(' vs ')}
		{/if}
	</h1>

	{#if data.comparisonNote}
		<p class="mb-6 text-lg">{data.comparisonNote}</p>
	{/if}

	<ProductComparison products={data.products} keyIngredients={data.keyIngredients} />
</div>

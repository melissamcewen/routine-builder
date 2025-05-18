<script lang="ts">
	import type { PageData } from './$types';
	import type { Product } from '$lib/products';
	import type { Ingredient } from '$lib/types/ingredients';
	import ProductComparison from '$lib/components/product/ProductComparison.svelte';
	import { Info } from 'lucide-svelte';

	export let data: PageData;

	// Generate SEO-friendly title and description
	$: productNames = data.products.map((p: Product) => p.Name);
	$: pageTitle = data.comparisonTitle
		? `${data.comparisonTitle} | The Ordinary Products Comparison`
		: `Compare ${productNames.join(' vs ')} | The Ordinary Products Comparison`;
	$: metaDescription = (
		data.comparisonTitle
			? `${data.comparisonTitle} from The Ordinary. See differences in ingredients, usage, and benefits. ${data.comparisonNote || ''}`
			: `Compare ${productNames.join(' vs ')} from The Ordinary. See differences in ingredients, usage, and benefits. ${data.comparisonNote || ''}`
	).trim();

	// Generate structured data for SEO
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: pageTitle,
		description: metaDescription,
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: data.products.map((product, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'Product',
					name: product.Name,
					description: `${product.Name} - ${product.Targets.join(', ')}`,
					category: product.Format || 'Skincare'
				}
			}))
		}
	};
</script>

<svelte:head>
	<title>{data.pageTitle}</title>
	<meta name="description" content={data.metaDescription} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={data.pageTitle} />
	<meta property="og:description" content={data.metaDescription} />
	<meta property="og:type" content="website" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={data.pageTitle} />
	<meta name="twitter:description" content={data.metaDescription} />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify(data.structuredData)}
	</script>
</svelte:head>

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

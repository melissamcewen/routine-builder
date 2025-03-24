<script lang="ts">
	import type { Product } from '$lib/products';
	import type { Ingredient } from '$lib/types/ingredients';
	import ProductComparison from '$lib/components/product/ProductComparison.svelte';
	import { Info } from 'lucide-svelte';

	export let data: {
		products: Product[];
		comparisonNote: string | null;
		keyIngredients: Record<string, Ingredient[]>;
	};

	// Generate SEO-friendly title and description
	$: productNames = data.products.map((p: Product) => p.Name);
	$: pageTitle = `Compare ${productNames.join(' vs ')} | The Ordinary Products Comparison`;
	$: metaDescription =
		`Compare ${productNames.join(' vs ')} from The Ordinary. See differences in ingredients, usage, and benefits. ${data.comparisonNote || ''}`.trim();

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
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:type" content="website" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={metaDescription} />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify(structuredData)}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-6">Compare Products</h1>

	{#if data.comparisonNote}
		<p class="mb-6 text-lg">{data.comparisonNote}</p>
	{/if}

	<ProductComparison products={data.products} keyIngredients={data.keyIngredients} />
</div>

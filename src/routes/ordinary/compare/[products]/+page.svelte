<script lang="ts">
	import type { Product } from '$lib/products';
	import ProductComparison from '$lib/components/product/ProductComparison.svelte';
	import { Info } from 'lucide-svelte';

	export let data: { products: Product[]; comparisonNote: string | null };
</script>

<svelte:head>
	<title
		>Compare The Ordinary Products - {data.products.map((p: Product) => p.Name).join(' vs ')}</title
	>
	<meta
		name="description"
		content="Compare {data.products.map((p: Product) => p.Name).join(' vs ')} from The Ordinary"
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-6">Compare Products</h1>

	{#if data.comparisonNote}
		<div class="alert alert-info mb-6 shadow-lg">
			<Info size={20} />
			<span>{data.comparisonNote}</span>
		</div>
	{/if}

	<ProductComparison products={data.products} />
</div>

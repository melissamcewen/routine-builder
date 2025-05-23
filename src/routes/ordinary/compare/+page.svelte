<script lang="ts">
	import { products } from '$lib/products';
	import type { Product } from '$lib/products';
	import { popularComparisons } from '$lib/popularComparisons';
	import { goto } from '$app/navigation';
	import { Search, Filter, ArrowRight } from 'lucide-svelte';

	let selectedProducts: string[] = [];
	let searchQuery = '';
	let selectedTarget = 'All Concerns';
	let selectedFormat = 'All Types';
	const productList = Object.values(products);

	// Get unique targets and formats for filters
	$: targets = [
		'All Concerns',
		...new Set(
			Object.values(products)
				.flatMap((p) => p.Targets)
				.filter(Boolean)
		).values()
	].sort();

	$: formats = [
		'All Types',
		...new Set(
			Object.values(products)
				.map((p) => p.Format)
				.filter(Boolean)
		).values()
	].sort();

	// Filter products based on search and filters
	$: filteredProducts = productList.filter((product) => {
		const matchesSearch = product.Name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTarget =
			selectedTarget === 'All Concerns' || product.Targets.includes(selectedTarget);
		const matchesFormat = selectedFormat === 'All Types' || product.Format === selectedFormat;
		return matchesSearch && matchesTarget && matchesFormat;
	});

	function handleCompare() {
		if (selectedProducts.length >= 2) {
			goto(`/ordinary/compare/${selectedProducts.join(',')}`);
		}
	}

	function toggleProduct(productId: string) {
		if (selectedProducts.includes(productId)) {
			selectedProducts = selectedProducts.filter((id) => id !== productId);
		} else if (selectedProducts.length < 6) {
			selectedProducts = [...selectedProducts, productId];
		}
	}

	function comparePopular(ids: string[]) {
		goto(`/ordinary/compare/${ids.join(',')}`);
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-6">Compare The Ordinary Products</h1>

	<!-- Popular Comparisons -->
	<div class="mb-8">
		<h2 class="text-xl font-semibold mb-4">Popular Comparisons</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each popularComparisons as comparison}
				<div class="flex items-center justify-between p-3 bg-base-100 shadow rounded-lg">
					<div class="flex-1">
						{#if comparison.title}
							<p class="font-medium">{comparison.title}</p>
							<div class="text-sm text-base-content/70 mt-1">
								{#if comparison.ids.length > 2}
									{comparison.ids.length} products
								{:else}
									{products[comparison.ids[0]].Name}, {products[comparison.ids[1]].Name}
								{/if}
							</div>
						{:else}
							<div class="flex items-center gap-2">
								<span class="text-sm">{products[comparison.ids[0]].Name}</span>
								<span class="text-base-content/50">vs</span>
								<span class="text-sm">{products[comparison.ids[1]].Name}</span>
							</div>
						{/if}
					</div>
					<button class="btn btn-primary btn-sm" on:click={() => comparePopular(comparison.ids)}>
						Compare
					</button>
				</div>
			{/each}
		</div>
	</div>

	<div class="divider">Or Create Your Own Comparison</div>

	<div class="mb-6">
		<p class="text-lg mb-4">Select 2-6 products to compare:</p>
		<div class="flex flex-wrap gap-2">
			{#each selectedProducts as productId}
				<div class="badge badge-primary gap-2">
					{products[productId].Name}
					<button
						class="btn btn-ghost btn-xs"
						on:click|stopPropagation={() => toggleProduct(productId)}
					>
						✕
					</button>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-4 mb-6">
		<!-- Search -->
		<div class="form-control flex-1">
			<div class="join w-full">
				<div class="join-item flex items-center px-4 bg-base-200 border border-base-300">
					<Search size={18} class="text-base-content/70" />
				</div>
				<input
					type="text"
					placeholder="Search products..."
					class="input join-item input-bordered flex-1"
					bind:value={searchQuery}
				/>
			</div>
		</div>

		<!-- Filters -->
		<div class="flex gap-2">
			<select class="select select-bordered w-full md:w-auto" bind:value={selectedTarget}>
				{#each targets as target}
					<option value={target}>{target}</option>
				{/each}
			</select>

			<select class="select select-bordered w-full md:w-auto" bind:value={selectedFormat}>
				{#each formats as format}
					<option value={format}>{format}</option>
				{/each}
			</select>
		</div>
	</div>

	<button
		class="btn btn-primary mb-6"
		disabled={selectedProducts.length < 2}
		on:click={handleCompare}
	>
		Compare Selected Products
	</button>

	{#if filteredProducts.length === 0}
		<div class="text-center py-8">
			<p class="text-lg">No products found matching your criteria</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each filteredProducts as product}
				<div
					class="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
					class:border-primary={selectedProducts.includes(product.id)}
					class:border-2={selectedProducts.includes(product.id)}
					on:click={() => toggleProduct(product.id)}
					on:keydown={(e) => e.key === 'Enter' && toggleProduct(product.id)}
					role="button"
					tabindex="0"
				>
					<div class="card-body">
						<h2 class="card-title">{product.Name}</h2>
						<p class="text-sm opacity-70">{product.Step} • {product.TOD}</p>
						{#if product.Targets && product.Targets.length > 0}
							<div class="flex flex-wrap gap-1 mt-2">
								{#each product.Targets.slice(0, 3) as target}
									<span class="badge badge-ghost">{target}</span>
								{/each}
								{#if product.Targets.length > 3}
									<span class="badge badge-ghost">+{product.Targets.length - 3} more</span>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

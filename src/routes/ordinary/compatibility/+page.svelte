<script lang="ts">
	import { onMount } from 'svelte';
	import type { ProductCompatibility } from '$lib/types/compatibility';
	import { products } from '$lib/products';
	import type { PageData } from './$types';
	import { MetaTags } from 'svelte-meta-tags';
	import { JsonLd } from 'svelte-meta-tags';

	export let data: PageData;

	let compatibilityData: ProductCompatibility[] = [];
	let searchQuery = '';
	let sortDirection: 'asc' | 'desc' = 'asc';
	let sortColumn: keyof ProductCompatibility = 'name';

	// Compatibility checker state
	let selectedProduct1 = '';
	let selectedProduct2 = '';
	let product1Search = '';
	let product2Search = '';

	// Filtered product lists for dropdowns
	$: filteredProducts1 = Object.values(products)
		.filter((p) => p.id !== 'sunscreen')
		.filter((p) => p.Name.toLowerCase().includes(product1Search.toLowerCase()))
		.map((p) => ({ value: p.id, label: p.Name }));

	$: filteredProducts2 = Object.values(products)
		.filter((p) => p.id !== 'sunscreen')
		.filter((p) => p.Name.toLowerCase().includes(product2Search.toLowerCase()))
		.map((p) => ({ value: p.id, label: p.Name }));

	// Check compatibility between two products
	$: compatibilityResult =
		selectedProduct1 && selectedProduct2
			? checkCompatibility(selectedProduct1, selectedProduct2)
			: null;

	function checkCompatibility(id1: string, id2: string) {
		const product1 = products[id1];
		const product2 = products[id2];

		if (!product1 || !product2) return null;

		// Check if product1's tags are in product2's excludes
		const conflicts1to2 = product1.Tags.some((tag) => product2.Excludes.includes(tag));

		// Check if product2's tags are in product1's excludes
		const conflicts2to1 = product2.Tags.some((tag) => product1.Excludes.includes(tag));

		return {
			isCompatible: !conflicts1to2 && !conflicts2to1,
			conflicts1to2,
			conflicts2to1,
			product1Name: product1.Name,
			product2Name: product2.Name
		};
	}

	// Filter products based on search query
	$: filteredProducts = compatibilityData.filter((product) =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Sort products
	$: sortedProducts = [...filteredProducts].sort((a, b) => {
		const aValue = a[sortColumn];
		const bValue = b[sortColumn];

		if (Array.isArray(aValue) && Array.isArray(bValue)) {
			return sortDirection === 'asc'
				? aValue.join(', ').localeCompare(bValue.join(', '))
				: bValue.join(', ').localeCompare(aValue.join(', '));
		}

		return sortDirection === 'asc'
			? String(aValue).localeCompare(String(bValue))
			: String(bValue).localeCompare(String(aValue));
	});

	function handleSort(column: keyof ProductCompatibility) {
		if (sortColumn === column) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn = column;
			sortDirection = 'asc';
		}
	}

	onMount(() => {
		// Filter out sunscreen and transform product data into compatibility format
		const filteredProducts = Object.entries(products)
			.filter(([id]) => id !== 'sunscreen')
			.map(([_, product]) => product);

		compatibilityData = filteredProducts.map((product) => {
			// Get conflicts where this product's tags are in other products' Excludes
			const conflictsFromTags = filteredProducts
				.filter((p) => p.Excludes.some((tag) => product.Tags.includes(tag)))
				.map((p) => p.Name);

			// Get conflicts where this product's Excludes match other products' tags
			const conflictsFromExcludes = filteredProducts
				.filter((p) => p.Tags.some((tag) => product.Excludes.includes(tag)))
				.map((p) => p.Name);

			// Combine both types of conflicts
			const allConflictingProducts = [...new Set([...conflictsFromTags, ...conflictsFromExcludes])];

			// Get all unique tags that cause conflicts
			const allConflictingTags = [
				...new Set([
					...product.Excludes,
					...filteredProducts
						.filter((p) => p.Excludes.some((tag) => product.Tags.includes(tag)))
						.flatMap((p) => p.Tags)
				])
			];

			return {
				name: product.Name,
				conflictingTags: allConflictingTags,
				conflictingProducts: allConflictingProducts
			};
		});
	});
</script>

<MetaTags {...data.pageMetaTags} />
<JsonLd schema={data.pageStructuredData} />

<div class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-6">Product Compatibility Matrix</h1>

	<!-- Compatibility Checker Widget -->
	<div class="card bg-base-200 shadow-xl mb-8">
		<div class="card-body">
			<h2 class="card-title mb-4">Compatibility Checker</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label class="label">
						<span class="label-text">First Product</span>
					</label>
					<input
						type="text"
						placeholder="Search products..."
						class="input input-bordered mb-2"
						bind:value={product1Search}
					/>
					<select class="select select-bordered w-full" bind:value={selectedProduct1}>
						<option value="">Select a product</option>
						{#each filteredProducts1 as product}
							<option value={product.value}>{product.label}</option>
						{/each}
					</select>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Second Product</span>
					</label>
					<input
						type="text"
						placeholder="Search products..."
						class="input input-bordered mb-2"
						bind:value={product2Search}
					/>
					<select class="select select-bordered w-full" bind:value={selectedProduct2}>
						<option value="">Select a product</option>
						{#each filteredProducts2 as product}
							<option value={product.value}>{product.label}</option>
						{/each}
					</select>
				</div>
			</div>

			{#if compatibilityResult}
				<div class="mt-4">
					{#if compatibilityResult.isCompatible}
						<div class="alert alert-success">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-current shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span
								>{compatibilityResult.product1Name} and {compatibilityResult.product2Name} are compatible!</span
							>
						</div>
					{:else}
						<div class="alert alert-error">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-current shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div>
								<span class="font-bold">Not Compatible!</span>
								<ul class="mt-2">
									{#if compatibilityResult.conflicts1to2}
										<li>
											{compatibilityResult.product1Name} contains ingredients that {compatibilityResult.product2Name}
											excludes
										</li>
									{/if}
									{#if compatibilityResult.conflicts2to1}
										<li>
											{compatibilityResult.product2Name} contains ingredients that {compatibilityResult.product1Name}
											excludes
										</li>
									{/if}
								</ul>
							</div>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>

	<div class="mb-4">
		<input
			type="text"
			placeholder="Search by product name..."
			bind:value={searchQuery}
			class="input input-bordered w-full max-w-xs"
		/>
	</div>

	<div class="overflow-x-auto">
		<table class="table table-zebra">
			<thead>
				<tr>
					<th class="cursor-pointer hover:bg-base-200" on:click={() => handleSort('name')}>
						Product Name
						{#if sortColumn === 'name'}
							<span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
						{/if}
					</th>
					<th
						class="cursor-pointer hover:bg-base-200"
						on:click={() => handleSort('conflictingTags')}
					>
						Conflicting Product Types
						{#if sortColumn === 'conflictingTags'}
							<span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
						{/if}
					</th>
					<th
						class="cursor-pointer hover:bg-base-200"
						on:click={() => handleSort('conflictingProducts')}
					>
						Conflicting Specific Products
						{#if sortColumn === 'conflictingProducts'}
							<span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
						{/if}
					</th>
				</tr>
			</thead>
			<tbody>
				{#each sortedProducts as product}
					<tr>
						<td>{product.name}</td>
						<td>
							<div class="flex flex-wrap gap-1">
								{#if product.conflictingTags.length === 0}
									<span class="badge badge-success">No conflicts</span>
								{:else}
									{#each product.conflictingTags as tag}
										<span class="badge badge-error">{tag}</span>
									{/each}
								{/if}
							</div>
						</td>
						<td>
							<div class="flex flex-wrap gap-1">
								{#if product.conflictingProducts.length === 0}
									<span class="badge badge-success">No conflicts</span>
								{:else}
									{#each product.conflictingProducts as productName}
										<span class="badge badge-error">{productName}</span>
									{/each}
								{/if}
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

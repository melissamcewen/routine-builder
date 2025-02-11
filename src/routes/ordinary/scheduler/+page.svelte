<script lang="ts">
	import { products, type Product } from '$lib/products';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { FlaskConical, X, Info, List, Beaker, ArrowRight, ListOrdered } from 'lucide-svelte';
	import UpdateCard from '$lib/components/UpdateCard.svelte';

	// Get initial state from URL params if they exist
	let selectedProducts: string[] =
		$page.url.searchParams
			.get('products')
			?.split(',')
			.filter((id) => products[id]) ?? [];
	let searchQuery = '';
	let selectedTarget = 'All Concerns';
	let selectedFormat = 'All Types';
	let currentPage = 1;
	const productsPerPage = 10;

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

	$: filteredProducts = Object.values(products).filter((product) => {
		const matchesSearch = product.Name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTarget =
			selectedTarget === 'All Concerns' || product.Targets.includes(selectedTarget);
		const matchesFormat = selectedFormat === 'All Types' || product.Format === selectedFormat;
		const isNotSelected = !selectedProducts.includes(product.id);
		return matchesSearch && matchesTarget && matchesFormat && isNotSelected;
	});

	$: totalPages = Math.ceil(filteredProducts.length / productsPerPage);
	$: paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * productsPerPage,
		currentPage * productsPerPage
	);

	$: selectedProductsArray = selectedProducts
		.map((id) => products[id])
		.filter((product): product is Product => product !== undefined);

	function toggleProduct(productId: string) {
		if (selectedProducts.includes(productId)) {
			selectedProducts = selectedProducts.filter((id) => id !== productId);
		} else {
			selectedProducts = [...selectedProducts, productId];
		}
	}

	function changePage(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages) {
			currentPage = newPage;
		}
	}

	function generateRoutines() {
		const url = new URL('/ordinary/scheduler/results', window.location.href);
		url.searchParams.set('products', selectedProducts.join(','));
		goto(url.toString());
	}

	$: {
		// Reset to first page when filters change
		searchQuery;
		selectedTarget;
		selectedFormat;
		currentPage = 1;
	}

	// Generate meta description
	$: metaDescription =
		'Generate multiple skincare routines that incorporate all your The Ordinary products efficiently.';
</script>

<svelte:head>
	<title>The Ordinary Routine Scheduler - Generate Multiple Routines</title>
	<meta name="description" content={metaDescription} />
</svelte:head>

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="flex flex-col gap-8">
			<div class="p-6">
				<div class="flex flex-col mb-4">
					<h1 class="text-4xl font-bold flex items-center gap-2">
						<FlaskConical class="w-8 h-8 mt-1 flex-shrink-0" /> The Ordinary Routine Scheduler
					</h1>
				</div>

				<div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 space-y-4">
					<div class="card card-sm shadow-sm glass h-full">
						<div class="card-body">
							<h2 class="card-title">
								<Info class="w-5 h-5" /> What's this?
							</h2>
							<p>
								Select all the products you want to use, and this tool will generate multiple
								routines that incorporate ALL of your products efficiently, taking into account
								product phases and compatibility.
							</p>
						</div>
					</div>
					<div class="card card-sm shadow-sm glass h-full">
						<div class="card-body">
							<h2 class="card-title">
								<List class="w-5 h-5" /> How it works
							</h2>
							<ul class="space-y-2">
								<li class="flex items-start gap-2">
									<ListOrdered class="w-4 h-4 mt-1 flex-shrink-0" />
									<span>Select all the products you want to use</span>
								</li>
								<li class="flex items-start gap-2">
									<ListOrdered class="w-4 h-4 mt-1 flex-shrink-0" />
									<span>Click "Generate Routines"</span>
								</li>
								<li class="flex items-start gap-2">
									<ListOrdered class="w-4 h-4 mt-1 flex-shrink-0" />
									<span>Get multiple routines that use all your products</span>
								</li>
							</ul>
						</div>
					</div>
					<UpdateCard />
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="glass rounded-box shadow-sm p-6">
						<h2 class="text-2xl font-semibold mb-4">Selected Products</h2>
						{#if selectedProducts.length === 0}
							<p class="text-base-content/70">
								No products selected. Start by selecting products from the right.
							</p>
						{:else}
							<div class="flex flex-col gap-4">
								{#each selectedProductsArray as product}
									<div class="card card-compact bg-base-100/70">
										<div class="card-body">
											<div class="flex justify-between items-start">
												<div>
													<h3 class="card-title text-sm">
														{product.Name.split(/(?=[A-Z])/).join(' ')}
													</h3>
													<p class="text-xs opacity-70">
														{product.Phase} • {product.Format}
													</p>
												</div>
												<button
													class="btn btn-sm btn-ghost"
													on:click={() => toggleProduct(product.id)}
												>
													<X class="w-4 h-4" />
												</button>
											</div>
										</div>
									</div>
								{/each}
								<button
									class="btn btn-primary gap-2 mt-4"
									disabled={selectedProducts.length === 0}
									on:click={generateRoutines}
								>
									<ArrowRight class="w-4 h-4" /> Generate Routines
								</button>
							</div>
						{/if}
					</div>

					<div class="glass rounded-box p-6 shadow-sm">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-2xl font-semibold">Available Products</h2>
						</div>

						<div class="flex flex-col gap-4 mb-6">
							<input
								type="text"
								placeholder="Search products..."
								class="input input-bordered w-full"
								bind:value={searchQuery}
							/>

							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<select class="select select-bordered w-full" bind:value={selectedTarget}>
									{#each targets as target}
										<option value={target}>{target}</option>
									{/each}
								</select>

								<select class="select select-bordered w-full" bind:value={selectedFormat}>
									{#each formats as format}
										<option value={format}>{format}</option>
									{/each}
								</select>
							</div>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{#each paginatedProducts as product (product.id)}
								<button
									type="button"
									class="card card-compact border-2 border-base-200 transition-all cursor-pointer relative text-left w-full bg-base-100/90 hover:bg-base-200"
									on:click={() => toggleProduct(product.id)}
								>
									<div class="card-body">
										<h3 class="card-title text-sm">
											{product.Name.split(/(?=[A-Z])/).join(' ')}
										</h3>
										<p class="text-xs opacity-70">
											{product.Phase} • {product.Format}
										</p>
										{#if product.Targets.length > 0}
											<div class="flex flex-wrap gap-1">
												{#each product.Targets as target}
													<span class="badge badge-sm badge-soft">{target}</span>
												{/each}
											</div>
										{/if}
									</div>
								</button>
							{/each}
						</div>

						{#if totalPages > 1}
							<div class="flex justify-center items-center gap-2 mt-6">
								<button
									class="btn btn-sm"
									disabled={currentPage === 1}
									on:click={() => changePage(currentPage - 1)}
								>
									Previous
								</button>
								<span class="text-sm">Page {currentPage} of {totalPages}</span>
								<button
									class="btn btn-sm"
									disabled={currentPage === totalPages}
									on:click={() => changePage(currentPage + 1)}
								>
									Next
								</button>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

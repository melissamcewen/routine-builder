<script lang="ts">
	import { products, type Product } from '$lib/products';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { Sun, Moon, Save, FlaskConical } from 'lucide-svelte';

	// Get initial state from URL params if they exist
	let timeOfDay: 'day' | 'night' = ($page.url.searchParams.get('tod') as 'day' | 'night') || 'day';
	let selectedProducts: string[] =
		$page.url.searchParams
			.get('products')
			?.split(',')
			.filter((id) => products[id]) || [];
	let routineName = $page.url.searchParams.get('name') || '';
	let searchQuery = '';
	let selectedTarget = 'All Concerns';
	let selectedFormat = 'All Types';
	let currentPage = 1;
	const productsPerPage = 10;
	let showIncompatible = false;

	// Update URL when routine changes
	$: if (browser) {
		const url = new URL(window.location.href);
		url.searchParams.set('tod', timeOfDay);
		if (selectedProducts.length > 0) {
			url.searchParams.set('products', selectedProducts.join(','));
			if (routineName) {
				url.searchParams.set('name', routineName);
			} else {
				url.searchParams.delete('name');
			}
		} else {
			url.searchParams.delete('products');
			url.searchParams.delete('name');
		}
		goto(url.toString(), {
			replaceState: true,
			keepFocus: true,
			noScroll: true
		});
	}

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

	$: filteredProducts = Object.values(products).filter((product: Product) => {
		const matchesToD = product.TOD === timeOfDay || product.TOD === 'both';
		const matchesSearch = product.Name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTarget =
			selectedTarget === 'All Concerns' || product.Targets.includes(selectedTarget);
		const matchesFormat = selectedFormat === 'All Types' || product.Format === selectedFormat;
		const isCompatible = showIncompatible || !getIncompatibilityReason(product);
		const isNotSelected = !selectedProducts.includes(product.id);
		return (
			matchesToD && matchesSearch && matchesTarget && matchesFormat && isCompatible && isNotSelected
		);
	});

	$: totalPages = Math.ceil(filteredProducts.length / productsPerPage);
	$: paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * productsPerPage,
		currentPage * productsPerPage
	);

	type Phase =
		| 'Water'
		| 'Anhydrous'
		| 'Oil'
		| 'Cream'
		| 'Suspension'
		| 'Emulsion'
		| 'Milky'
		| 'Gel'
		| 'Rich cream'
		| 'Powder'
		| '';

	const phaseOrder: Record<Phase, number> = {
		Milky: 0,
		Powder: 0.75,
		Water: 1,
		Anhydrous: 2,
		Oil: 3,
		Cream: 4,
		Suspension: 5,
		Emulsion: 6,
		Gel: 6,
		'Rich cream': 6,

		'': 999
	};

	function getIncompatibilityReason(product: Product): string | null {
		const incompatibleProducts = selectedProducts.filter((id) => {
			const existingProduct = products[id];
			return (
				product.Excludes.includes(existingProduct.Tags[0]) ||
				existingProduct.Excludes.includes(product.Tags[0])
			);
		});

		if (incompatibleProducts.length === 0) return null;

		return `Not compatible with: ${incompatibleProducts.map((id) => products[id].Name).join(', ')}`;
	}

	$: sortedSelectedProducts = selectedProducts.sort((a, b) => {
		const productA = products[a];
		const productB = products[b];

		const phaseA = phaseOrder[productA.Phase as Phase];
		const phaseB = phaseOrder[productB.Phase as Phase];
		return phaseA - phaseB;
	});

	function toggleProduct(productId: string) {
		if (selectedProducts.includes(productId)) {
			selectedProducts = selectedProducts.filter((id) => id !== productId);
		} else {
			const incompatibilityReason = getIncompatibilityReason(products[productId]);
			if (!incompatibilityReason) {
				selectedProducts = [...selectedProducts, productId];
			}
		}
	}

	function changePage(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages) {
			currentPage = newPage;
		}
	}

	$: {
		// Reset to first page when filters change
		searchQuery;
		selectedTarget;
		selectedFormat;
		timeOfDay;
		currentPage = 1;
	}

	function copyShareLink() {
		const url = new URL(window.location.href);
		navigator.clipboard.writeText(url.toString());
	}
</script>

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="flex flex-col gap-8">
			<div class="  p-6">
				<div class="flex flex-col mb-4">
					<h1 class="text-4xl font-bold text-primary flex items-center gap-2">
						<FlaskConical class="w-8 h-8 mt-1 flex-shrink-0" /> The Ordinary Advanced Actives Routine
						Builder
					</h1>

				</div>

				<div class="md:grid grid-cols-3 gap-4 mb-4">
					<div class="card card-sm shadow-sm glass text-primary">
						<div class="card-body">
							<h2 class="card-title">What's this?</h2>
							<p>
								So yes, I know the <a
									href="https://theordinary.com/en-us/regimen-builder.html"
									class="link">The Ordinary has their own regimen builder</a
								> but for those of us who use more advanced routines, it's not very useful. With this tool you can build multiple, complex routines that account for time of day and product compatibility.
							</p>

						</div>
					</div>
          			<div class="card card-sm shadow-sm glass text-primary">
						<div class="card-body">
							<h2 class="card-title">Day vs. Night</h2>

							<p>When you select "day" it will filter out any products that are not recommended for the day time.</p>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="glass rounded-box p-6">
						<div
							class="text-2xl font-semibold mb-4 items-center text-secondary flex justify-between gap-2"
						>
							<input
								type="text"
								placeholder="Name your routine..."
								class="input input-bordered w-full text-center"
								bind:value={routineName}
							/>
							<a
								href="/ordinary/routine?{$page.url.searchParams.toString()}"
								class="btn btn-outline btn-primary gap-2"
								target="_blank"
							>
								<Save class="w-4 h-4 flex-shrink-0" /> Save and Share
							</a>
						</div>
						<div class="tabs tabs-boxed bg-opacity-60 justify-center">
							<button
								class="tab {timeOfDay === 'day' ? 'tab-active' : ''}"
								on:click={() => (timeOfDay = 'day')}
							>
								<Sun class="w-4 h-4 mr-2" /> Day Routine
							</button>
							<button
								class="tab {timeOfDay === 'night' ? 'tab-active' : ''}"
								on:click={() => (timeOfDay = 'night')}
							>
								<Moon class="w-4 h-4 mr-2" /> Night Routine
							</button>
						</div>
						{#if selectedProducts.length === 0}
							<p class="text-base-content/70">
								No products selected. Start building your routine by selecting products from the
								right.
							</p>
						{:else}
							<div class="flex flex-col gap-4">
								{#each sortedSelectedProducts as productId}
									<div class="card card-compact bg-base-100/50 hover:bg-base-100/70 transition-all">
										<div class="card-body">
											<div class="flex justify-between items-start">
												<div>
													<h3 class="card-title text-sm">
														{products[productId].Name.split(/(?=[A-Z])/).join(' ')}
													</h3>
													<p class="text-xs opacity-70">{products[productId].Phase}</p>
													{#if products[productId].Tags.length > 0}
														<p class="text-xs opacity-70">
															Contains: {products[productId].Tags.join(', ')}
														</p>
													{/if}
												</div>
												<button
													class="btn btn-sm btn-ghost text-error"
													on:click={() => toggleProduct(productId)}
												>
													✕
												</button>
											</div>
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>

					<div class="glass rounded-box p-6">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-2xl font-semibold">Available Products</h2>
							<label class="label cursor-pointer gap-2">
								<span class="label-text">Show Incompatible</span>
								<input type="checkbox" class="toggle toggle-sm" bind:checked={showIncompatible} />
							</label>
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
								{@const incompatibilityReason = getIncompatibilityReason(product)}
								<button
									type="button"
									class="card card-compact transition-all cursor-pointer relative text-left w-full {!incompatibilityReason
										? 'bg-base-100/50 hover:bg-base-100/70'
										: 'bg-base-100/30'} {selectedProducts.includes(product.id) ? 'opacity-50' : ''}"
									on:click={() => toggleProduct(product.id)}
								>
									{#if incompatibilityReason}
										<div
											class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-base-200/80 rounded-lg z-10"
										>
											<div class="text-sm text-center p-4">
												{incompatibilityReason}
											</div>
										</div>
									{/if}
									<div class="card-body">
										<h3 class="card-title text-sm">{product.Name.split(/(?=[A-Z])/).join(' ')}</h3>
										<p class="text-xs opacity-70">{product.Phase} • {product.Format}</p>
										{#if product.Targets.length > 0}
											<div class="flex flex-wrap gap-1">
												{#each product.Targets as target}
													<span class="badge badge-sm">{target}</span>
												{/each}
											</div>
										{/if}
										{#if product.Tags.length > 0}
											<div class="text-xs opacity-70">
												Contains: {product.Tags.join(', ')}
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

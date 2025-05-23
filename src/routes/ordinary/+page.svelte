<script lang="ts">
	import { products, type Product } from '$lib/products';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';
	import {
		Sun,
		Moon,
		Save,
		FlaskConical,
		X,
		Info,
		List,
		Mail,
		Beaker,
		Clock,
		Sparkles,
		Drama,
		Share2,
		ListOrdered,
		Github,
		Lock,
		Coffee
	} from 'lucide-svelte';
	import { sortProductsByPhase } from '$lib/utils';
	import UpdateCard from '$lib/components/UpdateCard.svelte';
	import { handleSunscreenSelection, canRemoveSunscreen } from '$lib/sunscreenManager';

	export let data: PageData;

	// Get initial state from URL params if they exist
	let timeOfDay: 'day' | 'night' = ($page.url.searchParams.get('tod') as 'day' | 'night') || 'day';
	let selectedProducts: string[] =
		$page.url.searchParams
			.get('products')
			?.split(',')
			.filter((id) => products[id]) ?? [];
	let routineName = $page.url.searchParams.get('name') || '';
	let searchQuery = '';
	let selectedTarget = 'All Concerns';
	let selectedFormat = 'All Types';
	let currentPage = 1;
	const productsPerPage = 10;
	let showIncompatible = false;

	// Dynamic meta tags based on selected products
	$: dynamicTitle = routineName
		? `${routineName} - ${timeOfDay === 'day' ? 'Day' : 'Night'} Routine - The Ordinary Advanced Builder`
		: selectedProducts.length > 0
			? `${timeOfDay === 'day' ? 'Day' : 'Night'} Routine - The Ordinary Advanced Builder`
			: 'The Ordinary Advanced Routine Builder';

	$: dynamicDescription =
		selectedProducts.length > 0
			? `My ${timeOfDay} skincare routine with The Ordinary: ${selectedProducts.map((id) => products[id].Name).join(', ')}`
			: 'Create your personalized skincare routine with The Ordinary products. Features compatibility checks and proper product ordering.';

	$: dynamicMetaTags = {
		...data.pageMetaTags,
		title: dynamicTitle,
		description: dynamicDescription,
		openGraph: {
			...data.pageMetaTags.openGraph,
			title: dynamicTitle,
			description: dynamicDescription
		},
		twitter: {
			...data.pageMetaTags.twitter,
			title: dynamicTitle,
			description: dynamicDescription
		}
	};

	// Update URL and handle sunscreen when routine changes
	$: if (browser) {
		// Handle sunscreen based on time of day
		selectedProducts = handleSunscreenSelection(selectedProducts, timeOfDay);

		// Update URL
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

	$: filteredProducts = Object.values(products).filter((product) => {
		const matchesToD = product.TOD === timeOfDay || product.TOD === 'both';
		const matchesSearch = product.Name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTarget =
			selectedTarget === 'All Concerns' || product.Targets.includes(selectedTarget);
		const matchesFormat = selectedFormat === 'All Types' || product.Format === selectedFormat;
		const isCompatible = showIncompatible || !getIncompatibilityReason(product);
		const isNotSelected = !selectedProducts.includes(product.id);
		const isNotSunscreen = product.id !== 'sunscreen'; // Hide sunscreen from available products
		return (
			matchesToD &&
			matchesSearch &&
			matchesTarget &&
			matchesFormat &&
			isCompatible &&
			isNotSelected &&
			isNotSunscreen
		);
	});

	$: sortedFilteredProducts = sortProductsByPhase(filteredProducts);

	$: totalPages = Math.ceil(filteredProducts.length / productsPerPage);
	$: paginatedProducts = sortedFilteredProducts.slice(
		(currentPage - 1) * productsPerPage,
		currentPage * productsPerPage
	);

	$: selectedProductsArray = selectedProducts
		.map((id) => products[id])
		.filter((product): product is Product => product !== undefined);

	$: sortedSelectedProducts = sortProductsByPhase(selectedProducts, products);

	type Phase = 'Water' | 'Emulsion' | 'Anhydrous' | 'Oil' | 'Cream' | 'Suspension' | '';

	const stepOrder: Record<string, number> = {
		Prep: 0,
		Treat: 1,
		Seal: 2,
		'': 999
	};

	const phaseOrder: Record<Phase, number> = {
		Water: 0,
		Emulsion: 1,
		Anhydrous: 2,
		Oil: 3,
		Cream: 4,
		Suspension: 5,
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

	function toggleProduct(productId: string) {
		// Prevent removing sunscreen during day routine unless replacing with The Ordinary's
		if (productId === 'sunscreen' && !canRemoveSunscreen(selectedProducts, timeOfDay)) {
			return;
		}

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

	function handleSubscribe(event: SubmitEvent) {
		event.preventDefault();
		window.open('https://buttondown.com/my-routine-builder', 'popupwindow');
		// Submit the form programmatically
		const form = event.target as HTMLFormElement;
		form.submit();
	}

	// Generate structured data for the routine
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: routineName || `My ${timeOfDay} Skincare Routine`,
		description: dynamicDescription,
		step: sortedSelectedProducts.map((productId, index) => ({
			'@type': 'HowToStep',
			position: index + 1,
			name: products[productId].Name,
			text: `Apply ${products[productId].Name} (${products[productId].Phase} phase)`
		}))
	};
</script>

<MetaTags {...dynamicMetaTags} />

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="flex flex-col gap-8">
			<div class="  p-6">
				<div class="flex flex-col mb-4">
					<h1 class="text-4xl font-bold flex items-center gap-2">
						<FlaskConical class="w-8 h-8 mt-1 flex-shrink-0" /> The Ordinary Advanced Actives Routine
						Builder
					</h1>
				</div>

				<div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 space-y-4">
					<div class="card card-sm shadow-sm glass h-full">
						<div class="card-body">
							<h2 class="card-title">
								<Info class="w-5 h-5" /> What's this?
							</h2>
							<p>
								This is for those of us who need something more advanced than <a
									href="https://theordinary.com/en-us/regimen-builder.html"
									class="link">The Ordinary's own regimen builder</a
								>. If you don't know what a direct acid or a retinoid is, you should stick with the
								regimen builder. If you are like me and have been nerding out on skincare for
								awhile, and might have 2-4 different routines, this is for you.
							</p>

							<p>
								If you have a list of products you want to use already, head to the <a
									href="ordinary/scheduler"
									class="link">routine generator</a
								>
							</p>

							<a
								href="/ordinary/routine?tod=night&products=argireline-solution-10%2Cmatrixyl-10-ha%2Calpha-arbutin-2-ha&name=My+Night+Routine"
								class="btn btn-primary gap-2"
							>
								<Share2 class="w-4 h-4 flex-shrink-0" /> Example Routine
							</a>
						</div>
					</div>
					<div class="card card-sm shadow-sm glass h-full">
						<div class="card-body">
							<h2 class="card-title">
								<List class="w-5 h-5" /> Basics
							</h2>
							<ul class="space-y-2">
								<li class="flex items-start gap-2">
									<Sun class="w-4 h-4 mt-1 flex-shrink-0" />
									<span
										>Choosing "day" filters out any products that are not recommended for the day
										time (because they increase photosensitivity)</span
									>
								</li>
								<li class="flex items-start gap-2">
									<Sparkles class="w-4 h-4 mt-1 flex-shrink-0" />
									<span
										>I didn't include masks because they are for occasional use (and you probably
										shouldn't use them on the same day as actives)</span
									>
								</li>
								<li class="flex items-start gap-2">
									<ListOrdered class="w-4 h-4 mt-1 flex-shrink-0" />
									<span
										>Products should be in the <a
											href="https://theordinary.com/en-us/blog/skincare-layering-guide.html"
											class="link">recommended application order</a
										></span
									>
								</li>
								<li class="flex items-start gap-2">
									<Drama class="w-4 h-4 mt-1 flex-shrink-0" />
									<span
										>This tool is just for fun. Don't forget to wear SUNSCREEN during the day.</span
									>
								</li>
							</ul>
						</div>
					</div>
					<UpdateCard />
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="glass rounded-box shadow-sm p-6">
						<h2 class="text-2xl font-semibold mb-4">Routine Builder</h2>
						<div
							class="text-2xl font-semxibold mb-4 items-center justify-between gap-2 space-y-2 flex flex-col lg:flex-row"
						>
							<input
								type="text"
								placeholder="Name your routine..."
								class="input w-full text-center"
								bind:value={routineName}
							/>
							<a
								href="/ordinary/routine?{$page.url.searchParams.toString()}"
								class="btn btn-primary gap-2 w-full lg:w-auto"
								target="_blank"
							>
								<Save class="w-4 h-4 flex-shrink-0" /> Save and Share
							</a>
						</div>
						<div class="tabs tabs-box justify-center mb-2">
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
							{#if selectedProducts.some((id) => products[id].Targets.length > 0)}
								<div class="flex flex-wrap gap-2 mb-4">
									{#each [...new Set(selectedProducts.flatMap((id) => products[id].Targets))] as concern}
										<span class="badge badge-soft">{concern}</span>
									{/each}
								</div>
							{/if}
							{#if selectedProducts.filter((id) => products[id].Format === 'Serum').length > 3}
								<div class="alert alert-warning mb-4">
									<Info class="w-4 h-4" />
									<span>The Ordinary recommends using no more than 3 serums in a routine</span>
								</div>
							{/if}
							<div class="flex flex-col gap-4">
								{#each ['Prep', 'Treat', 'Seal'] as step}
									{@const stepProducts = sortedSelectedProducts.filter(
										(id) => products[id].Step === step
									)}
									{#if stepProducts.length > 0}
										<div class="indicator w-full indicator-center">
											<span class="indicator-item badge badge-primary gap-1">
												{#if step === 'Prep'}
													<Sparkles class="w-3 h-3" />
												{:else if step === 'Treat'}
													<FlaskConical class="w-3 h-3" />
												{:else}
													<Lock class="w-3 h-3" />
												{/if}
												{step}
											</span>
											<div class="card bg-base-100/50 w-full">
												<div class="card-body">
													{#each stepProducts as productId}
														<div
															class="card card-compact transition-all {timeOfDay === 'day' &&
															products[productId].TOD === 'night'
																? 'bg-base-100/30'
																: 'bg-base-100/70 hover:bg-base-100/70'}"
														>
															<div
																class="card-body {timeOfDay === 'day' &&
																products[productId].TOD === 'night'
																	? 'opacity-50'
																	: ''}"
															>
																<div class="flex justify-between items-start">
																	<div>
																		<h3 class="card-title text-sm">
																			{products[productId].Name.split(/(?=[A-Z])/).join(' ')}
																		</h3>
																		{#if timeOfDay === 'day' && products[productId].TOD === 'night'}
																			<p class="text-xs text-error">Night-only product</p>
																		{/if}
																		<p class="text-xs opacity-70">
																			{products[productId].Phase} •
																			{#if products[productId].TOD === 'both'}
																				<span class="inline-flex gap-1 items-center">
																					Both <Sun class="w-3 h-3" />
																					<Moon class="w-3 h-3" />
																				</span>
																			{:else if products[productId].TOD === 'day'}
																				<span class="inline-flex gap-1 items-center">
																					Day <Sun class="w-3 h-3" />
																				</span>
																			{:else}
																				<span class="inline-flex gap-1 items-center">
																					Night <Moon class="w-3 h-3" />
																				</span>
																			{/if}
																		</p>
																		{#if products[productId].Tags.length > 0}
																			<p class="text-xs opacity-70">
																				Contains: {products[productId].Tags.join(', ')}
																			</p>
																		{/if}
																	</div>
																	<button
																		class="btn btn-sm btn-ghost"
																		on:click={() => toggleProduct(productId)}
																	>
																		<X class="w-4 h-4" />
																	</button>
																</div>
															</div>
														</div>
													{/each}
												</div>
											</div>
										</div>
									{/if}
								{/each}
							</div>
						{/if}
					</div>

					<div class="glass rounded-box p-6 shadow-sm">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-2xl font-semibold">Available Products</h2>
							<label class="label cursor-pointer gap-2">
								<span class="label-text">Show Incompatible</span>
								<input type="checkbox" class="toggle toggle-sm" bind:checked={showIncompatible} />
							</label>
						</div>

						{#if timeOfDay === 'day'}
							<div class="alert mb-4 alert-info bg-info/50">
								<Sun class="w-4 h-4" />
								<span>Only showing products safe for daytime use</span>
							</div>
						{/if}

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
									class="card card-compact border-2 border-base-200 transition-all cursor-pointer relative text-left w-full {!incompatibilityReason
										? 'bg-base-100/90 hover:bg-base-200'
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
										<h3 class="card-title text-sm">
											{product.Name.split(/(?=[A-Z])/).join(' ')}
										</h3>
										<p class="text-xs opacity-70 flex items-center gap-2">
											{product.Phase} • {product.Format}
											<span class="flex gap-1 ml-auto">
												{#if product.TOD === 'both'}
													<Sun class="w-3 h-3" />
													<Moon class="w-3 h-3" />
												{:else if product.TOD === 'day'}
													<Sun class="w-3 h-3" />
												{:else}
													<Moon class="w-3 h-3" />
												{/if}
											</span>
										</p>
										{#if product.Targets.length > 0}
											<div class="flex flex-wrap gap-1">
												{#each product.Targets as target}
													<span class="badge badge-sm badge-soft">{target}</span>
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

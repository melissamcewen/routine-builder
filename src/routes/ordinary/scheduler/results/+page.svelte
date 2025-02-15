<script lang="ts">
	import { products, type Product } from '$lib/products';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { FlaskConical, ArrowLeft, Sun, Moon, Info } from 'lucide-svelte';
	import { sortProductsByPhase } from '$lib/utils';

	// Get products from URL params
	let selectedProducts: string[] =
		$page.url.searchParams
			.get('products')
			?.split(',')
			.filter((id) => products[id]) ?? [];

	// Interface for a routine
	interface Routine {
		id: number;
		timeOfDay: 'day' | 'night';
		products: string[];
	}

	function getIncompatibilityReason(product: Product, existingProducts: string[]): string | null {
		const incompatibleProducts = existingProducts.filter((id) => {
			const existingProduct = products[id];
			return (
				product.Excludes.includes(existingProduct.Tags[0]) ||
				existingProduct.Excludes.includes(product.Tags[0])
			);
		});

		if (incompatibleProducts.length === 0) return null;

		return `Not compatible with: ${incompatibleProducts.map((id) => products[id].Name).join(', ')}`;
	}

	function canAddToRoutine(product: Product, routine: Routine): boolean {
		// Check if product is compatible with time of day
		if (routine.timeOfDay === 'day' && product.TOD === 'night') return false;

		// Check if product is compatible with existing products
		if (getIncompatibilityReason(product, routine.products)) return false;

		// Check if adding another serum would exceed limit
		const currentSerums = routine.products.filter((id) => products[id].Format === 'Serum').length;
		if (product.Format === 'Serum' && currentSerums >= 3) return false;

		return true;
	}

	function generateRoutines(productIds: string[]): Routine[] {
		const routines: Routine[] = [];
		let remainingProducts = [...productIds];
		let routineId = 1;

		// Helper function to try to fill a routine with as many products as possible
		function fillRoutine(
			timeOfDay: 'day' | 'night',
			baseProduct: string | null,
			productList: string[]
		): string[] {
			const routine: Routine = {
				id: routineId++,
				timeOfDay,
				products: []
			};

			// If we have a base product, add it first
			if (baseProduct) {
				routine.products.push(baseProduct);
				// Remove base product from the list we'll check
				productList = productList.filter((id) => id !== baseProduct);
			}

			// Try to add each remaining product to the routine
			let madeProgress: boolean;
			do {
				madeProgress = false;
				for (let i = productList.length - 1; i >= 0; i--) {
					const productId = productList[i];
					const product = products[productId];

					if (canAddToRoutine(product, routine)) {
						routine.products.push(productId);
						productList.splice(i, 1);
						madeProgress = true;
					}
				}
			} while (madeProgress);

			// Add sunscreen to day routines
			if (timeOfDay === 'day' && !routine.products.includes('sunscreen')) {
				routine.products.push('sunscreen');
			}

			// Sort products by phase if we added any
			if (routine.products.length > 0) {
				routine.products = sortProductsByPhase(routine.products, products);
				routines.push(routine);
			}

			return productList;
		}

		// Always create a day routine first
		remainingProducts = fillRoutine('day', null, [...remainingProducts]);

		// Always create at least one night routine
		const nightProducts = remainingProducts.length > 0 ? remainingProducts : [...productIds];
		const nightCompatibleProducts = nightProducts.filter((id) => {
			const product = products[id];
			return product.TOD === 'night' || product.TOD === 'both';
		});

		if (nightCompatibleProducts.length > 0) {
			remainingProducts = fillRoutine('night', nightCompatibleProducts[0], nightProducts);
		} else {
			// If no night-specific products, try to create a night routine with any compatible products
			remainingProducts = fillRoutine('night', null, nightProducts);
		}

		// Keep track of products that still need their own routines
		const productsNeedingRoutines = remainingProducts.filter((id) => {
			// Only include products that aren't in any existing routine
			return !routines.some((routine) => routine.products.includes(id));
		});

		// Then create additional routines for each remaining product
		while (productsNeedingRoutines.length > 0) {
			const nextProduct = productsNeedingRoutines[0];
			const product = products[nextProduct];
			const timeOfDay = product.TOD === 'day' ? 'day' : 'night';

			// Try to create a routine with this product and ALL original products
			const afterRoutine = fillRoutine(timeOfDay, nextProduct, [...productIds]);

			// Remove the products we used from productsNeedingRoutines
			const usedProducts = new Set(afterRoutine);
			productsNeedingRoutines.splice(0, 1); // Remove the base product
			// Remove any other products that got used in this routine
			for (let i = productsNeedingRoutines.length - 1; i >= 0; i--) {
				if (!usedProducts.has(productsNeedingRoutines[i])) {
					productsNeedingRoutines.splice(i, 1);
				}
			}
		}

		return routines;
	}

	$: generatedRoutines = generateRoutines(selectedProducts);

	function goBack() {
		const url = new URL('/ordinary/scheduler', window.location.href);
		url.searchParams.set('products', selectedProducts.join(','));
		goto(url.toString());
	}

	function formatRoutineText(routine: Routine, routineNumber: number): string {
		const lines: string[] = [];
		lines.push(`${routine.timeOfDay === 'day' ? 'Day' : 'Night'} Routine ${routineNumber}`);

		['Prep', 'Treat', 'Seal'].forEach((step) => {
			const stepProducts = routine.products.filter((id) => products[id].Step === step);
			if (stepProducts.length > 0) {
				lines.push(`\n${step}:`);
				sortProductsByPhase(stepProducts, products).forEach((productId) => {
					lines.push(`- ${products[productId].Name}`);
				});
			}
		});

		return lines.join('\n');
	}

	async function copyRoutine(routine: Routine, routineNumber: number) {
		const text = formatRoutineText(routine, routineNumber);
		await navigator.clipboard.writeText(text);
	}
</script>

<svelte:head>
	<title>Generated Routines - The Ordinary Routine Scheduler</title>
	<meta
		name="description"
		content="View your generated skincare routines that incorporate all selected The Ordinary products."
	/>
</svelte:head>

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="flex flex-col gap-8">
			<div class="p-6">
				<div class="flex flex-col mb-4">
					<button class="btn btn-ghost gap-2 self-start mb-4" on:click={goBack}>
						<ArrowLeft class="w-4 h-4" /> Back to Product Selection
					</button>
					<h1 class="text-4xl font-bold flex items-center gap-2">
						<FlaskConical class="w-8 h-8 mt-1 flex-shrink-0" /> Generated Routines
					</h1>
				</div>

				{#if generatedRoutines.length === 0}
					<div class="alert alert-warning">
						<Info class="w-4 h-4" />
						<span>No products selected. Go back to select products for your routines.</span>
					</div>
				{:else}
					{@const dayRoutines = generatedRoutines.filter((r) => r.timeOfDay === 'day')}
					{@const nightRoutines = generatedRoutines.filter((r) => r.timeOfDay === 'night')}

					{#if dayRoutines.length > 0}
						<h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
							<Sun class="w-6 h-6" /> Day Routines
						</h2>
						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
							{#each dayRoutines as routine, index}
								<div class="card glass">
									<div class="card-body">
										<h2 class="card-title flex items-center gap-2">
											<Sun class="w-5 h-5" />
											Day Routine {index + 1}
										</h2>
										<div class="divider my-2" />
										{#each ['Prep', 'Treat', 'Seal'] as step}
											{@const stepProducts = routine.products.filter(
												(id) => products[id].Step === step
											)}
											{#if stepProducts.length > 0}
												<div class="indicator w-full indicator-center mb-4">
													<span class="indicator-item badge badge-primary">{step}</span>
													<div class="w-full">
														<ol class="list">
															{#each sortProductsByPhase(stepProducts, products) as productId, productIndex}
																<li class="list-row hover:bg-base-200/50 transition-colors">
																	<div class="text-2xl font-thin opacity-30 tabular-nums w-8">
																		{(productIndex + 1).toString().padStart(2, '0')}
																	</div>
																	<div class="list-col-grow">
																		<div>
																			{products[productId].Name.split(/(?=[A-Z])/).join(' ')}
																		</div>
																		<div class="text-xs opacity-70">
																			{products[productId].Phase} • {products[productId].Format}
																		</div>
																	</div>
																</li>
															{/each}
														</ol>
													</div>
												</div>
											{/if}
										{/each}
										<div class="card-actions justify-end mt-4">
											<button
												class="btn btn-sm btn-primary"
												on:click={() => copyRoutine(routine, index + 1)}
											>
												Copy Routine
											</button>
										</div>
									</div>
								</div>
							{/each}
						</div>
					{/if}

					{#if nightRoutines.length > 0}
						<h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
							<Moon class="w-6 h-6" /> Night Routines
						</h2>
						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{#each nightRoutines as routine, index}
								<div class="card glass">
									<div class="card-body">
										<h2 class="card-title flex items-center gap-2">
											<Moon class="w-5 h-5" />
											Night Routine {index + 1}
										</h2>
										<div class="divider my-2" />
										{#each ['Prep', 'Treat', 'Seal'] as step}
											{@const stepProducts = routine.products.filter(
												(id) => products[id].Step === step
											)}
											{#if stepProducts.length > 0}
												<div class="indicator w-full indicator-center mb-4">
													<span class="indicator-item badge badge-primary">{step}</span>
													<div class="w-full">
														<ol class="list">
															{#each sortProductsByPhase(stepProducts, products) as productId, productIndex}
																<li class="list-row hover:bg-base-200/50 transition-colors">
																	<div class="text-2xl font-thin opacity-30 tabular-nums w-8">
																		{(productIndex + 1).toString().padStart(2, '0')}
																	</div>
																	<div class="list-col-grow">
																		<div>
																			{products[productId].Name.split(/(?=[A-Z])/).join(' ')}
																		</div>
																		<div class="text-xs opacity-70">
																			{products[productId].Phase} • {products[productId].Format}
																		</div>
																	</div>
																</li>
															{/each}
														</ol>
													</div>
												</div>
											{/if}
										{/each}
										<div class="card-actions justify-end mt-4">
											<button
												class="btn btn-sm btn-primary"
												on:click={() => copyRoutine(routine, index + 1)}
											>
												Copy Routine
											</button>
										</div>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>

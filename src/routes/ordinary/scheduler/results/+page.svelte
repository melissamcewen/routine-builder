<script lang="ts">
	import { products } from '$lib/products';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { FlaskConical, ArrowLeft, Sun, Moon, Info } from 'lucide-svelte';
	import { sortProductsByPhase } from '$lib/utils';
	import { generateRoutines, type Routine } from '$lib/routineGenerator';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;

	// Get products from URL params and memoize the result
	let selectedProducts: string[] = data.selectedProducts;
	let generatedRoutines: Routine[] = [];
	let dayRoutines: Routine[] = [];
	let nightRoutines: Routine[] = [];

	// Memoize routine generation to prevent unnecessary recalculations
	$: {
		const urlProducts =
			$page.url.searchParams
				.get('products')
				?.split(',')
				.filter((id) => products[id]) ?? [];

		// Only regenerate if products have changed
		if (JSON.stringify(urlProducts) !== JSON.stringify(selectedProducts)) {
			selectedProducts = urlProducts;
			generatedRoutines = generateRoutines(selectedProducts);
			dayRoutines = generatedRoutines.filter((r) => r.timeOfDay === 'day');
			nightRoutines = generatedRoutines.filter((r) => r.timeOfDay === 'night');
		}
	}

	// Pre-calculate product phases for each routine to avoid recalculation during render
	function getProductsByPhase(routine: Routine) {
		const phases = new Map<string, string[]>();
		['Prep', 'Treat', 'Seal'].forEach((step) => {
			const stepProducts = routine.products.filter((id) => products[id].Step === step);
			if (stepProducts.length > 0) {
				phases.set(step, sortProductsByPhase(stepProducts, products));
			}
		});
		return phases;
	}

	function goBack() {
		const url = new URL('/ordinary/scheduler', window.location.href);
		url.searchParams.set('products', selectedProducts.join(','));
		goto(url.toString());
	}

	async function copyRoutine(routine: Routine, routineNumber: number) {
		const lines: string[] = [];
		lines.push(`${routine.timeOfDay === 'day' ? 'Day' : 'Night'} Routine ${routineNumber}`);

		const phases = getProductsByPhase(routine);
		for (const [step, stepProducts] of phases) {
			lines.push(`\n${step}:`);
			stepProducts.forEach((productId) => {
				lines.push(`- ${products[productId].Name}`);
			});
		}

		await navigator.clipboard.writeText(lines.join('\n'));
	}
</script>

<MetaTags {...data.pageMetaTags} />

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(data.pageStructuredData)}</script>`}
</svelte:head>

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="flex flex-col gap-8">
			<div class="p-6">
				<div class="flex flex-col mb-4">
					<button class="btn btn-ghost gap-2 self-start mb-4" on:click={goBack}>
						<ArrowLeft class="w-4 h-4"></ArrowLeft> Back to Product Selection
					</button>
					<h1 class="text-4xl font-bold flex items-center gap-2">
						<FlaskConical class="w-8 h-8 mt-1 flex-shrink-0"></FlaskConical> Generated Routines
					</h1>
				</div>

				{#if generatedRoutines.length === 0}
					<div class="alert alert-warning">
						<Info class="w-4 h-4"></Info>
						<span>No products selected. Go back to select products for your routines.</span>
					</div>
				{:else}
					{#if dayRoutines.length > 0}
						<h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
							<Sun class="w-6 h-6"></Sun> Day Routines
						</h2>
						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
							{#each dayRoutines as routine, index}
								{@const phases = getProductsByPhase(routine)}
								<div class="card glass">
									<div class="card-body">
										<h2 class="card-title flex items-center gap-2">
											<Sun class="w-5 h-5"></Sun>
											Day Routine {index + 1}
										</h2>
										<div class="divider my-2"></div>
										{#each [...phases] as [step, stepProducts]}
											<div class="indicator w-full indicator-center mb-4">
												<span class="indicator-item badge badge-primary">{step}</span>
												<div class="w-full">
													<ol class="list">
														{#each stepProducts as productId, productIndex}
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
							<Moon class="w-6 h-6"></Moon> Night Routines
						</h2>
						<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{#each nightRoutines as routine, index}
								{@const phases = getProductsByPhase(routine)}
								<div class="card glass">
									<div class="card-body">
										<h2 class="card-title flex items-center gap-2">
											<Moon class="w-5 h-5"></Moon>
											Night Routine {index + 1}
										</h2>
										<div class="divider my-2"></div>
										{#each [...phases] as [step, stepProducts]}
											<div class="indicator w-full indicator-center mb-4">
												<span class="indicator-item badge badge-primary">{step}</span>
												<div class="w-full">
													<ol class="list">
														{#each stepProducts as productId, productIndex}
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

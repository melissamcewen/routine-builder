<script lang="ts">
	import { products } from '$lib/products';
	import { page } from '$app/stores';

	let timeOfDay: 'day' | 'night' = ($page.url.searchParams.get('tod') as 'day' | 'night') || 'day';
	let selectedProducts: string[] =
		$page.url.searchParams
			.get('products')
			?.split(',')
			.filter((id) => products[id]) || [];
	let routineName = $page.url.searchParams.get('name') || '';

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
		Water: 1,
		Anhydrous: 2,
		Oil: 3,
		Cream: 4,
		Suspension: 5,
		Emulsion: 6,
		Gel: 6,
		'Rich cream': 6,
		Powder: 7,
		'': 999
	};

	$: sortedSelectedProducts = selectedProducts.sort((a, b) => {
		const productA = products[a];
		const productB = products[b];

		const phaseA = phaseOrder[productA.Phase as Phase];
		const phaseB = phaseOrder[productB.Phase as Phase];
		return phaseA - phaseB;
	});
</script>

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="glass rounded-box p-6 max-w-2xl mx-auto">
			<h1 class="text-4xl font-bold mb-8">The Ordinary Routine Builder</h1>
			{#if routineName}
				<h2 class="text-3xl font-semibold mb-4">{routineName}</h2>
			{/if}
			<h2 class="text-2xl font-semibold mb-4">
				Your {timeOfDay === 'day' ? 'Day' : 'Night'} Routine
			</h2>
			{#if selectedProducts.length === 0}
				<p class="text-base-content/70">No products selected.</p>
			{:else}
				<div class="flex flex-col gap-4">
					{#each sortedSelectedProducts as productId}
						<div class="card card-compact bg-base-100/50">
							<div class="card-body">
								<h3 class="card-title text-sm">
									{products[productId].Name.split(/(?=[A-Z])/).join(' ')}
								</h3>
								<p class="text-xs opacity-70">{products[productId].Phase}</p>
								{#if products[productId].Tags.length > 0}
									<p class="text-xs opacity-70">Contains: {products[productId].Tags.join(', ')}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{/if}
			<div class="text-center mt-8 text-sm opacity-70">
				<p>routinebuilder.app</p>
			</div>
		</div>
	</div>
</div>

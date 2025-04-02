<script lang="ts">
	import type { Product } from '$lib/products';
	import type { Ingredient } from '$lib/types/ingredients';

	export let products: Product[];
	export let keyIngredients: Record<string, Ingredient[]>;

	// Properties to compare
	const comparisonProperties = [
		{ key: 'TOD', label: 'Time of Day' },
		{ key: 'Step', label: 'Step' },
		{ key: 'Targets', label: 'Targets' },
		{ key: 'Phase', label: 'Phase' },
		{ key: 'Format', label: 'Format' },
		{ key: 'Excludes', label: 'Conflicts With' }
	] as const;

	// Check if any products have notes
	$: hasNotes = products.some((product) => product.Notes && typeof product.Notes === 'string');

	// All properties including conditional Notes
	$: displayProperties = hasNotes
		? [...comparisonProperties, { key: 'Notes', label: 'Notes' }]
		: comparisonProperties;

	// Function to get property value safely
	function getPropertyValue(product: Product, key: string): any {
		return (product as any)[key];
	}

	// Function to check if an ingredient is unique to a product
	function isUniqueIngredient(ingredient: Ingredient, currentProductId: string): boolean {
		const otherProducts = Object.entries(keyIngredients)
			.filter(([id]) => id !== currentProductId)
			.map(([, ingredients]) => ingredients);

		return !otherProducts.some((productIngredients) =>
			productIngredients.some((i) => i.id === ingredient.id)
		);
	}
</script>

<div class="space-y-8">
	<!-- Comparison Table -->
	<div class="overflow-x-auto">
		<table class="table table-zebra w-full">
			<thead>
				<tr>
					<th class="bg-base-200">Property</th>
					{#each products as product}
						<th class="bg-base-200">{product.Name}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each displayProperties as { key, label }}
					<tr>
						<td class="font-semibold">{label}</td>
						{#each products as product}
							<td class={key === 'Notes' ? 'align-top' : ''}>
								{#if Array.isArray(getPropertyValue(product, key))}
									<ul class="list-disc list-inside">
										{#if key === 'Excludes' && getPropertyValue(product, key).length === 0}
											<span class="italic text-base-content/70">none</span>
										{:else}
											{#each getPropertyValue(product, key) as item}
												<li>{item}</li>
											{/each}
										{/if}
									</ul>
								{:else if key === 'Notes' && getPropertyValue(product, key)}
									<p class="whitespace-pre-wrap">{getPropertyValue(product, key)}</p>
								{:else if getPropertyValue(product, key)}
									{getPropertyValue(product, key)}
								{:else}
									<span class="text-base-content/50">Not specified</span>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<!-- Key Ingredients Section -->
	<div class="space-y-6">
		<h2 class="text-2xl font-bold">Key Ingredients</h2>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{Math.min(
				products.length,
				3
			)} xl:grid-cols-{products.length} gap-6"
		>
			{#each products as product}
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-center">{product.Name}</h3>
					<div class="card bg-base-100 shadow-lg">
						<div class="card-body">
							{#if keyIngredients[product.id]?.length > 0}
								<ul class="space-y-4">
									{#each keyIngredients[product.id] as ingredient}
										{@const isUnique = isUniqueIngredient(ingredient, product.id)}
										<li
											class="border-l-4 {isUnique
												? 'border-secondary-content'
												: 'border-primary'} pl-4"
										>
											<a
												href="/ingredients/{ingredient.id}"
												class="font-medium hover:text-primary hover:underline block {isUnique
													? 'text-secondary-content'
													: ''}"
											>
												{ingredient.name}
											</a>
											{#if ingredient.category}
												<span class="text-sm text-base-content/70 block mt-1">
													{ingredient.category}
												</span>
											{/if}
											{#if ingredient.description}
												<p class="text-sm mt-2 text-base-content/70">
													{ingredient.description}
												</p>
											{/if}
										</li>
									{/each}
								</ul>
							{:else}
								<p class="text-base-content/50">No key ingredients found</p>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<script lang="ts">
	import type { Product } from '$lib/products';

	export let products: Product[];

	// Properties to compare
	const comparisonProperties = [
		{ key: 'TOD', label: 'Time of Day' },
		{ key: 'Step', label: 'Step' },
		{ key: 'Targets', label: 'Targets' },
		{ key: 'Skin Types', label: 'Skin Types' },
		{ key: 'Phase', label: 'Phase' },
		{ key: 'Format', label: 'Format' },
		{ key: 'Excludes', label: 'Conflicts With' },
		{ key: 'KeyIngredients', label: 'Key Ingredients' }
	] as const;
</script>

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
			{#each comparisonProperties as { key, label }}
				<tr>
					<td class="font-semibold">{label}</td>
					{#each products as product}
						<td>
							{#if Array.isArray(product[key])}
								<ul class="list-disc list-inside">
									{#each product[key] as item}
										<li>{item}</li>
									{/each}
								</ul>
							{:else if product[key]}
								{product[key]}
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

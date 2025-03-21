<script lang="ts">
	import { ingredients } from '$lib/ingredients';

	// Convert ingredients object to array and sort by name
	const ingredientsList = Object.values(ingredients).sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8">Skincare Ingredients</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each ingredientsList as ingredient}
			<a
				href="/ingredients/{ingredient.id}"
				class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
			>
				<div class="card-body">
					<h2 class="card-title">{ingredient.name}</h2>
					{#if ingredient.category}
						<p class="text-sm opacity-70">{ingredient.category}</p>
					{/if}
					{#if ingredient.description}
						<p class="text-sm">{ingredient.description}</p>
					{/if}
					{#if ingredient.concerns && ingredient.concerns.length > 0}
						<div class="mt-2">
							{#each ingredient.concerns as concern}
								<span class="badge badge-primary mr-1 mb-1">{concern}</span>
							{/each}
						</div>
					{/if}
					<div class="mt-4">
						<span class="badge badge-ghost">
							Found in {ingredient.products?.length || 0} products
						</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<script lang="ts">
	import { ingredients } from '$lib/ingredients';

	// Separate ingredients into key and non-key ingredients
	const keyIngredients = Object.values(ingredients)
		.filter((ingredient) => ingredient.tags?.includes('key-ingredient'))
		.sort((a, b) => a.name.localeCompare(b.name));

	const otherIngredients = Object.values(ingredients)
		.filter((ingredient) => !ingredient.tags?.includes('key-ingredient'))
		.sort((a, b) => a.name.localeCompare(b.name));
</script>

<svelte:head>
	<title>Ingredients in The Ordinary Products</title>
	<meta
		name="description"
		content="Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits."
	/>
	<meta property="og:title" content="Ingredients in The Ordinary Products" />
	<meta
		property="og:description"
		content="Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits."
	/>
	<meta name="twitter:title" content="Ingredients in The Ordinary Products" />
	<meta
		name="twitter:description"
		content="Complete list of ingredients used in The Ordinary skincare products, including key active ingredients and their benefits."
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8">Skincare Ingredients</h1>

	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6">Key Ingredients</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each keyIngredients as ingredient}
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
	</section>

	<section>
		<h2 class="text-2xl font-semibold mb-6">All Ingredients</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each otherIngredients as ingredient}
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
	</section>
</div>

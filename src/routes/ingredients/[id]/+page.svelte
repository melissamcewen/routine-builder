<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { ingredient, relatedProducts } = data;
	const description =
		ingredient.description ||
		`Learn about ${ingredient.name} and find The Ordinary products that contain this ingredient.`;
</script>

<svelte:head>
	<title>The Ordinary Products that contain {ingredient.name}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="The Ordinary Products that contain {ingredient.name}" />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content="The Ordinary Products that contain {ingredient.name}" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="mb-4">
		<a href="/ingredients" class="btn btn-ghost">← Back to Ingredients</a>
	</div>

	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4">The Ordinary Products that contain {data.ingredient.name}</h1>

		{#if data.ingredient.category}
			<p class="text-lg opacity-70 mb-4">{data.ingredient.category}</p>
		{/if}

		{#if data.ingredient.description}
			<p class="text-lg mb-4">{data.ingredient.description}</p>
		{/if}

		{#if data.ingredient.concerns && data.ingredient.concerns.length > 0}
			<div class="mb-6">
				<h2 class="text-xl font-semibold mb-2">Concerns & Benefits</h2>
				<div class="flex flex-wrap gap-2">
					{#each data.ingredient.concerns as concern}
						<span class="badge badge-primary">{concern}</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<div>
		<h2 class="text-2xl font-bold mb-4">Products containing {data.ingredient.name}</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each data.relatedProducts as product}
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h3 class="card-title">{product.Name}</h3>
						<p class="text-sm opacity-70">
							{#if product.TOD !== ''}{product.TOD} •{/if}
							{#if product.Step !== ''}
								{product.Step}{/if}
						</p>
						{#if product.Targets && product.Targets.length > 0}
							<div class="mt-2">
								{#each product.Targets as target}
									<span class="badge badge-secondary mr-1 mb-1">{target}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 text-center">
		<h2 class="text-2xl font-semibold mb-6">Ready to create your routine?</h2>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/ordinary" class="btn btn-primary">Build a routine using these products</a>
			<a href="/ordinary/scheduler" class="btn btn-secondary">Build a routine from scratch</a>
		</div>
	</div>
</div>

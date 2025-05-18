<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.pageTitle}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.pageTitle} />
	<meta property="og:description" content={data.description} />
	<meta name="twitter:title" content={data.pageTitle} />
	<meta name="twitter:description" content={data.description} />
	<script type="application/ld+json">
		{JSON.stringify(data.structuredData)}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="mb-4">
		<a href="/ingredients" class="btn btn-ghost">← Back to Ingredients</a>
	</div>

	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4">{data.pageTitle}</h1>

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

	{#if data.relatedProducts.length > 0}
		<div>
			<h2 class="text-2xl font-semibold mb-4">Products containing {data.ingredient.name}</h2>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each data.relatedProducts as product}
					<a
						href="/ordinary/compare/{product.id}"
						class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
					>
						<div class="card-body">
							<h3 class="card-title">{product.Name}</h3>
							<p class="text-sm opacity-70">{product.Targets.join(', ')}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<div class="mt-12 text-center">
		<h2 class="text-2xl font-semibold mb-6">Ready to create your routine?</h2>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/ordinary" class="btn btn-primary">Build a routine using these products</a>
			<a href="/ordinary/scheduler" class="btn btn-secondary">Build a routine from scratch</a>
		</div>
	</div>
</div>

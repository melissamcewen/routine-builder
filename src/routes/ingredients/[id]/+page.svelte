<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4">{data.ingredient.name}</h1>

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
							{#if product.Step !== ''} {product.Step}{/if}
						</p>
						{#if product.Targets && product.Targets.length > 0}
							<div class="mt-2">
								{#each product.Targets as target}
									<span class="badge badge-secondary mr-1 mb-1">{target}</span>
								{/each}
							</div>
						{/if}
						<div class="card-actions justify-end mt-4">
							<a href="/ordinary/{product.id}" class="btn btn-primary">View Product</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

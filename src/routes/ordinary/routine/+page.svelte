<script lang="ts">
	import { products } from '$lib/products';
	import { page } from '$app/stores';
	import {
		Sun,
		Moon,
		FlaskConical,
		Beaker,
		Share2,
		ArrowLeftRight,
		Tag,
		Sparkles
	} from 'lucide-svelte';
	import { sortProductsByPhase } from '$lib/utils';
	import { MetaTags } from 'svelte-meta-tags';
	import { JsonLd } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;

	let timeOfDay = data.timeOfDay;
	let selectedProducts = data.selectedProducts;
	let routineName = data.routineName;

	$: sortedSelectedProducts = sortProductsByPhase(selectedProducts, products);
</script>

<MetaTags {...data.pageMetaTags} />
<JsonLd schema={data.pageStructuredData} />

<div class="min-h-screen">
	<div class="container mx-auto p-4">
		<div class="glass rounded-box p-8 max-w-2xl mx-auto">
			<div class="text-center mb-8">
				<h1 class="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
					<FlaskConical class="w-8 h-8" /> The Ordinary Routine Builder
				</h1>
				<p class="text-sm opacity-70">myroutinebuilder.com</p>
			</div>

			{#if routineName}
				<div class="divider"></div>
				<h2 class="text-3xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
					<Share2 class="w-6 h-6" />
					{routineName}
				</h2>
			{/if}

			<div class="divider"></div>

			<div class="text-center mb-8">
				<h2 class="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
					{#if timeOfDay === 'day'}
						<Sun class="w-5 h-5" />
					{:else}
						<Moon class="w-5 h-5" />
					{/if}
					{timeOfDay === 'day' ? 'Day' : 'Night'} Routine
				</h2>
				<p class="text-sm opacity-70">Products are listed in recommended application order</p>
			</div>

			{#if selectedProducts.length === 0}
				<p class="text-base-content/70 text-center">No products selected.</p>
			{:else}
				<ul class="list bg-base-100/90 rounded-box">
					{#each sortedSelectedProducts as productId, index}
						<li class="list-row hover:bg-base-200/50 transition-colors">
							<div class="text-2xl font-thin opacity-30 tabular-nums w-8">
								{(index + 1).toString().padStart(2, '0')}
							</div>
							<div class="w-8 h-8 flex items-center justify-center">
								<Beaker class="w-5 h-5 opacity-70" />
							</div>
							<div class="list-col-grow">
								<div>{products[productId].Name.split(/(?=[A-Z])/).join(' ')}</div>
								<div
									class="text-xs uppercase font-medium opacity-60 flex items-center gap-x-4 gap-y-1 flex-wrap"
								>
									<span class="flex items-center gap-1">
										<ArrowLeftRight class="w-3 h-3" />
										{products[productId].Phase}
									</span>
									{#if products[productId].Tags.length > 0}
										<span class="flex items-center gap-1">
											<Tag class="w-3 h-3" />
											{products[productId].Tags.join(', ')}
										</span>
									{/if}
								</div>
							</div>
						</li>
					{/each}
				</ul>
			{/if}
			<div class="divider mt-8"></div>
			<div class="text-center text-sm opacity-70">
				<p>Created with myroutinebuilder.com</p>
				<a
					href="/ordinary"
					class="btn btn-primary m-4
					"><Sparkles class="w-4 h-4 flex-shrink-0" /> Create Your Own Routine</a
				>
			</div>
		</div>
	</div>
</div>

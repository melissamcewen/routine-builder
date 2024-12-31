<script lang="ts">
  import { products, type Product } from '$lib/products';
  import { page } from '$app/stores';

  let timeOfDay: 'day' | 'night' = 'day';
  let selectedProducts: string[] = [];

  $: filteredProducts = Object.values(products).filter((product: Product) => {
    return product.TOD === timeOfDay || product.TOD === 'both';
  });

  $: sortedSelectedProducts = selectedProducts.sort((a, b) => {
    const stepOrder = { 'Prep': 1, 'Treat': 2, 'Seal': 3 };
    const stepA = products[a].Step || 'Treat';
    const stepB = products[b].Step || 'Treat';
    return stepOrder[stepA] - stepOrder[stepB];
  });

  function toggleProduct(productId: string) {
    if (selectedProducts.includes(productId)) {
      selectedProducts = selectedProducts.filter(id => id !== productId);
    } else {
      // Check for incompatible products
      const product = products[productId];
      const incompatibleProducts = selectedProducts.filter(id => {
        const existingProduct = products[id];
        return product.Excludes.includes(existingProduct.Tags[0]) ||
               existingProduct.Excludes.includes(product.Tags[0]);
      });

      if (incompatibleProducts.length > 0) {
        alert(`This product is not compatible with: ${incompatibleProducts.map(id => products[id].Name).join(', ')}`);
        return;
      }

      selectedProducts = [...selectedProducts, productId];
    }
  }
</script>

<div class="min-h-screen bg-base-200">
  <div class="container mx-auto p-4">
    <div class="flex flex-col gap-8">
      <div class="glass rounded-box p-6">
        <h1 class="text-4xl font-bold mb-4">The Ordinary Routine Builder</h1>

        <div class="tabs tabs-boxed bg-opacity-60 justify-center mb-8">
          <button
            class="tab {timeOfDay === 'day' ? 'tab-active' : ''}"
            on:click={() => timeOfDay = 'day'}
          >
            ☀️ Day Routine
          </button>
          <button
            class="tab {timeOfDay === 'night' ? 'tab-active' : ''}"
            on:click={() => timeOfDay = 'night'}
          >
            🌙 Night Routine
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="glass rounded-box p-6">
            <h2 class="text-2xl font-semibold mb-4">Your {timeOfDay} Routine</h2>
            {#if selectedProducts.length === 0}
              <p class="text-base-content/70">No products selected. Start building your routine by selecting products from the right.</p>
            {:else}
              <div class="flex flex-col gap-4">
                {#each sortedSelectedProducts as productId}
                  <div class="card card-compact bg-base-100/50 hover:bg-base-100/70 transition-all">
                    <div class="card-body">
                      <div class="flex justify-between items-start">
                        <div>
                          <h3 class="card-title text-sm">{products[productId].Name}</h3>
                          <p class="text-xs opacity-70">Step {products[productId].Step}</p>
                          <p class="text-xs opacity-70">{products[productId].Phase} • {products[productId].Format}</p>
                        </div>
                        <button
                          class="btn btn-sm btn-ghost text-error"
                          on:click={() => toggleProduct(productId)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>

          <div class="glass rounded-box p-6">
            <h2 class="text-2xl font-semibold mb-4">Available Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {#each filteredProducts as product (product.id)}
                <div
                  class="card card-compact bg-base-100/50 hover:bg-base-100/70 transition-all cursor-pointer"
                  class:opacity-50={selectedProducts.includes(product.id)}
                  on:click={() => toggleProduct(product.id)}
                >
                  <div class="card-body">
                    <h3 class="card-title text-sm">{product.Name}</h3>
                    <p class="text-xs opacity-70">{product.Phase} • {product.Format}</p>
                    {#if product.Targets.length > 0}
                      <div class="flex flex-wrap gap-1">
                        {#each product.Targets as target}
                          <span class="badge badge-sm">{target}</span>
                        {/each}
                      </div>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(html) {
    background-image:
      radial-gradient(at 0% 0%, rgba(var(--color-secondary) / 0.33) 0px, transparent 50%),
      radial-gradient(at 98% 1%, rgba(var(--color-primary) / 0.33) 0px, transparent 50%);
  }
</style>

import type { ServerLoad } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { products } from '$lib/products';
import type { Product } from '$lib/products';
import type { Ingredient } from '$lib/types/ingredients';

export const load = (async ({ params, fetch }) => {
	const productIds = params.products.split(',');
	const productList = productIds.map((id) => products[id]).filter(Boolean);

	if (productList.length === 0) {
		throw error(404, 'No valid products found');
	}

	// Generate SEO-friendly title and description
	const productNames = productList.map((p: Product) => p.Name);
	const pageTitle = `Compare ${productNames.join(' vs ')} | The Ordinary Products Comparison`;
	const metaDescription = `Compare ${productNames.join(' vs ')} from The Ordinary. See differences in ingredients, usage, and benefits.`;

	// Generate structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: pageTitle,
		description: metaDescription,
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: productList.map((product, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'Product',
					name: product.Name,
					description: `${product.Name} - ${product.Targets.join(', ')}`,
					category: product.Format || 'Skincare',
					url: `https://myroutinebuilder.com/ordinary/compare/${product.id}`,
					offers: {
						'@type': 'Offer',
						availability: 'https://schema.org/InStock',
						priceCurrency: 'USD',
						price: '0',
						seller: {
							'@type': 'Organization',
							name: 'The Ordinary'
						}
					}
				}
			}))
		}
	};

	// Get key ingredients for all products at once
	const keyIngredientsResponse = await fetch(`/api/key-ingredients/${params.products}`);
	if (!keyIngredientsResponse.ok) {
		throw error(500, 'Failed to fetch key ingredients');
	}
	const keyIngredients = await keyIngredientsResponse.json();

	return {
		products: productList,
		comparisonTitle: null,
		comparisonNote: null,
		keyIngredients,
		pageTitle,
		metaDescription,
		structuredData
	};
}) satisfies ServerLoad;

import type { ServerLoad } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { products } from '$lib/products';
import { popularComparisons } from '$lib/popularComparisons';
import type { Product } from '$lib/products';
import type { Ingredient } from '$lib/types/ingredients';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = (async ({ params, fetch, url }) => {
	if (!params.products) {
		throw error(404, 'No products specified');
	}

	const productIds = params.products.split(',');
	const productList = productIds.map((id) => products[id]).filter(Boolean);

	if (productList.length === 0) {
		throw error(404, 'No valid products found');
	}

	// Find if this is a popular comparison
	const popularComparison = popularComparisons.find((comparison) => {
		const comparisonIds = new Set(comparison.ids);
		const currentIds = new Set(productIds);
		return (
			comparisonIds.size === currentIds.size && [...comparisonIds].every((id) => currentIds.has(id))
		);
	});

	// Generate SEO-friendly title and description
	const productNames = productList.map((p: Product) => p.Name);
	const pageTitle =
		popularComparison?.title ||
		`Compare ${productNames.join(' vs ')} | The Ordinary Products Comparison`;
	const metaDescription = popularComparison?.note
		? `${popularComparison.title || productNames.join(' vs ')} from The Ordinary. ${popularComparison.note}`
		: `Compare ${productNames.join(' vs ')} from The Ordinary. See differences in ingredients, usage, and benefits.`;

	const pageUrl = new URL(url.pathname, url.origin).href;

	// Meta tags for svelte-meta-tags
	const pageMetaTags: Partial<MetaTagsProps> = {
		title: pageTitle,
		description: metaDescription,
		openGraph: {
			title: pageTitle,
			description: metaDescription,
			type: 'website',
			url: pageUrl
		},
		twitter: {
			title: pageTitle,
			description: metaDescription,
			cardType: 'summary' as const
		}
	};

	// Generate structured data for SEO
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article' as const,
		headline: pageTitle,
		description: metaDescription,
		author: {
			'@type': 'Organization' as const,
			name: 'My Routine Builder'
		},
		publisher: {
			'@type': 'Organization' as const,
			name: 'My Routine Builder',
			url: 'https://www.myroutinebuilder.com'
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
		comparisonTitle: popularComparison?.title || null,
		comparisonNote: popularComparison?.note || null,
		keyIngredients,
		pageMetaTags,
		pageStructuredData
	};
}) satisfies ServerLoad;

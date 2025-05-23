import type { ServerLoad } from '@sveltejs/kit';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { error } from '@sveltejs/kit';
import { ingredients } from '$lib/ingredients';
import { products } from '$lib/products';
import type { Ingredient } from '$lib/types/ingredients';

export const load = (async ({ params, url }) => {
	const ingredient = ingredients[params.id!];

	if (!ingredient) {
		throw error(404, 'Ingredient not found');
	}

	// Get related products
	const relatedProducts =
		ingredient.products?.map((id: string) => products[id]).filter(Boolean) || [];

	// Generate SEO-friendly title and description
	const pageTitle = `The Ordinary Products that contain ${ingredient.name}`;
	const description =
		ingredient.description ||
		`Learn about ${ingredient.name} and find The Ordinary products that contain this ingredient.`;

	const pageUrl = new URL(url.pathname, url.origin).href;

	// Page-specific meta tags that will override base meta tags
	const pageMetaTags = Object.freeze({
		title: pageTitle,
		description,
		openGraph: {
			type: 'website',
			url: pageUrl,
			title: pageTitle,
			description
		},
		twitter: {
			title: pageTitle,
			description
		}
	}) satisfies MetaTagsProps;

	// Generate structured data for SEO
	const pageStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: pageTitle,
		description,
		url: pageUrl,
		mainEntity: {
			'@type': 'ChemicalSubstance',
			name: ingredient.name,
			description: ingredient.description,
			category: ingredient.category,
			url: pageUrl,
			containedIn: relatedProducts.map((product: any) => ({
				'@type': 'Product',
				name: product.Name,
				description: `${product.Name} - ${product.Targets.join(', ')}`,
				category: product.Format || 'Skincare',
				url: `https://myroutinebuilder.com/ordinary/compare/${product.id}`
			}))
		}
	};

	return {
		ingredient,
		relatedProducts,
		pageTitle,
		description,
		pageMetaTags,
		pageStructuredData
	};
}) satisfies ServerLoad;

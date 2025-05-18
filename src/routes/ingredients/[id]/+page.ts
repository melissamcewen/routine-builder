import type { ServerLoad } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { ingredients } from '$lib/ingredients';
import { products } from '$lib/products';
import type { Ingredient } from '$lib/types/ingredients';

export const load = (async ({ params }) => {
	const ingredient = ingredients[params.id];

	if (!ingredient) {
		throw error(404, 'Ingredient not found');
	}

	// Get related products
	const relatedProducts = ingredient.products?.map((id) => products[id]).filter(Boolean) || [];

	// Generate SEO-friendly title and description
	const pageTitle = `The Ordinary Products that contain ${ingredient.name}`;
	const description =
		ingredient.description ||
		`Learn about ${ingredient.name} and find The Ordinary products that contain this ingredient.`;

	// Generate structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: pageTitle,
		description,
		mainEntity: {
			'@type': 'ChemicalSubstance',
			name: ingredient.name,
			description: ingredient.description,
			category: ingredient.category,
			url: `https://myroutinebuilder.com/ingredients/${ingredient.id}`,
			containedIn: relatedProducts.map((product) => ({
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
		structuredData
	};
}) satisfies ServerLoad;

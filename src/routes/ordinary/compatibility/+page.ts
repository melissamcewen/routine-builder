import type { ServerLoad } from '@sveltejs/kit';
import { products } from '$lib/products';

export const load = (async () => {
	// Generate SEO-friendly title and description
	const pageTitle = 'Product Compatibility Matrix | The Ordinary Products';
	const metaDescription =
		'Check compatibility between The Ordinary products. See which products can be used together and which ones should be kept separate.';

	// Generate structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: pageTitle,
		description: metaDescription,
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: Object.values(products)
				.filter((p) => p.id !== 'sunscreen')
				.map((product, index) => ({
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

	return {
		pageTitle,
		metaDescription,
		structuredData
	};
}) satisfies ServerLoad;

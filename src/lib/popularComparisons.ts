import type { Product } from './products';

export interface ProductComparison {
	ids: string[];
	note: string;
	title?: string;
}

export const popularComparisons: ProductComparison[] = [
	{
		ids: ['multi-peptide-copper-peptides-1-serum', 'multi-peptide-ha-serum'],
		note: 'The multi-peptide serum with copper peptides targets more advanced signs of aging and inflammation, but has more conflicts with other products.'
	},
	{
		ids: ['niacinamide-10-zinc-1', 'niacinamide-5-face-and-body-emulsion'],
		note: 'The face and body emulsion is gentler and more moisturizing, but the 10% version with zinc is more effective for improving skin texture and fighting acne.'
	},

	{
		ids: [
			'retinol-0-2-in-squalane',
			'granactive-retinoid-2-emulsion',
			'retinol-0-5-in-squalane',
			'granactive-retinoid-5-in-squalane',
			'retinol-1-in-squalane',
			'retinal-0-2-emulsion'
		],
		note: '',
		title: 'All The Ordinary Retinoids Compared'
	},
	{
		ids: ['hyaluronic-acid-2-b5-hydrating-serum', 'marine-hyaluronics'],
		note: 'Compare the traditional HA serum with the lighter Marine Hyaluronics. Marine Hyaluronics is better for oily skin or humid climates.'
	},
	{
		ids: ['glycolipid-cream-cleanser', 'glucoside-foaming-cleanser', 'squalane-cleanser'],
		note: 'The Glucoside Foaming Cleanser is recommended for oily skin and the Squalane Cleanser is recommended for dry skin, so perhaps Glycolipid Cream Cleanser is for normal skin? Either way they say all of them are good for all skin types.',
		title: 'All The Ordinary Cleansers Compared'
	},
	{
		ids: ['100-organic-cold-pressed-rose-hip-seed-oil', 'fermented-rose-hip-seed-oil'],
		note: 'The Ordinary says the the fermented rose hip seed oil improves elasticity and firmness, soothes visible redness, and reduces fine lines and wrinkles. They say the regular rose hip seed oil brightens and balances uneven skin tone, provides surface hydration, and boosts elasticity and radiance. In summary if you\'re old and/or red go for the fermented one, otherwise go for the regular one.',
	}
];

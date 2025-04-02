import type { Product } from './products';

export interface ProductComparison {
	ids: string[];
	note: string;
	title?: string;
}

export const popularComparisons: ProductComparison[] = [
	{
		ids: ['multi-peptide-copper-peptides-1-serum', 'multi-peptide-ha-serum'],
		note: 'The multi-peptide serum with copper peptides targets more advanced signs of aging and inflammation, but has more conflicts with other products.',

	},
	{
		ids: ['niacinamide-10-zinc-1', 'niacinamide-5-face-and-body-emulsion'],
		note: 'The face and body emulsion is gentler and more moisturizing, but the 10% version with zinc is more effective for improving skin texture and fighting acne.',
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
		note: 'Compare the traditional HA serum with the lighter Marine Hyaluronics. Marine Hyaluronics is better for oily skin or humid climates.',
	}
];

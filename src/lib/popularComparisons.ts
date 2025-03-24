import type { Product } from './products';

export interface ProductComparison {
	ids: string[];
	note: string;
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
		ids: ['granactive-retinoid-2-emulsion', 'retinol-0-5-in-squalane'],
		note: '0.2% Emulsion is a creamy emulsion that is gentler and better for beginners or sensitive skin. 0.5% Squalane is stronger and is an oil-like serum.'
	},
	{
		ids: ['hyaluronic-acid-2-b5-hydrating-serum', 'marine-hyaluronics'],
		note: 'Compare the traditional HA serum with the lighter Marine Hyaluronics. Marine Hyaluronics is better for oily skin or humid climates.'
	}
];

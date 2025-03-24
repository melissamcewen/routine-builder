import type { Product } from './products';

export interface ProductComparison {
	ids: string[];
	title: string;
	note: string;
}

export const popularComparisons: ProductComparison[] = [
	{
		ids: ['retinol-0-2-in-squalane', 'retinol-0-5-in-squalane'],
		title: 'Retinol Strength Comparison',
		note: 'Compare different strengths of retinol for beginners vs experienced users. Start with 0.2% if new to retinols.'
	},
	{
		ids: ['niacinamide-10-zinc-1', 'niacinamide-5-face-and-body-emulsion'],
		title: 'Niacinamide Formulations',
		note: 'Compare regular niacinamide serum vs the gentler face and body emulsion. The 5% version may be better for sensitive skin.'
	},
	{
		ids: ['lactic-acid-5-ha', 'lactic-acid-10-ha'],
		title: 'Lactic Acid Strengths',
		note: 'Compare different concentrations of lactic acid. 5% is gentler and better for beginners or sensitive skin.'
	},
	{
		ids: ['hyaluronic-acid-2-b5-hydrating-serum', 'marine-hyaluronics'],
		title: 'Hydration Solutions',
		note: 'Compare the traditional HA serum with the lighter Marine Hyaluronics. Marine Hyaluronics is better for oily skin or humid climates.'
	}
];

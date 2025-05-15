import { products } from './products';

export function handleSunscreenSelection(
	selectedProducts: string[],
	timeOfDay: 'day' | 'night'
): string[] {
	let products = [...selectedProducts];
	const hasOrdinarySunscreen = products.includes('uv-filters-spf-45-serum');
	const hasGenericSunscreen = products.includes('sunscreen');

	if (timeOfDay === 'day') {
		// If no sunscreen is selected, add generic sunscreen
		if (!hasOrdinarySunscreen && !hasGenericSunscreen) {
			products = [...products, 'sunscreen'];
		}
		// If both are selected, remove generic sunscreen
		else if (hasOrdinarySunscreen && hasGenericSunscreen) {
			products = products.filter((id) => id !== 'sunscreen');
		}
	} else if (timeOfDay === 'night') {
		// Remove both types of sunscreen for night routine
		products = products.filter((id) => id !== 'sunscreen' && id !== 'uv-filters-spf-45-serum');
	}

	return products;
}

export function canRemoveSunscreen(
	selectedProducts: string[],
	timeOfDay: 'day' | 'night'
): boolean {
	if (timeOfDay === 'night') return true;
	return selectedProducts.includes('uv-filters-spf-45-serum');
}

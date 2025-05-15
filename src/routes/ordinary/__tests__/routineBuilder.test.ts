import { describe, it, expect } from 'vitest';
import { products } from '$lib/products';
import { handleSunscreenSelection, canRemoveSunscreen } from '$lib/sunscreenManager';

describe('Routine Builder Sunscreen Behavior', () => {
	it('should replace generic sunscreen with The Ordinary sunscreen when selected', () => {
		// Start with generic sunscreen
		let selectedProducts = ['sunscreen'];

		// Add The Ordinary sunscreen
		selectedProducts = handleSunscreenSelection(
			[...selectedProducts, 'uv-filters-spf-45-serum'],
			'day'
		);

		// Verify generic sunscreen is removed
		expect(selectedProducts).toContain('uv-filters-spf-45-serum');
		expect(selectedProducts).not.toContain('sunscreen');
	});

	it('should add back generic sunscreen when The Ordinary sunscreen is removed', () => {
		// Start with The Ordinary sunscreen
		let selectedProducts = ['uv-filters-spf-45-serum'];

		// Remove The Ordinary sunscreen
		selectedProducts = handleSunscreenSelection(
			selectedProducts.filter((id) => id !== 'uv-filters-spf-45-serum'),
			'day'
		);

		// Verify generic sunscreen is added
		expect(selectedProducts).toContain('sunscreen');
		expect(selectedProducts).not.toContain('uv-filters-spf-45-serum');
	});

	it('should remove both sunscreens when switching to night routine', () => {
		// Start with both sunscreens
		let selectedProducts = ['sunscreen', 'uv-filters-spf-45-serum'];

		// Simulate switching to night routine
		selectedProducts = handleSunscreenSelection(selectedProducts, 'night');

		// Verify both sunscreens are removed
		expect(selectedProducts).not.toContain('sunscreen');
		expect(selectedProducts).not.toContain('uv-filters-spf-45-serum');
	});

	it('should add generic sunscreen when switching to day routine with no sunscreen', () => {
		// Start with no sunscreen
		let selectedProducts = ['glycolipid-cream-cleanser'];

		// Simulate switching to day routine
		selectedProducts = handleSunscreenSelection(selectedProducts, 'day');

		// Verify generic sunscreen is added
		expect(selectedProducts).toContain('sunscreen');
	});

	it('should not allow removing sunscreen during day routine unless replacing with The Ordinary sunscreen', () => {
		// Start with generic sunscreen
		let selectedProducts = ['sunscreen'];

		// Try to remove sunscreen without having The Ordinary sunscreen
		expect(canRemoveSunscreen(selectedProducts, 'day')).toBe(false);

		// Add The Ordinary sunscreen
		selectedProducts = [...selectedProducts, 'uv-filters-spf-45-serum'];

		// Now should be able to remove generic sunscreen
		expect(canRemoveSunscreen(selectedProducts, 'day')).toBe(true);
	});
});

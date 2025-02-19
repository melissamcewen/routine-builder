import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ResultsPage from '../+page.svelte';
import { writable } from 'svelte/store';

// Mock modules before importing component
vi.mock('lucide-svelte', () => ({
	FlaskConical: vi.fn(),
	ArrowLeft: vi.fn(),
	Sun: vi.fn(),
	Moon: vi.fn(),
	Info: vi.fn()
}));

vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

// Create a mock store
const mockPageStore = writable({
	url: new URL('http://localhost/ordinary/scheduler/results')
});

// Mock $app/stores
vi.mock('$app/stores', () => ({
	page: mockPageStore
}));

// Mock clipboard API
const mockClipboard = {
	writeText: vi.fn()
};
Object.assign(navigator, { clipboard: mockClipboard });

describe('Results Page', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		// Reset store to default state
		mockPageStore.set({
			url: new URL('http://localhost/ordinary/scheduler/results')
		});
	});

	it('should show warning when no products are selected', () => {
		render(ResultsPage);
		const warning = screen.getByText(/No products selected/i);
		expect(warning).toBeTruthy();
	});

	it('should render day and night routines for a complex combination', async () => {
		// Mock URL with complex product combination
		const products = [
			'saccharomyces-ferment-30-milky-toner',
			'glycolipid-cream-cleanser',
			'balancing-clarifying-serum',
			'natural-moisturizing-factors-phytoceramides',
			'mandelic-acid-10-ha',
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum'
		].join(',');

		mockPageStore.set({
			url: new URL(`http://localhost/ordinary/scheduler/results?products=${products}`)
		});

		render(ResultsPage);

		// Check for day routine
		const dayRoutines = screen.getByText(/Day Routines/i);
		expect(dayRoutines).toBeTruthy();

		const cleanser = screen.getByText(/Glycolipid Cream Cleanser/i);
		expect(cleanser).toBeTruthy();

		const toner = screen.getByText(/Saccharomyces Ferment 30% Milky Toner/i);
		expect(toner).toBeTruthy();

		// Check for night routines
		const nightRoutines = screen.getByText(/Night Routines/i);
		expect(nightRoutines).toBeTruthy();

		const mandelic = screen.getByText(/Mandelic Acid 10% \+ HA/i);
		expect(mandelic).toBeTruthy();

		const glycolic = screen.getByText(/Glycolic Acid 7% Exfoliating Toner/i);
		expect(glycolic).toBeTruthy();
	});

	it('should properly organize products by phase', () => {
		const products = [
			'glycolipid-cream-cleanser', // Prep
			'hyaluronic-acid-2-b5-hydrating-serum', // Treat
			'natural-moisturizing-factors-phytoceramides' // Seal
		].join(',');

		mockPageStore.set({
			url: new URL(`http://localhost/ordinary/scheduler/results?products=${products}`)
		});

		render(ResultsPage);

		// Check phase headers are present and in order
		const phases = screen.getAllByText(/^(Prep|Treat|Seal)$/);
		expect(phases).toHaveLength(3);
		expect(phases.map(phase => phase.textContent)).toEqual(['Prep', 'Treat', 'Seal']);
	});

	it('should handle copying routine to clipboard', async () => {
		const products = [
			'glycolipid-cream-cleanser',
			'hyaluronic-acid-2-b5-hydrating-serum'
		].join(',');

		mockPageStore.set({
			url: new URL(`http://localhost/ordinary/scheduler/results?products=${products}`)
		});

		render(ResultsPage);

		// Click copy button
		const copyButton = screen.getByText(/Copy Routine/i);
		await copyButton.click();

		// Verify clipboard was called with formatted routine
		expect(mockClipboard.writeText).toHaveBeenCalled();
		const clipboardText = mockClipboard.writeText.mock.calls[0][0];
		expect(clipboardText).toContain('Day Routine 1');
		expect(clipboardText).toContain('Glycolipid Cream Cleanser');
		expect(clipboardText).toContain('Hyaluronic Acid 2% + B5');
	});

	it('should not include night-only products in day routines', () => {
		const products = [
			'glycolipid-cream-cleanser',
			'mandelic-acid-10-ha', // night-only
			'hyaluronic-acid-2-b5-hydrating-serum'
		].join(',');

		mockPageStore.set({
			url: new URL(`http://localhost/ordinary/scheduler/results?products=${products}`)
		});

		render(ResultsPage);

		// Get day routine section and verify it doesn't contain night-only products
		const dayRoutines = screen.getByText(/Day Routines/i).closest('div');
		const nightProduct = screen.queryByText(/Mandelic Acid 10% \+ HA/i);
		expect(dayRoutines).toBeTruthy();
		expect(nightProduct).toBeFalsy();
	});
});

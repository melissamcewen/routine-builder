import { beforeEach, describe, expect, it, vi } from 'vitest';
import { writable } from 'svelte/store';

// Create pageStore before any imports that use it
const pageStore = writable({ url: new URL('http://localhost:3000') });

// Mock $app/stores before any imports that use it
vi.mock('$app/stores', () => ({
	page: pageStore
}));

// Now we can import the component
import Results from '../+page.svelte';
import { render } from '@testing-library/svelte';

vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

vi.mock('lucide-svelte', () => ({
	FlaskConical: vi.fn(() => ({ render: () => null })),
	ArrowLeft: vi.fn(() => ({ render: () => null })),
	Sun: vi.fn(() => ({ render: () => null })),
	Moon: vi.fn(() => ({ render: () => null })),
	Info: vi.fn(() => ({ render: () => null }))
}));

describe('Results Component', () => {
	beforeEach(() => {
		// Reset pageStore before each test
		pageStore.set({ url: new URL('http://localhost:3000') });
	});

	it('shows warning when no products in URL', () => {
		const { getByText } = render(Results);
		expect(getByText(/No products selected/i)).toBeTruthy();
	});

	it('renders basic structure with products', () => {
		pageStore.set({
			url: new URL(
				'http://localhost:3000?products=glycolipid-cream-cleanser,hyaluronic-acid-2-b5-hydrating-serum'
			)
		});

		const { getByText } = render(Results);

		expect(getByText('Generated Routines')).toBeTruthy();
		expect(getByText('Day Routines')).toBeTruthy();
		expect(getByText('Night Routines')).toBeTruthy();
	});
});

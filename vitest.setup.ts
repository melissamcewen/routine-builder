import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SvelteKit's page store
vi.mock('$app/stores', () => ({
	page: {
		subscribe: vi.fn(),
		get: () => ({
			url: new URL('http://localhost/ordinary/scheduler/results')
		})
	}
}));

// Mock SvelteKit's navigation
vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

// Mock SvelteKit's stores
vi.mock('$app/stores', () => ({
	navigating: {
		subscribe: vi.fn()
	},
	updated: {
		subscribe: vi.fn()
	}
}));

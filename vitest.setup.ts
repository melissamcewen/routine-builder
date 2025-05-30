import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SvelteKit's page store
vi.mock('$app/stores', () => ({
	page: {
		subscribe: vi.fn(),
		get: () => ({
			url: new URL('http://localhost/ordinary/scheduler/results')
		})
	},
	navigating: {
		subscribe: vi.fn()
	},
	updated: {
		subscribe: vi.fn()
	}
}));

// Mock SvelteKit's navigation
vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

// No mocking of products or routineGenerator - use real data!
// This gives us better test coverage and catches real compatibility issues

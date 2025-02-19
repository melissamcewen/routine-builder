import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SvelteKit's navigation functions
vi.mock('$app/navigation', () => ({
    goto: vi.fn(),
    invalidate: vi.fn(),
    prefetch: vi.fn(),
    prefetchRoutes: vi.fn()
}));

// Mock SvelteKit's stores
vi.mock('$app/stores', () => ({
    page: {
        subscribe: vi.fn()
    },
    navigating: {
        subscribe: vi.fn()
    },
    updated: {
        subscribe: vi.fn()
    }
}));

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts']
    },
    resolve: {
        alias: {
            $lib: '/src/lib',
            $app: '/.svelte-kit/runtime/app'
        }
    }
});

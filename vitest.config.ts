import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts}'],
		exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', 'src/routes/**/*.test.ts']
		},
		setupFiles: ['./vitest.setup.ts']
	},
	resolve: {
		alias: {
			$lib: resolve(__dirname, './src/lib'),
			$app: resolve(__dirname, './.svelte-kit/runtime/app'),
			$components: resolve(__dirname, './src/lib/components'),
			$stores: resolve(__dirname, './src/lib/stores'),
			$types: resolve(__dirname, './src/lib/types')
		}
	},
	optimizeDeps: {
		include: ['$app/stores', '$app/navigation']
	}
});

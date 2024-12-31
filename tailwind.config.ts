import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backdropBlur: {
				xs: '2px'
			}
		}
	},

	plugins: [daisyui],

	daisyui: {
		themes: ['fantasy', 'night', 'synthwave'],
		darkTheme: 'synthwave',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root'
	}
} satisfies Config;

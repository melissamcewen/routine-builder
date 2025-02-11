<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let theme: 'shimmer' | 'synthwave' = 'shimmer';

	onMount(() => {
		if (browser) {
			// Get theme from localStorage or default to shimmer
			theme = (localStorage.getItem('theme') as 'shimmer' | 'synthwave') || 'shimmer';
		}
	});

	function toggleTheme() {
		theme = theme === 'shimmer' ? 'synthwave' : 'shimmer';
		if (browser) {
			localStorage.setItem('theme', theme);
		}
	}

	$: if (browser) {
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<div class="min-h-screen">
	<Navbar {theme} on:click={toggleTheme} />

	<main class="pt-16">
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content mt-8">
		<aside>
			<p class="text-sm">
				This site is not affiliated with, endorsed by, or connected to DECIEM or The Ordinary. It is
				an independent fan project created for educational and entertainment purposes only.
			</p>
		</aside>
	</footer>
</div>

<style>
	:global(html) {
		overflow-y: scroll;
	}
</style>

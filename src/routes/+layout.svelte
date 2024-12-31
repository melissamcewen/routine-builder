<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { TestTubeDiagonal } from 'lucide-svelte';

	let theme = 'fantasy';

	onMount(() => {
		if (browser) {
			// Get theme from localStorage or default to fantasy
			theme = localStorage.getItem('theme') || 'fantasy';
		}
	});

	function toggleTheme() {
		theme = theme === 'fantasy' ? 'night' : 'fantasy';
		if (browser) {
			localStorage.setItem('theme', theme);
		}
	}

	$: if (browser) {
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<div class="min-h-screen">
	<nav class="navbar bg-base-100/50 backdrop-blur-sm fixed top-0 z-50">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl gap-2 text-primary">
				<TestTubeDiagonal size={24} />
				My Routine Builder
			</a>
		</div>
		<div class="flex-none gap-2">
			<button class="btn btn-ghost btn-circle" on:click={toggleTheme}>
				{#if theme === 'fantasy'}
					🌙
				{:else}
					☀️
				{/if}
			</button>
		</div>
	</nav>

	<main class="pt-16">
		<slot />
	</main>
</div>

<style>
	:global(html) {
		overflow-y: scroll;
	}
</style>

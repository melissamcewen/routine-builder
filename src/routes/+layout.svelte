<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { TestTubeDiagonal, FlaskConical } from 'lucide-svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let theme = 'shimmer';

	onMount(() => {
		if (browser) {
			// Get theme from localStorage or default to shimmer
			theme = localStorage.getItem('theme') || 'shimmer';
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
	<nav class="navbar bg-base-100/50 backdrop-blur-sm fixed top-0 z-50">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case md:text-xl text-l gap-2">
				<TestTubeDiagonal size={24} />
				My Routine Builder
			</a>
		</div>
		<div class="flex-none gap-2">
			<a href="/ordinary" class="btn btn-ghost gap-2">
				<FlaskConical size={20} />
				The Ordinary
			</a>
			<button class="btn btn-ghost btn-circle" on:click={toggleTheme}>
				{#if theme === 'shimmer'}
					<Moon size={24} />
				{:else}
					<Sun size={24} />
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

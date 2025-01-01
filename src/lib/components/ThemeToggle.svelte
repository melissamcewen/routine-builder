<script lang="ts">
	import { onMount } from 'svelte';
	import { Moon, Sun } from 'lucide-svelte';

	let theme: 'fantasy' | 'synthwave' = 'fantasy';

	onMount(() => {
		// Check for saved theme preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'synthwave' || savedTheme === 'fantasy') {
			theme = savedTheme;
			document.documentElement.setAttribute('data-theme', theme);
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			theme = prefersDark ? 'synthwave' : 'fantasy';
			document.documentElement.setAttribute('data-theme', theme);
		}
	});

	function toggleTheme() {
		theme = theme === 'fantasy' ? 'synthwave' : 'fantasy';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<button
	class="btn btn-circle btn-ghost text-primary"
	on:click={toggleTheme}
	aria-label="Toggle theme"
>
	{#if theme === 'fantasy'}
		<Moon size={24} />
	{:else}
		<Sun size={24} />
	{/if}
</button>

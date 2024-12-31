<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="min-h-screen">
	<nav class="navbar bg-base-100/50 backdrop-blur-sm fixed top-0 z-50">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">🧪 Routine Builder</a>
		</div>
		<div class="flex-none gap-2">
			<ThemeToggle />
			<a href="/saved" class="btn btn-ghost btn-circle">
				💾
			</a>
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

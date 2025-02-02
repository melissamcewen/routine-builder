<script lang="ts">
	import Reference from './Reference.svelte';
	export let references: Array<{
		id: string;
		title?: string;
		type?: string;
		date?: string;
		author?: string;
		source?: string;
		url?: string;
	}>;
</script>

<div class="mt-8 pt-8 border-t border-base-300">
	<h2 class="text-xl font-semibold mb-4">References</h2>
	{#each references as reference (reference.id)}
		<Reference data={reference} />
	{/each}
</div>

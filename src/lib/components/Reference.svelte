<script lang="ts">
	export let data: {
		id: string;
		title?: string;
		type?: string;
		date?: string;
		author?: string;
		source?: string;
		url?: string;
	};
</script>

<div class="text-sm opacity-70 mb-2">
	<span class="font-semibold">[{data.id}]</span>
	{#if data.title}
		{#if data.url}
			<a href={data.url} class="link" target="_blank" rel="noopener noreferrer">{data.title}</a>.
		{:else}
			{data.title}.
		{/if}
	{/if}
	{#if data.author}
		{data.author}
	{/if}
	{#if data.date}
		{data.date}.
	{/if}
	{#if data.source}
		{data.source}.
	{/if}
</div>

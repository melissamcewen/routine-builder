<script>
	import { Book } from 'lucide-svelte';
</script>

<div class="container mx-auto p-4">
	<div class="glass rounded-box p-8 max-w-4xl mx-auto">
		<a href="/blog" class="btn btn-ghost gap-2 mb-8">
			<Book class="w-4 h-4" /> Back to Blog
		</a>

		<div class="prose prose-lg max-w-none">
			<slot />
		</div>
	</div>
</div>

<style>
	:global(.prose) {
		max-width: none;
	}
</style>

<script lang="ts">
	import { Info, Github, Coffee } from 'lucide-svelte';
</script>

<div class="card card-sm shadow-sm glass h-full">
	<div class="card-body">
		<h2 class="card-title">
			<Info class="w-5 h-5" />Help out (or build your own tool)
		</h2>
		<p>
			This project is open source! So if you want to contribute or submit a bug, check us out on
			GitHub.
		</p>
		<h3 class="text-md font-semibold">Updates</h3>
		<ul class="space-y-2 list-disc ml-4">
			<li>
				2/11: Added a new tool for if you already have some products you want to use that generates
				conflict-free routines: <a href="/ordinary/scheduler" class="link">Ordinary Scheduler</a>
			</li>
			<li>
				2/2: Fixed bug with ordering in share page, new blog post
				<a href="/blog/posts/why-lactic-acid-is-my-winter-bff" class="link"
					>Why Lactic Acid is My Winter BFF</a
				>
			</li>

		</ul>

		<div class="card-actions justify-end">
			<a href="https://github.com/melissamcewen/routine-builder" class="btn btn-sm btn-primary"
				><Github class="w-4 h-4 flex-shrink-0" /> GitHub</a
			>
			<a href="https://buymeacoffee.com/melissamcewen" class="btn btn-sm btn-secondary"
				><Coffee class="w-4 h-4 flex-shrink-0" /> Buy me a coffee</a
			>
		</div>
	</div>
</div>

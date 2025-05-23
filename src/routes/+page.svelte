<script lang="ts">
	import { FlaskConical, Sparkles, Clock } from 'lucide-svelte';
</script>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold mb-8">Build Your Perfect Skincare Routine</h1>
			<p class="py-6">
				Create advanced skincare routines with The Ordinary products. Features compatibility checks,
				proper ordering, and easy sharing.
			</p>
			<a href="/ordinary" class="btn btn-primary gap-2">
				<FlaskConical class="w-5 h-5" /> Build a routine from scratch
			</a>
			<a href="/ordinary/scheduler" class="btn btn-secondary mt-3 gap-2">
				<Clock class="w-5 h-5" /> Generate routines for products you already have
			</a>
		</div>
	</div>
</div>

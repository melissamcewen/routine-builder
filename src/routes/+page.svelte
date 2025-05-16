<script lang="ts">
	import { FlaskConical, Sparkles, Clock } from 'lucide-svelte';

	// Structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'The Ordinary Advanced Routine Builder',
		description:
			'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
		applicationCategory: 'Skincare',
		operatingSystem: 'Web'
	};
</script>

<svelte:head>
	<title>The Ordinary Advanced Routine Builder - Create Your Perfect Skincare Routine</title>
	<meta
		name="description"
		content="Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering."
	/>
	<script type="application/ld+json">
		{JSON.stringify(structuredData)}
	</script>
</svelte:head>

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

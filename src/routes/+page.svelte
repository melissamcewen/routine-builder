<script lang="ts">
	import { onMount } from 'svelte';

	// Structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'The Ordinary Advanced Routine Builder',
		description:
			'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
		applicationCategory: 'HealthApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		}
	};

	onMount(() => {
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.text = JSON.stringify(structuredData);
		document.head.appendChild(script);
	});
</script>

<svelte:head>
	<title>The Ordinary Advanced Routine Builder - Create Your Perfect Skincare Routine</title>
	<meta
		name="description"
		content="Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering."
	/>
</svelte:head>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold mb-8">Build Your Perfect Skincare Routine</h1>
			<p class="py-6">
				Create advanced skincare routines with The Ordinary products. Features compatibility checks,
				proper ordering, and easy sharing.
			</p>
			<a href="/ordinary" class="btn btn-primary">Get Started</a>
		</div>
	</div>
</div>

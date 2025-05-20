<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let theme: 'shimmer' | 'synthwave' = 'shimmer';

	onMount(() => {
		if (browser) {
			// Get theme from localStorage or default to shimmer
			theme = (localStorage.getItem('theme') as 'shimmer' | 'synthwave') || 'shimmer';
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

	// Default meta tags
	const defaultMeta = {
		title: 'The Ordinary Advanced Routine Builder',
		description:
			'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
		ogTitle: 'The Ordinary Advanced Routine Builder',
		ogDescription:
			'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
		ogImage: 'https://www.myroutinebuilder.com/og-image.png',
		ogUrl: 'https://www.myroutinebuilder.com',
		twitterCard: 'summary_large_image',
		twitterTitle: 'The Ordinary Advanced Routine Builder',
		twitterDescription:
			'Create and share personalized skincare routines with The Ordinary products. Features product compatibility checks and proper ordering.',
		twitterImage: 'https://www.myroutinebuilder.com/og-image.png'
	};
</script>

<svelte:head>
	<link rel="canonical" href={data.canonicalUrl} />
	<title>{defaultMeta.title}</title>
	<meta name="description" content={defaultMeta.description} />
	<meta property="og:title" content={defaultMeta.ogTitle} />
	<meta property="og:description" content={defaultMeta.ogDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={defaultMeta.ogImage} />
	<meta property="og:url" content={defaultMeta.ogUrl} />
	<meta name="twitter:card" content={defaultMeta.twitterCard} />
	<meta name="twitter:title" content={defaultMeta.twitterTitle} />
	<meta name="twitter:description" content={defaultMeta.twitterDescription} />
	<meta name="twitter:image" content={defaultMeta.twitterImage} />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Blog RSS Feed"
		href="https://www.myroutinebuilder.com/rss.xml"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'The Ordinary Advanced Routine Builder',
		description: 'Advanced routine builder for The Ordinary skincare products',
		applicationCategory: 'LifestyleApplication',
		operatingSystem: 'Web',
	})}</script>`}
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar {theme} on:click={toggleTheme} />

	<main class="flex-grow pt-16">
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content mt-8">
		<aside>
			<p class="text-sm">
				This site is not affiliated with, endorsed by, or connected to DECIEM or The Ordinary. It is
				an independent fan project created for educational and entertainment purposes only.
			</p>
		</aside>
	</footer>
</div>

<style>
	:global(html) {
		overflow-y: scroll;
	}
</style>

import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const pageUrl = new URL(url.pathname, url.origin).href;

	// Base meta tags for the routine builder (will be overridden by dynamic content)
	const pageMetaTags = Object.freeze({
		title: 'The Ordinary Advanced Routine Builder',
		description:
			'Create your personalized skincare routine with The Ordinary products. Features compatibility checks and proper product ordering.',
		openGraph: {
			type: 'website',
			url: pageUrl,
			title: 'The Ordinary Advanced Routine Builder',
			description:
				'Create your personalized skincare routine with The Ordinary products. Features compatibility checks and proper product ordering.'
		},
		twitter: {
			title: 'The Ordinary Advanced Routine Builder',
			description:
				'Create your personalized skincare routine with The Ordinary products. Features compatibility checks and proper product ordering.'
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};

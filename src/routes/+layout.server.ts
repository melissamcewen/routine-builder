import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	const canonicalUrl = new URL(
		url.pathname + url.search,
		'https://www.myroutinebuilder.com'
	).toString();

	return {
		canonicalUrl
	};
};

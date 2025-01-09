export interface Post {
	title: string;
	slug: string;
	date: string;
	description: string;
	keywords: string;
	author: string;
}

export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Function to generate a URL-friendly slug from a string
export function generateSlug(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

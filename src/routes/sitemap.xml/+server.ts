import type { RequestHandler } from '@sveltejs/kit';
import { ingredients } from '$lib/ingredients';
import { popularComparisons } from '$lib/popularComparisons';

const website = 'https://www.myroutinebuilder.com';

// Array of static routes
const staticPages = ['', '/blog', '/ingredients', '/ordinary/compare'];

// Blog posts
const posts = [
	{
		slug: 'why-lactic-acid-is-my-winter-bff',
		lastmod: '2025-02-02'
	},
	{
		slug: 'welcome-to-the-ordinary-advanced-builder',
		lastmod: '2024-01-09'
	}
];

// Get all ingredient IDs
const ingredientIds = Object.keys(ingredients);

const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${staticPages
		.map(
			(page) => `
    <url>
      <loc>${website}${page}</loc>
      <changefreq>daily</changefreq>
      <priority>${page === '' ? '1.0' : '0.7'}</priority>
    </url>
  `
		)
		.join('')}
  ${posts
		.map(
			(post) => `
    <url>
      <loc>${website}/blog/posts/${post.slug}</loc>
      <lastmod>${post.lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `
		)
		.join('')}
  ${ingredientIds
		.map(
			(id) => `
    <url>
      <loc>${website}/ingredients/${id}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
		)
		.join('')}
  ${popularComparisons
		.map(
			(comparison) => `
    <url>
      <loc>${website}/ordinary/compare/${comparison.ids.join(',')}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
		)
		.join('')}
</urlset>`;

export const GET: RequestHandler = async () => {
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

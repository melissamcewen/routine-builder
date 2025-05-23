# Blog Post Meta Tags Fix - February 2, 2025

## Issue

Blog posts were displaying generic meta tags ("The Ordinary Advanced Routine Builder | The Ordinary Advanced Routine Builder") instead of their specific titles and descriptions.

## Root Cause

The blog post structure had routing conflicts between:

- Individual blog post directories (`/blog/posts/why-lactic-acid-is-my-winter-bff/`)
- Dynamic route system (`/blog/posts/[slug]/`)

The individual directories were taking precedence over the dynamic route, but the individual directories didn't have their own load functions to provide meta tags.

## Solution Attempted #1: Access data differently in markdown

- Tried accessing page data through props instead of `$page.data`
- Added debugging to see what data was available
- Discovered only base layout data was accessible, not page-specific data

## Solution Attempted #2: Force everything through dynamic route

- Deleted individual blog post directories
- Moved markdown content into the `[slug]` directory
- Tried to integrate file reading into the load function
- Overcomplicated the solution and broke mdsvex functionality

## Final Solution: Individual load functions per blog post

**Kept the individual directory structure but added proper load functions:**

### Files Created/Modified:

1. **`src/routes/blog/posts/why-lactic-acid-is-my-winter-bff/+page.ts`**

   - Individual load function providing page-specific meta tags
   - Article structured data with proper author, date, keywords
   - OpenGraph and Twitter Card configuration

2. **`src/routes/blog/posts/welcome-to-the-ordinary-advanced-builder/+page.ts`**

   - Same pattern as above but for the welcome post

3. **Modified both `+page.md` files:**
   - Added `MetaTags` and `JsonLd` component imports
   - Added components to consume load function data: `<MetaTags {...$page.data.pageMetaTags} />` and `<JsonLd schema={$page.data.pageStructuredData} />`

### Architecture:

- **Individual directories** - Each blog post has its own directory (takes precedence over dynamic routes)
- **Individual load functions** - Each provides page-specific meta tags and structured data
- **mdsvex integration** - Markdown files use Svelte components to apply meta tags
- **No routing conflicts** - Individual routes work correctly with their own data

## Result

✅ Blog posts now display correct titles:

- "Why Lactic Acid is My Winter BFF | The Ordinary Advanced Routine Builder"
- "Welcome to The Ordinary Advanced Builder | The Ordinary Advanced Routine Builder"

✅ Each post has proper:

- Page-specific descriptions
- Article structured data (author, date, keywords)
- OpenGraph and Twitter Card meta tags
- Keywords meta tags

## Key Learnings

1. **SvelteKit routing precedence** - Specific routes (`/specific-path/`) take precedence over dynamic routes (`/[slug]/`)
2. **mdsvex + meta tags** - Best handled by individual load functions rather than trying to access frontmatter in dynamic routes
3. **Keep it simple** - The working solution used existing mdsvex setup rather than overengineering with file reading

## Files Touched

- `src/routes/blog/posts/why-lactic-acid-is-my-winter-bff/+page.ts` (created)
- `src/routes/blog/posts/why-lactic-acid-is-my-winter-bff/+page.md` (modified)
- `src/routes/blog/posts/welcome-to-the-ordinary-advanced-builder/+page.ts` (created)
- `src/routes/blog/posts/welcome-to-the-ordinary-advanced-builder/+page.md` (modified)
- `src/routes/blog/posts/[slug]/+page.ts` (reverted changes)
- Various temporary files created and deleted during troubleshooting

## Migration Status

- **Blog posts**: ✅ 2/2 completed (100%)
- **Total pages with svelte-meta-tags**: ✅ 13/13 completed (100%)
- **Meta tag consolidation**: ✅ Complete - no more duplicate tags
- **JSON-LD structured data**: ✅ Complete - page-specific schemas throughout site

# Svelte-Meta-Tags Migration Testing Checklist

## ✅ Quick Verification Tests

### 1. Homepage (`/`)

- [ ] Title: "The Ordinary Advanced Routine Builder"
- [ ] Description: "Create and share personalized skincare routines..."
- [ ] No duplicate meta tags
- [ ] JSON-LD structured data present
- [ ] ⚠️ OpenGraph images: Not yet implemented (see OPENGRAPH_IMAGES_TODO.md)

### 2. Blog Page (`/blog`)

- [ ] Title: "Blog | The Ordinary Advanced Routine Builder"
- [ ] Description: "Tips, guides, and updates about using The Ordinary..."
- [ ] Keywords meta tag present
- [ ] Blog structured data with BlogPosting entries
- [ ] ⚠️ OpenGraph images: Not yet implemented

### 3. Ingredients Page (`/ingredients`)

- [ ] Title: "Ingredients in The Ordinary Products | The Ordinary Advanced Routine Builder"
- [ ] Description: "Complete list of ingredients used in The Ordinary..."
- [ ] No duplicate meta tags
- [ ] JSON-LD: WebPage with ItemList (NOT the base WebApplication)

### 4. Blog Post (`/blog/posts/why-lactic-acid-is-my-winter-bff`)

- [ ] Title: "Why Lactic Acid is My Winter BFF | The Ordinary Advanced Routine Builder"
- [ ] Description: "Lactic acid is a humectant and exfoliant..."
- [ ] Article structured data with author, date
- [ ] Keywords meta tag present

### 5. Ingredient Detail (`/ingredients/lactic-acid`)

- [ ] Title: "The Ordinary Products that contain Lactic Acid | The Ordinary Advanced Routine Builder"
- [ ] Dynamic description based on ingredient
- [ ] ChemicalSubstance structured data

### 6. Ordinary Builder (`/ordinary`)

- [ ] Default title: "The Ordinary Advanced Routine Builder"
- [ ] Title changes when products selected: "Day Routine - The Ordinary Advanced Builder"
- [ ] Title changes when routine named: "My Routine - Day Routine - The Ordinary Advanced Builder"
- [ ] Description updates with selected products
- [ ] HowTo structured data with steps

### 7. Scheduler (`/ordinary/scheduler`)

- [ ] Title: "The Ordinary Routine Scheduler - Generate Multiple Routines | The Ordinary Advanced Routine Builder"
- [ ] Description: "Generate multiple skincare routines..."
- [ ] JSON-LD: WebApplication specific to scheduler (NOT the base WebApplication)

### 8. Compare (`/ordinary/compare`)

- [ ] Title: "Compare The Ordinary Products | The Ordinary Advanced Routine Builder"
- [ ] Description: "Compare different products from The Ordinary..."
- [ ] JSON-LD: WebApplication specific to comparison tool

## 🧪 Advanced Tests

### Test Dynamic Meta Tags (Ordinary Builder)

1. Go to `/ordinary`
2. Select some products (e.g., "Niacinamide", "Retinol")
3. Check that:
   - [ ] Title updates to include "Day Routine" or "Night Routine"
   - [ ] Description includes selected product names
   - [ ] Structured data includes HowToStep entries
4. Add a routine name
5. Check that:
   - [ ] Title includes the routine name

### Test OpenGraph Tags (Without Images)

Use Facebook's Sharing Debugger: https://developers.facebook.com/tools/debug/

- [ ] Test homepage: `https://www.myroutinebuilder.com/`
- [ ] Test blog: `https://www.myroutinebuilder.com/blog`
- [ ] Check og:title, og:description, og:url appear correctly
- [ ] og:type="website" present
- [ ] No og:image tags (removed until images created)

### Test Twitter Cards (Without Images)

Use Twitter Card Validator: https://cards-dev.twitter.com/validator

- [ ] Test homepage
- [ ] Test blog post
- [ ] Check twitter:title, twitter:description, twitter:card="summary_large_image"
- [ ] No twitter:image tags (removed until images created)

## 🔧 Technical Tests

### Type Safety

```bash
npm run check
```

- [ ] No TypeScript errors related to meta tags

### Build Test

```bash
npm run build
```

- [ ] Build completes successfully
- [ ] No SSR errors

### Performance Test

- [ ] Lighthouse SEO score improved
- [ ] Meta tags render on first page load (SSR)
- [ ] No hydration errors in console

## 🚨 Common Issues to Check

### No Duplicate Meta Tags

For each page, verify there's only ONE of each:

- [ ] `<title>` tag
- [ ] `<meta name="description">` tag
- [ ] `<meta property="og:title">` tag
- [ ] `<meta property="og:description">` tag
- [ ] `<meta name="twitter:title">` tag

### Canonical URLs

- [ ] Each page has correct canonical URL
- [ ] Canonical URLs use https://www.myroutinebuilder.com

### Structured Data Validation

Use Google's Rich Results Test: https://search.google.com/test/rich-results

- [ ] Test homepage (WebApplication)
- [ ] Test blog page (Blog)
- [ ] Test blog post (Article)
- [ ] Test ingredient page (WebPage with ChemicalSubstance)
- [ ] Test ingredients directory (WebPage with ItemList)
- [ ] Test scheduler (WebApplication - specific to scheduler)
- [ ] Test compare (WebApplication - specific to comparison)

## 📊 Before/After Comparison

### Old System Issues (Should be FIXED)

- [ ] ❌ Multiple title tags on same page
- [ ] ❌ Inconsistent meta descriptions
- [ ] ❌ Missing OpenGraph tags on some pages
- [ ] ❌ Duplicate structured data
- [ ] ❌ Wrong JSON-LD on ingredients page (was showing base WebApplication)

### New System Benefits (Should be WORKING)

- [ ] ✅ Single source of truth for meta tags
- [ ] ✅ Consistent OpenGraph and Twitter Card tags (without images for now)
- [ ] ✅ Type-safe meta tag configuration
- [ ] ✅ Dynamic meta tags work correctly
- [ ] ✅ Proper title template usage
- [ ] ✅ Page-specific JSON-LD structured data

## 🎯 Quick Browser Test Commands

Open browser console and run:

```javascript
// Check for duplicate titles
console.log('Title tags:', document.querySelectorAll('title').length);

// Check for duplicate descriptions
console.log('Description tags:', document.querySelectorAll('meta[name="description"]').length);

// Check current title
console.log('Current title:', document.title);

// Check current description
console.log('Current description:', document.querySelector('meta[name="description"]')?.content);

// Check JSON-LD (should be page-specific, not generic)
const jsonLd = document.querySelector('script[type="application/ld+json"]');
console.log('JSON-LD:', JSON.parse(jsonLd.textContent));

// Check OpenGraph tags (should NOT include images yet)
console.log(
	'OG tags:',
	[...document.querySelectorAll('meta[property^="og:"]')].map(
		(m) => `${m.getAttribute('property')}: ${m.content}`
	)
);
```

## 🎯 Current Status: Images TODO

- ✅ Meta tag structure: **COMPLETE**
- ✅ JSON-LD structured data: **COMPLETE**
- ⚠️ OpenGraph images: **NOT YET IMPLEMENTED**
- ⚠️ Favicon: **CHECK IF EXISTS**

See `OPENGRAPH_IMAGES_TODO.md` for image creation guide.

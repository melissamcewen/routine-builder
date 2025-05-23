---
title: Welcome to The Ordinary Advanced Builder
slug: welcome-to-the-ordinary-advanced-builder
date: '2024-01-09'
description: 'Learn how to use The Ordinary Advanced Builder to create perfect skincare routines with real-time compatibility checking and proper product ordering.'
keywords: 'The Ordinary, skincare routine, product compatibility, skincare guide, routine builder'
author: 'Melissa McEwen'
---

<script>
  import { FlaskConical } from 'lucide-svelte';
  import { formatDate } from '$lib/blog';
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  import { page } from '$app/stores';
</script>

<MetaTags {...$page.data.pageMetaTags} />
<JsonLd schema={$page.data.pageStructuredData} />

# <FlaskConical class="inline w-8 h-8 mr-2" /> Welcome to The Ordinary Advanced Builder

<div class="text-sm opacity-70 mb-8">Published on {formatDate('2024-01-09')}</div>

The Ordinary Advanced Builder is a tool designed for skincare enthusiasts who want more control over their routines with The Ordinary products. Unlike the official regimen builder, this tool allows you to:

## Key Features

- Create both AM and PM routines (or multiple routines!)
- Check product compatibility in real-time
- Sort products in the correct application order
- Bookmark and share your routines with others (no login required! I also designed the UI so it works well as a screenshot you can save)
- Track concerns being addressed

## How to Use

1. Choose between Day or Night routine
2. Name your routine (optional)
3. Browse available products
4. Filter by concerns or product types
5. Add products to your routine
6. Share your routine with others

## Tips for Building Your Routine

- Start with 2-3 products and gradually add more
- Don't use more than 3 serums in one routine (the tool will warn you if you do)
- Follow the recommended application order
- For daytime routines, remember to use sunscreen (not included in this tool... yet)

## About Product Ordering

Products are ordered following [The Ordinary's official guidelines](https://theordinary.com/en-us/blog/mastering-skincare-routine-guide.html):

1. **Prep Phase**: Cleansers and toners
2. **Treatment Phase**: Most active ingredients
3. **Seal Phase**: Largely moisturizers that will he

Within each phase, products are ordered by consistency [following The Ordinary's official classifications](https://theordinary.com/en-us/blog/skincare-layering-guide.htmlr):

1. Water-based
2. Emulsions
3. Anhydrous
4. Oils
5. Creams
6. Suspensions

There are some exceptions like Natural Moisturizing Factors + HA is technically an emulsion, but The Ordinary recommends using it at the same phase as creams. I'd coded these exceptions in the tool.

One thing we haven't coded in is that The Ordinary recommends within the layers to put on the product targeting your most important concern first.

> Ultimately they can be layered in any order, but we recommend focusing on the primary concern first. For instance, if you're looking to target signs of aging as your primary concern and have both Multi-Peptide + HA Serum and Hyaluronic Acid 2% + B5, we'd recommend applying Multi-Peptide + HA Serum first because it targets signs of aging while Hyaluronic Acid 2% + B5 targets dryness.

I'm considering different ways to code this in and may add it in the future.

## Non-Ordinary Products

I've added one non-Ordinary product to the tool, which is prescription tretinoin. The reason is that many skincare nerds such as myself use tretinoin and it's important to see how it works with The Ordinary products.

## About me

I'm Melissa McEwen, a skincare enthusiast and developer. I'm a big fan of The Ordinary and wanted to create a tool that would help myself and others to figure out how to use their products. I also wanted to learn Svelte and to add this project to my portfolio. My other main project is [CurlsBot](https://curlsbot.com), a tool for curly/wavy hair care.

Happy routine building! 🧪

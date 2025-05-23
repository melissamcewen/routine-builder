# OpenGraph Images TODO

## 📱 Required Images

### 1. **Main OpenGraph Image** (`/static/og-image.png`)

- **Size**: 1200x630px (1.91:1 ratio)
- **Format**: PNG or JPG
- **File size**: Under 8MB (ideally under 1MB)
- **Purpose**: Default sharing image for all pages

### 2. **Twitter Card Image** (can be same as OG)

- **Size**: 1200x630px for summary_large_image
- **Alternative**: 800x418px minimum

### 3. **Favicon** (`/static/favicon.ico`)

- **Size**: 32x32px (multi-size ICO recommended)
- **Format**: ICO file with multiple sizes (16x16, 32x32, 48x48)

## 🎨 Design Guidelines

### OpenGraph Image Content

- **Brand/Logo**: Include "The Ordinary Advanced Routine Builder" text
- **Visual Elements**: Skincare bottles, serums, or minimalist design
- **Colors**: Match your site theme (consider your DaisyUI themes)
- **Text**: Keep it readable even when small
- **Safe Area**: Keep important content away from edges (150px margin)

### Brand Consistency

- Use your site's color scheme (shimmer/synthwave themes)
- Include recognizable visual elements from your site
- Make it look professional and trustworthy

## 🛠️ Tools for Creating Images

### Free Options

- **Canva**: Templates for social media images
- **Figma**: Professional design tool (free tier)
- **GIMP**: Open source alternative to Photoshop

### Quick Templates

- Search for "OpenGraph template 1200x630"
- Look for skincare/beauty industry templates
- Modify with your branding

## 📝 Implementation Plan

### Step 1: Create Basic Images

1. Create `static/og-image.png` (1200x630)
2. Create `static/favicon.ico`
3. Test images are accessible at `https://yoursite.com/og-image.png`

### Step 2: Update Meta Tags

Once you have the images, update `src/routes/+layout.server.ts`:

```typescript
openGraph: {
  // ... existing properties
  images: [
    {
      url: 'https://www.myroutinebuilder.com/og-image.png',
      alt: 'The Ordinary Advanced Routine Builder',
      width: 1200,
      height: 630,
      secureUrl: 'https://www.myroutinebuilder.com/og-image.png',
      type: 'image/png'
    }
  ]
},
twitter: {
  // ... existing properties
  image: 'https://www.myroutinebuilder.com/og-image.png',
  imageAlt: 'The Ordinary Advanced Routine Builder'
}
```

### Step 3: Page-Specific Images (Optional)

Create specialized images for:

- Blog posts (`/static/blog-og-image.png`)
- Product comparisons (`/static/compare-og-image.png`)
- Ingredients pages (`/static/ingredients-og-image.png`)

## 🧪 Testing Images

### Before Publishing

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **WhatsApp**: Send yourself a link to test

### Image Requirements Checklist

- [ ] Image is 1200x630px
- [ ] File size under 1MB
- [ ] Image loads at the URL
- [ ] Text is readable
- [ ] Looks good on mobile and desktop
- [ ] Represents your brand well

## 💡 Content Ideas for Your OG Image

### Option 1: Product Focus

- Minimalist layout with skincare bottles/serums
- "The Ordinary Advanced Routine Builder" as main text
- Tagline: "Build Your Perfect Skincare Routine"

### Option 2: App Screenshot

- Screenshot of your routine builder interface
- Overlay with branding
- Shows the tool in action

### Option 3: Text-Heavy

- Bold typography with site name
- List key features: "Compatibility Checks • Product Ordering • Easy Sharing"
- Clean, professional background

## 🚀 Quick Win

For now, you could:

1. Take a screenshot of your main app interface
2. Resize to 1200x630 in any image editor
3. Add your site title as text overlay
4. Save as `static/og-image.png`
5. Update the meta tags

This gets you 80% of the way there with minimal effort!

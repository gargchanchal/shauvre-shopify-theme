# Shauvre Shopify Theme

## Installation Instructions

### 1. Prepare the Theme for Upload

First, create a ZIP file of the theme:

```bash
cd /app/shopify-theme
zip -r shauvre-theme.zip .
```

### 2. Upload to Shopify

#### Option A: Via Shopify Admin (Recommended)
1. Log into your Shopify admin: https://shouvre.myshopify.com/admin
2. Go to **Online Store** → **Themes**
3. Click **Add theme** → **Upload ZIP file**
4. Upload the `shauvre-theme.zip` file
5. Click **Publish** to make it live

#### Option B: Via Shopify CLI
```bash
# Install Shopify CLI if not installed
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd /app/shopify-theme

# Login to Shopify
shopify login --store shouvre.myshopify.com

# Push theme to Shopify
shopify theme push
```

### 3. Configure Theme Settings

After uploading:

1. Go to **Online Store** → **Themes** → **Customize**
2. Upload your logo in **Theme Settings** → **Header**
3. Configure collections in **Homepage** → **Featured Collections** section
4. Set up navigation menus in **Navigation**
5. Add social media links in **Footer** settings

### 4. Create Required Menus

Create these menus in **Navigation**:

- **main-menu**: For header navigation (NEW ARRIVALS, COLLECTIONS, ABOUT, CONTACT)
- **footer-shop**: Shop links (New Arrivals, Collections, Sale, Accessories)
- **footer-care**: Customer Care (Contact, Shipping, Returns, FAQ)
- **footer-company**: Company (About, Careers, Sustainability, Press)
- **footer-legal**: Legal (Privacy Policy, Terms of Service, Cookie Policy)

## Theme Structure

```
shopify-theme/
├── layout/
│   └── theme.liquid          # Main layout template
├── templates/
│   └── index.liquid           # Homepage template
├── sections/
│   ├── header.liquid          # Header with navigation
│   ├── hero.liquid            # Hero banner section
│   ├── featured-collections.liquid  # Collections grid
│   ├── about.liquid           # About section
│   ├── newsletter.liquid      # Newsletter signup
│   └── footer.liquid          # Footer section
├── snippets/
│   └── meta-tags.liquid       # SEO meta tags
├── assets/
│   ├── theme.css              # Custom styles
│   └── theme.js               # JavaScript functionality
└── config/
    └── settings_schema.json   # Theme settings
```

## Features

✅ **Fully integrated with Shopify**
- Dynamic product and collection loading
- Cart functionality
- Newsletter signup using Shopify customer API
- Search functionality

✅ **Customizable via Theme Editor**
- Logo upload
- Hero banner customization
- Collection selection
- Menu configuration
- Social media links

✅ **Responsive Design**
- Mobile-first approach
- Tailwind CSS for styling
- Smooth animations and transitions

✅ **Performance Optimized**
- Lazy loading images
- Minimal JavaScript
- CDN delivery

## Customization

### Adding Products to Collections
1. Go to **Products** → **Collections**
2. Create or edit collections
3. Add products to each collection
4. In Theme Customizer, select these collections for the Featured Collections section

### Changing Colors
The theme uses your brand colors:
- Purple: #4C1C5B
- Gold: #E1921D

To change them, edit in **Theme Settings** → **Colors**

### Adding Pages
Create pages (About, Contact, etc.) and link them in your navigation menus.

## Support

For theme support or customization requests, contact your developer.

## Version
1.0.0 - Initial Release

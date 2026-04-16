# Shauvre Shopify Theme - Change Log

## Version 1.1.0 - Latest Updates

### ✅ Recent Changes

**1. Multi-Currency Selector (Header)**
- Added currency dropdown in header between navigation and icons
- Displays all currencies enabled in Shopify Markets
- Shows currency code + symbol (USD $, EUR €, etc.)
- Includes fallback currencies if multi-currency not enabled
- Styled with brand colors (#4C1C5B purple)
- Mobile responsive design
- Auto-submits on currency change

**2. Increased Page Margins**
- Updated all sections with wider margins:
  - Mobile: `px-6` (24px)
  - Tablet: `px-12` (48px)
  - Desktop: `px-16` (64px)
- Affects: Header, Hero, Collections, About, Newsletter, Footer
- Creates more premium, spacious layout

**3. Logo Integration**
- Custom Shauvre logo integrated in header and footer
- Logo size: h-16 mobile, h-20 desktop (header)
- Logo size: h-24 mobile, h-28 desktop (footer)

### 📦 Complete Feature List

**Theme Structure:**
- ✅ Responsive layout with Tailwind CSS
- ✅ Sticky header with announcement bar
- ✅ Multi-currency selector
- ✅ Search functionality
- ✅ Shopping cart integration
- ✅ Mobile menu with hamburger toggle

**Sections:**
- ✅ Hero section (customizable via theme editor)
- ✅ Featured collections (dynamic Shopify collections)
- ✅ About section with brand story
- ✅ Newsletter signup (Shopify customer integration)
- ✅ Footer with navigation menus

**Customization:**
- ✅ Theme settings for colors, logo, favicon
- ✅ Section settings via Shopify theme editor
- ✅ Menu configuration
- ✅ Social media links

### 🚀 Upload Instructions

1. Download: `/app/shauvre-shopify-theme.zip`
2. Shopify Admin → Online Store → Themes
3. Add theme → Upload ZIP file
4. Publish theme

### ⚙️ Post-Upload Configuration

**Enable Multi-Currency:**
1. Settings → Payments → Enable Shopify Payments
2. Settings → Markets → Enable currencies
3. Select currencies: USD, EUR, GBP, CAD, AUD, AED, INR

**Upload Logo:**
1. Theme Customizer → Header → Logo Image
2. Theme Customizer → Footer → Footer Logo

**Configure Menus:**
- main-menu: Header navigation
- footer-shop: Shop links
- footer-care: Customer care
- footer-company: Company info
- footer-legal: Legal pages

### 📝 Files Modified in v1.1.0

- `/sections/header.liquid` - Added currency selector with fallback
- `/assets/theme.css` - Enhanced currency selector styles
- All section files - Updated container padding
- `/assets/theme.js` - Currency persistence in localStorage

### 🔄 Version History

- v1.1.0 (Current) - Multi-currency + wider margins
- v1.0.0 - Initial theme release

---

**Theme:** Shauvre Luxury Fashion
**Tech Stack:** Shopify Liquid, Tailwind CSS
**Brand Colors:** #4C1C5B (Purple), #E1921D (Gold)

# Enabling Multi-Currency in Your Shopify Store

## Setup Instructions

### Step 1: Enable Shopify Payments (Required)
Multi-currency only works with Shopify Payments.

1. Go to **Settings** → **Payments**
2. If not already enabled, set up **Shopify Payments**
3. Complete the setup process

### Step 2: Enable Multiple Currencies

1. Go to **Settings** → **Markets**
2. Click on your primary market (e.g., "International")
3. Under **Products and pricing**, click **Manage**
4. Enable **Use Shopify to convert product prices**
5. Select the currencies you want to support (e.g., USD, EUR, GBP, CAD, AUD, etc.)
6. Choose your pricing strategy:
   - **Manual**: Set custom prices for each currency
   - **Automatic**: Let Shopify convert prices automatically
7. Click **Save**

### Step 3: Configure Currency Display

1. The currency selector will automatically appear in your header
2. It will show all enabled currencies from your Shopify Markets settings
3. Customers can switch between currencies by clicking the dropdown

### Popular Currency Options

**North America:**
- USD (United States Dollar)
- CAD (Canadian Dollar)
- MXN (Mexican Peso)

**Europe:**
- EUR (Euro)
- GBP (British Pound)
- CHF (Swiss Franc)

**Asia-Pacific:**
- AUD (Australian Dollar)
- JPY (Japanese Yen)
- SGD (Singapore Dollar)
- HKD (Hong Kong Dollar)
- INR (Indian Rupee)

**Middle East:**
- AED (UAE Dirham)
- SAR (Saudi Riyal)

### Step 4: Test the Currency Selector

1. Visit your store
2. Look for the currency dropdown in the header (next to search and cart)
3. Select a different currency
4. Prices throughout your store should update automatically

### Important Notes

- **Shopify Payments Required**: Multi-currency only works with Shopify Payments
- **Geolocation**: You can enable automatic currency detection based on visitor location in Settings → Markets
- **Price Rounding**: Shopify automatically rounds converted prices to local conventions
- **Exchange Rates**: Shopify updates exchange rates automatically

### Troubleshooting

**Currency selector not showing?**
- Make sure you've enabled multiple currencies in Settings → Markets
- Verify Shopify Payments is active
- Clear your browser cache

**Prices not converting?**
- Check that "Use Shopify to convert product prices" is enabled
- Ensure products have prices set
- Verify the currency is enabled in Markets settings

### Advanced: Custom Currency Formatting

If you need to customize how currencies are displayed, you can modify the currency selector in:
`/app/shopify-theme/sections/header.liquid`

Look for the currency form section around line 70.

## Support

For more information, visit:
- [Shopify Multi-Currency Guide](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency)
- [Markets Documentation](https://help.shopify.com/en/manual/markets)

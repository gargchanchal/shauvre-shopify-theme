# Currency Dropdown Not Working - Troubleshooting Guide

## Issue: Currency dropdown shows but doesn't work or doesn't display currencies

## Common Causes & Solutions

### 1. ✅ Check Shopify Payments is Enabled

**Multi-currency ONLY works with Shopify Payments!**

**How to check:**
1. Go to: **Settings** → **Payments**
2. Look for "Shopify Payments" section
3. If not activated, click "Complete setup" or "Activate Shopify Payments"
4. Complete the setup process

**Note:** If you're using third-party payment gateways (PayPal, Stripe), multi-currency won't work.

---

### 2. ✅ Enable Currencies in Markets

**Step-by-step:**

1. Go to **Settings** → **Markets**
2. Click on your market (e.g., "International" or "Rest of World")
3. Under **Products and pricing**, click **Manage**
4. Enable: **"Use Shopify to convert product prices"**
5. Select currencies you want to support:
   - Check the boxes for each currency
   - Example: USD, EUR, GBP, CAD, AUD
6. Click **Save**

**Important:** You must have at least 2 currencies enabled for the dropdown to appear.

---

### 3. ✅ Verify Currency Configuration

**Check your current setup:**

1. Go to **Settings** → **Markets** → **Preferences**
2. Verify:
   - ✅ "Shopify Markets" is enabled
   - ✅ "Sell in multiple currencies" is ON
   - ✅ At least 2 currencies are selected

---

### 4. ✅ Test the Currency Selector

**After configuration:**

1. Visit your store
2. Open browser console (F12 → Console tab)
3. Look for any errors
4. Try changing currency
5. Check if prices update

**Debug command** (paste in console):
```javascript
// Check enabled currencies
console.log('Enabled currencies:', document.querySelectorAll('#currency-selector option').length);

// Check form submission
document.querySelector('.currency-form').addEventListener('submit', function(e) {
  console.log('Currency form submitted');
});
```

---

### 5. ✅ Verify Theme Code

**Check if header section has correct code:**

The currency selector should look like this in `sections/header.liquid`:

```liquid
{% if shop.enabled_currencies.size > 1 %}
  {% form 'currency', class: 'currency-form' %}
    <select 
      name="currency" 
      id="currency-selector"
      onchange="this.form.submit();"
    >
      {% for currency in shop.enabled_currencies %}
        <option 
          value="{{ currency.iso_code }}" 
          {% if currency.iso_code == cart.currency.iso_code %}selected{% endif %}
        >
          {{ currency.iso_code }} {{ currency.symbol }}
        </option>
      {% endfor %}
    </select>
  {% endform %}
{% endif %}
```

---

### 6. ✅ Common Issues & Fixes

**Issue: Dropdown shows only 1 currency**
- **Fix:** Enable more currencies in Settings → Markets

**Issue: Dropdown doesn't appear at all**
- **Fix:** Enable Shopify Payments and at least 2 currencies

**Issue: Prices don't change when selecting currency**
- **Fix:** 
  1. Make sure "Use Shopify to convert prices" is enabled
  2. Clear browser cache
  3. Try in incognito mode

**Issue: "This feature requires Shopify Payments"**
- **Fix:** You must use Shopify Payments, not third-party gateways

**Issue: Changes don't save**
- **Fix:** 
  1. Make sure you clicked "Save" in Markets settings
  2. Wait 5 minutes for changes to propagate
  3. Refresh your store

---

### 7. ✅ Testing Checklist

After setup, verify:

- [ ] Shopify Payments is active
- [ ] At least 2 currencies enabled in Markets
- [ ] Currency dropdown appears in header
- [ ] Dropdown shows all enabled currencies
- [ ] Selecting currency refreshes page
- [ ] Prices update to selected currency
- [ ] Currency persists on navigation
- [ ] Works on mobile devices

---

### 8. ✅ Advanced: Add Geolocation

**Auto-detect customer's currency:**

1. Go to **Settings** → **Markets** → **Preferences**
2. Enable: **"Auto-select customer's local currency"**
3. Save

This will automatically show prices in the customer's local currency based on their location.

---

### 9. ✅ Regional Settings

**For each market:**

1. **Settings** → **Markets**
2. Click on each market (e.g., "United States", "Europe")
3. Configure:
   - **Domains**: Add custom domain (optional)
   - **Languages**: Select languages
   - **Currencies**: Enable relevant currencies
   - **Products**: Choose which products to sell

---

### 10. ✅ Still Not Working?

**Contact Shopify Support:**

1. Go to your Shopify Admin
2. Click the **?** icon (bottom right)
3. Select "Contact Support"
4. Mention:
   - "Currency selector not working"
   - Your theme name: "Shauvre Theme"
   - Markets configuration details

**Or check Shopify Help:**
- https://help.shopify.com/en/manual/markets
- https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency

---

## Quick Setup Summary

1. ✅ Enable Shopify Payments
2. ✅ Go to Settings → Markets
3. ✅ Enable "Use Shopify to convert prices"
4. ✅ Select 2+ currencies
5. ✅ Save and test
6. ✅ Clear cache if needed

---

## Expected Behavior

**When working correctly:**
- Currency dropdown shows in header
- Lists all enabled currencies
- Clicking currency refreshes page
- Prices convert to selected currency
- Selection persists across pages
- Works on all devices

---

**Need more help?** Check the updated code in your theme or contact your developer.

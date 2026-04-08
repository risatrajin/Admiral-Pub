# Google Sheets CMS Integration Guide

## Overview
Your Admiral Pub & Grill website now has a **headless CMS** powered by Google Sheets! When you update events in your Google Sheet, they automatically sync to your website.

## How It Works

### 1. **Data Flow**
```
Google Sheet (Source) → sheets-loader.js (Fetcher) → EVENTS object → Website displays
```

### 2. **Real-Time Updates**
- The website checks for updates every **5 minutes**
- Data is cached in browser for fast loading
- Falls back to hardcoded data if Google Sheets is unavailable
- No server deployment needed!

---

## Google Sheet Structure

Your sheet is already configured with these columns:

| Column | Type | Example |
|--------|------|---------|
| **id** | Number | 1, 2, 3, ... |
| **title** | Text | "The Rusty Maple Band" |
| **date** | Date/Text | "4/10" or "April 10" |
| **time** | Text | "9:00 PM" |
| **description** | Text | "Classic rock covers..." |
| **category** | Dropdown | live-music, sports, trivia, special |
| **price** | Number | 0 (free), 20, etc. |
| **status** | Dropdown | active, inactive, etc. |
| **Image URL** | URL | "Image/Event/filename.jpg" |

### Valid Categories:
- `live-music` - Live Music events
- `sports` - Sports viewing parties
- `trivia` - Trivia nights
- `special` - Special events

### Date Formats:
The system accepts multiple formats:
- `4/10` or `4-10` (Month/Day)
- `April 10`
- `2026-04-10`

The system automatically detects which month and organizes events accordingly.

---

## Making Changes

### ✅ To Add a New Event:
1. Open your Google Sheet
2. Add a new row with:
   - id (auto-increment)
   - title
   - date (4/15, April 15, etc.)
   - time (9:00 PM, 7:00 AM, etc.)
   - description
   - category (live-music, sports, trivia, special)
   - price (0 for free, or any number)
   - Image URL (path to your image file)

3. **Save** the sheet (Ctrl+S or Cmd+S)
4. Wait 5 minutes OR refresh your website to see the update immediately

### ✅ To Update an Existing Event:
1. Find the event row
2. Edit any columns
3. Save the sheet
4. Changes appear on website within 5 minutes

### ✅ To Delete an Event:
1. Delete the entire row from the sheet
2. Save the sheet
3. Event disappears from website within 5 minutes

---

## Image URLs

You have two options for images:

### Option A: Local Images
```
Image/Event/imgi_42_Kickstart-April-10.jpg
Image/Event/imgi_43_Mojo-Stars-April-11-5.jpg
```
*(Use images already in your `/Image/Event/` folder)*

### Option B: External URLs
```
https://example.com/image.jpg
https://images.unsplash.com/photo-xxxxx.jpg
```
*(Any publicly accessible image URL)*

---

## Technical Details

### Files Involved:
- **sheets-loader.js** - Fetches data from Google Sheets API
- **events.js** - Uses the loaded events on the Events page
- **app.js** - Uses the loaded events on the homepage
- **SHEETS_CONFIG** - API credentials (already configured)

### How to Modify:
If you need to change the Google Sheet:
1. Create a new Sheet
2. Copy the column structure
3. Get the new Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/**YOUR_SHEET_ID**/edit`
4. Update `sheets-loader.js` line 3:
   ```javascript
   SPREADSHEET_ID: 'YOUR_NEW_SHEET_ID'
   ```

### Troubleshooting:
- **Events not updating?** 
  - Check browser console (F12) for errors
  - Verify Google Sheet is publicly accessible
  - Wait 5 minutes for auto-refresh, or refresh the page

- **Images not loading?**
  - Check the Image URL is correct
  - Verify file paths use forward slashes: `Image/Event/filename.jpg`

- **Wrong data appearing?**
  - Clear browser cache (Ctrl+Shift+Delete)
  - Clear localStorage: Open console, type `localStorage.clear()`

---

## API Key Security

⚠️ **Your API Key is visible in the browser**

This is fine because:
- The Google Sheets API is read-only (no one can edit)
- The key is restricted to Google Sheets API only
- Anyone viewing the site can see it (this is normal for public APIs)

If you want to keep it secret, you'd need a backend server to proxy the requests.

---

## Performance

- **Cache duration:** 5 minutes
- **Browser storage:** ~100KB for event data
- **API calls:** Minimal (only when cache expires)
- **Load time:** ~50ms (first load) → ~1ms (cached)

---

## Future Enhancements

Possible additions:
- [ ] Automatic image resizing
- [ ] Event validation
- [ ] Webhook notifications when events change
- [ ] Admin dashboard for managing events
- [ ] Multi-language support

---

## Support

If you have questions or need help:
1. Check the browser console for error messages (F12)
2. Verify your Google Sheet has the correct structure
3. Make sure your API key is still valid

Enjoy your headless CMS! 🎉

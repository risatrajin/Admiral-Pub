/* Google Sheets CMS Loader for Admiral Pub Events */

const SHEETS_CONFIG = {
  SPREADSHEET_ID: '1LuesM2Dm2LMp2uoNdYbNmf730fMToPPICQbLWG9W5uU',
  SHEET_NAME: 'Events',
  API_KEY: 'AIzaSyC7tNSWriQdcBeG5NnCDa2EMFqQIXbYt6E',
  CACHE_KEY: 'admiral_events_cache',
  CACHE_DURATION: 5 * 60 * 1000 // 5 minutes
};

async function fetchEventsFromSheets() {
  try {
    const range = `${SHEETS_CONFIG.SHEET_NAME}!A:Z`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_CONFIG.SPREADSHEET_ID}/values/${encodeURIComponent(range)}?key=${SHEETS_CONFIG.API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values || [];

    if (rows.length < 2) {
      console.warn('No data found in sheet');
      return getEventsFromCache() || { april: [], may: [], june: [] };
    }

    // Parse header row - Auto-detect column positions
    const rawHeaders = rows[0];
    const headers = rows[0].map(h => h?.toLowerCase().trim() || '');

    console.log('🔍 Raw headers from sheet:', rawHeaders);
    console.log('📝 Lowercased headers:', headers);

    // Find columns by header name (with fallback for variations)
    const idIdx = headers.indexOf('id');
    const titleIdx = headers.indexOf('title');
    const dateIdx = headers.indexOf('date');
    const timeIdx = headers.indexOf('time');
    const descIdx = headers.indexOf('description');
    const categoryIdx = headers.indexOf('category');
    const priceIdx = headers.indexOf('price');
    const statusIdx = headers.indexOf('status');

    // Try multiple variations for image URL
    let imgIdx = headers.indexOf('image url');
    if (imgIdx === -1) imgIdx = headers.indexOf('image');
    if (imgIdx === -1) imgIdx = headers.findIndex(h => h.includes('image'));
    if (imgIdx === -1) imgIdx = headers.findIndex(h => h.includes('url') && h.includes('image'));

    console.log('📊 Column indices found:');
    console.log(`  id: ${idIdx}, title: ${titleIdx}, date: ${dateIdx}`);
    console.log(`  time: ${timeIdx}, description: ${descIdx}, category: ${categoryIdx}`);
    console.log(`  price: ${priceIdx}, status: ${statusIdx}, Image URL: ${imgIdx}`);

    if (imgIdx === -1) {
      console.error('❌ Image URL column NOT FOUND!');
      console.log('Available headers:', headers);
      console.log('Header count:', headers.length);
    }

    // Parse data rows
    const events = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row[titleIdx] || row[titleIdx].trim() === '') continue; // Skip empty rows

      // Skip archived events
      const status = row[statusIdx]?.trim().toLowerCase() || 'active';
      if (status === 'archive' || status === 'archived') {
        console.log(`⏭️ Skipping archived event: ${row[titleIdx]}`);
        continue;
      }

      // Get day, month, and year from separate columns
      const day = parseInt(row[dateIdx]?.trim()) || 1;
      const monthStr = row[3]?.trim() || 'April'; // Column D: month
      const yearStr = row[4]?.trim() || '2026';   // Column E: year

      // Create a date object to get the day name
      const monthIndex = getMonthIndex(monthStr);
      const dateObj = new Date(yearStr, monthIndex, day);
      const dayName = getDayName(dateObj);
      const month = monthStr.toLowerCase();

      console.log(`Row ${i}: ${row[titleIdx]} - Date: ${day} ${monthStr}, Time: ${row[timeIdx]}`);

      const imgUrl = row[imgIdx]?.trim() || 'Image/Event/default.jpg';

      const priceStr = row[priceIdx]?.trim() || '';
      const event = {
        id: parseInt(row[idIdx]?.trim()) || i,
        day: String(day),
        dayName: dayName,
        title: row[titleIdx]?.trim() || 'Untitled Event',
        time: row[timeIdx]?.trim() || 'TBA',
        desc: row[descIdx]?.trim() || '',
        type: mapCategory(row[categoryIdx]?.trim() || 'special'),
        price: priceStr,
        free: !priceStr || priceStr === '' || priceStr === '0' || priceStr.toLowerCase() === 'free',
        img: imgUrl,
        month: month,
        status: status
      };

      // Debug: Log image URLs
      console.log(`✓ Event: ${event.title}`);
      console.log(`  Image URL: "${imgUrl}"`);

      events.push(event);
    }

    // Organize by month - dynamically include all months with events
    const organizedEvents = {};
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    months.forEach(month => {
      const monthEvents = events.filter(e => e.month === month);
      if (monthEvents.length > 0) {
        organizedEvents[month] = monthEvents;
      }
    });

    console.log('✓ Events organized by month:', Object.keys(organizedEvents));

    // Cache the results
    saveEventsToCache(organizedEvents);

    return organizedEvents;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return getEventsFromCache() || { april: [], may: [], june: [] };
  }
}

function getMonthIndex(monthStr) {
  const monthMap = {
    'january': 0, 'february': 1, 'march': 2, 'april': 3,
    'may': 4, 'june': 5, 'july': 6, 'august': 7,
    'september': 8, 'october': 9, 'november': 10, 'december': 11
  };
  return monthMap[monthStr?.toLowerCase()] || 3; // Default to April (month 3)
}

function getDayName(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}

function mapCategory(category) {
  const categoryMap = {
    'music': 'live-music',
    'live music': 'live-music',
    'live-music': 'live-music',
    'sports': 'sports',
    'trivia': 'trivia',
    'special': 'special',
    'event': 'special'
  };
  return categoryMap[category?.toLowerCase()] || 'special';
}

function saveEventsToCache(events) {
  try {
    const cacheData = {
      events: events,
      timestamp: Date.now()
    };
    localStorage.setItem(SHEETS_CONFIG.CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.warn('Could not save to cache:', error);
  }
}

function getEventsFromCache() {
  try {
    const cached = localStorage.getItem(SHEETS_CONFIG.CACHE_KEY);
    if (!cached) return null;

    const cacheData = JSON.parse(cached);
    const age = Date.now() - cacheData.timestamp;

    // Return cache if it's still fresh
    if (age < SHEETS_CONFIG.CACHE_DURATION) {
      console.log('Using cached events');
      return cacheData.events;
    }
  } catch (error) {
    console.warn('Could not read cache:', error);
  }
  return null;
}

// Load events when page loads
async function initializeEvents() {
  console.log('Loading events from Google Sheets...');
  const events = await fetchEventsFromSheets();

  // Replace the hardcoded EVENTS with fetched data
  if (window.EVENTS) {
    Object.assign(window.EVENTS, events);
  }

  // Trigger re-render if using a framework
  if (window.renderEvents) {
    window.renderEvents();
  }

  return events;
}

// Auto-refresh every 5 minutes
setInterval(() => {
  console.log('Auto-refreshing events from Google Sheets...');
  fetchEventsFromSheets().then(events => {
    if (window.EVENTS) {
      Object.assign(window.EVENTS, events);
    }
    if (window.renderEvents) {
      window.renderEvents();
    }
    console.log('Events refreshed');
  });
}, SHEETS_CONFIG.CACHE_DURATION);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fetchEventsFromSheets, initializeEvents };
}

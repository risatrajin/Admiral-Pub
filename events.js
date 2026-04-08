/* Re-use event data from app.js — duplicated here for standalone page */
const EVENTS = {
  april: [
    { id:1,  day:"10", dayName:"Fri", title:"The Rusty Maple Band",        type:"live-music", time:"9:00 PM",   desc:"Classic rock covers from the 70s & 80s. No cover charge — show up early!",        free:true,  img:"Image/Event/imgi_42_Kickstart-April-10.jpg" },
    { id:2,  day:"11", dayName:"Sat", title:"NHL Playoffs Watch Party",    type:"sports",     time:"Puck Drop", desc:"Cheer on the Canucks with us. Half-price wings during all playoff games. 🍁",      free:true,  img:"Image/Event/imgi_43_Mojo-Stars-April-11-5.jpg" },
    { id:3,  day:"12", dayName:"Sun", title:"Sunday Trivia Night",         type:"trivia",     time:"7:00 PM",   desc:"Teams of 2–6. $20 bar tab for first place. Register at the door.",                 free:false, img:"Image/Event/imgi_35_Wicked-Fun-April-3.jpg" },
    { id:4,  day:"17", dayName:"Fri", title:"East Coast Vibes",            type:"live-music", time:"9:30 PM",   desc:"Maritime-inspired folk rock and East Coast hits. Lively crowd guaranteed.",          free:true,  img:"Image/Event/imgi_45_Guilty-Pleasure-April-17.jpg" },
    { id:5,  day:"18", dayName:"Sat", title:"NHL Playoffs — Game Night",   type:"sports",     time:"Puck Drop", desc:"All screens on. Canucks drink specials all night long.",                             free:true,  img:"Image/Event/imgi_46_RB-Conspiracy-April-18.jpg" },
    { id:6,  day:"19", dayName:"Sun", title:"Open Mic Night",              type:"special",    time:"7:00 PM",   desc:"Bring your talent! Sign up at the bar by 6:30 PM. All genres welcome.",              free:true,  img:"Image/Event/imgi_48_Gabriel-Jazz-Sundays-April-19-Hudson-St-5-8.jpg" },
    { id:7,  day:"24", dayName:"Fri", title:"Pacific Groove",              type:"live-music", time:"9:00 PM",   desc:"Vancouver's favourite cover band plays crowd favourites all night.",                  free:true,  img:"Image/Event/imgi_44_Ocean-Park-Wailers-April-11.jpg" },
    { id:8,  day:"26", dayName:"Sun", title:"Wing & Beer Sunday",          type:"special",    time:"All Day",   desc:"$1 wings & $5 domestic pints every Sunday. Dine-in only.",                           free:true,  img:"Image/Event/imgi_34_KAROKE-POSTER-1.jpg" },
  ],
  may: [
    { id:9,  day:"1",  dayName:"Fri", title:"Bourbon Street Revival",      type:"live-music", time:"9:00 PM",   desc:"Soul, blues and Southern rock. An unforgettable Friday night.",                      free:true,  img:"Image/Event/imgi_33_Marianne-BDay-April-1-.jpg" },
    { id:10, day:"2",  dayName:"Sat", title:"Kentucky Derby Watch Party",  type:"sports",     time:"3:00 PM",   desc:"Dress up, sip mint juleps, and cheer on your horse.",                                free:true,  img:"Image/Event/imgi_36_Mike-Henry-April-4.jpg" },
    { id:11, day:"9",  dayName:"Sat", title:"Mother's Day Brunch Special", type:"special",    time:"11:30 AM",  desc:"Treat mum to brunch! Special menu & flowers for every mum. Reservations recommended.", free:false, img:"Image/Event/imgi_38_Gabriel-Jazz-Sundays-April-5-5-8.jpg" },
    { id:12, day:"14", dayName:"Thu", title:"Thursday Trivia Night",       type:"trivia",     time:"7:00 PM",   desc:"Weekly Thursday trivia returns! Bar tabs and prizes for winners.",                    free:false, img:"Image/Event/imgi_37_Randy-Swallow-April-4.jpg" },
    { id:13, day:"16", dayName:"Sat", title:"The Northern Lights Band",    type:"live-music", time:"9:30 PM",   desc:"Energetic covers from the 90s to today. One of our most popular acts.",                free:true,  img:"Image/Event/imgi_41_Arsen-Shomakhov-April-8.jpg" },
    { id:14, day:"19", dayName:"Tue", title:"Victoria Day Long Weekend 🍁",type:"special",    time:"11:30 AM",  desc:"Canada's beloved long weekend! BBQ specials on the patio & live music.",              free:true,  img:"Image/Event/imgi_48_Gabriel-Jazz-Sundays-April-19-Hudson-St-5-8.jpg" },
    { id:15, day:"23", dayName:"Sat", title:"Open Mic & Patio Night",      type:"special",    time:"7:00 PM",   desc:"Summer patio opens! Open mic + DJ till close. Welcome back, sunshine.",                free:true,  img:"Image/Event/imgi_40_@-7-pm.jpg" },
  ],
  june: [
    { id:16, day:"5",  dayName:"Fri", title:"Harbour City Blues",          type:"live-music", time:"9:00 PM",   desc:"Vancouver's blues duo plays a powerful set of originals and classics.",                free:true,  img:"Image/Event/imgi_43_Mojo-Stars-April-11-5.jpg" },
    { id:17, day:"6",  dayName:"Sat", title:"Trivia Championship Night",   type:"trivia",     time:"7:00 PM",   desc:"Monthly championship — top teams from May compete for the grand prize.",              free:false, img:"Image/Event/imgi_35_Wicked-Fun-April-3.jpg" },
    { id:18, day:"20", dayName:"Sat", title:"Summer Solstice Party 🌞",    type:"special",    time:"6:00 PM",   desc:"The longest day of the year. Patio party, live DJ, and Solstice cocktails.",           free:true,  img:"Image/Event/imgi_39_BINGPOT-Admiral-Winter.jpg" },
    { id:19, day:"26", dayName:"Fri", title:"Canada Day Week Kickoff 🍁",  type:"special",    time:"9:00 PM",   desc:"Kick off Canada Day week with live music, red & white specials, and more.",            free:true,  img:"Image/Event/imgi_42_Kickstart-April-10.jpg" },
    { id:20, day:"27", dayName:"Sat", title:"The Admiral All-Stars Band",  type:"live-music", time:"9:00 PM",   desc:"Our house band plays the greatest hits. A night you won't forget.",                    free:true,  img:"Image/Event/imgi_47_Incognito-April-18.jpg" },
  ],
};

/* Google Sheets CMS Integration - Load events from sheets on page load */
async function loadEventsFromSheets() {
  try {
    if (typeof fetchEventsFromSheets === 'function') {
      const sheetsEvents = await fetchEventsFromSheets();
      if (sheetsEvents && (sheetsEvents.april.length > 0 || sheetsEvents.may.length > 0 || sheetsEvents.june.length > 0)) {
        Object.assign(EVENTS, sheetsEvents);
        console.log('✓ Events loaded from Google Sheets');
        return true;
      }
    }
  } catch (error) {
    console.warn('Could not load from Google Sheets, using cached data:', error);
  }
  return false;
}

const TYPE_META = {
  "live-music": { label:"Live Music",  icon:"fa-guitar",      badge:"badge-live-music" },
  "sports":     { label:"Sports",      icon:"fa-hockey-puck", badge:"badge-sports" },
  "trivia":     { label:"Trivia",      icon:"fa-brain",       badge:"badge-trivia" },
  "special":    { label:"Special",     icon:"fa-star",        badge:"badge-special" },
};

let currentMonth  = "april";
let currentFilter = "all";
let rsvpEvent     = null;

document.addEventListener('DOMContentLoaded', async () => {
  // Load events from Google Sheets (falls back to hardcoded data if unavailable)
  await loadEventsFromSheets();

  // Generate month tabs dynamically based on loaded events
  generateMonthTabs();
  updateFilterPills();

  renderEvents();
  initCopyPhone();

  document.querySelectorAll(".month-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".month-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentMonth = tab.dataset.month;
      currentFilter = "all";
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      document.querySelector(".filter-pill[data-filter='all']").classList.add("active");
      renderEvents();
    });
  });

  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderEvents();
    });
  });
});

/* Generate month tabs dynamically based on EVENTS */
function generateMonthTabs() {
  const monthTabs = document.getElementById('monthTabs');
  if (!monthTabs) return;

  // Get all unique months from EVENTS
  const months = Object.keys(EVENTS);
  const monthOrder = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const sortedMonths = months.filter(m => monthOrder.includes(m)).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

  // Clear existing tabs
  monthTabs.innerHTML = '';

  // Create tabs for each month
  sortedMonths.forEach((month, index) => {
    const count = EVENTS[month]?.length || 0;
    const monthName = month.charAt(0).toUpperCase() + month.slice(1);
    const isActive = index === 0 ? 'active' : '';

    const li = document.createElement('li');
    li.role = 'presentation';

    const button = document.createElement('button');
    button.className = `month-tab ${isActive}`;
    button.dataset.month = month;
    button.role = 'tab';
    button.innerHTML = `
      <span class="month-name">${monthName}</span>
      <span class="month-year">2026</span>
      <span class="month-count">${count}</span>
    `;

    button.addEventListener('click', () => {
      document.querySelectorAll('.month-tab').forEach(t => t.classList.remove('active'));
      button.classList.add('active');
      currentMonth = month;
      currentFilter = 'all';
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      document.querySelector('.filter-pill[data-filter="all"]').classList.add('active');
      updateFilterPills();
      renderEvents();
    });

    li.appendChild(button);
    monthTabs.appendChild(li);
  });

  // Set first month as default
  if (sortedMonths.length > 0) {
    currentMonth = sortedMonths[0];
  }
}

/* Update filter pills based on categories in current month */
function updateFilterPills() {
  if (!EVENTS[currentMonth]) return;

  // Get categories present in current month
  const monthEvents = EVENTS[currentMonth];
  const categories = new Set(monthEvents.map(e => e.type));

  // Show/hide filter pills based on whether category exists in current month
  const filters = ['live-music', 'sports', 'trivia', 'special'];
  filters.forEach(filter => {
    const pill = document.querySelector(`[data-filter="${filter}"]`);
    if (pill) {
      pill.style.display = categories.has(filter) ? 'flex' : 'none';
    }
  });
}

function initCopyPhone() {
  const copyBtn = document.querySelector(".copy-phone-btn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const phone = copyBtn.dataset.phone;
    try {
      await navigator.clipboard.writeText(phone);
      copyBtn.classList.add("copied");
      copyBtn.setAttribute("data-tooltip", "Copied!");

      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.removeAttribute("data-tooltip");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  });
}

function renderEvents() {
  const grid   = document.getElementById("eventsGrid");
  const noEvts = document.getElementById("noEvents");
  const data   = EVENTS[currentMonth] || [];
  const filtered = currentFilter === "all" ? data : data.filter(e => e.type === currentFilter);

  grid.innerHTML = "";
  noEvts.classList.toggle("d-none", filtered.length > 0);
  grid.classList.toggle("d-none", filtered.length === 0);

  filtered.forEach((ev, i) => {
    const meta = TYPE_META[ev.type];
    const col  = document.createElement("div");
    col.className = "col-sm-6 col-lg-4 reveal";
    col.innerHTML = `
      <div class="event-card" data-type="${ev.type}" data-id="${ev.id}" tabindex="0" role="button" aria-label="View event: ${ev.title}">
        <div class="event-card-img-wrap">
          <img src="${ev.img}" alt="${ev.title}" class="event-card-img" loading="lazy">
          <div class="event-card-img-overlay">
            <div class="event-date-block">
              <span class="day-num">${ev.day}</span>
              <span class="day-name">${ev.dayName}</span>
            </div>
            <span class="event-type-badge ${meta.badge}"><i class="fa-solid ${meta.icon}"></i> ${meta.label}</span>
          </div>
        </div>
        <div class="event-card-body">
          <div class="event-title">${ev.title}</div>
          <div class="event-time"><i class="fa-regular fa-clock"></i> ${ev.time}</div>
          <div class="event-desc">${ev.desc}</div>
        </div>
        <div class="event-card-footer">
          ${ev.free ? '<span class="event-free-badge"><i class="fa-solid fa-ticket me-1"></i>Free Entry</span>' : `<span class="event-price-badge"><i class="fa-solid fa-dollar-sign me-1"></i>${ev.price}</span>`}
          <button class="event-rsvp-btn" data-id="${ev.id}">RSVP →</button>
        </div>
      </div>`;
    grid.appendChild(col);
    setTimeout(() => col.classList.add("visible"), i * 80);
  });

  document.querySelectorAll(".event-rsvp-btn").forEach(btn => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); openRSVP(+btn.dataset.id); });
  });
  document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => openRSVP(+card.dataset.id));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") openRSVP(+card.dataset.id); });
  });
}

function openRSVP(id) {
  const allEvents = Object.values(EVENTS).flat();
  const ev = allEvents.find(e => e.id === id);
  if (!ev) return;
  rsvpEvent = ev;
  const meta = TYPE_META[ev.type];
  document.getElementById("rsvpEventType").textContent  = meta.label;
  document.getElementById("rsvpModalLabel").textContent = ev.title;
  document.getElementById("rsvpModalMeta").textContent  = `${ev.dayName}, ${capitalizeFirst(currentMonth)} ${ev.day} · ${ev.time}`;
  document.getElementById("rsvpModalDesc").textContent  = ev.desc;

  // Set the event image
  const modalImg = document.getElementById("rsvpModalImage");
  if (modalImg) {
    modalImg.src = ev.img;
    modalImg.alt = ev.title;
  }

  // Generate calendar links
  generateCalendarLinks(ev);

  new bootstrap.Modal(document.getElementById("rsvpModal")).show();
}

function generateCalendarLinks(event) {
  // Parse event time (e.g., "9:00 PM")
  const timeStr = event.time.toLowerCase();
  let hour = 21; // default to 9 PM
  if (timeStr.includes("am")) {
    const match = timeStr.match(/(\d+):?(\d+)?/);
    if (match) {
      hour = parseInt(match[1]);
      if (hour !== 12) hour = hour;
    }
  } else if (timeStr.includes("pm")) {
    const match = timeStr.match(/(\d+):?(\d+)?/);
    if (match) {
      hour = parseInt(match[1]);
      if (hour !== 12) hour = hour + 12;
    }
  }

  // Create date string (April 2026)
  const year = 2026;
  const monthIndex = { april: 4, may: 5, june: 6 }[currentMonth] || 4;
  const day = parseInt(event.day);

  // Format: YYYYMMDD for date
  const dateStr = `${year}${String(monthIndex).padStart(2, '0')}${String(day).padStart(2, '0')}`;
  const startTime = `${dateStr}T${String(hour).padStart(2, '0')}0000`;
  const endTime = `${dateStr}T${String(hour + 2).padStart(2, '0')}0000`;

  const eventTitle = encodeURIComponent(event.title);
  const eventDesc = encodeURIComponent(`Admiral Pub & Grill - ${event.desc}`);
  const location = encodeURIComponent("4125 E Hastings St, Burnaby, BC");

  // Google Calendar URL
  const googleUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${eventTitle}&dates=${startTime}Z/${endTime}Z&details=${eventDesc}&location=${location}`;

  // Microsoft Outlook URL
  const outlookDate = `${year}-${String(monthIndex).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:00:00`;
  const outlookEndDate = `${year}-${String(monthIndex).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour + 2).padStart(2, '0')}:00:00`;
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rk=compose&subject=${eventTitle}&body=${eventDesc}&startTime=${encodeURIComponent(outlookDate)}&endTime=${encodeURIComponent(outlookEndDate)}&location=${location}`;

  // Set the URLs
  const googleBtn = document.getElementById("googleCalendarBtn");
  const outlookBtn = document.getElementById("outlookCalendarBtn");

  if (googleBtn) googleBtn.href = googleUrl;
  if (outlookBtn) outlookBtn.href = outlookUrl;
}

function capitalizeFirst(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

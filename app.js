/* ═══════════════════════════════════════════
   ADMIRAL PUB & GRILL — APP.JS
═══════════════════════════════════════════ */

/* ── EVENTS DATA ── */
const EVENTS = {
  april: [
    { id:1,  day:"10", dayName:"Fri", title:"The Rusty Maple Band",        type:"live-music", time:"9:00 PM",   desc:"Classic rock covers from the 70s & 80s. No cover charge — show up early!",        free:true,  img:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
    { id:2,  day:"11", dayName:"Sat", title:"NHL Playoffs Watch Party",    type:"sports",     time:"Puck Drop", desc:"Cheer on the Canucks with us. Half-price wings during all playoff games. 🍁",      free:true,  img:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80" },
    { id:3,  day:"12", dayName:"Sun", title:"Sunday Trivia Night",         type:"trivia",     time:"7:00 PM",   desc:"Teams of 2–6. $20 bar tab for first place. Register at the door.",                 free:false, img:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" },
    { id:4,  day:"17", dayName:"Fri", title:"East Coast Vibes",            type:"live-music", time:"9:30 PM",   desc:"Maritime-inspired folk rock and East Coast hits. Lively crowd guaranteed.",          free:true,  img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80" },
    { id:5,  day:"18", dayName:"Sat", title:"NHL Playoffs — Game Night",   type:"sports",     time:"Puck Drop", desc:"All screens on. Canucks drink specials all night long.",                             free:true,  img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" },
    { id:6,  day:"19", dayName:"Sun", title:"Open Mic Night",              type:"special",    time:"7:00 PM",   desc:"Bring your talent! Sign up at the bar by 6:30 PM. All genres welcome.",              free:true,  img:"https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=600&q=80" },
    { id:7,  day:"24", dayName:"Fri", title:"Pacific Groove",              type:"live-music", time:"9:00 PM",   desc:"Vancouver's favourite cover band plays crowd favourites all night.",                  free:true,  img:"https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=600&q=80" },
    { id:8,  day:"26", dayName:"Sun", title:"Wing & Beer Sunday",          type:"special",    time:"All Day",   desc:"$1 wings & $5 domestic pints every Sunday. Dine-in only.",                           free:true,  img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
  ],
  may: [
    { id:9,  day:"1",  dayName:"Fri", title:"Bourbon Street Revival",      type:"live-music", time:"9:00 PM",   desc:"Soul, blues and Southern rock. An unforgettable Friday night.",                      free:true,  img:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
    { id:10, day:"2",  dayName:"Sat", title:"Kentucky Derby Watch Party",  type:"sports",     time:"3:00 PM",   desc:"Dress up, sip mint juleps, and cheer on your horse.",                                free:true,  img:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80" },
    { id:11, day:"9",  dayName:"Sat", title:"Mother's Day Brunch Special", type:"special",    time:"11:30 AM",  desc:"Treat mum to brunch! Special menu & flowers for every mum. Reservations recommended.", free:false, img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80" },
    { id:12, day:"14", dayName:"Thu", title:"Thursday Trivia Night",       type:"trivia",     time:"7:00 PM",   desc:"Weekly Thursday trivia returns! Bar tabs and prizes for winners.",                    free:false, img:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" },
    { id:13, day:"16", dayName:"Sat", title:"The Northern Lights Band",    type:"live-music", time:"9:30 PM",   desc:"Energetic covers from the 90s to today. One of our most popular acts.",                free:true,  img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80" },
    { id:14, day:"19", dayName:"Tue", title:"Victoria Day Long Weekend 🍁",type:"special",    time:"11:30 AM",  desc:"Canada's beloved long weekend! BBQ specials on the patio & live music.",              free:true,  img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" },
    { id:15, day:"23", dayName:"Sat", title:"Open Mic & Patio Night",      type:"special",    time:"7:00 PM",   desc:"Summer patio opens! Open mic + DJ till close. Welcome back, sunshine.",                free:true,  img:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80" },
  ],
  june: [
    { id:16, day:"5",  dayName:"Fri", title:"Harbour City Blues",          type:"live-music", time:"9:00 PM",   desc:"Vancouver's blues duo plays a powerful set of originals and classics.",                free:true,  img:"https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=600&q=80" },
    { id:17, day:"6",  dayName:"Sat", title:"Trivia Championship Night",   type:"trivia",     time:"7:00 PM",   desc:"Monthly championship — top teams from May compete for the grand prize.",              free:false, img:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" },
    { id:18, day:"20", dayName:"Sat", title:"Summer Solstice Party 🌞",    type:"special",    time:"6:00 PM",   desc:"The longest day of the year. Patio party, live DJ, and Solstice cocktails.",           free:true,  img:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80" },
    { id:19, day:"26", dayName:"Fri", title:"Canada Day Week Kickoff 🍁",  type:"special",    time:"9:00 PM",   desc:"Kick off Canada Day week with live music, red & white specials, and more.",            free:true,  img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" },
    { id:20, day:"27", dayName:"Sat", title:"The Admiral All-Stars Band",  type:"live-music", time:"9:00 PM",   desc:"Our house band plays the greatest hits. A night you won't forget.",                    free:true,  img:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
  ],
};

const TYPE_META = {
  "live-music": { label:"Live Music",  icon:"fa-guitar",     badge:"badge-live-music" },
  "sports":     { label:"Sports",      icon:"fa-hockey-puck", badge:"badge-sports" },
  "trivia":     { label:"Trivia",      icon:"fa-brain",       badge:"badge-trivia" },
  "special":    { label:"Special",     icon:"fa-star",        badge:"badge-special" },
};

/* ── MENU DATA ── */
const MENU = {
  food: [
    { title:"Admiral Burger",        desc:"Double beef patty, cheddar, caramelized onions, house sauce on a brioche bun", price:"$18", tags:["Signature"], img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
    { title:"BC Salmon Tacos",       desc:"Fresh BC salmon, avocado, pickled slaw, chipotle crema in soft corn tortillas", price:"$19", tags:["Local","Fan Fav"], img:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=400&q=80" },
    { title:"Pub Wings",             desc:"Two pounds of crispy wings — choose your sauce: buffalo, honey garlic, or dry rub", price:"$22", tags:["Signature","Happy Hour"], img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
    { title:"Poutine Supreme",       desc:"Crispy fries, Quebec cheese curds, rich beef gravy, pulled pork & green onions", price:"$17", tags:["Canadian 🍁"], img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" },
  ],
  drinks: [
    { title:"BC Craft Flight",       desc:"Four 5oz pours of rotating BC craft beers — ask your server for today's selection", price:"$18", tags:["Local","Fan Fav"], img:"https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80" },
    { title:"Maple Old Fashioned",   desc:"Canadian rye whisky, maple syrup, Angostura bitters, orange peel",                price:"$16", tags:["Canadian 🍁","Signature"], img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80" },
    { title:"House Cider",           desc:"Local Okanagan apple cider on tap — crisp, refreshing, 100% BC made",             price:"$8",  tags:["Local","BC 🍎"], img:"https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?auto=format&fit=crop&w=400&q=80" },
    { title:"Admiral Caesar",        desc:"Our take on Canada's cocktail: Clamato, vodka, house spice blend, celery & bacon", price:"$14", tags:["Canadian 🍁"], img:"https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=400&q=80" },
  ],
};

/* ── STATE ── */
let currentMonth  = "april";
let currentFilter = "all";
let currentMenu   = "food";
let rsvpEvent     = null;

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

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", async () => {
  // Load events from Google Sheets (falls back to hardcoded data if unavailable)
  await loadEventsFromSheets();
  initNavScroll();
  initReveal();
  initCounters();
  renderEvents();
  renderMenu();
  bindEventListeners();
  initGallery();
});

/* ── NAV SCROLL ── */
function initNavScroll() {
  const nav = document.getElementById("mainNav");
  const links = document.querySelectorAll(".nav-link[href^='#']");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
    // Active link highlight
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle("active-link", l.getAttribute("href") === `#${current}`);
    });
  }, { passive: true });
}

/* ── REVEAL ON SCROLL ── */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

/* ── COUNTERS ── */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      let current = 0;
      const step = target / 40;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current >= target) clearInterval(timer);
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat-number").forEach(el => observer.observe(el));
}

/* ── EVENTS RENDER ── */
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
      <div class="event-card" data-type="${ev.type}" data-id="${ev.id}"
           tabindex="0" role="button" aria-label="View event: ${ev.title}">
        <div class="event-card-img-wrap">
          <img src="${ev.img}" alt="${ev.title}" class="event-card-img" loading="lazy">
          <div class="event-card-img-overlay">
            <div class="event-date-block">
              <span class="day-num">${ev.day}</span>
              <span class="day-name">${ev.dayName}</span>
            </div>
            <span class="event-type-badge ${meta.badge}">
              <i class="fa-solid ${meta.icon}"></i> ${meta.label}
            </span>
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
    // Stagger reveal
    setTimeout(() => col.querySelector(".event-card")?.closest(".reveal")?.classList.add("visible"), i * 80);
  });

  // Bind RSVP buttons
  document.querySelectorAll(".event-rsvp-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openRSVP(+btn.dataset.id);
    });
  });
  // Card click also opens RSVP
  document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => openRSVP(+card.dataset.id));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") openRSVP(+card.dataset.id); });
  });
}

/* ── RSVP MODAL ── */
function openRSVP(id) {
  const allEvents = Object.values(EVENTS).flat();
  const ev = allEvents.find(e => e.id === id);
  if (!ev) return;
  rsvpEvent = ev;
  const meta = TYPE_META[ev.type];
  document.getElementById("rsvpEventType").textContent   = meta.label;
  document.getElementById("rsvpModalLabel").textContent  = ev.title;
  document.getElementById("rsvpModalMeta").textContent   = `${ev.dayName}, ${capitalizeFirst(currentMonth)} ${ev.day} · ${ev.time}`;
  document.getElementById("rsvpModalDesc").textContent   = ev.desc;

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
  const monthIndex = { april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12, january: 1, february: 2, march: 3 }[currentMonth] || 4;
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

/* ── MENU RENDER ── */
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const items = MENU[currentMenu];
  grid.innerHTML = `<div class="row g-4" id="menuItemsRow">${items.map(item => `
    <div class="col-sm-6 col-lg-3 reveal">
      <div class="menu-card">
        <img src="${item.img}" alt="${item.title}" class="menu-card-img" loading="lazy">
        <div class="menu-card-body">
          <div class="menu-card-title">${item.title}</div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <span class="menu-card-price">${item.price}</span>
            <div>${item.tags.map(t => `<span class="menu-tag">${t}</span>`).join("")}</div>
          </div>
        </div>
      </div>
    </div>`).join("")}</div>`;

  // Re-observe new reveals
  document.querySelectorAll("#menuGrid .reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 80);
  });
}

/* ── BIND LISTENERS ── */
function bindEventListeners() {
  // Month tabs
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

  // Filter pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderEvents();
    });
  });

  // Menu tabs
  document.querySelectorAll(".menu-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".menu-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMenu = btn.dataset.menu;
      renderMenu();
      // Update menu button text
      const menuTabButton = document.getElementById('menuTabButton');
      if (menuTabButton) {
        menuTabButton.textContent = currentMenu === 'food' ? 'All Food menu' : 'All Drink menu';
      }
    });
  });

  // Dropdown menu-tab links (Food Menu / Drink Menu)
  document.querySelectorAll('.nav-dropdown-item[data-menu-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.dataset.menuTab;
      // Switch menu tab
      document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
      const targetBtn = document.querySelector(`.menu-tab-btn[data-menu="${tab}"]`);
      if (targetBtn) { targetBtn.classList.add('active'); currentMenu = tab; renderMenu(); }
      // Scroll to menu section
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      const toggler = document.querySelector('.navbar-toggler');
      const menu = document.getElementById('navMenu');
      if (menu?.classList.contains('show')) toggler?.click();
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile menu
        const toggler = document.querySelector(".navbar-toggler");
        const menu = document.getElementById("navMenu");
        if (menu.classList.contains("show")) toggler.click();
      }
    });
  });
}

/* ── FORM HANDLERS ── */
function handleRSVP(e) {
  e.preventDefault();
  bootstrap.Modal.getInstance(document.getElementById("rsvpModal")).hide();
  showToast(`RSVP confirmed for "${rsvpEvent?.title}"! See you there 🍺`, "success");
}

function handleNewsletter(e) {
  e.preventDefault();
  e.target.reset();
  showToast("You're subscribed! Watch your inbox for events & specials. 🍁", "success");
}

/* ── TOAST ── */
function showToast(msg, type = "success") {
  const el = document.getElementById("toastMsg");
  const body = document.getElementById("toastBody");
  body.textContent = msg;
  el.className = `toast align-items-center border-0 toast-${type}`;
  new bootstrap.Toast(el, { delay: 4000 }).show();
}

/* ── RESERVATION HANDLER ── */
function handleReservation(e) {
  e.preventDefault();
  e.target.reset();
  showToast("Reservation confirmed! We'll see you soon. 🍁", "success");
}

/* ── GALLERY DATA ── */
const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    title: "The Admiral Bar"
  },
  {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    title: "Live Music Fridays"
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    title: "Signature Burgers"
  },
  {
    src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80",
    title: "Pub Wings"
  },
  {
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=600&q=80",
    title: "Chef's Special"
  },
  {
    src: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?auto=format&fit=crop&w=400&q=80",
    title: "Craft Beers"
  },
  {
    src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=400&q=80",
    title: "Live Band"
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    title: "Game Night Vibes"
  }
];

let currentGalleryIndex = 0;

/* ── GALLERY MODAL ── */
function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item[data-gallery-index]");

  galleryItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      currentGalleryIndex = parseInt(item.dataset.galleryIndex);
      updateGalleryModal();
    });
  });

  // Gallery modal navigation
  const prevBtn = document.getElementById("galleryPrevBtn");
  const nextBtn = document.getElementById("galleryNextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + GALLERY.length) % GALLERY.length;
      updateGalleryModal();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % GALLERY.length;
      updateGalleryModal();
    });
  }

  // Gallery horizontal scroll navigation
  const galleryContainer = document.getElementById("galleryContainer");
  const galleryPrevNav = document.getElementById("galleryPrevNav");
  const galleryNextNav = document.getElementById("galleryNextNav");

  if (galleryPrevNav && galleryContainer) {
    galleryPrevNav.addEventListener("click", () => {
      const scrollAmount = 300;
      galleryContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });
  }

  if (galleryNextNav && galleryContainer) {
    galleryNextNav.addEventListener("click", () => {
      const scrollAmount = 300;
      galleryContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  }
}

function updateGalleryModal() {
  const img = document.getElementById("galleryModalImg");
  const counter = document.getElementById("galleryCounter");

  if (img && GALLERY[currentGalleryIndex]) {
    img.src = GALLERY[currentGalleryIndex].src;
    img.alt = GALLERY[currentGalleryIndex].title;
  }

  if (counter) {
    counter.textContent = `${currentGalleryIndex + 1} / ${GALLERY.length}`;
  }
}

/* ── UTILS ── */
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

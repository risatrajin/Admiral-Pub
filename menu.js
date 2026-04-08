/* ── FOOD CATEGORY FILTER ── */
document.querySelectorAll('.menu-cat-pill[data-cat]').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.menu-cat-pill[data-cat]').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const cat = pill.dataset.cat;
    document.querySelectorAll('.menu-category[data-category]').forEach(sec => {
      sec.classList.toggle('hidden', cat !== 'all' && sec.dataset.category !== cat);
    });
  });
});

/* ── DRINK CATEGORY FILTER ── */
document.querySelectorAll('.menu-cat-pill[data-dcat]').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.menu-cat-pill[data-dcat]').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const cat = pill.dataset.dcat;
    document.querySelectorAll('.drink-category[data-dcategory]').forEach(sec => {
      sec.classList.toggle('hidden', cat !== 'all' && sec.dataset.dcategory !== cat);
    });
  });
});

/* ── JUMP TO TAB FROM URL HASH ── */
(function() {
  const hash = window.location.hash;
  if (hash === '#drinks') {
    document.querySelector('.menu-hero-tab[data-tab="drinks"]')?.classList.add('active');
    document.querySelector('.menu-hero-tab[data-tab="food"]')?.classList.remove('active');
    setTimeout(() => {
      document.getElementById('drinks')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
})();

/* ── HERO TAB TOGGLE ── */
document.querySelectorAll('.menu-hero-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-hero-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ==========================================================================
   KAPi · KaM·in – Variante „Studio“ – Verhalten
   Vanilla JS, keine Abhängigkeiten. Ohne JS bleibt alles sichtbar.
   ========================================================================== */
(function () {
  'use strict';
  var html = document.documentElement;
  html.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mehrsprachigkeit ---------- */
  var I18N = window.I18N || {};
  var originals = null;          // deutsche Originaltexte (werden beim ersten Umschalten gemerkt)
  var currentLang = 'de';

  // Text für JS-Ausgaben nachschlagen (Fallback: Deutsch)
  function t(key, fallback) {
    var dict = I18N[currentLang];
    return (dict && dict[key]) ? dict[key] : fallback;
  }

  function rememberOriginals() {
    if (originals) return;
    originals = { text: new Map(), attr: new Map() };
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      originals.text.set(el, /_html$/.test(key) ? el.innerHTML : el.textContent);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var map = {};
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length < 2) return;
        map[p[0].trim()] = el.getAttribute(p[0].trim());
      });
      originals.attr.set(el, map);
    });
  }

  function applyLang(lang) {
    if (!/^(de|uk|en)$/.test(lang)) lang = 'de';
    rememberOriginals();
    var dict = lang === 'de' ? null : (I18N[lang] || {});
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var isHtml = /_html$/.test(key);
      var value = dict && dict[key] ? dict[key] : originals.text.get(el);
      if (value === undefined) return;
      if (isHtml) el.innerHTML = value; else el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var orig = originals.attr.get(el) || {};
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length < 2) return;
        var attr = p[0].trim(), key = p[1].trim();
        var value = dict && dict[key] ? dict[key] : orig[attr];
        if (value !== undefined && value !== null) el.setAttribute(attr, value);
      });
    });
    currentLang = lang;
    html.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('kapi-lang', lang); } catch (e) { /* privater Modus */ }
    markToday(); // „Heute“-Texte in der neuen Sprache
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ---------- Header: Glas-Zustand & Mobile-Navigation ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? t('a11y.menuClose', 'Menü schließen') : t('a11y.menuOpen', 'Menü öffnen'));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && header.classList.contains('is-open')) { setMenu(false); toggle.focus(); } });
    header.querySelectorAll('.nav-panel a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    window.matchMedia('(min-width: 1200px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });
  }

  /* ---------- Programm: heutigen Tag hervorheben ---------- */
  function markToday() {
    var groups = Array.prototype.slice.call(document.querySelectorAll('.prog-group[data-day]'));
    var note = document.getElementById('prog-note');
    if (!groups.length) return;
    var today = new Date().getDay(); // 0 = Sonntag … 6 = Samstag
    var found = null;
    groups.forEach(function (g) {
      g.classList.remove('is-today');
      g.style.removeProperty('--today-color');
      var old = g.querySelector('.today-label'); if (old) old.remove();
      if (Number(g.getAttribute('data-day')) === today && today !== 0) found = g;
    });
    if (found) {
      var dot = found.querySelector('.dot');
      var color = dot && dot.style.getPropertyValue('--c') ? dot.style.getPropertyValue('--c').trim() : '#1d1d1b';
      found.classList.add('is-today');
      found.style.setProperty('--today-color', color);
      var label = document.createElement('span');
      label.className = 'today-label';
      label.textContent = t('programm.heute', 'Heute');
      found.querySelector('.prog-day').appendChild(label);
      if (note) note.hidden = true;
      return;
    }
    // Kein Angebot heute (Sonntag/Dienstag): nächsten Termin nennen
    var next = null;
    for (var i = 1; i <= 7 && !next; i++) {
      var d = (today + i) % 7;
      next = groups.filter(function (g) { return Number(g.getAttribute('data-day')) === d; })[0] || null;
    }
    if (next && note) {
      var dayName = next.querySelector('.prog-day span').textContent.trim();
      var row = next.querySelector('.prog-row');
      var title = row.querySelector('.prog-title').firstChild.textContent.trim();
      var time = row.querySelector('.prog-time').textContent.trim();
      note.textContent = t('programm.naechster', 'Nächster Termin') + ': ' + dayName + ', ' + time + ' – ' + title;
      note.hidden = false;
    }
  }
  markToday();

  /* ---------- Drucken ---------- */
  var printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  /* ---------- Scroll-Reveal ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function showAll() { reveals.forEach(function (el) { el.classList.add('is-in'); }); }
  if (reduceMotion || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
    // Sicherheitsnetz: nach 4 s alles zeigen, falls der Observer nicht feuert
    setTimeout(showAll, 4000);
  }

  /* ---------- Count-up bei Zahlen ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('.count[data-count]'));
  function formatNumber(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function countUp(el) {
    var target = Number(el.getAttribute('data-count')) || 0;
    var duration = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNumber(target * eased);
      if (p < 1) requestAnimationFrame(step); else el.textContent = formatNumber(target);
    }
    requestAnimationFrame(step);
  }
  if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- Formulare: mailto ohne Backend ---------- */
  // TODO: prüfen – später durch Backend / Newsletter-Tool ersetzen
  var helpForm = document.getElementById('help-form');
  if (helpForm) helpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = helpForm.querySelector('#f-name').value.trim();
    var email = helpForm.querySelector('#f-email').value.trim();
    var msg = helpForm.querySelector('#f-msg').value.trim();
    var body = t('form.mailName', 'Name') + ': ' + name + '\n' + t('form.mailEmail', 'E-Mail') + ': ' + email + '\n\n' + t('form.mailMessage', 'Nachricht') + ':\n' + msg;
    window.location.href = 'mailto:info@kam-in.de?subject=' + encodeURIComponent(t('form.mailSubject', 'Ich möchte helfen')) + '&body=' + encodeURIComponent(body);
  });
  var newsForm = document.getElementById('news-form');
  if (newsForm) newsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = newsForm.querySelector('#n-email').value.trim();
    var body = t('newsletter.mailBody', 'Bitte schickt mir das Monatsprogramm an:') + ' ' + email;
    window.location.href = 'mailto:info@kam-in.de?subject=' + encodeURIComponent(t('newsletter.mailSubject', 'Monatsprogramm abonnieren')) + '&body=' + encodeURIComponent(body);
  });

  /* ---------- Sprache beim Laden wiederherstellen ---------- */
  var saved = null;
  try { saved = localStorage.getItem('kapi-lang'); } catch (e) { /* ignorieren */ }
  if (saved && saved !== 'de') applyLang(saved);
})();

/* ==========================================================================
   KAPi – Variante „Editorial“ · Verhalten (Vanilla JS, ohne Abhängigkeiten)
   Sprache · Header · Mobile-Navigation · Hero-Maske · Scroll-Reveal (Signature-Hairline)
   · Count-up · „Heute“ im Programm · Drucken · mailto-Formulare
   ========================================================================== */
(function () {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js'); // Fallback, falls das Inline-Skript im <head> fehlt
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LANGS = ['de', 'uk', 'en'];
  const STORAGE_KEY = 'kapi-lang';
  const MAIL = 'info@kam-in.de'; // TODO: prüfen

  /* ---------- Sprache ---------------------------------------------------- */
  const originals = new WeakMap();      // Element → deutscher Originaltext/-HTML
  const attrOriginals = new WeakMap();  // Element → { attribut: Originalwert }
  let currentLang = 'de';

  // Übersetzung nachschlagen; fehlt der Schlüssel, bleibt der deutsche Fallback
  function t(key, fallback) {
    const dict = (window.I18N || {})[currentLang];
    return (dict && typeof dict[key] === 'string') ? dict[key] : fallback;
  }

  function applyLang(lang) {
    if (!LANGS.includes(lang)) lang = 'de';
    currentLang = lang;
    const dict = (window.I18N || {})[lang] || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const asHtml = key.endsWith('_html');
      if (!originals.has(el)) originals.set(el, asHtml ? el.innerHTML : el.textContent);
      const value = (lang !== 'de' && typeof dict[key] === 'string') ? dict[key] : originals.get(el);
      if (asHtml) el.innerHTML = value; else el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      if (!attrOriginals.has(el)) attrOriginals.set(el, {});
      const store = attrOriginals.get(el);
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        const parts = pair.split(':');
        if (parts.length < 2) return;
        const attr = parts[0].trim();
        const key = parts.slice(1).join(':').trim();
        if (!(attr in store)) store[attr] = el.getAttribute(attr) || '';
        const value = (lang !== 'de' && typeof dict[key] === 'string') ? dict[key] : store[attr];
        el.setAttribute(attr, value);
      });
    });

    root.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* privater Modus – egal */ }
    markToday(); // Label „Heute“ in der neuen Sprache
  }

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  let storedLang = null;
  try { storedLang = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignorieren */ }

  /* ---------- Programm: heutigen Wochentag markieren ---------------------- */
  const DAY_KEYS = ['programm.tag7', 'programm.tag1', 'programm.tag2', 'programm.tag3', 'programm.tag4', 'programm.tag5', 'programm.tag6'];
  const DAY_NAMES = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

  function markToday() {
    const rows = document.querySelectorAll('.week__row[data-day]');
    if (!rows.length) return;
    const today = new Date().getDay(); // 0 = Sonntag
    rows.forEach(function (row) {
      row.classList.remove('is-today');
      const old = row.querySelector('.label');
      if (old) old.remove();
      if (String(today) === row.getAttribute('data-day')) {
        row.classList.add('is-today');
        // Label als Geschwister der h3 (nicht hinein), damit die Überschrift „Mittwoch“ bleibt
        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = t('programm.heute', 'Heute');
        row.querySelector('.week__day').appendChild(label);
      }
    });
    // Sonntag: Hinweis auf den nächsten Termin (Montag)
    const note = document.getElementById('week-note');
    if (note) {
      if (today === 0) {
        const monday = t(DAY_KEYS[1], DAY_NAMES[1]);
        note.textContent = t('programm.naechster', 'Nächster Termin') + ': ' + monday + ', 15:00';
        note.hidden = false;
      } else {
        note.hidden = true;
      }
    }
  }

  /* ---------- Header: Glas-Zustand beim Scrollen -------------------------- */
  const header = document.querySelector('.header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile-Navigation ------------------------------------------ */
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');

  function setMenu(open) {
    header.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? t('nav.menuClose', 'Menü schließen') : t('nav.menuOpen', 'Menü öffnen'));
  }
  const mobileQuery = window.matchMedia('(max-width: 1199px)'); // muss zum Breakpoint in style.css passen
  // Eingeklapptes Mobilmenü für Hilfstechnik verbergen; auf Desktop ist die Navigation immer da
  function syncNavHidden() {
    const collapsed = mobileQuery.matches && toggle.getAttribute('aria-expanded') !== 'true';
    if (collapsed) nav.setAttribute('aria-hidden', 'true'); else nav.removeAttribute('aria-hidden');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); syncNavHidden(); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) { setMenu(false); syncNavHidden(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); syncNavHidden(); toggle.focus(); }
    });
    window.addEventListener('resize', function () { if (!mobileQuery.matches) setMenu(false); syncNavHidden(); });
    syncNavHidden();
  }

  /* ---------- Hero: Wörter aus einer Maske aufsteigen lassen -------------- */
  function maskWords(heading) {
    const frag = document.createDocumentFragment();
    let index = 0;
    let lastInner = null;

    function addWord(content, isNode) {
      const w = document.createElement('span'); w.className = 'w';
      const inner = document.createElement('span'); inner.className = 'w__in';
      inner.style.setProperty('--d', (index++ * 90) + 'ms');
      if (isNode) inner.appendChild(content); else inner.textContent = content;
      w.appendChild(inner);
      frag.appendChild(w);
      lastInner = inner;
    }

    Array.from(heading.childNodes).forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/(\s+)/).forEach(function (token) {
          if (!token) return;
          if (/^\s+$/.test(token)) { frag.appendChild(document.createTextNode(' ')); lastInner = null; return; }
          // Satzzeichen direkt nach einem Wort hängen sich an dieses an (kein Umbruch vor „.“)
          if (lastInner && /^[.,!?;:…]+$/.test(token)) { lastInner.appendChild(document.createTextNode(token)); return; }
          addWord(token, false);
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        addWord(node, true);
      }
    });
    heading.replaceChildren(frag);
  }

  const heroTitle = document.querySelector('.hero__title');

  /* ---------- Scroll-Reveal + Signature-Hairline + Count-up --------------- */
  function countUp(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target) || target === 0 || reducedMotion) { el.textContent = String(target || 0); return; }
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setupReveal() {
    const targets = document.querySelectorAll('.reveal, .section-head, .stats');
    if (!('IntersectionObserver' in window) || reducedMotion) {
      targets.forEach(function (el) { el.classList.add('is-in'); });
      document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        if (entry.target.classList.contains('stats')) {
          entry.target.querySelectorAll('[data-count]').forEach(countUp);
        }
        io.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Sanftes Scrollen zu Ankern (nur Nutzerklicks) --------------- */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.classList.contains('skip-link')) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) { e.preventDefault(); return; } // Platzhalter „#“ (PDF-Link, TODO) springt nicht nach oben
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    if (history.pushState) history.pushState(null, '', '#' + id);
  });

  /* ---------- Drucken ----------------------------------------------------- */
  document.querySelectorAll('[data-print]').forEach(function (btn) {
    btn.addEventListener('click', function () { window.print(); });
  });

  /* ---------- Formulare ohne Backend: mailto ------------------------------ */
  // TODO: Später durch Backend / Formular-Dienst bzw. Newsletter-Tool ersetzen.
  function mailto(subject, body) {
    window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  const helpForm = document.getElementById('help-form');
  if (helpForm) {
    helpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = helpForm.elements.name.value.trim();
      const email = helpForm.elements.email.value.trim();
      const msg = helpForm.elements.message.value.trim();
      if (!name || !email) { helpForm.reportValidity(); return; }
      const subject = t('mitmachen.form.mailSubject', 'Ich möchte helfen');
      const body = t('mitmachen.form.name', 'Name') + ': ' + name + '\n' + t('mitmachen.form.email', 'E-Mail') + ': ' + email + '\n\n' + msg;
      mailto(subject, body);
    });
  }
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = nlForm.elements.email.value.trim();
      if (!email) { nlForm.reportValidity(); return; }
      mailto(t('newsletter.mailSubject', 'Monatsprogramm abonnieren'), t('newsletter.mailBody', 'Bitte schickt mir das Monatsprogramm an') + ': ' + email);
    });
  }

  /* ---------- Start ------------------------------------------------------- */
  // Sprache zuerst – ein Fehler hier darf die Hero-Headline nicht unsichtbar lassen
  try { applyLang(storedLang && LANGS.includes(storedLang) ? storedLang : 'de'); } catch (e) { /* Deutsch bleibt stehen */ }
  if (heroTitle) {
    try { if (!reducedMotion) maskWords(heroTitle); }
    finally { heroTitle.classList.add('is-ready'); }
  }
  setupReveal();
})();

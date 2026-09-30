/* ==========================================================================
   KAPi · Bürgertreff KaM·in – Variante „Aurora“ · Skript
   Reines Vanilla JS: Header-Zustand, Mobile-Navigation, Sprachumschaltung,
   Scroll-Reveal, Count-up, „Heute“-Logik im Programm, Aurora-Parallaxe,
   Druck-Button und mailto-Formulare. Ohne JS bleibt die Seite vollständig lesbar.
   ========================================================================== */
(function () {
  'use strict';

  const html = document.documentElement;
  html.classList.add('js');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const I18N = window.I18N || {};
  const STORAGE_KEY = 'kapi-lang';
  let currentLang = 'de';

  /* ---------- Übersetzung nachschlagen (Fallback: Deutsch) ---------- */
  function t(key, fallback) {
    const table = I18N[currentLang];
    return (table && typeof table[key] === 'string') ? table[key] : fallback;
  }

  /* ---------- Sprachumschaltung ----------
     Beim ersten Umschalten werden die deutschen Originale gemerkt (dataset),
     danach aus window.I18N[lang] ersetzt. Fehlt ein Schlüssel, bleibt Deutsch stehen. */
  function applyLang(lang) {
    currentLang = (lang === 'uk' || lang === 'en') ? lang : 'de';
    const table = I18N[currentLang] || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const useHtml = key.endsWith('_html');
      if (el.tagName === 'META') return; // Meta-Description läuft über data-i18n-attr
      if (el.dataset.i18nOrig === undefined) {
        el.dataset.i18nOrig = useHtml ? el.innerHTML : el.textContent;
      }
      const value = (currentLang !== 'de' && typeof table[key] === 'string') ? table[key] : el.dataset.i18nOrig;
      if (useHtml) el.innerHTML = value; else el.textContent = value;
    });

    // Attribute: data-i18n-attr="attr:key;attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        const parts = pair.split(':');
        if (parts.length < 2) return;
        const attr = parts[0].trim();
        const key = parts.slice(1).join(':').trim();
        const origAttr = 'data-i18n-orig-' + attr;
        if (!el.hasAttribute(origAttr)) el.setAttribute(origAttr, el.getAttribute(attr) || '');
        const value = (currentLang !== 'de' && typeof table[key] === 'string') ? table[key] : el.getAttribute(origAttr);
        el.setAttribute(attr, value);
      });
    });

    html.lang = currentLang;
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === currentLang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) { /* privater Modus */ }

    markToday(); // Badge/„Nächster Termin“ in der neuen Sprache
  }

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  /* ---------- Header: Glas-Zustand beim Scrollen ---------- */
  const header = document.querySelector('.site-header');
  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Mobile-Navigation ---------- */
  const burger = document.querySelector('.burger');
  const nav = document.getElementById('nav');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-label', open ? t('nav.menu.close', 'Menü schließen') : t('nav.menu', 'Menü öffnen'));
  }
  if (burger && nav) {
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') { setMenu(false); burger.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1080 && burger.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
  }

  /* ---------- Scroll-Reveal (nur transform/opacity) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
    // Sicherheitsnetz: alles, was oberhalb der aktuellen Viewport-Unterkante liegt, ist sichtbar
    // (deckt schnelles Scrollen, Sprungmarken und langsame Geräte ab)
    const pending = new Set(revealEls);
    function revealPassed() {
      if (!pending.size) return;
      const limit = window.innerHeight;
      pending.forEach(function (el) {
        if (el.getBoundingClientRect().top < limit) { el.classList.add('is-in'); pending.delete(el); }
      });
    }
    window.addEventListener('scroll', revealPassed, { passive: true });
    window.addEventListener('load', function () { setTimeout(revealPassed, 300); });
  }

  /* ---------- Aurora pausieren, sobald der Hero aus dem Bild ist (spart Rechenzeit) ---------- */
  const heroEl = document.querySelector('.hero');
  if (heroEl && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroEl.classList.toggle('is-off', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(heroEl);
  }

  /* ---------- Count-up bei Zahlen ---------- */
  const nums = document.querySelectorAll('.num[data-count]');
  function countUp(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (reducedMotion.matches || target === 0) { el.textContent = String(target); return; }
    const duration = 1400;
    const start = performance.now();
    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if (nums.length && 'IntersectionObserver' in window && !reducedMotion.matches) {
    const numIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { countUp(entry.target); numIo.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { numIo.observe(el); });
  }

  /* ---------- Programm: heutigen Wochentag markieren ----------
     data-day: 1 = Montag … 6 = Samstag. Sonntag (0): Hinweis „Nächster Termin: Montag …“. */
  const DAY_NAMES_DE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  function markToday() {
    const rows = document.querySelectorAll('.prog__row[data-day]');
    if (!rows.length) return;
    const today = new Date().getDay();
    const next = document.querySelector('.prog__next');
    const nextText = document.querySelector('.prog__next-text');
    let found = false;

    rows.forEach(function (row) {
      const isToday = parseInt(row.getAttribute('data-day'), 10) === today;
      // Monatliche Angebote (Feierabendtreff) finden nicht an jedem Wochentag statt:
      // kein „Heute“, sondern ein neutraler Hinweis auf das Monatsprogramm.
      const monthly = row.getAttribute('data-freq') === 'monthly';
      row.classList.toggle('is-today', isToday && !monthly);
      const old = row.querySelector('.badge');
      if (old) old.remove();
      if (isToday) {
        const badge = document.createElement('span');
        const title = row.querySelector('.prog__title');
        if (monthly) {
          badge.className = 'badge badge--note';
          badge.textContent = t('programm.monatlich.badge', 'Termin im Monatsprogramm');
        } else {
          found = true;
          badge.className = 'badge badge--today';
          badge.textContent = t('programm.heute', 'Heute');
        }
        title.insertAdjacentElement('afterend', badge);
      }
    });

    // Kein wöchentliches Angebot heute (Sonntag, Dienstag, Mittwoch): nächsten Termin nennen
    if (next && nextText) {
      if (found) { next.hidden = true; return; }
      let nextRow = null;
      for (let offset = 1; offset <= 7 && !nextRow; offset++) {
        const d = (today + offset) % 7;
        nextRow = document.querySelector('.prog__row[data-day="' + d + '"]:not([data-freq="monthly"])');
      }
      if (nextRow) {
        const day = parseInt(nextRow.getAttribute('data-day'), 10);
        const dayName = t('days.long.' + day, DAY_NAMES_DE[day]);
        const title = nextRow.querySelector('.prog__title').textContent.trim();
        const time = nextRow.querySelector('.prog__time').childNodes[0].textContent.trim();
        nextText.textContent = dayName + ', ' + time + ' – ' + title;
        next.hidden = false;
      }
    }
  }

  /* ---------- Aurora-Parallaxe (nur Desktop, nicht bei reduced-motion) ---------- */
  const aurora = document.querySelector('.aurora');
  const hero = document.querySelector('.hero');
  if (aurora && hero && !reducedMotion.matches) {
    let ticking = false;
    const desktop = window.matchMedia('(min-width: 1081px)');
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        if (!desktop.matches) { aurora.style.transform = ''; return; }
        const y = window.scrollY;
        if (y > hero.offsetHeight + 200) return;
        aurora.style.transform = 'translate3d(0, ' + (y * 0.3).toFixed(1) + 'px, 0)';
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Sanftes Scrollen zu Ankern (per JS, damit reduced-motion respektiert wird) ----------
     Der Skip-Link bleibt beim Browser-Standard (springt sofort und fokussiert <main tabindex="-1">).
     Bei allen anderen Ankern folgt der Fokus dem Sprung, damit Tastatur und Screenreader im Ziel weiterlesen. */
  function focusTarget(target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    try { target.focus({ preventScroll: true }); } catch (err) { target.focus(); }
  }
  document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href').slice(1);
      if (!id) { e.preventDefault(); return; } // leerer Anker (Platzhalter, z. B. PDF folgt) springt nicht nach oben
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      if (history.pushState) history.pushState(null, '', '#' + id);
      focusTarget(target);
    });
  });

  /* ---------- Programm drucken ---------- */
  const printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  /* ---------- Formulare ohne Backend: mailto öffnen ----------
     TODO: später durch Formular-Dienst / Newsletter-Tool ersetzen. */
  const MAIL = 'info@kam-in.de'; // TODO: prüfen
  const helpForm = document.getElementById('help-form');
  if (helpForm) {
    helpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = helpForm.querySelector('#f-name').value.trim();
      const mail = helpForm.querySelector('#f-mail').value.trim();
      const msg = helpForm.querySelector('#f-msg').value.trim();
      const subject = t('mail.help.subject', 'Ich möchte bei KaM·in helfen');
      const body = t('mail.help.name', 'Name') + ': ' + name + '\n' +
                   t('mail.help.email', 'E-Mail') + ': ' + mail + '\n\n' + msg;
      window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const mail = nlForm.querySelector('#nl-mail').value.trim();
      const subject = t('mail.newsletter.subject', 'Monatsprogramm abonnieren');
      const body = t('mail.newsletter.body', 'Bitte schickt mir das Monatsprogramm an:') + ' ' + mail;
      window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- Start: gespeicherte Sprache wiederherstellen, „Heute“ setzen ---------- */
  let saved = 'de';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'de'; } catch (e) { /* ignorieren */ }
  if (saved !== 'de') applyLang(saved); else markToday();
})();

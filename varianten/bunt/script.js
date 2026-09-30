/* =====================================================================
   KAPi – Kappelrodeck International · Variante „Bunt & Lebendig“
   script.js – Vanilla JS, keine Abhängigkeiten.
   Inhalt: JS-Kennung, Glas-Nav, Mobile-Menü, Sprachumschalter (i18n),
   Hero-Wortanimation, „Heute“-Logik im Programm, Drucken, Scroll-Reveal,
   Karten-Tilt, magnetischer Button, mailto-Formulare.
   ===================================================================== */
(function () {
  'use strict';

  // JS-Kennung: erst damit dürfen Reveal-Klassen Inhalte verstecken
  var root = document.documentElement;
  root.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Header: Zustand beim Scrollen ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile-Navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('is-open', open);
    var label = open ? (toggle.getAttribute('data-label-close') || 'Menü schließen')
                     : (toggle.getAttribute('data-label-open') || 'Menü öffnen');
    toggle.setAttribute('aria-label', label);
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    // Linkklick schließt das Menü
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    // Escape schließt das Menü
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    // Klick außerhalb schließt das Menü
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') === 'true' && !e.target.closest('.site-header')) setMenu(false);
    });
  }

  /* ---------- Mehrsprachigkeit ---------- */
  var LANGS = ['de', 'uk', 'en'];
  var STORAGE_KEY = 'kapi-lang';
  var originals = new Map();      // Element → deutscher Originaltext
  var originalAttrs = new Map();  // Element → { attribut: Originalwert }

  function getValue(el, key) {
    // meta-Tags haben keinen Text – dort steckt der Inhalt im content-Attribut
    if (el.tagName === 'META') return el.getAttribute('content') || '';
    return key.slice(-5) === '_html' ? el.innerHTML : el.textContent;
  }
  function setValue(el, key, value) {
    if (el.tagName === 'META') { el.setAttribute('content', value); return; }
    if (key.slice(-5) === '_html') el.innerHTML = value; else el.textContent = value;
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'de';
    var dict = (window.I18N && window.I18N[lang]) || {};

    // Textinhalte
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!originals.has(el)) originals.set(el, getValue(el, key));
      var original = originals.get(el);
      var value = (lang !== 'de' && typeof dict[key] === 'string') ? dict[key] : original;
      setValue(el, key, value);
    });

    // Attribute: data-i18n-attr="placeholder:form.name.placeholder;aria-label:nav.menu"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      if (!originalAttrs.has(el)) originalAttrs.set(el, {});
      var store = originalAttrs.get(el);
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key = parts.slice(1).join(':').trim();
        if (!(attr in store)) store[attr] = el.getAttribute(attr) || '';
        var value = (lang !== 'de' && typeof dict[key] === 'string') ? dict[key] : store[attr];
        el.setAttribute(attr, value);
      });
    });

    root.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* privater Modus – egal */ }

    // Hero-Headline neu in Wörter zerlegen (Text hat sich evtl. geändert)
    splitHeroWords();
    // Menü-Beschriftung aktualisieren
    if (toggle) {
      toggle.setAttribute('data-label-open', (lang !== 'de' && dict['nav.menu']) || 'Menü öffnen');
      toggle.setAttribute('data-label-close', (lang !== 'de' && dict['nav.menu.close']) || 'Menü schließen');
    }
  }

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  /* ---------- Hero: Wort-für-Wort-Einblendung ---------- */
  var heroTitle = document.querySelector('.hero-title');
  function splitHeroWords() {
    if (!heroTitle) return;
    var text = heroTitle.textContent.trim();
    var words = text.split(/\s+/);
    heroTitle.textContent = '';
    words.forEach(function (word, i) {
      var outer = document.createElement('span');
      outer.className = 'w';
      var inner = document.createElement('span');
      inner.textContent = word;
      inner.style.setProperty('--i', i);
      outer.appendChild(inner);
      heroTitle.appendChild(outer);
      if (i < words.length - 1) heroTitle.appendChild(document.createTextNode(' '));
    });
  }

  // Sprache beim Laden wiederherstellen (setzt auch die Hero-Wörter)
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignorieren */ }
  applyLang(saved || 'de');

  /* ---------- Programm: „Heute“ hervorheben ---------- */
  (function markToday() {
    var day = new Date().getDay(); // 0 = Sonntag … 6 = Samstag
    var tiles = document.querySelectorAll('.tile[data-day]');
    var found = false;
    tiles.forEach(function (tile) {
      if (parseInt(tile.getAttribute('data-day'), 10) === day) {
        tile.classList.add('is-today');
        var badge = tile.querySelector('.badge--heute');
        if (badge) badge.hidden = false;
        found = true;
      }
    });
    var notice = document.getElementById('programm-naechster');
    if (notice && !found && day === 0) notice.hidden = false;
  })();

  /* ---------- Drucken ---------- */
  var printBtn = document.getElementById('btn-print');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  // TODO: prüfen – PDF-Link ist noch ein Platzhalter
  var pdfBtn = document.getElementById('btn-pdf');
  if (pdfBtn) pdfBtn.addEventListener('click', function (e) {
    if (pdfBtn.getAttribute('href') === '#') e.preventDefault();
  });

  /* ---------- Scroll-Reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    // Sicherheitsnetz: nach dem Laden alles sichtbar machen, was schon im Bild ist
    window.addEventListener('load', function () {
      reveals.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-visible');
      });
    });
  }

  /* ---------- Karten-Tilt (max. 4°, nur Desktop mit Maus) ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.tilt').forEach(function (card) {
      card.addEventListener('pointerenter', function () {
        card.style.transition = 'transform .18s ease, box-shadow .5s cubic-bezier(.2,.8,.2,1)';
      });
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (-y * 4).toFixed(2) + 'deg) rotateY(' + (x * 4).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave', function () {
        card.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1), box-shadow .5s cubic-bezier(.2,.8,.2,1)';
        card.style.transform = '';
      });
    });

    /* ---------- Magnetischer Haupt-Button ---------- */
    document.querySelectorAll('.magnet').forEach(function (btn) {
      var area = btn.parentElement || btn;
      var RADIUS = 110;
      area.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var dx = e.clientX - cx, dy = e.clientY - cy;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RADIUS + r.width / 2) {
          btn.style.transform = 'translate(' + (dx * 0.28).toFixed(1) + 'px, ' + (dy * 0.28).toFixed(1) + 'px)';
        } else {
          btn.style.transform = '';
        }
      });
      area.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- Formulare ohne Backend: mailto: ---------- */
  // TODO: später durch Formular-Dienst / Newsletter-Tool (Brevo, CleverReach) ersetzen
  var MAIL = 'info@kam-in.de';
  function mailto(subject, body) {
    return 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  var helfen = document.getElementById('helfen-form');
  if (helfen) helfen.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = (helfen.querySelector('#f-name') || {}).value || '';
    var email = (helfen.querySelector('#f-email') || {}).value || '';
    var msg = (helfen.querySelector('#f-msg') || {}).value || '';
    var body = 'Hallo KAPi-Team,\n\nich möchte helfen.\n\nName: ' + name + '\nE-Mail: ' + email + '\n\n' + msg + '\n';
    window.location.href = mailto('Ich möchte helfen – ' + name, body);
  });
  var newsletter = document.getElementById('newsletter-form');
  if (newsletter) newsletter.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = (newsletter.querySelector('#nl-email') || {}).value || '';
    var body = 'Hallo KAPi-Team,\n\nbitte schickt mir das Monatsprogramm an: ' + email + '\n';
    window.location.href = mailto('Monatsprogramm abonnieren', body);
  });
})();

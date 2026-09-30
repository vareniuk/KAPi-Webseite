/* ============================================================
   KAPi – Kappelrodeck International · Bürgertreff KaM·in
   Variante „Klar & Leicht“ – Vanilla JS, keine Abhängigkeiten.
   Module: Header-Zustand, Mobile-Nav, Scroll-Reveal, Orb-Parallax,
   Heute-Logik im Programm, Drucken, mailto-Formulare, Mehrsprachigkeit.
   ============================================================ */
(function () {
  'use strict';

  var doc = document.documentElement;
  // Kennzeichen „JS aktiv“: erst damit dürfen Reveal-Klassen Inhalte verstecken.
  doc.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Header: feine Linie + Schatten nach dem Scrollen ---------- */
  var header = document.querySelector('.header');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ---------- Sanftes Scrollen zu Ankern (per JS, damit programmatisches Scrollen sofort bleibt) ---------- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute('href').slice(1);
    var target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    if (history.pushState) history.pushState(null, '', '#' + id);
    if (id === 'main') target.focus({ preventScroll: true });
  });

  /* ---------- Mobile Navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    // Linkklick schließt das Menü
    nav.addEventListener('click', function (e) {
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
      if (toggle.getAttribute('aria-expanded') === 'true' && !e.target.closest('.header')) setMenu(false);
    });
  }

  /* ---------- Scroll-Reveal (fade-up + minimales Scale, gestaffelt) ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function showAll() {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
    // Sicherheitsnetz: beim Scrollen alles zeigen, was im Viewport liegt oder bereits darüber ist –
    // so bleibt nichts unsichtbar, auch bei sehr schnellem Scrollen.
    var pending = revealEls.slice();
    var ticking = false;
    function checkPending() {
      ticking = false;
      pending = pending.filter(function (el) {
        if (el.classList.contains('is-visible')) return false;
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92) { el.classList.add('is-visible'); return false; }
        return true;
      });
    }
    window.addEventListener('scroll', function () {
      if (!pending.length || ticking) return;
      ticking = true; requestAnimationFrame(checkPending);
    }, { passive: true });
    setTimeout(checkPending, 900);
  }
  // Wechselt der Nutzer zu reduced-motion, alles sichtbar machen
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', function (e) { if (e.matches) showAll(); });

  /* ---------- Orbs: minimale, gedämpfte Reaktion auf die Mausposition (nur Desktop) ---------- */
  var hero = document.querySelector('.hero');
  var orbs = Array.prototype.slice.call(document.querySelectorAll('.orb'));
  var finePointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
  if (hero && orbs.length && finePointer.matches && !reduceMotion.matches) {
    var raf = null;
    hero.addEventListener('pointermove', function (e) {
      var rect = hero.getBoundingClientRect();
      var nx = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 … 0.5
      var ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        orbs.forEach(function (orb, i) {
          var depth = (i % 3 + 1) * 14;                  // 14 / 28 / 42 px maximaler Versatz
          var dir = i % 2 === 0 ? 1 : -1;
          orb.style.setProperty('--px', (nx * depth * dir).toFixed(1));
          orb.style.setProperty('--py', (ny * depth * dir).toFixed(1));
        });
        raf = null;
      });
    });
    hero.addEventListener('pointerleave', function () {
      orbs.forEach(function (orb) { orb.style.setProperty('--px', 0); orb.style.setProperty('--py', 0); });
    });
  }

  /* ---------- Programm: heutigen Wochentag hervorheben ---------- */
  var progItems = Array.prototype.slice.call(document.querySelectorAll('.prog[data-day]'));
  var note = document.getElementById('prog-note');
  var noteText = document.getElementById('prog-note-text');

  function updateToday() {
    if (!progItems.length) return;
    var today = new Date().getDay(); // 0 = Sonntag … 6 = Samstag
    var hasToday = false;
    progItems.forEach(function (li) {
      var isToday = parseInt(li.getAttribute('data-day'), 10) === today;
      li.classList.toggle('is-today', isToday);
      var badge = li.querySelector('.badge--heute');
      if (badge) badge.hidden = !isToday;
      if (isToday) hasToday = true;
    });
    if (!note || !noteText) return;
    if (hasToday) { note.hidden = true; return; }
    // Kein Angebot heute (z. B. Sonntag): nächsten Termin nennen
    for (var i = 1; i <= 7; i++) {
      var d = (today + i) % 7;
      var next = null;
      for (var j = 0; j < progItems.length; j++) {
        if (parseInt(progItems[j].getAttribute('data-day'), 10) === d) { next = progItems[j]; break; }
      }
      if (next) {
        var day = next.querySelector('.prog__day');
        var time = next.querySelector('.prog__time');
        var name = next.querySelector('.prog__name');
        noteText.textContent = [day && day.textContent, time && time.textContent].filter(Boolean).join(', ') +
          (name ? ' – ' + name.textContent : '');
        note.hidden = false;
        return;
      }
    }
  }
  updateToday();

  /* ---------- Programm drucken ---------- */
  var printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  /* ---------- Formulare ohne Backend: mailto mit vorbefülltem Betreff/Body ---------- */
  // TODO: später durch ein Formular-Backend bzw. Newsletter-Tool (Brevo/CleverReach) ersetzen.
  var MAIL = 'info@kam-in.de'; // TODO: prüfen

  var helfen = document.getElementById('helfen-form');
  if (helfen) {
    helfen.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('f-name') || {}).value || '';
      var email = (document.getElementById('f-email') || {}).value || '';
      var msg = (document.getElementById('f-msg') || {}).value || '';
      var subject = 'Ich möchte helfen – ' + (name.trim() || 'Anfrage über die Webseite');
      var body = 'Name: ' + name + '\nE-Mail: ' + email + '\n\n' + msg + '\n';
      window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  var newsletter = document.getElementById('newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (document.getElementById('n-email') || {}).value || '';
      var subject = 'Monatsprogramm abonnieren';
      var body = 'Bitte schickt mir das Monatsprogramm von KaM·in an: ' + email + '\n';
      window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- Mehrsprachigkeit (DE Standard, UK, EN aus window.I18N) ---------- */
  var LANGS = ['de', 'uk', 'en'];
  var STORAGE_KEY = 'kapi-lang';
  var originals = new WeakMap();      // Element → deutscher Originaltext
  var originalAttrs = new WeakMap();  // Element → { attribut: Originalwert }

  function getDict(lang) {
    return (window.I18N && window.I18N[lang]) || {};
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'de';
    var dict = getDict(lang);

    // Textinhalte (Schlüssel mit „_html“ → innerHTML, <meta> → content-Attribut)
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      var isHtml = /_html$/.test(key);
      var isMeta = el.tagName === 'META';
      if (!originals.has(el)) {
        originals.set(el, isMeta ? el.getAttribute('content') : (isHtml ? el.innerHTML : el.textContent));
      }
      var value = lang === 'de' ? originals.get(el) : dict[key];
      if (typeof value !== 'string') value = originals.get(el); // fehlender Schlüssel → Deutsch bleibt
      if (isMeta) el.setAttribute('content', value);
      else if (isHtml) el.innerHTML = value;
      else el.textContent = value;
    });

    // Attribute: data-i18n-attr="placeholder:form.name_ph;aria-label:a11y.menu"
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-attr]'), function (el) {
      var store = originalAttrs.get(el);
      if (!store) { store = {}; originalAttrs.set(el, store); }
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key = parts.slice(1).join(':').trim();
        if (!attr || !key) return;
        if (!(attr in store)) store[attr] = el.getAttribute(attr);
        var value = lang === 'de' ? store[attr] : dict[key];
        if (typeof value !== 'string') value = store[attr];
        if (value !== null) el.setAttribute(attr, value);
      });
    });

    doc.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* privater Modus o. ä. */ }

    updateToday(); // Hinweistext im Programm in der neuen Sprache neu aufbauen
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  // Gespeicherte Sprache wiederherstellen
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
  if (saved && saved !== 'de' && LANGS.indexOf(saved) !== -1) applyLang(saved);
})();

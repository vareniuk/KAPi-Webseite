/* KAPi Website — Hero-Entrance aufräumen (stabiler Endzustand nach der Animation) */
(function () {
  function cleanup(el) {
    el.style.animation = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  }
  function init() {
    var els = Array.prototype.slice.call(document.querySelectorAll('.hero .reveal'));
    els.forEach(function (el) {
      el.addEventListener('animationend', function () { cleanup(el); }, { once: true });
    });
    /* Fallback: nach 2 s in jedem Fall aufräumen */
    setTimeout(function () { els.forEach(cleanup); }, 2000);

    initIPlay();
  }

  /* „KAPi ist i…“ — das wandelbare i */
  function initIPlay() {
    var rest = document.getElementById('iplay-rest');
    var iEl = document.getElementById('iplay-i');
    if (!rest || !iEl) return;

    var words = [
      { w: 'nternational.', c: '#e2231a' },
      { w: 'ntegrativ.', c: '#0a93d6' },
      { w: 'nterkulturell.', c: '#6aa12f' },
      { w: 'nklusiv.', c: '#ef8f1e' },
      { w: 'nspirierend.', c: '#c52866' },
      { w: 'ntellektuell.', c: '#f4b400' },
      { w: 'mmer offen.', c: '#e2231a' }
    ];
    var idx = 0;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    rest.addEventListener('animationend', function () {
      rest.classList.remove('swap');
      rest.style.opacity = '1';
      rest.style.transform = 'none';
    });

    setInterval(function () {
      idx = (idx + 1) % words.length;
      rest.textContent = words[idx].w;
      iEl.style.color = words[idx].c;
      if (!reduced) {
        rest.style.opacity = '';
        rest.style.transform = '';
        rest.classList.remove('swap');
        void rest.offsetWidth; /* Animation neu starten */
        rest.classList.add('swap');
        /* Fallback: falls die Animation nicht läuft, Endzustand erzwingen */
        setTimeout(function () {
          rest.classList.remove('swap');
          rest.style.opacity = '1';
          rest.style.transform = 'none';
        }, 700);
      }
    }, 2600);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

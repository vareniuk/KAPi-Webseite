/* KaM·in — shared UI: icons, placeholders, header, footer, switches */

/* ---------- Icons (simple, friendly stroke icons) ---------- */
const ICON_PATHS = {
  chat:   'M4 5h16v10H9l-4 4v-4H4z',
  book:   'M5 4h9a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H5zM19 4h0a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h0z',
  needle: 'M5 19 19 5M16 5h3v3M9 15l-3 1 1-3',
  dice:   'M5 5h14v14H5zM9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01',
  music:  'M9 18V6l10-2v12M9 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM19 16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z',
  cup:    'M6 8h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM17 9h2a2 2 0 0 1 0 4h-2M6 21h11',
  drum:   'M4 9c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 9v6c0 1.7 3.6 3 8 3s8-1.3 8-3V9M16 4l3-1M9 4 6 2',
  clock:  'M12 7v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z',
  pin:    'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  heart:  'M12 20s-7-4.6-9.2-9C1.3 8.2 2.6 5 6 5c2 0 3.2 1.3 4 2.4C10.8 6.3 12 5 14 5c3.4 0 4.7 3.2 3.2 6-2.2 4.4-9.2 9-9.2 9z',
  calendar:'M4 6h16v15H4zM4 10h16M8 3v4M16 3v4',
  mail:   'M4 6h16v12H4zM4 7l8 6 8-6',
  phone:  'M6 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L17 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z',
  insta:  'M4 4h16v16H4zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17.5 6.5h.01',
  arrow:  'M5 12h14M13 6l6 6-6 6',
  arrowL: 'M19 12H5M11 6l-6 6 6 6',
  menu:   'M4 7h16M4 12h16M4 17h16',
  close:  'M6 6l12 12M18 6 6 18',
  edit:   'M5 19h14M7 15l9.5-9.5a1.8 1.8 0 0 1 2.5 2.5L9.5 17.5 5 19l1.5-4z',
  trash:  'M5 7h14M9 7V5h6v2M6 7l1 13h10l1-13',
  plus:   'M12 5v14M5 12h14',
  check:  'M5 13l4 4L19 7',
  globe:  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.5 6 3.5 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.5 6-3.5 9S9.5 18.5 12 21',
  chevron:'M6 9l6 6 6-6',
  arrowUp:'M12 19V5M6 11l6-6 6 6',
  arrowDown:'M12 5v14M6 13l6 6 6-6',
  sun:    'M12 4V2M12 22v-2M4 12H2M22 12h-2M6 6 4.5 4.5M19.5 19.5 18 18M18 6l1.5-1.5M4.5 19.5 6 18M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  users:  'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M16 20h5a4.5 4.5 0 0 0-3-4.2',
};

function Icon({ name, size = 24, stroke = 2.1, style, className }) {
  const d = ICON_PATHS[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={style} className={className} aria-hidden="true">
      {d.split('M').filter(Boolean).map((seg, i) => <path key={i} d={'M' + seg} />)}
    </svg>
  );
}

/* ---------- Photo placeholder (tinted stripes + monospace caption) ---------- */
function Photo({ label, color = 'green', ratio = '4 / 3', round = 'var(--radius)', style }) {
  const c = window.BRAND[color] || window.BRAND.green;
  return (
    <div className="photo" style={{
      aspectRatio: ratio, borderRadius: round,
      background: `repeating-linear-gradient(135deg, ${c}14 0 14px, ${c}22 14px 28px)`,
      border: `1.5px dashed ${c}66`,
      ...style,
    }}>
      <div className="photo__inner">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .85 }}>
          <path d="M4 7h3l1.5-2h7L17 7h3v12H4z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
        <span className="photo__cap" style={{ color: c }}>{label}</span>
      </div>
    </div>
  );
}

/* ---------- Brand logo ---------- */
function Logo({ onClick, height = 46 }) {
  return (
    <button className="logo" onClick={onClick} aria-label="KaM·in Start">
      <img src="assets/kamin-logo.png" alt="Bürgertreff KaM·in – Kappler Marktplatz" style={{ height }} />
    </button>
  );
}

/* ---------- Language switch (segmented, flag + code) ---------- */
function LangSwitch({ lang, setLang, compact }) {
  return (
    <div className={'langsw' + (compact ? ' langsw--compact' : '')} role="group" aria-label="Sprache / Language">
      {window.LANGS.map(l => (
        <button key={l.code}
          className={'langsw__btn' + (lang === l.code ? ' is-active' : '')}
          onClick={() => setLang(l.code)} aria-pressed={lang === l.code}>
          <span className="langsw__flag">{l.flag}</span>
          <span className="langsw__code">{l.short}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------- Look & Feel switcher (meta tool for the reviewer) ---------- */
function DesignBar({ theme, setTheme, lang }) {
  const [open, setOpen] = React.useState(true);
  if (!open) {
    return (
      <button className="designbar__reopen" onClick={() => setOpen(true)}>
        <Icon name="sun" size={16} /> Look &amp; Feel
      </button>
    );
  }
  return (
    <div className="designbar">
      <span className="designbar__label"><Icon name="sun" size={16} /> Look &amp; Feel</span>
      <div className="designbar__opts">
        {Object.keys(window.THEMES).map(key => (
          <button key={key}
            className={'designbar__opt' + (theme === key ? ' is-active' : '')}
            onClick={() => setTheme(key)}>
            {window.tr(window.THEMES[key].label, lang)}
          </button>
        ))}
      </div>
      <button className="designbar__close" onClick={() => setOpen(false)} aria-label="schließen">
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}

/* ---------- Header ---------- */
const NAV = [
  ['start', 'nav_start'], ['termine', 'nav_termine'], ['aktuelles', 'nav_aktuelles'],
  ['angebote', 'nav_angebote'], ['kapi', 'kapi_nav'], ['ueberuns', 'nav_ueberuns'], ['kontakt', 'nav_kontakt'],
];

function Header({ route, navigate, lang, setLang }) {
  const t = window.makeT(lang);
  const [menu, setMenu] = React.useState(false);
  const go = (r) => { navigate(r); setMenu(false); };
  return (
    <header className="hd">
      <div className="hd__bar wrap">
        <Logo onClick={() => go('start')} />
        <nav className="hd__nav">
          {NAV.map(([r, k]) => (
            <button key={r} className={'hd__link' + (route === r ? ' is-active' : '')} onClick={() => go(r)}>
              {t(k)}
            </button>
          ))}
        </nav>
        <div className="hd__right">
          <LangSwitch lang={lang} setLang={setLang} />
          <button className="hd__burger" onClick={() => setMenu(m => !m)} aria-label="Menü">
            <Icon name={menu ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </div>
      {menu && (
        <nav className="hd__mobile">
          {NAV.map(([r, k]) => (
            <button key={r} className={'hd__mlink' + (route === r ? ' is-active' : '')} onClick={() => go(r)}>
              {t(k)} <Icon name="arrow" size={20} />
            </button>
          ))}
          <div className="hd__mlang"><LangSwitch lang={lang} setLang={setLang} /></div>
        </nav>
      )}
    </header>
  );
}

/* ---------- Newsletter form ---------- */
function NewsletterForm({ lang, variant = 'block' }) {
  const t = window.makeT(lang);
  const [done, setDone] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const submit = (e) => { e.preventDefault(); if (email) setDone(true); };
  return (
    <div className={'nl nl--' + variant}>
      <div className="nl__text">
        <h3 className="nl__title">{t('nl_title')}</h3>
        <p className="nl__sub">{t('nl_text')}</p>
      </div>
      {done ? (
        <p className="nl__done"><Icon name="check" size={22} /> {t('nl_done')}</p>
      ) : (
        <form className="nl__form" onSubmit={submit}>
          <input className="nl__input" placeholder={t('nl_name')} value={name} onChange={e => setName(e.target.value)} />
          <input className="nl__input" type="email" required placeholder={t('nl_email')} value={email} onChange={e => setEmail(e.target.value)} />
          <button className="btn btn--brand nl__btn" type="submit">{t('nl_btn')} <Icon name="arrow" size={20} /></button>
        </form>
      )}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer({ lang, setLang, navigate }) {
  const t = window.makeT(lang);
  return (
    <footer className="ft">
      <div className="wrap ft__top">
        <div className="ft__brand">
          <img src="assets/kamin-mark.png" alt="" className="ft__mark" />
          <div>
            <div className="ft__name">Bürgertreff KaM·in</div>
            <p className="ft__tag">{t('ft_tag')}</p>
          </div>
        </div>
        <div className="ft__addr">
          <p><Icon name="pin" size={18} /> Marktplatz 108<br/>77876 Kappelrodeck</p>
          <p><Icon name="insta" size={18} /> @kamin.kappelrodeck</p>
        </div>
        <div className="ft__nl"><NewsletterForm lang={lang} variant="footer" /></div>
      </div>
      <div className="wrap ft__bottom">
        <div className="ft__links">
          <button onClick={() => navigate('kontakt')}>{t('nav_kontakt')}</button>
          <button onClick={() => alert('Impressum – Platzhalter')}>{t('ft_impressum')}</button>
          <button onClick={() => alert('Datenschutz – Platzhalter')}>{t('ft_datenschutz')}</button>
          <button onClick={() => navigate('admin')}>{t('nav_admin')}</button>
        </div>
        <LangSwitch lang={lang} setLang={setLang} compact />
        <span className="ft__copy">{t('ft_copy')}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Photo, Logo, LangSwitch, DesignBar, Header, Footer, NewsletterForm, NAV });

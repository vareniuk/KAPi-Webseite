/* KaM·in — screens part 1: shared bits, Home, Termine, Aktuelles, Angebote */

const TODAY = new Date(2026, 5, 2); // 2 June 2026

/* ----- shared bits ----- */
function Btn({ children, onClick, kind = 'brand', icon, size, ...rest }) {
  return (
    <button className={`btn btn--${kind}${size ? ' btn--' + size : ''}`} onClick={onClick} {...rest}>
      {children}{icon && <Icon name={icon} size={20} />}
    </button>
  );
}

function SectionHead({ kicker, title, action, onAction }) {
  return (
    <div className="sechead">
      <div>
        {kicker && <div className="sechead__kicker">{kicker}</div>}
        <h2 className="sechead__title">{title}</h2>
      </div>
      {action && <Btn kind="ghost" onClick={onAction} icon="arrow">{action}</Btn>}
    </div>
  );
}

function FreeBadge({ lang }) {
  const t = window.makeT(lang);
  return <span className="freebadge"><Icon name="heart" size={14} /> {t('ang_free')}</span>;
}

/* ----- date helpers ----- */
function jsWeekday(day0) { return (day0 + 1) % 7; } // our 0=Mon -> JS 0=Sun
function nextDateFor(day0, base = TODAY) {
  const target = jsWeekday(day0);
  const d = new Date(base);
  let add = (target - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + add);
  return d;
}
function nthWeekdayOfMonth(year, month, day0, nth = 3) {
  const target = jsWeekday(day0);
  const first = new Date(year, month, 1);
  let add = (target - first.getDay() + 7) % 7;
  return new Date(year, month, 1 + add + (nth - 1) * 7);
}
function fmtDate(d, lang) {
  const wd = window.CAL.weekdaysShort[lang][(d.getDay() + 6) % 7];
  return `${wd}, ${d.getDate()}. ${window.CAL.months[lang][d.getMonth()]}`;
}
function recurLabel(ev, lang) {
  const t = window.makeT(lang);
  return t(ev.recur === 'weekly' ? 'ter_recur' : ev.recur === 'monthly' ? 'ter_monthly' : 'ter_byapp');
}
function timeLabel(ev, lang) {
  if (!ev.from) return recurLabel(ev, lang);
  const u = lang === 'de' ? ' Uhr' : '';
  return `${ev.from}–${ev.to}${u}`;
}

function getUpcoming(n, lang) {
  const list = [];
  window.EVENTS.forEach(ev => {
    if (ev.recur === 'weekly') list.push({ ev, date: nextDateFor(ev.day) });
    else if (ev.recur === 'monthly') {
      let d = nthWeekdayOfMonth(TODAY.getFullYear(), TODAY.getMonth(), ev.day, 3);
      if (d < TODAY) d = nthWeekdayOfMonth(TODAY.getFullYear(), TODAY.getMonth() + 1, ev.day, 3);
      list.push({ ev, date: d });
    }
  });
  list.sort((a, b) => a.date - b.date);
  return list.slice(0, n);
}

/* ----- Event card / row ----- */
function EventRow({ ev, date, lang }) {
  const t = window.makeT(lang);
  const c = window.BRAND[ev.color];
  return (
    <div className="evrow" style={{ '--c': c }}>
      <div className="evrow__icon"><Icon name={ev.icon} size={26} /></div>
      <div className="evrow__body">
        <div className="evrow__top">
          <h3 className="evrow__title">{window.tr(ev.title, lang)}</h3>
          <FreeBadge lang={lang} />
        </div>
        <p className="evrow__desc">{window.tr(ev.desc, lang)}</p>
      </div>
      <div className="evrow__when">
        {date && <span className="evrow__date">{fmtDate(date, lang)}</span>}
        <span className="evrow__time"><Icon name="clock" size={16} /> {timeLabel(ev, lang)}</span>
      </div>
    </div>
  );
}

/* ===================== HOME ===================== */
function Spotlight({ lang, navigate, openPost, highlights }) {
  const t = window.makeT(lang);
  const items = highlights || window.HIGHLIGHTS || [];
  if (!items.length) return null;
  const go = (h) => { if (h.link.post) openPost(h.link.post); else if (h.link.route) navigate(h.link.route); };
  const big = items[0];
  const rest = items.slice(1, 3);
  return (
    <section className="wrap sec spot">
      <SectionHead kicker={t('spot_kicker')} title={t('spot_title')} />
      <div className="spot__grid">
        <article className="spot__big" style={{ '--c': window.BRAND[big.color] }} onClick={() => go(big)}>
          <div className="spot__media">
            <Photo label={window.tr(big.img, lang)} color={big.color} ratio="auto" round="0" style={{ height: '100%', minHeight: 260 }} />
          </div>
          <div className="spot__content">
            <span className="spot__kicker">{window.tr(big.kicker, lang)}</span>
            <h3 className="spot__title">{window.tr(big.title, lang)}</h3>
            <p className="spot__text">{window.tr(big.text, lang)}</p>
            <span className="btn btn--brand spot__cta">{t('spot_cta')} <Icon name="arrow" size={20} /></span>
          </div>
        </article>
        <div className="spot__side">
          {rest.map(h => (
            <article key={h.id} className="spotcard" style={{ '--c': window.BRAND[h.color] }} onClick={() => go(h)}>
              <div className="spotcard__media">
                <Photo label={window.tr(h.img, lang)} color={h.color} ratio="auto" round="0" style={{ height: '100%', minHeight: 96 }} />
              </div>
              <div className="spotcard__body">
                <span className="spotcard__kicker">{window.tr(h.kicker, lang)}</span>
                <h4 className="spotcard__title">{window.tr(h.title, lang)}</h4>
                <span className="spotcard__go"><Icon name="arrow" size={18} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero({ lang, navigate, theme }) {
  const t = window.makeT(lang);
  const layout = window.THEMES[theme].hero;
  const chips = (
    <div className="chips">
      <div className="chip chip--when"><div className="chip__ico"><Icon name="clock" size={22} /></div>
        <div><div className="chip__l">{t('chip_when_l')}</div><div className="chip__v">{t('chip_when_v')}</div></div></div>
      <div className="chip chip--where"><div className="chip__ico"><Icon name="pin" size={22} /></div>
        <div><div className="chip__l">{t('chip_where_l')}</div><div className="chip__v">{t('chip_where_v')}</div></div></div>
      <div className="chip chip--welc"><div className="chip__ico"><Icon name="heart" size={22} /></div>
        <div><div className="chip__l">{t('chip_welc_l')}</div><div className="chip__v">{t('chip_welc_v')}</div></div></div>
    </div>
  );
  const ctas = (
    <div className="hero__ctas">
      <Btn kind="brand" icon="calendar" onClick={() => navigate('termine')}>{t('cta_termine')}</Btn>
      <Btn kind="outline" icon="arrow" onClick={() => navigate('angebote')}>{t('cta_angebote')}</Btn>
    </div>
  );
  const words = (
    <div className="hero__words">
      <p className="hero__sub">{t('hero_sub')}</p>
      <h1 className="hero__big">{t('hero_big')}</h1>
      <p className="hero__text">{t('hero_text')}</p>
      {ctas}
    </div>
  );

  if (layout === 'split') {
    return (
      <section className="hero hero--split">
        <div className="wrap hero__grid">
          {words}
          <div className="hero__media">
            <Photo label={t('placeholder_photo')} color="orange" ratio="4 / 5" round="var(--radius-lg)" />
            <img src="assets/kamin-mark.png" alt="" className="hero__sticker" />
          </div>
        </div>
        <div className="wrap">{chips}</div>
      </section>
    );
  }
  if (layout === 'blob') {
    return (
      <section className="hero hero--blob">
        <div className="hero__blobs" aria-hidden="true">
          <span style={{ background: window.BRAND.yellow }}></span>
          <span style={{ background: window.BRAND.blue }}></span>
          <span style={{ background: window.BRAND.green }}></span>
          <span style={{ background: window.BRAND.pink }}></span>
        </div>
        <div className="wrap hero__center">
          <img src="assets/kamin-mark.png" alt="" className="hero__bigmark" />
          {words}
          {chips}
        </div>
      </section>
    );
  }
  if (layout === 'poster') {
    return (
      <section className="hero hero--poster">
        <div className="wrap">
          <div className="hero__postercard">
            <div className="hero__postertxt">
              <p className="hero__sub">{t('hero_sub')}</p>
              <h1 className="hero__big">{t('hero_big')}</h1>
              <p className="hero__text">{t('hero_text')}</p>
              {ctas}
            </div>
            <img src="assets/kamin-mark.png" alt="" className="hero__postermark" />
          </div>
        </div>
        <div className="wrap">{chips}</div>
      </section>
    );
  }
  // center / klar
  return (
    <section className="hero hero--center">
      <div className="wrap hero__stack">
        {words}
        {chips}
        <div className="hero__bandphoto">
          <Photo label={t('placeholder_photo')} color="blue" ratio="21 / 8" round="var(--radius-lg)" />
        </div>
      </div>
    </section>
  );
}

function Home({ lang, navigate, theme, openPost, highlights }) {
  const t = window.makeT(lang);
  const up = getUpcoming(3, lang);
  const posts = window.POSTS.slice(0, 3);
  return (
    <main>
      <Hero lang={lang} navigate={navigate} theme={theme} />

      <Spotlight lang={lang} navigate={navigate} openPost={openPost} highlights={highlights} />

      <section className="wrap sec">
        <SectionHead kicker={t('free_all')} title={t('home_next')} action={t('view_all')} onAction={() => navigate('termine')} />
        <div className="evlist">
          {up.map(({ ev, date }) => <EventRow key={ev.id} ev={ev} date={date} lang={lang} />)}
        </div>
      </section>

      <section className="sec sec--alt">
        <div className="wrap">
          <SectionHead title={t('home_news')} action={t('view_all')} onAction={() => navigate('aktuelles')} />
          <div className="cardgrid">
            {posts.map(p => <PostCard key={p.id} post={p} lang={lang} onOpen={() => openPost(p.id)} />)}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="nlwrap"><NewsletterForm lang={lang} variant="block" /></div>
      </section>
    </main>
  );
}

/* ===================== TERMINE ===================== */
function buildMonth(year, month) {
  const cells = [];
  const first = new Date(year, month, 1);
  const startPad = (first.getDay() + 6) % 7; // Monday-first
  const daysIn = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function eventsOnDate(d, customEvents) {
  const day0 = (d.getDay() + 6) % 7;
  const res = [];
  (customEvents || window.EVENTS).forEach(ev => {
    if (ev.recur === 'weekly' && ev.day === day0) res.push(ev);
    if (ev.recur === 'monthly' && ev.day === day0) {
      const nth = nthWeekdayOfMonth(d.getFullYear(), d.getMonth(), ev.day, 3);
      if (nth.getDate() === d.getDate()) res.push(ev);
    }
  });
  return res;
}

function Termine({ lang, customEvents }) {
  const t = window.makeT(lang);
  const [view, setView] = React.useState('list');
  const [mOff, setMOff] = React.useState(0);
  const [sel, setSel] = React.useState(null);
  const base = new Date(TODAY.getFullYear(), TODAY.getMonth() + mOff, 1);
  const cells = buildMonth(base.getFullYear(), base.getMonth());
  const evs = customEvents || window.EVENTS;

  // list: upcoming weekly+monthly for next ~3 weeks + byapp at end
  const upcoming = [];
  evs.forEach(ev => {
    if (ev.recur === 'weekly') for (let w = 0; w < 2; w++) { const dd = nextDateFor(ev.day); dd.setDate(dd.getDate() + 7 * w); upcoming.push({ ev, date: dd }); }
    else if (ev.recur === 'monthly') { let dd = nthWeekdayOfMonth(TODAY.getFullYear(), TODAY.getMonth(), ev.day, 3); if (dd < TODAY) dd = nthWeekdayOfMonth(TODAY.getFullYear(), TODAY.getMonth() + 1, ev.day, 3); upcoming.push({ ev, date: dd }); }
  });
  upcoming.sort((a, b) => a.date - b.date);
  const byapp = evs.filter(e => e.recur === 'byapp');

  const selDate = sel;
  const selEvs = selDate ? eventsOnDate(selDate, evs) : [];

  return (
    <main className="wrap sec">
      <div className="pagehead">
        <h1 className="pagehead__title">{t('ter_title')}</h1>
        <p className="pagehead__sub">{t('ter_sub')}</p>
      </div>

      <div className="seg">
        <button className={'seg__btn' + (view === 'list' ? ' is-active' : '')} onClick={() => setView('list')}><Icon name="menu" size={18} /> {t('ter_list')}</button>
        <button className={'seg__btn' + (view === 'cal' ? ' is-active' : '')} onClick={() => setView('cal')}><Icon name="calendar" size={18} /> {t('ter_cal')}</button>
      </div>

      {view === 'list' ? (
        <div className="evlist evlist--page">
          {upcoming.slice(0, 8).map(({ ev, date }, i) => <EventRow key={ev.id + i} ev={ev} date={date} lang={lang} />)}
          <div className="byapp">
            {byapp.map(ev => <EventRow key={ev.id} ev={ev} lang={lang} />)}
          </div>
        </div>
      ) : (
        <div className="calwrap">
          <div className="cal">
            <div className="cal__head">
              <button className="cal__nav" onClick={() => setMOff(m => m - 1)} aria-label="prev"><Icon name="arrowL" size={20} /></button>
              <h2 className="cal__month">{window.CAL.months[lang][base.getMonth()]} {base.getFullYear()}</h2>
              <button className="cal__nav" onClick={() => setMOff(m => m + 1)} aria-label="next"><Icon name="arrow" size={20} /></button>
            </div>
            <div className="cal__grid cal__grid--wd">
              {window.CAL.weekdaysShort[lang].map(w => <div key={w} className="cal__wd">{w}</div>)}
            </div>
            <div className="cal__grid">
              {cells.map((d, i) => {
                if (!d) return <div key={i} className="cal__cell cal__cell--empty"></div>;
                const list = eventsOnDate(d, evs);
                const isToday = d.toDateString() === TODAY.toDateString();
                const isSel = sel && d.toDateString() === sel.toDateString();
                return (
                  <button key={i} className={'cal__cell' + (isToday ? ' is-today' : '') + (isSel ? ' is-sel' : '') + (list.length ? ' has-ev' : '')} onClick={() => setSel(d)}>
                    <span className="cal__num">{d.getDate()}</span>
                    <span className="cal__dots">{list.map((e, j) => <i key={j} style={{ background: window.BRAND[e.color] }}></i>)}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <aside className="caldetail">
            <h3 className="caldetail__title">{selDate ? fmtDate(selDate, lang) : t('ter_today')}</h3>
            {(selDate ? selEvs : eventsOnDate(TODAY, evs)).length === 0 ? (
              <p className="caldetail__empty">{t('ter_none')}</p>
            ) : (
              (selDate ? selEvs : eventsOnDate(TODAY, evs)).map(ev => (
                <div key={ev.id} className="caldetail__ev" style={{ '--c': window.BRAND[ev.color] }}>
                  <div className="caldetail__ico"><Icon name={ev.icon} size={20} /></div>
                  <div>
                    <div className="caldetail__name">{window.tr(ev.title, lang)}</div>
                    <div className="caldetail__time"><Icon name="clock" size={14} /> {timeLabel(ev, lang)}</div>
                  </div>
                </div>
              ))
            )}
          </aside>
        </div>
      )}
    </main>
  );
}

/* ===================== AKTUELLES ===================== */
function PostCard({ post, lang, onOpen }) {
  const t = window.makeT(lang);
  const c = window.BRAND[post.color];
  return (
    <article className="pcard" style={{ '--c': c }}>
      <div className="pcard__media">
        <Photo label={window.tr(post.img, lang)} color={post.color} ratio="16 / 10" round="0" />
        {post.program && <span className="pcard__flag"><Icon name="calendar" size={14} /> PDF</span>}
      </div>
      <div className="pcard__body">
        <time className="pcard__date">{fmtDate(new Date(post.date), lang)}</time>
        <h3 className="pcard__title">{window.tr(post.title, lang)}</h3>
        <p className="pcard__excerpt">{window.tr(post.excerpt, lang)}</p>
        <div className="pcard__actions">
          <Btn kind="ghost" icon="arrow" onClick={onOpen}>{t('akt_more')}</Btn>
          {post.pdf && <Btn kind="soft" icon="arrow" onClick={() => alert('PDF – Platzhalter')}>{t('akt_pdf')}</Btn>}
        </div>
      </div>
    </article>
  );
}

function Aktuelles({ lang, openPost }) {
  const t = window.makeT(lang);
  return (
    <main className="wrap sec">
      <div className="pagehead">
        <h1 className="pagehead__title">{t('akt_title')}</h1>
        <p className="pagehead__sub">{t('akt_sub')}</p>
      </div>
      <div className="cardgrid">
        {window.POSTS.map(p => <PostCard key={p.id} post={p} lang={lang} onOpen={() => openPost(p.id)} />)}
      </div>
    </main>
  );
}

function PostDetail({ id, lang, navigate }) {
  const t = window.makeT(lang);
  const post = window.POSTS.find(p => p.id === id) || window.POSTS[0];
  return (
    <main className="wrap sec">
      <button className="backlink" onClick={() => navigate('aktuelles')}><Icon name="arrowL" size={20} /> {t('akt_back')}</button>
      <article className="article">
        <time className="article__date">{fmtDate(new Date(post.date), lang)}</time>
        <h1 className="article__title">{window.tr(post.title, lang)}</h1>
        <Photo label={window.tr(post.img, lang)} color={post.color} ratio="16 / 8" round="var(--radius-lg)" style={{ margin: '8px 0 20px' }} />
        <div className="article__body">
          {window.tr(post.body, lang).split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {post.pdf && (
          <div className="article__pdf">
            <div><Icon name="calendar" size={26} /><div><strong>{window.tr(post.title, lang)}</strong><span>PDF · ~1 MB</span></div></div>
            <Btn kind="brand" icon="arrow" onClick={() => alert('PDF – Platzhalter')}>{t('akt_pdf')}</Btn>
          </div>
        )}
      </article>
    </main>
  );
}

/* ===================== ANGEBOTE ===================== */
function Angebote({ lang, navigate }) {
  const t = window.makeT(lang);
  return (
    <main className="wrap sec">
      <div className="pagehead">
        <h1 className="pagehead__title">{t('ang_title')}</h1>
        <p className="pagehead__sub">{t('ang_sub')}</p>
      </div>
      <div className="offgrid">
        {window.OFFERS.map(id => {
          const ev = window.EVENTS.find(e => e.id === id);
          const c = window.BRAND[ev.color];
          return (
            <article key={id} className="offcard" style={{ '--c': c }}>
              <div className="offcard__ico"><Icon name={ev.icon} size={30} /></div>
              <h3 className="offcard__title">{window.tr(ev.title, lang)}</h3>
              <div className="offcard__time"><Icon name="clock" size={16} /> {ev.from ? timeLabel(ev, lang) : recurLabel(ev, lang)}</div>
              <p className="offcard__desc">{window.tr(ev.desc, lang)}</p>
              <FreeBadge lang={lang} />
            </article>
          );
        })}
      </div>
      <div className="angcta">
        <p>{t('chip_welc_v')}</p>
        <Btn kind="brand" icon="calendar" onClick={() => navigate('termine')}>{t('cta_termine')}</Btn>
      </div>
    </main>
  );
}

Object.assign(window, { Btn, SectionHead, FreeBadge, EventRow, PostCard, Home, Hero, Spotlight, Termine, Aktuelles, PostDetail, Angebote, TODAY, fmtDate, timeLabel, recurLabel, eventsOnDate });

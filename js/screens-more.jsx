/* KaM·in — screens part 2: Über uns / Mitmachen, Kontakt, Admin */

/* ===================== ÜBER UNS / MITMACHEN ===================== */
function UeberUns({ lang, navigate }) {
  const t = window.makeT(lang);
  const ways = [
    { k: 'come', icon: 'users', color: 'green', tt: 'mit_come_t', tb: 'mit_come_b', go: 'termine' },
    { k: 'help', icon: 'heart', color: 'pink', tt: 'mit_help_t', tb: 'mit_help_b', go: 'kontakt' },
    { k: 'talk', icon: 'chat', color: 'blue', tt: 'mit_talk_t', tb: 'mit_talk_b', go: 'kontakt' },
  ];
  return (
    <main className="wrap sec">
      <div className="pagehead">
        <h1 className="pagehead__title">{t('ueb_title')}</h1>
      </div>

      <section className="about">
        <div className="about__text">
          <p className="about__lead">{t('ueb_lead')}</p>
          <p className="about__body">{t('ueb_body')}</p>
          <div className="about__pills">
            <span><Icon name="heart" size={16} /> {t('free_all')}</span>
            <span><Icon name="users" size={16} /> 50+ {lang === 'de' ? 'Länder' : lang === 'uk' ? 'країн' : 'countries'}</span>
            <span><Icon name="pin" size={16} /> Marktplatz 108</span>
          </div>
        </div>
        <div className="about__media">
          <Photo label={t('placeholder_photo')} color="green" ratio="4 / 5" round="var(--radius-lg)" />
        </div>
      </section>

      <section className="mitmach">
        <div className="sechead sechead--center">
          <h2 className="sechead__title">{t('mit_title')}</h2>
          <p className="sechead__sub">{t('mit_sub')}</p>
        </div>
        <div className="cardgrid cardgrid--3">
          {ways.map(w => (
            <button key={w.k} className="mitcard" style={{ '--c': window.BRAND[w.color] }} onClick={() => navigate(w.go)}>
              <div className="mitcard__ico"><Icon name={w.icon} size={30} /></div>
              <h3 className="mitcard__title">{t(w.tt)}</h3>
              <p className="mitcard__body">{t(w.tb)}</p>
              <span className="mitcard__go"><Icon name="arrow" size={20} /></span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ===================== KONTAKT ===================== */
function Kontakt({ lang }) {
  const t = window.makeT(lang);
  return (
    <main className="wrap sec">
      <div className="pagehead">
        <h1 className="pagehead__title">{t('kon_title')}</h1>
        <p className="pagehead__sub">{t('kon_sub')}</p>
      </div>

      <div className="kontact">
        <div className="kontact__info">
          <div className="kinfo" style={{ '--c': window.BRAND.red }}>
            <div className="kinfo__ico"><Icon name="pin" size={24} /></div>
            <div><div className="kinfo__l">{t('kon_address')}</div><div className="kinfo__v">Marktplatz 108<br/>77876 Kappelrodeck</div></div>
          </div>
          <div className="kinfo" style={{ '--c': window.BRAND.orange }}>
            <div className="kinfo__ico"><Icon name="clock" size={24} /></div>
            <div><div className="kinfo__l">{t('kon_hours')}</div><div className="kinfo__v">{t('kon_hours_v')}</div></div>
          </div>
          <div className="kinfo" style={{ '--c': window.BRAND.green }}>
            <div className="kinfo__ico"><Icon name="users" size={24} /></div>
            <div><div className="kinfo__l">{t('kon_person')}</div><div className="kinfo__v">Maria Wussler<br/><span className="kinfo__muted">KaM·in Team</span></div></div>
          </div>
          <div className="kinfo" style={{ '--c': window.BRAND.blue }}>
            <div className="kinfo__ico"><Icon name="phone" size={24} /></div>
            <div><div className="kinfo__l">{t('kon_phone')} · {t('nl_email')}</div>
              <div className="kinfo__v"><a href="tel:+4978429999">07842 / 99 99</a><br/><a href="mailto:hallo@kamin-kappelrodeck.de">hallo@kamin-kappelrodeck.de</a></div></div>
          </div>
          <a className="kinsta" href="https://instagram.com" target="_blank" rel="noreferrer">
            <Icon name="insta" size={22} /> {t('kon_insta')} <strong>@kamin.kappelrodeck</strong>
          </a>
        </div>

        <div className="kontact__map">
          <div className="mapph">
            <div className="mapph__grid" aria-hidden="true"></div>
            <div className="mapph__pin" style={{ background: window.BRAND.red }}><Icon name="pin" size={22} /></div>
            <div className="mapph__label"><strong>KaM·in</strong><br/>Marktplatz 108, Kappelrodeck</div>
            <span className="mapph__cap">{t('kon_map')} · Kartenausschnitt (Platzhalter)</span>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ===================== ADMIN ===================== */
const DAY_OPTS = (lang) => window.CAL.weekdaysLong[lang].map((w, i) => ({ v: i, label: w }));
const RECUR_OPTS = (lang) => {
  const t = window.makeT(lang);
  return [['weekly', t('ter_recur')], ['monthly', t('ter_monthly')], ['byapp', t('ter_byapp')]];
};
const COLOR_OPTS = ['green', 'blue', 'orange', 'pink', 'red', 'yellow'];
const ICON_OPTS = ['chat', 'book', 'needle', 'dice', 'music', 'cup', 'drum', 'calendar', 'heart', 'users'];

const emptyForm = () => ({ id: '', title: '', day: 0, from: '15:00', to: '17:00', place: 'Marktplatz 108', desc: '', recur: 'weekly', color: 'blue', icon: 'calendar' });

/* ----- Highlights manager ----- */
const ROUTE_LABELS = { kapi: 'KAPi', angebote: 'Projekte', termine: 'Termine', aktuelles: 'Aktuelles', ueberuns: 'Über uns', kontakt: 'Kontakt' };
function linkOptions(lang) {
  const opts = [];
  (window.POSTS || []).forEach(p => opts.push({ value: 'post:' + p.id, label: 'Beitrag: ' + window.tr(p.title, lang) }));
  Object.keys(ROUTE_LABELS).forEach(r => opts.push({ value: 'route:' + r, label: 'Seite: ' + ROUTE_LABELS[r] }));
  return opts;
}
function parseLink(str) { return str.startsWith('post:') ? { post: str.slice(5) } : { route: str.slice(6) }; }
function linkToStr(link) { return link.post ? 'post:' + link.post : 'route:' + link.route; }
function linkLabel(link, lang) {
  if (link.post) { const p = (window.POSTS || []).find(x => x.id === link.post); return 'Beitrag: ' + (p ? window.tr(p.title, lang) : link.post); }
  return 'Seite: ' + (ROUTE_LABELS[link.route] || link.route);
}
const emptyHl = () => ({ id: '', kicker: '', title: '', text: '', color: 'orange', img: '', link: 'post:' + ((window.POSTS && window.POSTS[0] && window.POSTS[0].id) || '') });

function HighlightManager({ lang, customHighlights, setCustomHighlights }) {
  const t = window.makeT(lang);
  const [form, setForm] = React.useState(emptyHl());
  const [editing, setEditing] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const flash = () => { setToast(true); setTimeout(() => setToast(false), 1800); };
  const list = customHighlights;

  const startEdit = (h) => {
    setForm({ id: h.id, kicker: window.tr(h.kicker, 'de'), title: window.tr(h.title, 'de'), text: window.tr(h.text, 'de'), color: h.color, img: window.tr(h.img, 'de'), link: linkToStr(h.link) });
    setEditing(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const reset = () => { setForm(emptyHl()); setEditing(false); };
  const save = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const obj = {
      id: form.id || ('hl' + Date.now()), color: form.color, link: parseLink(form.link),
      kicker: { de: form.kicker, uk: form.kicker, en: form.kicker },
      title: { de: form.title, uk: form.title, en: form.title },
      text: { de: form.text, uk: form.text, en: form.text },
      img: { de: form.img || form.title, uk: form.img || form.title, en: form.img || form.title },
    };
    setCustomHighlights(prev => {
      const i = prev.findIndex(p => p.id === obj.id);
      if (i >= 0) { const cp = prev.slice(); cp[i] = obj; return cp; }
      return [...prev, obj];
    });
    reset(); flash();
  };
  const del = (id) => { if (confirm(t('adm_confirm'))) setCustomHighlights(prev => prev.filter(p => p.id !== id)); };
  const move = (idx, dir) => setCustomHighlights(prev => {
    const j = idx + dir; if (j < 0 || j >= prev.length) return prev;
    const cp = prev.slice(); const tmp = cp[idx]; cp[idx] = cp[j]; cp[j] = tmp; return cp;
  });

  return (
    <div className="admin__grid">
      <form className="admin__form" onSubmit={save}>
        <h2 className="admin__formtitle">{editing ? t('adm_h_edit') : t('adm_h_new')}</h2>

        <label className="fld">
          <span className="fld__l">{t('adm_f_title')}</span>
          <input className="fld__in" value={form.title} onChange={e => set('title', e.target.value)} placeholder="z. B. Sommerfest am Marktplatz" required />
        </label>
        <label className="fld">
          <span className="fld__l">{t('adm_h_kicker')}</span>
          <input className="fld__in" value={form.kicker} onChange={e => set('kicker', e.target.value)} placeholder="z. B. Großes Fest" />
        </label>
        <label className="fld">
          <span className="fld__l">{t('adm_h_text')}</span>
          <textarea className="fld__in fld__in--area" value={form.text} onChange={e => set('text', e.target.value)} rows="2" placeholder="Kurzer, einladender Satz…" />
        </label>
        <label className="fld">
          <span className="fld__l">{t('adm_h_img')}</span>
          <input className="fld__in" value={form.img} onChange={e => set('img', e.target.value)} placeholder="z. B. Foto vom Fest" />
        </label>
        <label className="fld">
          <span className="fld__l">{t('adm_h_link')}</span>
          <select className="fld__in" value={form.link} onChange={e => set('link', e.target.value)}>
            {linkOptions(lang).map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>
        <label className="fld">
          <span className="fld__l">Farbe</span>
          <div className="fld__swatches">
            {COLOR_OPTS.map(c => (
              <button type="button" key={c} className={'swatch' + (form.color === c ? ' is-active' : '')} style={{ background: window.BRAND[c] }} onClick={() => set('color', c)} aria-label={c} />
            ))}
          </div>
        </label>

        <div className="admin__actions">
          <Btn kind="brand" icon="check" type="submit">{t('adm_save')}</Btn>
          {editing && <Btn kind="ghost" onClick={reset} type="button">{t('adm_cancel')}</Btn>}
        </div>
      </form>

      <div className="admin__list">
        <div className="admin__listhead">
          <h2 className="admin__formtitle">{t('adm_h_count')}: {list.length}</h2>
          <p className="admin__hint"><Icon name="arrowUp" size={15} /> {t('adm_h_note')}</p>
        </div>
        {list.map((h, idx) => (
          <div key={h.id} className="admrow" style={{ '--c': window.BRAND[h.color] }}>
            <div className="admrow__order">
              <button className="iconbtn iconbtn--sm" disabled={idx === 0} onClick={() => move(idx, -1)} aria-label={t('adm_up')}><Icon name="arrowUp" size={16} /></button>
              <button className="iconbtn iconbtn--sm" disabled={idx === list.length - 1} onClick={() => move(idx, 1)} aria-label={t('adm_down')}><Icon name="arrowDown" size={16} /></button>
            </div>
            <div className="admrow__body">
              <div className="admrow__title">{window.tr(h.title, lang)} {idx === 0 && <span className="admrow__big">{t('adm_h_big')}</span>}</div>
              <div className="admrow__meta">
                {window.tr(h.kicker, lang) && <span>{window.tr(h.kicker, lang)}</span>}
                <span className="admrow__recur">{linkLabel(h.link, lang)}</span>
              </div>
            </div>
            <div className="admrow__btns">
              <button className="iconbtn" onClick={() => startEdit(h)} aria-label="edit"><Icon name="edit" size={18} /></button>
              <button className="iconbtn iconbtn--danger" onClick={() => del(h.id)} aria-label="delete"><Icon name="trash" size={18} /></button>
            </div>
          </div>
        ))}
      </div>
      {toast && <div className="toast"><Icon name="check" size={20} /> {t('adm_saved')}</div>}
    </div>
  );
}

function Admin({ lang, customEvents, setCustomEvents, customHighlights, setCustomHighlights, navigate }) {
  const t = window.makeT(lang);
  const [mode, setMode] = React.useState('events');
  const [form, setForm] = React.useState(emptyForm());
  const [editing, setEditing] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const events = customEvents;
  const flash = () => { setToast(true); setTimeout(() => setToast(false), 1800); };

  const startEdit = (ev) => {
    setForm({ id: ev.id, title: window.tr(ev.title, 'de'), day: ev.day == null ? 0 : ev.day, from: ev.from || '', to: ev.to || '', place: ev.place || 'Marktplatz 108', desc: window.tr(ev.desc, 'de'), recur: ev.recur, color: ev.color, icon: ev.icon });
    setEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const reset = () => { setForm(emptyForm()); setEditing(false); };

  const save = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const obj = {
      id: form.id || ('ev' + Date.now()),
      day: form.recur === 'byapp' ? null : Number(form.day),
      from: form.recur === 'byapp' ? '' : form.from,
      to: form.recur === 'byapp' ? '' : form.to,
      place: form.place, recur: form.recur, color: form.color, icon: form.icon,
      title: { de: form.title, uk: form.title, en: form.title },
      desc: { de: form.desc, uk: form.desc, en: form.desc },
    };
    setCustomEvents(prev => {
      const i = prev.findIndex(p => p.id === obj.id);
      if (i >= 0) { const cp = prev.slice(); cp[i] = obj; return cp; }
      return [...prev, obj];
    });
    reset(); flash();
  };
  const del = (id) => { if (confirm(t('adm_confirm'))) setCustomEvents(prev => prev.filter(p => p.id !== id)); };

  return (
    <div className="admin">
      <div className="admin__topbar">
        <div className="admin__brand"><img src="assets/kamin-mark.png" alt="" /> <span>KaM·in · {t('adm_title')}</span></div>
        <button className="admin__exit" onClick={() => navigate('start')}><Icon name="arrowL" size={18} /> {t('adm_back')}</button>
      </div>

      <div className="admin__wrap">
        <div className="pagehead pagehead--admin">
          <h1 className="pagehead__title">{mode === 'events' ? t('adm_title') : t('adm_h_title')}</h1>
          <p className="pagehead__sub">{mode === 'events' ? t('adm_sub') : t('adm_h_sub')}</p>
          <p className="admin__hint"><Icon name="users" size={15} /> {t('adm_hint')}</p>
        </div>

        <div className="seg admin__tabs">
          <button className={'seg__btn' + (mode === 'events' ? ' is-active' : '')} onClick={() => setMode('events')}><Icon name="calendar" size={18} /> {t('adm_tab_events')}</button>
          <button className={'seg__btn' + (mode === 'highlights' ? ' is-active' : '')} onClick={() => setMode('highlights')}><Icon name="heart" size={18} /> {t('adm_tab_high')}</button>
        </div>

        {mode === 'highlights' ? (
          <HighlightManager lang={lang} customHighlights={customHighlights} setCustomHighlights={setCustomHighlights} />
        ) : (
        <div className="admin__grid">
          <form className="admin__form" onSubmit={save}>
            <h2 className="admin__formtitle">{editing ? t('adm_edit') : t('adm_new')}</h2>

            <label className="fld">
              <span className="fld__l">{t('adm_f_title')}</span>
              <input className="fld__in" value={form.title} onChange={e => set('title', e.target.value)} placeholder="z. B. Spieletreff" required />
            </label>

            <label className="fld">
              <span className="fld__l">{t('adm_f_desc')}</span>
              <textarea className="fld__in fld__in--area" value={form.desc} onChange={e => set('desc', e.target.value)} rows="2" placeholder="Kurzer Satz…" />
            </label>

            <label className="fld">
              <span className="fld__l">{t('adm_f_recur')}</span>
              <div className="fld__seg">
                {RECUR_OPTS(lang).map(([v, lbl]) => (
                  <button type="button" key={v} className={'fld__segbtn' + (form.recur === v ? ' is-active' : '')} onClick={() => set('recur', v)}>{lbl}</button>
                ))}
              </div>
            </label>

            {form.recur !== 'byapp' && (
              <div className="fld__row">
                <label className="fld">
                  <span className="fld__l">{t('adm_f_day')}</span>
                  <select className="fld__in" value={form.day} onChange={e => set('day', e.target.value)}>
                    {DAY_OPTS(lang).map(o => <option key={o.v} value={o.v}>{o.label}</option>)}
                  </select>
                </label>
                <label className="fld fld--sm">
                  <span className="fld__l">{t('adm_f_from')}</span>
                  <input className="fld__in" type="time" value={form.from} onChange={e => set('from', e.target.value)} />
                </label>
                <label className="fld fld--sm">
                  <span className="fld__l">{t('adm_f_to')}</span>
                  <input className="fld__in" type="time" value={form.to} onChange={e => set('to', e.target.value)} />
                </label>
              </div>
            )}

            <label className="fld">
              <span className="fld__l">{t('adm_f_place')}</span>
              <input className="fld__in" value={form.place} onChange={e => set('place', e.target.value)} />
            </label>

            <div className="fld__row">
              <label className="fld">
                <span className="fld__l">Farbe</span>
                <div className="fld__swatches">
                  {COLOR_OPTS.map(c => (
                    <button type="button" key={c} className={'swatch' + (form.color === c ? ' is-active' : '')} style={{ background: window.BRAND[c] }} onClick={() => set('color', c)} aria-label={c} />
                  ))}
                </div>
              </label>
              <label className="fld">
                <span className="fld__l">Symbol</span>
                <div className="fld__icons">
                  {ICON_OPTS.map(ic => (
                    <button type="button" key={ic} className={'iconpick' + (form.icon === ic ? ' is-active' : '')} onClick={() => set('icon', ic)} aria-label={ic}><Icon name={ic} size={20} /></button>
                  ))}
                </div>
              </label>
            </div>

            <div className="admin__actions">
              <Btn kind="brand" icon="check" type="submit">{t('adm_save')}</Btn>
              {editing && <Btn kind="ghost" onClick={reset} type="button">{t('adm_cancel')}</Btn>}
            </div>
          </form>

          <div className="admin__list">
            <div className="admin__listhead">
              <h2 className="admin__formtitle">{t('adm_count')}: {events.length}</h2>
            </div>
            {events.map(ev => (
              <div key={ev.id} className="admrow" style={{ '--c': window.BRAND[ev.color] }}>
                <div className="admrow__ico"><Icon name={ev.icon} size={22} /></div>
                <div className="admrow__body">
                  <div className="admrow__title">{window.tr(ev.title, lang)}</div>
                  <div className="admrow__meta">
                    {ev.recur !== 'byapp' && <span>{window.CAL.weekdaysShort[lang][ev.day]} {ev.from}–{ev.to}</span>}
                    <span className="admrow__recur">{window.recurLabel(ev, lang)}</span>
                  </div>
                </div>
                <div className="admrow__btns">
                  <button className="iconbtn" onClick={() => startEdit(ev)} aria-label="edit"><Icon name="edit" size={18} /></button>
                  <button className="iconbtn iconbtn--danger" onClick={() => del(ev.id)} aria-label="delete"><Icon name="trash" size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>

      {toast && <div className="toast"><Icon name="check" size={20} /> {t('adm_saved')}</div>}
    </div>
  );
}

/* ===================== KAPi (Kappelrodeck International) ===================== */
function Kapi({ lang, navigate }) {
  const t = window.makeT(lang);
  const values = [
    { icon: 'globe', color: 'blue',  tt: 'kapi_v1_t', tb: 'kapi_v1_b' },
    { icon: 'users', color: 'green', tt: 'kapi_v2_t', tb: 'kapi_v2_b' },
    { icon: 'heart', color: 'red',   tt: 'kapi_v3_t', tb: 'kapi_v3_b' },
  ];
  return (
    <main>
      <section className="wrap sec kapihero">
        <div className="kapilogo">
          <img src="assets/kapi-logo.png" alt="KAPi – Kappelrodeck International – stark durch Vielfalt" />
        </div>
        <p className="kapihero__slogan">{t('kapi_slogan')}</p>
        <h1 className="kapihero__title">{t('kapi_title')}</h1>
        <p className="kapihero__lead">{t('kapi_lead')}</p>
      </section>

      <section className="sec sec--alt">
        <div className="wrap">
          <div className="cardgrid cardgrid--3">
            {values.map(v => (
              <div key={v.tt} className="mitcard mitcard--static" style={{ '--c': window.BRAND[v.color] }}>
                <div className="mitcard__ico"><Icon name={v.icon} size={30} /></div>
                <h3 className="mitcard__title">{t(v.tt)}</h3>
                <p className="mitcard__body">{t(v.tb)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="about">
          <div className="about__text">
            <h2 className="sechead__title">{t('kapi_what')}</h2>
            <p className="about__body">{t('kapi_body')}</p>
            <div className="about__pills">
              <span><Icon name="heart" size={16} /> {t('free_all')}</span>
              <span><Icon name="pin" size={16} /> Kappelrodeck</span>
            </div>
          </div>
          <div className="about__media">
            <Photo label={t('placeholder_photo')} color="blue" ratio="4 / 5" round="var(--radius-lg)" />
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="kapiband">
          <img src="assets/kamin-mark.png" alt="" className="kapiband__mark" />
          <div className="kapiband__txt">
            <h2 className="kapiband__title">{t('kapi_kamin_t')}</h2>
            <p className="kapiband__sub">{t('kapi_kamin_b')}</p>
          </div>
          <Btn kind="brand" icon="arrow" onClick={() => navigate('start')}>{t('kapi_tokamin')}</Btn>
        </div>
      </section>

      <section className="wrap sec kapipartners">
        <div className="sechead sechead--center">
          <h2 className="sechead__title">{t('kapi_partners')}</h2>
        </div>
        <div className="kapipartners__row">
          {[0,1,2,3].map(i => (
            <div key={i} className="kapipartners__slot">
              <Icon name="users" size={26} />
              <span>Logo</span>
            </div>
          ))}
        </div>
        <p className="kapipartners__note">{t('kapi_partners_note')}</p>
      </section>
    </main>
  );
}

Object.assign(window, { UeberUns, Kontakt, Admin, Kapi });

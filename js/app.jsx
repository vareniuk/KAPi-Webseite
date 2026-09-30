/* KaM·in — app shell: routing, theme & language state, mount */
const { useState, useEffect } = React;

function applyTheme(themeKey) {
  const th = window.THEMES[themeKey];
  const root = document.documentElement;
  Object.entries(th.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.style.setProperty('--font-head', th.fontHead);
  root.style.setProperty('--font-body', th.fontBody);
  root.setAttribute('data-theme', themeKey);
  root.setAttribute('data-hero', th.hero);
  root.setAttribute('data-playful', th.playful ? 'yes' : 'no');
}

function App() {
  const [route, setRoute] = useState('start');
  const [postId, setPostId] = useState(null);
  const [lang, setLang] = useState(() => localStorage.getItem('kamin_lang') || 'de');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('kamin_theme');
    return (saved && window.THEMES[saved]) ? saved : 'warm';
  });
  const [customEvents, setCustomEvents] = useState(() => {
    try { const s = localStorage.getItem('kamin_events'); if (s) return JSON.parse(s); } catch (e) {}
    return window.EVENTS;
  });
  const [customHighlights, setCustomHighlights] = useState(() => {
    try { const s = localStorage.getItem('kamin_highlights'); if (s) return JSON.parse(s); } catch (e) {}
    return window.HIGHLIGHTS;
  });

  useEffect(() => { applyTheme(theme); localStorage.setItem('kamin_theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('kamin_lang', lang); document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { localStorage.setItem('kamin_events', JSON.stringify(customEvents)); }, [customEvents]);
  useEffect(() => { localStorage.setItem('kamin_highlights', JSON.stringify(customHighlights)); }, [customHighlights]);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [route, postId]);

  const navigate = (r) => { setPostId(null); setRoute(r); };
  const openPost = (id) => { setPostId(id); setRoute('post'); };

  // Admin is a standalone, chrome-light view
  if (route === 'admin') {
    return (
      <div className="app app--admin">
        <DesignBar theme={theme} setTheme={setTheme} lang={lang} />
        <Admin lang={lang} customEvents={customEvents} setCustomEvents={setCustomEvents} customHighlights={customHighlights} setCustomHighlights={setCustomHighlights} navigate={navigate} />
      </div>
    );
  }

  let screen;
  switch (route) {
    case 'termine':   screen = <Termine lang={lang} customEvents={customEvents} />; break;
    case 'aktuelles': screen = <Aktuelles lang={lang} openPost={openPost} />; break;
    case 'post':      screen = <PostDetail id={postId} lang={lang} navigate={navigate} />; break;
    case 'angebote':  screen = <Angebote lang={lang} navigate={navigate} />; break;
    case 'ueberuns':  screen = <UeberUns lang={lang} navigate={navigate} />; break;
    case 'kontakt':   screen = <Kontakt lang={lang} />; break;
    case 'kapi':      screen = <Kapi lang={lang} navigate={navigate} />; break;
    default:          screen = <Home lang={lang} navigate={navigate} theme={theme} openPost={openPost} highlights={customHighlights} />;
  }

  return (
    <div className="app">
      <DesignBar theme={theme} setTheme={setTheme} lang={lang} />
      <Header route={route === 'post' ? 'aktuelles' : route} navigate={navigate} lang={lang} setLang={setLang} />
      {screen}
      <Footer lang={lang} setLang={setLang} navigate={navigate} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

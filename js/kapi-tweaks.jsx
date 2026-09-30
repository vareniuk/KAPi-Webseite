/* KAPi Website — Tweaks-Panel (3 Looks, Akzentfarbe, Effekte) */

const KAPI_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "look": "Aurora",
  "accent": "#0a93d6",
  "fx": 80
}/*EDITMODE-END*/;

const KAPI_LOOK_MAP = { 'Aurora': 'aurora', 'Plakat': 'plakat', 'Sanft': 'sanft' };

function KapiTweaksApp() {
  const [t, setTweak] = useTweaks(KAPI_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.look = KAPI_LOOK_MAP[t.look] || 'aurora';
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--fx', String((t.fx == null ? 80 : t.fx) / 100));
  }, [t.look, t.accent, t.fx]);

  return (
    <TweaksPanel>
      <TweakSection label="Look" />
      <TweakRadio label="Stil" value={t.look}
                  options={['Aurora', 'Plakat', 'Sanft']}
                  onChange={(v) => setTweak('look', v)} />
      <TweakSection label="Farbe" />
      <TweakColor label="Akzent" value={t.accent}
                  options={['#0a93d6', '#e2231a', '#6aa12f', '#ef8f1e']}
                  onChange={(v) => setTweak('accent', v)} />
      <TweakSection label="Hintergrund" />
      <TweakSlider label="Effekte" value={t.fx} min={0} max={100} unit="%"
                   onChange={(v) => setTweak('fx', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<KapiTweaksApp />);

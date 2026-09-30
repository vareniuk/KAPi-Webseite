# Branding-Brief: KAPi – Kappelrodeck International & Bürgertreff KaM·in

## Ausgangslage
- **KAPi – Kappelrodeck International** ist das Netzwerk für Integration, Begegnung und Vielfalt in Kappelrodeck (Ortenau, Schwarzwald, ca. 6.000 Einwohner:innen, Menschen aus über 50 Ländern). Projekt der Gemeinde, getragen von Ehrenamtlichen, Sprachpaten, Nachbarn, Vereinen. Claim: **„Stark durch Vielfalt.“**
- **KaM·in** ist der offene Bürgertreff von KAPi am Kappler Marktplatz (Marktplatz 108). Name klingt wie englisch „Come in“ → „Komm herein!“. Alles kostenlos, ohne Anmeldung. Wochenprogramm: Wir sprechen Deutsch, Hausaufgabenhilfe/ABC, Feierabendtreff, Nadelspielereien, Spieletreff, Offene Musikwerkstatt, Afrikanisches Trommeln, Sommerfest.
- Markenarchitektur: **KAPi = Dachmarke (Organisation), KaM·in = Ortsmarke (der Treffpunkt)**. Beide müssen als Familie erkennbar sein.
- Zielgruppen: Zugezogene und Geflüchtete (u. a. Ukraine) mit wenig Deutsch · Einheimische aller Generationen · Familien · Ehrenamtliche · Gemeinde, Förderer, Presse.

## Bestehendes Logo (darf komplett neu gedacht werden – Entscheidung des Vereins)
Dateien: `/home/user/KAPi-Webseite/assets/logo/kapi-logo-quer.png`, `kapi-logo-quadrat.png`, `kamin-logo.png`, `claim-stark-durch-vielfalt.png` (ansehen!).
- Bildmarke: ein **Bogen/Ring aus vier abstrakten Figuren** (Grün, Gelb→Orange, Blau, Rot→Magenta), die sich an den Händen halten – die Idee „Menschen aus vielen Ländern bilden gemeinsam einen Kreis“ ist gut und soll **inhaltlich** erhalten bleiben (Menschen, Gemeinschaft, Vielfalt, Zusammenkommen, offener Kreis).
- Wortmarke „KAPi“ in schwerer Grotesk, Claim „Stark durch Vielfalt“ in Marker-Handschrift, Unterzeile „Kappelrodeck international“ grau.
- KaM·in-Logo: „Bürgertreff“ handschriftlich, „KaM“ fett, rotes handschriftliches „in“, Unterzeile „Kappler Marktplatz“.
- Schwächen: viele Details, wirkt kleinteilig, Verläufe skalieren schlecht, Handschrift + fette Grotesk + graue Unterzeile = drei Stimmen, keine gemeinsame Systematik mit KaM·in.

## Markencharakter (Antworten des Vereins)
- **Warm und nachbarschaftlich** · **lebendig und bunt** · **ruhig und verlässlich**.
- Wärme soll kommen aus: **Pastell – helle Farben, modern, warm und ruhig**, echten Fotos von Menschen, einem grafischen Motiv aus dem Logo (Ring/Figuren), Handschrift als Akzent (wie im Claim), mehr farbig hinterlegten Flächen.
- Stimme: **herzlich und persönlich, Du.** („Komm herein. Trink einen Tee. Wir freuen uns auf dich.“)
- Gesamtanmutung der Website (bereits gebaut, Variante „Studio“): modern, hell, ruhig, typografisch (Inter), Hairlines, keine Kästchen, nichts Verspieltes. Das Branding muss **Wärme und Seele** hinzufügen, ohne die Klarheit zu verlieren.

## Farbwelt (Ausgangspunkt, bereits berechnet: `palette.json` im selben Ordner)
Sechs Logofarben: Grün `#6aa12f` · Blau `#0a93d6` · Orange `#ef8f1e` · Gelb `#f4b400` · Rot `#e2231a` · Pink `#c52866`.
Pro Farbe: `pastel` (helle Fläche), `pastel_soft` (sehr helle Fläche), `tint`, `deep` (als Text auf Weiß AA-konform), `deep_on_pastel`. Neutral: Ink `#1d1d1b`, Papier `#ffffff`, warmes Papier `#fbf9f6`, Grau `#f5f5f7`.
Das Logo darf die sechs Farben reduzieren (z. B. auf vier oder fünf) und muss auch als Pastell-Variante und einfarbig (Ink, Weiß) funktionieren.

## Schriften (selbst gehostet unter `/home/user/KAPi-Webseite/assets/fonts/`)
Inter (300–800), Manrope (300–800), Instrument Serif (400, italic). Wortmarken als **Pfade** erzeugen mit `tools/text2path.py "KAPi" inter 700 -0.03 1000` (Ausgabe JSON mit `d`, `width`, `height`, `baseline`; Koordinaten y nach unten). Keine `<text>`-Elemente in finalen SVGs.

## Werkzeuge
- `tools/text2path.py` (siehe oben) – Schrift zu Pfad.
- `tools/render-svg.js` – `NODE_PATH=/opt/node22/lib/node_modules node tools/render-svg.js <datei.svg> <ordner>` rendert das SVG in 16/32/64/160/480 px auf Weiß, Pastell und Dunkel als PNG (mit Read-Tool ansehen!).

## Anforderungen an jede Logo-Richtung
- **Konzept in einem Satz** erklärbar; erkennbar mit KAPi/KaM·in-Inhalt verbunden (Menschen, Kreis, Tür/Ankommen, Marktplatz, Vielfalt).
- **Modern, ruhig, geometrisch sauber** (konsistente Strichstärken, Rundungen, optische Ausgleiche), nicht kindlich, nicht Clipart, keine Verläufe, keine Schatten, keine Filter.
- **Skalierbar**: Bildmarke muss bei 16 px (Favicon) noch lesbar sein; bei 480 px hochwertig.
- **Familie**: eine Bildmarke, die für KAPi und KaM·in gemeinsam funktioniert, plus je eine Wortmarke; KaM·in bekommt eine eigene, verwandte Wortmarke (z. B. gleiche Bildmarke, Wortmarke „KaM·in“ mit dem Mittelpunkt als gestalterisches Element).
- **Versionen**: farbig auf Weiß, farbig auf Pastell, einfarbig Ink, einfarbig Weiß (für dunkle Flächen/Fotos).
- Dateien (SVG, saubere viewBox, ohne Rand, Pfadzahl klein):
  `logos/<slug>-primary.svg` (Bildmarke + Wortmarke KAPi horizontal), `logos/<slug>-mark.svg` (nur Bildmarke, quadratische viewBox), `logos/<slug>-mono.svg` (Ink), `logos/<slug>-kamin.svg` (KaM·in-Lockup), `logos/<slug>-stacked.svg` (Bildmarke über Wortmarke), plus `logos/<slug>.md` (Konzept, Konstruktion, Farben, Schutzraum, Mindestgrößen, Dos/Don'ts, Grenzen).
- Prüfen mit `render-svg.js` und die PNGs ansehen; nachbessern bis 16 px klar und 480 px sauber ist.

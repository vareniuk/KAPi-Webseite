# Premium-Brief: Logo für KAPi (Kappelrodeck International) & Bürgertreff KaM·in

Der Verein hat die bisherigen Entwürfe (bunte Ringe, Kacheln, Wimpel, Figuren) als **„Kindergarten“** abgelehnt. Er will ein Logo auf dem Niveau internationaler Markenarbeit – Pentagram, Collins, Koto, Studio Dumbar, Bureau Borsche. Das ist der Maßstab. Alles, was nach Verein, Kita, Sozialamt oder Clipart aussieht, ist raus.

## Was Weltklasse hier bedeutet
- **Zurückhaltung.** Maximal zwei Farben pro Logo: Ink `#1d1d1b` (oder ein tiefes, edles Dunkel wie `#14213d`, `#1b2a24`, `#2b1d1a`) plus höchstens **eine** Akzentfarbe (z. B. ein sattes Rot `#e2231a`, ein warmes Orange `#ef8f1e`, ein tiefes Blau `#0a5fa8`, ein Oliv `#5a7a2e`) – oder komplett einfarbig. **Kein Regenbogen, keine sechs Farben, keine Pastellflächen im Logo.**
- **Typografie trägt.** Die Wortmarke ist das Logo oder mindestens gleichberechtigt. Sie wird **bearbeitet**, nicht nur gesetzt: eine Ligatur, ein geteilter Strich, ein weggeschnittener Teil, ein Buchstabe, der sich zum Zeichen wandelt, ein Negativraum (z. B. die Punze des P als Türöffnung, der Querbalken des A als Schwelle, das i als Mittelpunkt, der KAPi und KaM·in verbindet). Ein einziger Eingriff, präzise – nicht fünf.
- **Negativraum und Geometrie.** Zeichen aus einfachen, exakt konstruierten Formen (Kreis, Rechteck, Kreisbogen) mit einem überraschenden Negativraum. Konsistente Strichstärken, optische Ausgleiche, auf Raster gesetzt.
- **Luft.** Schutzraum, Laufweite, Proportionen – alles ruhig. Nichts gedrängt, nichts verspielt, nichts Rundes um der Rundheit willen.
- **Ernsthaft, warm, erwachsen.** Das Logo muss auf einem Schild am Marktplatz, auf einem Rathaus-Briefbogen, auf einem Instagram-Profil und auf einem T-Shirt einer 25-Jährigen gleich gut aussehen.
- **Keine Figuren mit Köpfen, keine Herzen, keine Hände, keine Weltkugeln, keine Puzzleteile, keine Sprechblasen, keine Häuschen, keine Sonnen.**

## Inhalt, der transportiert werden darf (subtil!)
- Offene Tür / Schwelle / „Komm herein“ (KaM·in ≈ „Come in“).
- Der Marktplatz als Mitte des Ortes; ein Tisch, an dem man zusammensitzt.
- Vielfalt als Struktur (Raster, Modul, Rhythmus), nicht als Buntheit.
- Der Mittelpunkt in „KaM·in“ (U+00B7) ist ein Geschenk: ein Punkt, der verbindet. Er darf das System-Element der ganzen Marke werden (Punkt im i von KAPi = Mittelpunkt in KaM·in).
- Claim „Stark durch Vielfalt.“ – nur typografisch, klein, optional. Keine Handschrift in dieser Runde.

## Werkzeuge
- Text → Pfad: `python3 /tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/tools/t2p.py <fontdatei> <wght> "<Text>" [letterspacing_em] [size]` (JSON: d, width, capHeight, xHeight; Grundlinie y=0, y nach unten).
- **Boolesche Pfadoperationen** (Schneiden, Vereinigen, Differenz) für echte Buchstabenbearbeitung: Python-Modul `pathops` (skia-pathops) ist installiert. Beispiel:
  ```python
  from pathops import Path, union, difference
  from fontTools.svgLib.path import parse_path   # SVG-d → Pen
  from fontTools.pens.svgPathPen import SVGPathPen
  def P(d):  # SVG-d → pathops.Path
      p = Path(); parse_path(d, p.getPen()); return p
  a = P(d_glyph); cut = P("M0 0H40V20H0Z")      # Rechteck als Schneidform
  out = Path(); difference([a], [cut], out.getPen())
  pen = SVGPathPen(None); out.draw(pen); d_new = pen.getCommands()
  ```
  Damit lassen sich Striche kappen, Buchstaben verbinden (union), Punzen öffnen (difference), Formen aus Buchstaben ausschneiden.
- Schriften (woff2) in `/tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/wordmarks/fonts/`: spacegrotesk, sora, dmsans, plusjakartasans, albertsans, figtree, urbanist, outfit, lexend, bricolagegrotesque, archivoblack, barlowcondensed-600/-800, fraunces (Serif, variable), gloock (Display-Serif), playfairdisplay, cormorantgaramond; außerdem `/home/user/KAPi-Webseite/assets/fonts/inter-latin.woff2`, `manrope-latin.woff2`, `instrumentserif-latin.woff2`, `instrumentserif-italic-latin.woff2`. Laufweite und Gewicht bewusst wählen (enge Grotesk, großzügige Versalien mit Tracking, kontrastreiche Serif …).
- Render-Prüfung: `NODE_PATH=/opt/node22/lib/node_modules node /tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/tools/render-svg.js <datei.svg> <ordner>` → PNGs 16/32/64/160/480 auf Weiß/Pastell/Dunkel. **160 und 480 px mit dem Read-Tool ansehen, als Creative Director beurteilen, mindestens zwei Runden nachschärfen.** Frage dich bei jedem Blick: Würde Pentagram das zeigen? Wenn nein, weiter.

## Abgabe pro Konzept (Nummer NN)
- `NN-<slug>.svg` – KAPi-Logo (Zeichen und/oder Wortmarke in finaler Anordnung), viewBox eng, keine `<text>`, keine externen Referenzen, keine Verläufe/Filter/Masken (Boolesche Operationen vorher ausführen, Ergebnis als Pfad).
- `NN-<slug>-kamin.svg` – KaM·in im selben System.
- `NN-<slug>-dark.svg` – Fassung für dunklen Grund (Weiß/Akzent).
- `NN-<slug>-mark.svg` – nur das Zeichen bzw. das Monogramm/Kurzzeichen (für Favicon, Social), quadratische viewBox.
- `NN-<slug>.md` – Konzept in einem Satz, der eine Eingriff, Schrift + Gewicht + Laufweite, Farben, Konstruktion (Maße), warum es Weltklasse ist, ehrliche Grenzen.
Ablage: `/tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/premium/`. Nichts im Repo ändern.

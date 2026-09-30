# Logo-Richtung „Tor“ (Slug: `tor`) – Stand nach Jury-Feedback

## Konzept

**Ein offenes Tor aus zwei warmen Farbbändern – und der Mensch steht im Mittelpunkt. Bei KAPi wie bei KaM·in.**

Die Bildmarke ist ein Torbogen aus zwei gleich breiten, ineinander liegenden Bändern: außen Orange (Wärme, Marktplatz, Abend­sonne), innen Pink (Herzlichkeit, das Drinnen). Genau im Mittelpunkt der Bögen steht ein blauer Punkt: ein Mensch, der hereinkommt – aus der weiten Welt (Blau) in die Wärme. Das Tor zitiert den Bogen des alten KAPi-Logos und die Torbögen und Hauseingänge am Kappler Marktplatz; der Mensch darin ist der Kern des Vereins: **Menschen im Mittelpunkt, Komm herein.** Der rechte Pfosten ist kürzer als der linke – eine Schwelle, über die man hineintritt, und zugleich der Grund, warum die Form nicht wie ein Buchstabe liest.

Die Bildmarke ist für KAPi und KaM·in **identisch**; die Familie unterscheidet sich allein über die Wortmarke: „KAPi“ mit rundem i-Punkt, „KaM·in“ mit dem blauen Mittelpunkt – demselben Menschen, der auch im Tor steht.

### Was sich gegenüber der ersten Fassung geändert hat

| Kritik der Jury | Umsetzung |
|---|---|
| KAPi-Marke zeigte ein Bauteil, keine Menschen | Der Mensch (r 8,5) steht jetzt in **beiden** Marken; KAPi/KaM·in nur noch über die Wortmarke unterschieden → eine Bildmarke für die ganze Familie |
| Mono liest als gerundetes n („nKAPi“), KaM·in-Mono als Schlüsselloch | Pfosten **asymmetrisch** (links 40 u, rechts 28 u) → keine Glyphe mehr; Fuge von 6 auf **8 u** verbreitert → Bogen und Punkt verschmelzen nicht; der Punkt selbst bricht die n-Lesart zusätzlich |
| Blau/Orange = Bank/Versicherung, kühl | Farbwelt erwärmt: außen **Orange**, innen **Pink**, Mensch **Blau** – drei Farben bleiben, aber warm nach außen |
| Basis-Blau hart auf Pastell, Tint erst ab 160 px | Neue **Deep-Fassung** (`tor-*-deep.svg`) für Pastellflächen ab 32 px; außerdem sitzt Orange/Pink ohnehin weicher auf `#faf0e5` als Blau |
| Regenbogen / Hufeisen / Tunnel | Asymmetrie + Punkt + glatte Pfostenenden entfernen die Form vom Regenbogen (der ist symmetrisch und leer) und vom Magneten (der hat gleich lange Schenkel) |

## Dateien

| Datei | Inhalt |
|---|---|
| `tor-mark.svg` | Bildmarke (KAPi **und** KaM·in), farbig, viewBox `0 -5 100 100` (quadratisch; das Tor selbst ist 100 × 90) |
| `tor-mark-deep.svg` | Bildmarke in Deep-Farben (für Pastellflächen, ab 32 px) |
| `tor-mark-mono.svg` / `tor-mark-white.svg` | Bildmarke Ink / Weiß |
| `tor-mark-pastell.svg` | Bildmarke in Tint-Farben (dekorativ, nur groß) |
| `tor-mark-single.svg` | Ein Bogen + Mensch, Ink – nur für Kleinstgrößen, Stempel, Stick |
| `tor-primary.svg` | Bildmarke + Wortmarke „KAPi“ horizontal, Wortmarke Ink |
| `tor-primary-deep.svg` | dito, Bildmarke Deep (Pastellflächen) |
| `tor-primary-invers.svg` | dito, Wortmarke Weiß (dunkle Flächen, Fotos) |
| `tor-stacked.svg` | Bildmarke über Wortmarke |
| `tor-mono.svg` / `tor-mono-white.svg` | Primär-Lockup einfarbig Ink / Weiß |
| `tor-kamin.svg` | Bildmarke + Wortmarke „KaM·in“ (Mittelpunkt Blau) |
| `tor-kamin-deep.svg` / `tor-kamin-invers.svg` / `tor-kamin-mono.svg` / `tor-kamin-stacked.svg` | KaM·in Deep / Weiß / Ink / gestapelt |

`tor-mark-kamin.svg` gibt es nicht mehr – die Bildmarke ist für beide Marken dieselbe.

Alle Dateien sind mit `../tools/gen-tor.py` erzeugt (Parameter oben im Skript; `gen-tor.py explore` schreibt das Varianten-Blatt `../explore/torf-sheet.svg`). Die Wortmarken sind Pfade (Inter 700, Laufweite −0,03 em), keine `<text>`-Elemente, keine Verläufe, Filter, Masken oder externe Referenzen. Jede Bildmarke besteht aus zwei Pfaden und einem Kreis.

## Konstruktion (Raster 100 × 100, Einheit u)

- Bogenmittelpunkt (50 | 50), Außenradius 50 → das Tor ist 100 u breit.
- **Pfosten asymmetrisch**: links 40 u (Standlinie y = 90), rechts 28 u (Ende y = 78). Verhältnis 10 : 7. Der kürzere Pfosten steht im Lockup zur Wortmarke hin – die Schwelle führt zum Namen. Symmetrische Pfosten lasen als n bzw. Magnet (geprüft, verworfen).
- **Bänder** 12 u breit, **Fuge** 8 u (Verhältnis 3 : 2): außen r 50→38, innen r 30→18. **Öffnung** 36 u breit. Bei 16 px ist die Fuge 1,3 px – bleibt auch mit Antialiasing eine sichtbare Linie; die alte 6-u-Fuge (0,96 px) verschwamm in Mono zum Schlüsselloch.
- **Mensch**: Kreis r 8,5 u genau im Bogenmittelpunkt (50 | 50), Luft zum inneren Band rundum 9,5 u. Absichtlich größer als die Bandbreite, damit er bei 16 px (2,7 px) noch ein Punkt ist. Er bleibt geometrisch im Mittelpunkt, auch wenn die Öffnung unten asymmetrisch ist – „im Mittelpunkt“ ist wörtlich gemeint.
- Bandenden unten glatt (butt), keine Rundung: das Tor steht auf dem Boden.
- Quadratische Marken-Dateien: viewBox `0 -5 100 100`, das Tor ist vertikal zentriert (5 u Luft oben und unten); enge Maße 100 × 90.
- **Wortmarke KAPi**: Inter 700, Laufweite −0,03 em, Versalhöhe 64 u im Primär-Lockup, Grundlinie = Standlinie des linken Pfostens (y 90). Abstand Tor → K: 26 u. Der i-Punkt ist ein Kreis mit ⌀ 1,08 × Stammbreite (optischer Ausgleich Kreis vs. Quadrat).
- **Wortmarke KaM·in**: „KaM“ und „in“ gesetzt, der Mittelpunkt konstruiert: gleicher Kreis wie der i-Punkt, Mitte auf 0,30 em über der Grundlinie, Vorschub 0,334 em wie Inters `periodcentered`. Farbe des Mittelpunkts = Farbe des Menschen im Tor (Blau; Deep-Blau in der Deep-Fassung; Ink/Weiß einfarbig).
- **Stacked**: Tor 100 u breit zentriert, 20 u Abstand, Wortmarke Versalhöhe 50 u.

## Farbzuordnung

| Element | Farbig (Weiß, helle Flächen) | Deep (Pastellflächen, ab 32 px) | Tint (dekorativ, ab 160 px) | Einfarbig |
|---|---|---|---|---|
| Äußeres Band | Orange `#ef8f1e` | Orange-deep `#a76415` | `#f8cd9a` | Ink `#1d1d1b` bzw. Weiß |
| Inneres Band | Pink `#c52866` | Pink `#c52866` (ist bereits AA) | `#e59eba` | Ink bzw. Weiß |
| Mensch + Mittelpunkt „KaM·in“ | Blau `#0a93d6` | Blau-deep `#087bb4` | `#91ceed` | Ink bzw. Weiß |
| Wortmarke | Ink | Ink | Ink | Ink bzw. Weiß |

- **Farbig** ist die Hauptversion: auf Weiß, warmem Papier `#fbf9f6` und hellen `pastel_soft`-Flächen.
- **Deep** ist die ruhige Fassung für die Website-Kacheln und alle `pastel`-Flächen (`#fce9d2`, `#faf0e5` …): Terracotta statt Leuchtorange, das Blau eine Stufe tiefer. Ab 32 px; darunter farbig oder Ink.
- **Tint** ist keine Logo-Ersatzfarbe, sondern für große, ruhige Flächen (Wasserzeichen, Hintergrundmotiv, Ton-in-Ton-Stoffdruck). Nie unter 160 px.
- **Einfarbig**: Ink auf hellen Flächen, Weiß auf dunklen Flächen und Fotos. Beide Bänder und der Mensch bleiben; `tor-mark-single.svg` (ein Bogen + Mensch) nur, wenn die Fuge technisch nicht darstellbar ist (Stempel, Stick, Prägung).
- Grün, Gelb und Rot bleiben dem Umfeld vorbehalten (Flächen, Programmkategorien, Fotos) – das Logo bleibt bei drei Farben. Grün/Orange/Pink wurde geprüft (`explore/torf-E-*`): ebenfalls warm, aber die Kombination liest stärker als Regenbogen; Orange/Pink/Blau ist eigenständiger.

## Schutzraum

Rundum mindestens **zwei Bandbreiten = 24 u** (24 % der Torbreite), bequemer 30 u. Bezug: die Bandbreite ist die Maßeinheit des Logos. Rechts unter dem kurzen Pfosten zählt der Schutzraum ab der Standlinie (y 90), nicht ab dem Pfostenende – die Stufe bleibt frei.

## Mindestgrößen

| Version | Digital | Druck |
|---|---|---|
| Bildmarke farbig / Ink / Weiß | 16 px (Favicon; Fuge 1,3 px, Mensch 2,7 px) | 5 mm breit |
| Bildmarke Deep | 32 px | 8 mm |
| Primär-Lockup KAPi | 100 px breit (Wortmarke ≈ 20 px Versalhöhe) | 28 mm breit |
| KaM·in-Lockup | 120 px breit | 32 mm |
| Stacked | 64 px breit | 18 mm |
| Tint-Version | 160 px | 40 mm |

Geprüft: 16/32/64/160/480 px auf Weiß, Pastell `#faf0e5` und Dunkel `#1d1d1b` (`../render/tor-fein/`), Varianten in `../render/tor-fein-x/`.

## Anwendungen

- **Website-Header**: `tor-primary.svg`, Höhe 36–44 px; auf dem Startbild oder dunklem Footer `tor-primary-invers.svg`; auf Pastell-Kacheln `tor-primary-deep.svg` bzw. `tor-mark-deep.svg`. Auf KaM·in-Seiten `tor-kamin.svg`. Favicon `tor-mark.svg` (16/32 px), Apple-Touch-Icon `tor-mark.svg` auf `#fdf4e8`.
- **Schild am Marktplatz 108**: `tor-kamin-stacked.svg` groß auf weißem oder warm-weißem Grund; das Tor liest sich als Eingangsmarkierung mit Mensch – „hier hinein“. Auf Metall/Holz `tor-kamin-mono.svg` oder Weiß auf Orange.
- **T-Shirt / Beutel**: Brust links `tor-mark.svg` (5–7 cm), Rücken `tor-stacked.svg`. Auf farbigen Textilien Weiß einfarbig; auf Pastell-Textil Deep.
- **Instagram-Profilbild**: `tor-mark.svg` auf `pastel_soft`-Fläche (z. B. `#fdf4e8`), Tor auf ca. 62 % der Kreisfläche.
- **Plakate, Programmzettel**: Tint-Version als große Fläche hinter Text; das Tor kann Fotos einrahmen (Foto in der Öffnung, dann ohne Mensch – das Foto ist der Mensch).
- **Programm-Icons**: der Mensch in wechselnder Farbe (Grün Spieletreff, Gelb Musik …) ist die einzige erlaubte Variation – nur als Sekundärgrafik, nie als Logo.

## Dos

- Standlinie des linken Pfostens und Grundlinie der Wortmarke bleiben auf einer Höhe.
- Immer beide Bänder mit gleicher Breite, 8-u-Fuge und den Pfostenlängen 40/28; Abstände nur proportional skalieren.
- Der Mensch gehört in jede Version der Bildmarke – auch in KAPi.
- Farbig auf hellen Flächen, Deep auf Pastell, Weiß auf dunklen – nichts dazwischen.

## Don'ts

- Keine vierte Farbe im Tor, keine Bänder in zwei Farben (Keystone-Naht am Scheitel wirkt wie ein Schnitt – geprüft, verworfen).
- Kein Verlauf, kein Schatten, keine Kontur um die Bänder.
- Tor nicht spiegeln (der kurze Pfosten steht rechts), nicht drehen, dehnen oder zum Vollkreis schließen; Pfosten nicht auf gleiche Länge „reparieren“.
- Keine zwei oder drei Punkte unter dem Bogen: bei 480 px lesen sie als Augen/Gesicht (geprüft: `explore/torf-H-*`).
- Wortmarke nicht in anderer Schrift oder Schnitt neu setzen; der runde i-Punkt und der Mittelpunkt gehören dazu.
- Nicht auf mittelhellen, gesättigten Flächen (Basis-Orange, Basis-Pink) farbig verwenden – dort Weiß.

## Ehrliche Grenzen

- **Vielfalt** ist im Logo als Prinzip da (drei Farben, ein Mensch im Tor), aber nicht als Gruppe erzählt – „viele Menschen“ hätte zwei oder mehr Punkte gebraucht, und die kippen ins Gesicht oder verschwinden bei 16 px. Die Erzählung „Stark durch Vielfalt“ tragen deshalb Claim, Fotos und die Programm-Icons (Mensch in wechselnder Farbe).
- **Asymmetrie** ist Geschmackssache: manche sehen im kurzen Pfosten eine Schwelle, manche eine unfertige Form. Bei sehr kleinen Größen fällt sie kaum auf, dort tragen Bänder und Punkt.
- **Regenbogen-Nähe** ist verringert, nicht verschwunden: zwei konzentrische Farbbögen bleiben zwei konzentrische Farbbögen. Orange/Pink ist wärmer, aber auch näher an Kita-Farbwelten als Blau/Orange.
- **Pink auf Dunkel** (`#c52866` auf `#1d1d1b`) hat wenig Kontrast; die farbige Bildmarke funktioniert auf Dunkel ab 32 px, darunter Weiß einfarbig.
- **Deep-Orange** `#a76415` ist ein Terracotta-Braun – bewusst ruhig, aber weniger „lebendig und bunt“. Es ist eine Zweitfassung, nicht die Marke.
- **Mono** ist jetzt frei von n und Schlüsselloch; dafür liest Bogen + Punkt in Ink entfernt wie ein Fingerabdruck- oder Zielsymbol. Erträglich, weil die Farbversion die Hauptversion ist.

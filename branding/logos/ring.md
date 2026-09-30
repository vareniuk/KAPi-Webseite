# Logo-Richtung „Ring“ (Slug: `ring`)

## Konzept

**Fünf Menschen stehen Schulter an Schulter im Kreis – ein Platz bleibt frei: das ist die Tür, und der sechste Platz gehört dir.**

Die Bildmarke entwickelt den Figurenring des bestehenden Logos weiter, reduziert ihn aber auf das Wesentliche: Jede Figur ist nur noch ein Kreis (Kopf) und ein Bogen (Schultern/Arme), alle mit derselben Strichstärke. Die Bögen stoßen Schulter an Schulter aneinander – getrennt nur durch eine haarfeine Fuge, die bei kleinen Größen verschwindet – und bilden zusammen einen Ring. Der Ring ist unten offen – der offene Platz hat exakt die Breite eines weiteren Menschen. Damit erzählt die Marke beide Namen gleichzeitig: KAPi (Menschen aus vielen Ländern bilden gemeinsam einen Kreis) und KaM·in („Komm herein“ – die Tür steht offen, ein Platz ist frei). Die Form ist ruhig und geometrisch (nur Kreise und Kreisbögen), wirkt aber durch die Köpfe menschlich; in Einfarbig bleibt sie eine klare, freundliche Silhouette.

## Dateien

| Datei | Inhalt |
|---|---|
| `ring-mark.svg` | Bildmarke, farbig, quadratische viewBox |
| `ring-mark-mono.svg` / `ring-mark-white.svg` | Bildmarke Ink / Weiß |
| `ring-mark-tint.svg` | Bildmarke in Tint-Farben (für dunkle Flächen, Fotos, Wasserzeichen) |
| `ring-primary.svg` | Bildmarke + Wortmarke „KAPi“ horizontal (auf Weiß und Pastell) |
| `ring-primary-invers.svg` | wie primary, Tint-Figuren + weiße Wortmarke (dunkle Flächen) |
| `ring-stacked.svg` | Bildmarke über Wortmarke (Instagram-Profil, Schild, T-Shirt-Brust) |
| `ring-mono.svg` / `ring-mono-white.svg` | primary einfarbig Ink / Weiß |
| `ring-kamin.svg` / `ring-kamin-invers.svg` | Lockup „KaM·in“ farbig / invers |

Alle Dateien: reine Pfade und Kreise, keine Schriften, keine Verläufe, Filter, Masken oder externen Referenzen. Generator: `../tools/gen-ring.py` (Fassung 2; alle Maße parametrisch, Wortmarken über `tools/text2path.py`, viewBox aus den tatsächlichen Pfaddaten). `../ring_gen.py` ist die abgelöste Fassung 1.

**Fassung 2 (nach Jury-Feedback):** viewBox-Beschnitt behoben; Bögen als gefüllte Ringsegmente mit radialer Fuge statt überlappender Rundkappen (keine „Thermometer-Nasen“ mehr); Köpfe weiter vom Ring weg (Luft 2,5 → 4) und etwas größer (r 6,5 → 7), Strich 8,5 → 8; i-Punkt und KaM·in-Punkt kleiner (Ø 1,24 → 1,08 × Stamm) und mit Luft über dem Stamm; Abstand Marke ↔ Wortmarke 20 → 24 %.

## Konstruktion

Raster 100 × 100, Mittelpunkt (50, 50). Der Kreis ist in **sechs Plätze à 60°** geteilt; fünf sind besetzt, der Platz unten (zentriert auf 90°, 60°…120°) bleibt frei.

| Element | Maß |
|---|---|
| Ring-Mittellinie | Radius **30** (Außenkante 34, Innenkante 26) |
| Strichstärke Bögen | **8** |
| Bögen | je Figur ein gefülltes Ringsegment von Platzgrenze zu Platzgrenze (60°, Bogenlänge ≈ 31,4); die Enden sind **radial gerade geschnitten** (kein Überlappen, keine Kappen) |
| Fuge zwischen zwei Figuren | **1,8** lichte Weite, parallelkantig (= 0,3 px bei 16 px, 0,5 px bei 24 px, 1,2 px bei 64 px): bei Icon-Größen schließt sich der Ring optisch, ab ≈ 48 px sind fünf Figuren zählbar |
| Türseitige Enden | rund (Radius 4 = halbe Strichstärke) – die Arme an der Tür sind offen und weich, nicht abgesägt |
| Köpfe | Kreise Radius **7** (Ø 14) auf Radius **45**, jeweils in der Mitte eines Platzes (Winkel 150°, 210°, 270°, 330°, 30°) |
| Abstand Kopf ↔ Bogenaußenkante | **4** (45 − 7 − 34) – bei 16 px ≈ 0,7 px, die Köpfe bleiben getrennt |
| Öffnung | lichte Weite zwischen den runden Enden **22** (Mittellinie zu Mittellinie 30 minus Strich 8) = eine Personenbreite |
| Bounding-Box Bildmarke | 4,03 … 95,97 × −2 … 79,98 (91,94 × 81,98) |
| viewBox Bildmarke | `4.03 -6.98 91.94 91.94` – quadratisch, seitlich randlos, oben/unten 4,98 Ausgleich |
| viewBox primary / mono / invers | `4.03 -2 263.41 81.98` (aus den Pfaddaten inkl. i-Punkt berechnet) |
| viewBox kamin | `4.03 -2 333.84 81.98`; stacked `1.04 -2 97.93 127.89` |

Optische Ausgleiche: Kopfdurchmesser (14) = 1,75 × Strichstärke (8) – die Köpfe wirken schwerer als der Bogen und lesen sich als Köpfe, nicht als Punkte. Ein Schulterbogen ist ≈ 2,2 Kopfdurchmesser breit – Proportion des klassischen „Person“-Piktogramms. Die Fuge ist bewusst so schmal, dass sie bei 16–32 px verschwindet (Ring = eine Gemeinschaft) und ab 48 px sichtbar wird (fünf Personen). Die Fuge ist radial; schräge oder gespiegelte Fugen wurden geprüft und verworfen (wirken wie Turbine bzw. Bogenbrücke mit Schlussstein).

**Wortmarke „KAPi“**: Inter 700, Tracking −0,03 em, als Pfad. Das i ist ein Stamm ohne Punkt („ı“); der Punkt ist ein Kreis mit **Ø = 1,08 × Stammbreite** (r = 79 Font-Einheiten bei 1000/em, Stamm 146) mit **60 Einheiten Luft** über der Stammoberkante; seine Oberkante ragt 5 % über die Versalhöhe (optischer Überhang, wie bei Inter selbst) – ein Kopf aus dem Ring. Versalhöhe = 62 % der Markenhöhe, Abstand Marke ↔ Wortmarke = **24 %** der Markenhöhe, Versalhöhe mittig zur Marke ausgerichtet. Gestapelt: Versalhöhe 40 % der Markenhöhe, Abstand 16 %, mittig.

**Wortmarke „KaM·in“**: Inter 700, gleiches Tracking, gesetzt mit Inter-Mittelpunkt (U+00B7) für die Laufweite; der Mittelpunkt selbst ist durch einen Kreis ersetzt (gleicher Radius wie der i-Punkt, r = 79), Mitte **0,30 em über der Grundlinie**. Der i-Punkt in „in“ ist ebenfalls ein Kreis (Textfarbe, gleiche Konstruktion wie bei KAPi), damit KAPi und KaM·in dasselbe Detail teilen. Der farbige Mittelpunkt ist die Klammer der Familie: derselbe Kopf, der im Ring steht, steht im Namen des Treffs.

## Farbzuordnung

Fünf der sechs Logofarben (Gelb entfällt: zu wenig Kontrast auf Weiß in kleiner Größe; es bleibt Flächenfarbe der Website). Reihenfolge von links unten im Uhrzeigersinn – warm/kalt wechselnd, warme Farben an der Tür:

| Position | Figur | Farbig (Weiß & Pastell) | Tint (dunkel / invers) | Pastell-Fläche (Hintergrund) |
|---|---|---|---|---|
| unten links | Pink | `#c52866` | `#e59eba` | `#f3d4e0` |
| links | Grün | `#6aa12f` | `#bcd5a1` | `#e1ecd5` |
| oben | Orange | `#ef8f1e` | `#f8cd9a` | `#fce9d2` |
| rechts | Blau | `#0a93d6` | `#91ceed` | `#cee9f7` |
| unten rechts | Rot | `#e2231a` | `#f29c98` | `#f9d3d1` |

- **i-Punkt / KaM·in-Punkt:** Rot `#e2231a` (die Figur an der Tür rechts, zugleich Anschluss an das rote „in“ des alten KaM·in-Logos). Invers: `#f29c98`.
- **Wortmarke:** Ink `#1d1d1b`; auf Dunkel Weiß.
- **Farbig auf Pastell:** unverändert die Basisfarben – alle fünf halten auf `pastel`/`pastel_soft`-Flächen ausreichend Kontrast (auf `#fdf0cc`-Gelb-Pastell Orange meiden: dort besser Mono).
- **Mono Ink / Mono Weiß:** Ring und Köpfe in einer Farbe; die Fuge bleibt (gleiche Geometrie wie farbig) – bei Icon-Größen ein durchgehender Ring mit fünf Köpfen, groß fünf einzelne Figuren Schulter an Schulter.
- **Tint-Bildmarke** allein (`ring-mark-tint.svg`): großformatig als Hintergrundmotiv auf Ink oder dunklen Fotos; nicht als Hauptlogo auf Weiß.

## Schutzraum

Mindestens **ein Kopfdurchmesser (x = 14 Einheiten ≈ 17 % der Markenhöhe)** rundum frei – bei Lockups gemessen ab Außenkante von Marke und Wortmarke. Auf Fotos und farbigen Flächen 2x.

## Mindestgrößen

| Datei | Digital | Druck |
|---|---|---|
| Bildmarke | 16 px (Favicon: Köpfe getrennt, Ring geschlossen), ab 48 px sind die fünf Figuren zählbar | 6 mm |
| primary / kamin | 90 px Breite (Marke ≈ 28 px hoch) | 25 mm Breite |
| stacked | 48 px Höhe | 14 mm Höhe |
| Mono | wie oben; auf Stoff/Stick mind. 20 mm Markenhöhe |

## Anwendungen

- **Website-Header:** `ring-primary.svg`, Marke 32–40 px hoch, links; auf dem warmen Papier `#fbf9f6` der Studio-Variante. KaM·in-Seiten bekommen `ring-kamin.svg` an derselben Stelle – gleiche Bildmarke, andere Wortmarke.
- **Favicon:** `ring-mark.svg` (16/32 px) – die farbige, offene Arkade mit fünf Punkten bleibt erkennbar; für 16 px ggf. als PNG exportieren, damit der Browser nicht selbst glättet. Dunkle Tabs: `ring-mark-tint.svg`.
- **Schild am Marktplatz:** `ring-stacked.svg` oder `ring-kamin.svg` auf Weiß, darunter in Inter 500 „Bürgertreff · Marktplatz 108“; die Bildmarke darf allein groß als Türaufkleber – der offene Kreis liegt dann buchstäblich vor der Tür.
- **T-Shirt:** Brust links `ring-mark.svg` (5 cm), Rücken `ring-stacked.svg`; auf farbigen Shirts `ring-mono-white.svg` oder Tint.
- **Instagram-Profilbild:** `ring-mark.svg` auf Weiß oder auf einer Pastellfläche, Marke ≈ 60 % des Kreisdurchmessers; die Öffnung unten passt zur runden Beschneidung.
- **Pastellflächen der Website:** die Bildmarke darf als Motiv angeschnitten und stark vergrößert in `tint` auf `pastel_soft` liegen (max. 8 % Deckung des Blocks).

## Dos / Don'ts

**Do**
- Marke und Wortmarke nur in den gelieferten Kombinationen und Proportionen verwenden.
- Die Tür bleibt unten: Marke nie drehen oder spiegeln.
- Auf farbigen Flächen Mono Ink, Mono Weiß oder Tint verwenden.
- Der Punkt (i-Punkt, KaM·in-Punkt) ist immer rot bzw. rot-tint – er ist das Bindeglied der Familie.

**Don't**
- Keine Verläufe, Schatten, Umrisse, keine Farben tauschen oder Figuren hinzufügen/entfernen.
- Keine Handschrift, kein Claim in den Logo-Dateien; der Claim „Stark durch Vielfalt“ (Handschrift) steht separat mit eigenem Abstand.
- Die Bildmarke nicht als Ladeanimation, Segment-Diagramm oder mit „Bewegung“ zeigen; sie ist statisch.
- Die Fuge nicht verbreitern oder schließen – sie ist Teil der Konstruktion.
- Wortmarke nicht in Inter live setzen – immer die Pfade nutzen (Tracking, i-Punkt, Mittelpunkt sind Teil der Marke).

## Ehrliche Grenzen

- **16 px:** Die Marke bleibt als offene, bunte Arkade mit fünf getrennten Punkten erkennbar; die Fuge ist unsichtbar (der Ring wirkt geschlossen). Menschen liest man ab ≈ 24–32 px sicher, fünf einzelne Figuren ab ≈ 48 px.
- **Segment-Anmutung:** Durch die radialen Fugen kann der farbige Ring bei 48–160 px an Lade-/Fortschrittsringe erinnern. Die Köpfe, die offene Tür und die runden Türenden halten dagegen; die Fuge ist bewusst nur 1,8 breit (Chrome-artige Ringe haben breite Keile). Die Marke nie animiert oder als Segmentdiagramm einsetzen.
- **Nähe zu bekannten Motiven:** „Menschen im Kreis“ ist ein häufiges Motiv im Sozial-/Vereinsbereich. Was diese Fassung eigen macht, sind die offene Tür mit exakt einer Personenbreite, der Anschluss an die Wortmarke über den Punkt und die strenge Geometrie – trotzdem vor Nutzung einen Blick auf Logos der Nachbarvereine/Landkreis werfen.
- **Ohne Farbe** (Mono) verliert die Marke die Vielfalt-Erzählung; sie bleibt „Gemeinschaft + offene Tür“. Das ist gewollt, aber die Farbfassung ist die Hauptfassung.
- **Die Öffnung nach unten** kann bei sehr großen Anwendungen (Schild) als Hufeisen/Bogen gelesen werden; die Köpfe und die Zweifarbigkeit der unteren Figuren wirken dem entgegen, ein Untertitel („Komm herein“) hilft zusätzlich.
- **Gelb** ist nicht im Logo; wer alle sechs Farben im Logo erwartet, muss das als Entscheidung tragen (sechs Figuren machen den Ring kleinteilig und die Tür schmaler).

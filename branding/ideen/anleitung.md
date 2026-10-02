# Anleitung: 20 neue Logo-Ideen für KAPi (Kappelrodeck International) & Bürgertreff KaM·in

Der Verein will **komplett neue Richtungen** sehen – anderes Motiv, andere Schrift, andere Anordnung als bisher (bisher: Figurenring + Inter-Grotesk nebeneinander). Sei mutig und unterschiedlich; jede Idee muss sich in einem Satz erklären lassen und trotzdem **hochwertig, erwachsen und sauber** sein (keine Clipart, keine Verläufe, keine Schatten, keine Filter). Pastell-Tauglichkeit und Einfarbigkeit sind Bonus, nicht Pflicht für diese Ideenrunde.

## Hintergrund (kurz)
- KAPi: Netzwerk für Integration, Begegnung und Vielfalt in Kappelrodeck (Ortenau, Schwarzwald, Weinort, Streuobstwiesen, Marktplatz mit Fachwerk). Claim „Stark durch Vielfalt.“ Menschen aus über 50 Ländern. Werte: Vielfalt · Begegnung · Toleranz & Respekt. Charakter: warm & nachbarschaftlich, lebendig & bunt, ruhig & verlässlich.
- KaM·in: der Bürgertreff am Marktplatz 108 („Come in“ → Komm herein). Ein langer Tisch, viele Stühle, immer Tee. Programm: Deutsch üben, Hausaufgaben, Spiele, Stricken, Musik, Trommeln, Feierabendtreff, Sommerfest.
- Farben (Logo-Palette): Grün #6aa12f · Blau #0a93d6 · Orange #ef8f1e · Gelb #f4b400 · Rot #e2231a · Pink #c52866 · Ink #1d1d1b. Du darfst reduzieren (2–4 Farben) oder eine eigene Hauptfarbe wählen, solange sie aus dieser Palette stammt. Pastellflächen: `../palette.json`.
- Der handgeschriebene Claim als Vektor: `../logos/claim-handschrift.svg` (darf eingebaut werden).

## Werkzeuge
- Text → Pfad: `python3 /tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/tools/t2p.py <fontdatei> <wght> "<Text>" [letterspacing_em] [size]` → JSON mit `d` (Grundlinie y=0, y nach unten, Buchstaben negativ), `width`, `capHeight`, `xHeight`. In SVG: `<path transform="translate(x,baseline) scale(k)" d="…"/>`.
- Schriften (woff2) in `/tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/wordmarks/fonts/`: albertsans, archivoblack, barlowcondensed-600/-800, bricolagegrotesque, caveat (Handschrift), cormorantgaramond (Serif), dmsans, figtree, fraunces (Serif), gloock (Display-Serif), kalam / kalam-700 (Handschrift), lexend, nunito, outfit, playfairdisplay (Serif), plusjakartasans, quicksand (rund), sora, spacegrotesk, urbanist. Außerdem `/home/user/KAPi-Webseite/assets/fonts/inter-latin.woff2`, `manrope-latin.woff2`, `instrumentserif-latin.woff2`, `instrumentserif-italic-latin.woff2`. Variable Fonts: Gewicht frei wählbar.
- Render-Prüfung: `NODE_PATH=/opt/node22/lib/node_modules node /tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/tools/render-svg.js <datei.svg> <ordner>` → PNGs 16/32/64/160/480 auf Weiß/Pastell/Dunkel. **Mindestens die 160- und 480-px-Fassung mit dem Read-Tool ansehen** und nachbessern, bis es überzeugt (2 Runden).

## Abgabe pro Idee (Nummer NN = 01…20)
- `NN-<slug>.svg` – das vollständige Logo (Bildmarke + Wortmarke in der vorgesehenen Anordnung), saubere viewBox ohne Rand, keine `<text>`-Elemente, keine externen Referenzen, Pfadanzahl klein, Koordinaten gerundet.
- `NN-<slug>-kamin.svg` – dieselbe Idee als KaM·in-Fassung (gleiches Zeichen/System, Wortmarke „KaM·in“ – der Mittelpunkt darf gestalterisch genutzt werden).
- `NN-<slug>.md` – 3–6 Zeilen: Idee in einem Satz, Schrift (Name + Gewicht), Anordnung, Farben, was bei 16 px passiert, worauf man achten muss.
Alles nach `/tmp/claude-0/-home-user-KAPi-Webseite/8979296e-0d87-53f0-91e0-93e492ee5725/scratchpad/branding/neu/`. Keine anderen Dateien im Repo ändern.

## Qualitätsregeln
- Formen mit Primitiven (circle, rect rx, path mit Bögen) und berechneten Koordinaten (gern kleines Python-Skript); konsistente Strichstärken; optische Ausgleiche.
- Die Idee muss auch ohne Erklärung freundlich und menschlich wirken – kein Behördenlogo, kein Tech-Startup, keine Kita.
- Wortmarke sauber gesetzt (Laufweite, Grundlinie), bei Serif/Handschrift auf Lesbarkeit achten.
- Jede Idee bekommt eine eigene Schrift (innerhalb deiner fünf Ideen keine zweimal) und eine eigene Anordnung (nebeneinander, gestapelt, Zeichen im Wort, Wort im Zeichen, Badge/Stempel, Zeile mit Unterzeile …).

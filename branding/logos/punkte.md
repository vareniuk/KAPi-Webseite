# Logo-Richtung „Punkte“ (Slug: `punkte`) – Revision nach Jury-Feedback

## Konzept

**Sechs stehen im Kreis, ein Platz ist frei – und du kommst gerade herein.**

Die Bildmarke übersetzt die Idee des alten Logos (Menschen aus vielen Ländern bilden gemeinsam einen Kreis) in die
kleinstmögliche Form: gleiche Punkte. Sieben Plätze liegen im 51,4°-Raster exakt auf einem Ring; sechs sind besetzt,
der siebte – rechts unten, in Leserichtung – ist frei: die Tür. Genau vor dieser Tür, eine Punktbreite außerhalb des
Rings, steht der siebte Punkt: **gleich groß, gleich farbig, in einer Farbe aus dem Kreis.** Er ist nicht „anders“,
er ist nur noch nicht ganz da. Das ist „Komm herein“ und „Stark durch Vielfalt“ in einem Bild.

Was sich gegenüber der ersten Fassung geändert hat (Jury):
- Der „du“-Punkt ist nicht mehr schwarz/kleiner/Kontur, sondern **gleichwertig** – die Lesart „der Dunkle gehört
  nicht dazu“ ist weg; in Mono ist er ein gefüllter Punkt wie alle anderen. **Eine Form in allen Modi.**
- **Ordnung statt Unentschiedenheit:** ein Radius (12), ein Ring (32,27), eine Fuge (4), die Öffnung genau ein
  Sitzplatz. Bewegung entsteht allein durch den Punkt vor der Tür.
- **Vier Farben statt sechs** (Grün, Blau, Orange, Pink). Blau und Orange kommen doppelt vor – wie in einer
  Menschengruppe, nicht wie auf einer Farbkarte. Rot nur als KaM·in-Mittelpunkt, Gelb bleibt Flächenfarbe.
- Für Pastellflächen gibt es statt kontrastschwacher Tints eine Version in `deep`-Werten.

KaM·in benutzt dieselbe Konstellation; in der Wortmarke wird der Mittelpunkt zu einem roten Punkt – derselbe Baustein.

## Dateien

| Datei | Inhalt |
|---|---|
| `punkte-mark.svg` | Bildmarke, farbig, quadratische viewBox (93,42 × 93,42) |
| `punkte-mark-pastell.svg` | Bildmarke in `deep`-Werten für Pastell-/Warmweißflächen |
| `punkte-mark-mono.svg` · `punkte-mark-white.svg` | Bildmarke Ink · rein Weiß (alle Punkte gefüllt) |
| `punkte-mark-invers.svg` | identisch mit `punkte-mark.svg` (die farbige Bildmarke braucht auf Dunkel keine Sonderfassung mehr; Datei bleibt für bestehende Verweise) |
| `punkte-primary.svg` | Bildmarke + Wortmarke „KAPi“ horizontal (460,83 × 128) |
| `punkte-primary-pastell.svg` · `punkte-primary-invers.svg` | Horizontal-Lockup in `deep`-Werten · farbig auf Dunkel (weiße Wortmarke) |
| `punkte-mono.svg` · `punkte-mono-white.svg` | Horizontal-Lockup einfarbig Ink · einfarbig Weiß |
| `punkte-stacked.svg` | Bildmarke über Wortmarke, zentriert (298,83 × 312,84) |
| `punkte-kamin.svg` · `punkte-kamin-mono.svg` · `punkte-kamin-invers.svg` | KaM·in-Lockup farbig · Ink · auf Dunkel (592,92 × 128) |
| `../tools/gen-punkte.py` | Generator: alle Koordinaten werden berechnet, Wortmarken aus Inter 700 als Pfade |

Alle SVGs: nur `<circle>` und `<path>`, keine Verläufe/Filter/Masken/Text/Konturen, Farben als Hex.

## Konstruktion

**Bildmarke (Raster 100 × 100, Ringmitte 50/50):**

- **Sieben Sitzplätze** im Winkel 360°/7 = 51,43°. Punktradius r = 12, Fuge zwischen Nachbarn = 4 → Ringradius
  R = 14 / sin(25,71°) = **32,27** (Sehne 28 = 2r + Fuge). Bei 16 px verschmilzt die Fuge bewusst zum Kranz.
- **Freier Platz (Tür)** bei 60° (rechts unten). Die sechs besetzten Plätze folgen im Uhrzeigersinn:
  111° Blau · 163° Grün · 214° Orange · 266° Pink · 317° Blau · 9° Orange.
- **„du“:** r = 12 (gleich), Winkel 60° (mittig in der Tür), Ringradius **43** = eine Punktbreite außerhalb
  (43 − 32,27 ≈ 11 ≈ r). Fuge zu beiden Nachbarn 10,1 (≈ 2,5 × Ringfuge): klar „vor der Tür“, aber schon in
  Reichweite. Farbe Grün (aus dem Kreis).
- Quadratische viewBox = straffes Quadrat um alle sieben Punkte (Seite 93,42); die Ringmitte liegt 2,4 Einheiten über
  der Bildmitte – der Punkt vor der Tür ist der optische „Fuß“, die Marke steht.
- Mono/Weiß: alle sieben Punkte gefüllt, keine Kontur. Es gibt nur **eine** Form.

**Wortmarke „KAPi“:** Inter 700, Laufweite −0,03 em, als Pfad (fontTools, Kerning aus GPOS). Versalhöhe = 100.
Bildmarke im Horizontal-Lockup 128 Einheiten hoch, auf die Mitte der Versalhöhe zentriert; Abstand Bildmarke → K
= 34. Das i-Tüpfelchen bleibt Inter-original.

**Wortmarke „KaM·in“:** „KaM“ und „in“ separat gesetzt, dazwischen ein konstruierter Kreis (r = 11) auf halber
x-Höhe, 13 Einheiten Luft beidseitig. Farbe Rot `#e2231a` (auch in der Pastell-Fassung: `deep` von Rot ist Rot),
in Mono Ink. Derselbe Baustein wie die Punkte der Bildmarke.

**Stacked:** Bildmarke 56 % der Wortmarkenbreite, mittig; Abstand 40 (= 0,4 Versalhöhe).

## Farbzuordnung

| Punkt (im Uhrzeigersinn ab Tür) | Farbig (Weiß, Dunkel) | `-pastell` (auf `paper_warm`/Pastellflächen) | Mono |
|---|---|---|---|
| 1 Blau | `#0a93d6` | `#087bb4` (deep) | Ink `#1d1d1b` |
| 2 Grün | `#6aa12f` | `#558126` | Ink |
| 3 Orange | `#ef8f1e` | `#a76415` | Ink |
| 4 Pink | `#c52866` | `#c52866` | Ink |
| 5 Blau | `#0a93d6` | `#087bb4` | Ink |
| 6 Orange | `#ef8f1e` | `#a76415` | Ink |
| 7 „du“ (Grün) | `#6aa12f` | `#558126` | Ink |
| KaM·in-Punkt | Rot `#e2231a` | `#e2231a` | Ink |
| Wortmarke | Ink | Ink | Ink |

Reihenfolge so gewählt, dass keine Farbe neben sich selbst steht und die Wiederholungen (Blau, Orange) sich
gegenüberliegen. Gelb ist bewusst nicht im Logo (auf Weiß zu kontrastschwach, im `deep` bräunlich) – es bleibt
Flächen-/Akzentfarbe der Website. Siebdruck: **vier Farben** (oder Mono).

## Schutzraum und Mindestgrößen

- **Schutzraum:** rundum mindestens ein Punktdurchmesser (24 Einheiten ≈ ¼ der Bildmarkenhöhe). Im Lockup
  derselbe Wert, gemessen an der Bildmarke.
- **Mindestgrößen:** Bildmarke 16 px (Favicon) / 5 mm Druck · Horizontal-Lockup 24 px Höhe / 8 mm ·
  KaM·in-Lockup 28 px Höhe / 9 mm · Stacked 48 px Höhe / 15 mm. Die Mono-Version hat keine Untergrenze mehr als
  die farbige (keine Kontur).
- **Pastell-Version:** ab 24 px, da `deep`-Werte auch auf Weiß AA-kontrastreich sind; sie ist trotzdem für ruhige
  Flächen gedacht, das Favicon bleibt farbig.

## Anwendungen

- **Website-Header:** `punkte-primary.svg` bei 32–40 px Höhe links; auf der KaM·in-Seite `punkte-kamin.svg`.
  Auf farbigen Pastellflächen (Hero, Programmkästen) `punkte-primary-pastell.svg`.
- **Bildsprache:** einzelne große Punkte in `pastel_soft` als ruhige Hintergrundform; die vier Logofarben als
  Kategoriepunkte (Sprache = Blau, Kinder = Orange, Handarbeit/Musik = Pink, Feierabend/Treff = Grün) –
  derselbe Kreis, dieselbe Fuge.
- **Favicon / App-Icon:** `punkte-mark.svg` in 16/32/180/512 px – bei 16 px ein bunter offener Kranz mit einem
  Punkt vor der Tür. Für iOS-Icon die Bildmarke auf `paper_warm` mit Schutzraum setzen.
- **Schild am Marktplatz:** Stacked oder Horizontal auf Weiß/Warmweiß; die Punkte als ausgeschnittene Kreise
  (Acryl, Holz) – ein Radius, ein Werkzeug. Mindestens 30 cm Bildmarkenhöhe.
- **T-Shirt:** Stacked, Bildmarke ~8 cm; vier Siebdruckfarben oder Mono; auf dunklen Shirts `-invers`.
- **Instagram-Profilbild:** Bildmarke auf Weiß oder `paper_warm`, im Kreisbeschnitt mit 20 % Rand.
- **Print:** Horizontal-Lockup in der Kopfzeile; der rote KaM·in-Punkt als Aufzählungspunkt/Trenner.

## Dos & Don'ts

**Do**
- Die sieben Punkte immer komplett und in der festen Anordnung verwenden (Datei benutzen, nicht nachbauen).
- Die Bildmarke auch ohne Wortmarke einsetzen (Favicon, Social, Stempel).
- Auf Pastellflächen die `-pastell`-Datei (deep) verwenden, auf Dunkel `-invers`/`-white`.
- Die Geschichte einmal erzählen: „Sechs stehen im Kreis, ein Platz ist frei – für dich.“

**Don't**
- Punkte umfärben, Farben tauschen, Punkte hinzufügen/entfernen oder den „du“-Punkt in den Kreis rücken.
- Die Konstellation drehen oder spiegeln (die Tür gehört nach rechts unten).
- Verläufe, Schatten, 3D, Konturen.
- Die Punkte animiert „kreisen“ lassen (Spinner-Assoziation). Wenn Bewegung: nur der „du“-Punkt rückt an seinen
  Platz.
- Tints (`#bcd5a1` usw.) als Logofarben – sie sind Flächenfarben.

## Ehrliche Grenzen

- **Abstraktion bleibt:** Punkte im Kreis werden ohne Erzählung nicht von allen als Menschen gelesen. Der freie
  Platz plus der Punkt davor macht die Geschichte sichtbarer als vorher, ersetzt aber keinen Satz im Footer/Flyer.
- **Nähe zu Lade-/Punktkreis-Motiven** ist geringer (gleiche Punkte, nur vier Farben, Punkt außerhalb), aber die
  Grundform ist nicht einzigartig; markenrechtlich ist das Lockup mit Wortmarke die stärkere Einheit.
- **Sieben gleiche Punkte** sind bewusst geordnet; wer „lebendig“ als unregelmäßig versteht, wird das als streng
  empfinden. Die Lebendigkeit soll aus Farbe, Fotos und Handschrift im Umfeld kommen, nicht aus dem Logo.
- **Ohne Unterzeile:** „Kappelrodeck International“ und „Bürgertreff am Kappler Marktplatz“ werden im Layout als
  Text (Inter 500) gesetzt, nicht im Logo.

# KAPi – Kappelrodeck International · Webseite

Neue Webseite für **KAPi – Kappelrodeck International** („Stark durch Vielfalt“) und den **Bürgertreff KaM·in – Kappler Marktplatz** (Marktplatz 108, 77876 Kappelrodeck).

## Aktueller Stand: drei Design-Varianten zur Auswahl

Die Startseite `index.html` ist eine Übersicht, die zu den drei Entwürfen führt:

| Variante | Ordner | Charakter |
|---|---|---|
| 1 – Klar & Leicht | `varianten/klar/` | Apple-Klarheit: Weiß, große runde Typografie, schwebende Farbflächen |
| 2 – Bunt & Lebendig | `varianten/bunt/` | Animierter Farbverlauf, Bento-Kacheln, Laufband |
| 3 – Warm & Herzlich | `varianten/herzlich/` | Off-White, Handschrift-Akzente, animierter Ring aus Menschen |

Sobald eine Variante gewählt ist, wird sie zur eigentlichen Startseite; die anderen beiden werden entfernt.

## Technik

- Reines HTML, CSS und JavaScript – **kein Build-Schritt**, keine Frameworks, keine externen Dienste.
- Keine Cookies, kein Tracking, keine Google-Fonts-Einbindung: die Schriften **Nunito**, **Baloo 2** und **Caveat** liegen selbst gehostet in `assets/fonts/` (SIL Open Font License), inklusive kyrillischer Zeichen für Ukrainisch.
- Dreisprachig: Deutsch (Standard), Ukrainisch, Englisch – Umschalter oben auf jeder Seite; die Übersetzungen stehen je Variante in `i18n.js`.
- Logos in `assets/logo/`.
- `impressum.html` und `datenschutz.html` sind **Platzhalter** und müssen vor Veröffentlichung ausgefüllt werden. Alle weiteren Platzhalter sind im HTML mit `<!-- TODO: prüfen -->` markiert und oben in jeder `index.html` aufgelistet.

## Lokal ansehen

Einfach `index.html` im Browser öffnen (Doppelklick) – ein Webserver ist nicht nötig.

## Veröffentlichen mit GitHub Pages (kostenlos)

1. Auf GitHub im Repository: **Settings → Pages**.
2. Unter „Build and deployment“ als Source **Deploy from a branch** wählen, Branch `main`, Ordner `/ (root)`.
3. Nach etwa einer Minute ist die Seite unter `https://<benutzername>.github.io/KAPi-Webseite/` erreichbar.
4. Eigene Domain (z. B. `kapi-kappelrodeck.de`): unter Pages → „Custom domain“ eintragen und beim Domain-Anbieter einen CNAME auf `<benutzername>.github.io` setzen.

## Inhalte pflegen

Texte, Termine und Öffnungszeiten stehen direkt in der `index.html` der gewählten Variante. Zum Ändern reicht ein Texteditor (oder direkt auf GitHub über das Stift-Symbol).

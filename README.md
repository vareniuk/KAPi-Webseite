# KAPi – Kappelrodeck International · Webseite

Neue Webseite für **KAPi – Kappelrodeck International** („Stark durch Vielfalt“) und den **Bürgertreff KaM·in – Kappler Marktplatz** (Marktplatz 108, 77876 Kappelrodeck).

## Aktueller Stand: drei Design-Varianten zur Auswahl

Die Startseite `index.html` ist eine Übersicht, die zu den drei Entwürfen führt:

| Variante | Ordner | Charakter |
|---|---|---|
| 1 – Studio | `varianten/studio/` | Monochrom, Hairlines, sehr große Typografie, „Vielfalt“ in Logofarben |
| 2 – Aurora | `varianten/aurora/` | Weiß mit einer atmenden Aurora-Fläche als Signature, Manrope |
| 3 – Editorial | `varianten/editorial/` | Magazin-Raster, Serif-Akzent, große Zahlen, feine Linien |

Sobald eine Variante gewählt ist, wird sie zur eigentlichen Startseite; die anderen beiden werden entfernt.

## Technik

- Reines HTML, CSS und JavaScript – **kein Build-Schritt**, keine Frameworks, keine externen Dienste.
- Keine Cookies, kein Tracking, keine Google-Fonts-Einbindung: die Schriften **Inter**, **Manrope** und **Instrument Serif** liegen selbst gehostet in `assets/fonts/` (SIL Open Font License), inklusive kyrillischer Zeichen für Ukrainisch.
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

## Offene Punkte (bitte bestätigen)

Aus dem Förderantrag „Kappelrodeck International“ (29.01.2021, `uploads/`) geht hervor:

- **Träger:** Gemeinde Kappelrodeck (Körperschaft des öffentlichen Rechts), Hauptstraße 65, 77876 Kappelrodeck. Kein eingetragener Verein. → Impressum ist damit vorausgefüllt; falls inzwischen ein e. V. gegründet wurde, bitte Bescheid geben.
- **Förderung:** Baden-Württemberg Stiftung, Programm „Vielfalt gefällt! Orte der Toleranz“, Laufzeit 06/2021–05/2024. → Wer fördert aktuell?
- **Projektleitung laut Antrag:** Integrationsbeauftragte der Gemeinde (Name, Telefon und E-Mail stehen im Antrag). → Darf diese Person öffentlich als Ansprechpartnerin genannt werden? Solange das nicht bestätigt ist, bleibt auf der Seite ein Platzhalter.
- **Zahlen für „Über uns“:** rund 6.000 Einwohner:innen, über 560 mit Migrationsgeschichte, Menschen aus über 50 Ländern (Stand 2021). → Aktualisieren oder so übernehmen?

Weiterhin offen: Instagram-Link, genaue Öffnungszeiten, echte Fotos, Partner-Logos, Newsletter-Anbieter, Domain.

## Eigene Entwürfe

Die von dir hochgeladenen Prototypen (`KAPi Website.html`, `KaM-in Website.html`, `konzepte/`, `js/`, `styles/`) bleiben unverändert im Repository. Sie laden React und Schriften von externen Servern (unpkg, Google Fonts) und funktionieren deshalb nur online im Browser.

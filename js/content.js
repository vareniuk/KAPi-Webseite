/* KaM·in — content data + theme definitions */

// Brand palette sampled directly from the logo (ring of people)
window.BRAND = {
  green:  '#6aa12f',
  blue:   '#0a93d6',
  orange: '#ef8f1e',
  yellow: '#f4b400',
  red:    '#e2231a',
  pink:   '#c52866',
};

/* ---------- Recurring meetings / events ---------- */
// day: 0=Mon … 6=Sun (null = no fixed day). recur: 'weekly' | 'monthly' | 'byapp'
window.EVENTS = [
  {
    id: 'deutsch', day: 0, from: '15:00', to: '16:30', recur: 'weekly',
    color: 'green', icon: 'chat',
    title: { de: 'Wir sprechen Deutsch', uk: 'Розмовляємо німецькою', en: 'We speak German' },
    desc:  { de: 'Deutsch üben in lockerer Runde – für alle Sprach-Niveaus.',
             uk: 'Практика німецької у невимушеній компанії — для всіх рівнів.',
             en: 'Practise German in a relaxed group — for every level.' },
  },
  {
    id: 'abc', day: 0, from: '16:30', to: '18:00', recur: 'weekly',
    color: 'blue', icon: 'book',
    title: { de: 'Hausaufgabenhilfe / ABC', uk: 'Допомога з уроками / ABC', en: 'Homework help / ABC' },
    desc:  { de: 'Unterstützung bei Hausaufgaben und beim Lesen- und Schreibenlernen.',
             uk: 'Підтримка з домашніми завданнями та навчання читання й письма.',
             en: 'Support with homework and learning to read and write.' },
  },
  {
    id: 'nadel', day: 3, from: '15:00', to: '17:00', recur: 'weekly',
    color: 'pink', icon: 'needle',
    title: { de: 'Nadelspielereien', uk: 'Голкові забавки', en: 'Needle & thread' },
    desc:  { de: 'Handarbeitstreff: nähen, stricken, häkeln. Material ist da.',
             uk: 'Гурток рукоділля: шиття, вʼязання, гачок. Матеріали є.',
             en: 'Handicraft circle: sewing, knitting, crochet. Materials provided.' },
  },
  {
    id: 'spiele', day: 4, from: '15:00', to: '17:00', recur: 'weekly',
    color: 'orange', icon: 'dice',
    title: { de: 'Spieletreff', uk: 'Ігрові зустрічі', en: 'Games meetup' },
    desc:  { de: 'Karten- und Brettspiele für alle. Komm einfach mit.',
             uk: 'Карткові та настільні ігри для всіх. Просто приходь.',
             en: 'Card and board games for everyone. Just join in.' },
  },
  {
    id: 'musik', day: 5, from: '', to: '', recur: 'byapp',
    color: 'yellow', icon: 'music',
    title: { de: 'Offene Musikwerkstatt', uk: 'Відкрита музична майстерня', en: 'Open music workshop' },
    desc:  { de: 'Musik machen am Wochenende – nach Vereinbarung.',
             uk: 'Музикування на вихідних — за домовленістю.',
             en: 'Make music on the weekend — by arrangement.' },
  },
  {
    id: 'feierabend', day: 2, from: '18:00', to: '22:00', recur: 'monthly',
    color: 'red', icon: 'cup',
    title: { de: 'Feierabendtreff', uk: 'Вечірні посиденьки', en: 'After-work get-together' },
    desc:  { de: 'Fröhliches Beisammensein für Einheimische und Zugezogene – 1× im Monat.',
             uk: 'Веселі посиденьки для місцевих і новоприбулих — раз на місяць.',
             en: 'A cheerful get-together for locals and newcomers — once a month.' },
  },
  {
    id: 'trommeln', day: null, from: '', to: '', recur: 'byapp',
    color: 'pink', icon: 'drum',
    title: { de: 'Afrikanisches Trommeln', uk: 'Африканські барабани', en: 'African drumming' },
    desc:  { de: 'Workshop für Kinder und Erwachsene. Termine nach Ankündigung.',
             uk: 'Майстер-клас для дітей і дорослих. Дати за оголошенням.',
             en: 'Workshop for children and adults. Dates announced.' },
  },
];

/* ---------- Aktuelles / news posts ---------- */
window.POSTS = [
  {
    id: 'programm-juni', date: '2026-05-28', color: 'red', pdf: true, program: true,
    title: { de: 'KaM·in Programm – Juni 2026', uk: 'Програма KaM·in — червень 2026', en: 'KaM·in programme – June 2026' },
    excerpt: { de: 'Alle Treffen und Termine im Juni auf einen Blick. Jetzt als PDF zum Mitnehmen.',
               uk: 'Усі зустрічі та дати червня з першого погляду. Тепер у PDF.',
               en: 'All meetings and dates in June at a glance. Now as a PDF to take with you.' },
    body: { de: 'Unser Monats-Programm gibt es jeden Monat neu – auch zum Ausdrucken und Aufhängen.\n\nIm Juni laden wir besonders herzlich zum Feierabendtreff ein und starten den Spieletreff im Garten, wenn das Wetter mitspielt. Das ganze Programm findest du im PDF.\n\nDruck es gern aus und gib es an Nachbarn weiter, die noch nicht bei uns waren.',
            uk: 'Наша програма виходить щомісяця — її також можна роздрукувати та повісити.\n\nУ червні ми особливо щиро запрошуємо на вечірні посиденьки та починаємо ігрові зустрічі в саду, якщо дозволить погода. Повну програму дивись у PDF.\n\nРоздрукуй її та передай сусідам, які ще не були в нас.',
            en: 'Our monthly programme is new every month — and ready to print and pin up.\n\nIn June we warmly invite you to the after-work get-together and start the games meetup in the garden, weather permitting. The full programme is in the PDF.\n\nPrint it out and pass it on to neighbours who haven’t visited us yet.' },
    img: { de: 'Programm-Aushang Juni', uk: 'Афіша програми (червень)', en: 'June programme poster' },
  },
  {
    id: 'sommerfest', date: '2026-05-20', color: 'orange', pdf: false,
    title: { de: 'Sommerfest am Marktplatz', uk: 'Літнє свято на площі', en: 'Summer fest on the market square' },
    excerpt: { de: 'Musik, Essen aus aller Welt und Spiele für Kinder. Alle sind eingeladen!',
               uk: 'Музика, страви з усього світу та ігри для дітей. Запрошені всі!',
               en: 'Music, food from around the world and games for kids. Everyone is invited!' },
    body: { de: 'Am letzten Samstag im Juni feiern wir unser Sommerfest direkt auf dem Marktplatz.\n\nEs gibt Essen aus vielen Ländern, Live-Musik aus der Musikwerkstatt und eine Spielecke für die Kinder. Bring gern etwas mit – ein Gericht aus deiner Heimat ist herzlich willkommen.\n\nDer Eintritt ist frei. Wir freuen uns auf dich!',
            uk: 'В останню суботу червня ми святкуємо літнє свято прямо на площі.\n\nБудуть страви з багатьох країн, жива музика з музичної майстерні та ігровий куточок для дітей. Можеш щось принести — страва з твоєї батьківщини буде дуже доречною.\n\nВхід вільний. Чекаємо на тебе!',
            en: 'On the last Saturday in June we celebrate our summer fest right on the market square.\n\nThere will be food from many countries, live music from the music workshop and a play corner for the children. Feel free to bring something — a dish from your home country is very welcome.\n\nEntry is free. We look forward to seeing you!' },
    img: { de: 'Sommerfest mit Menschen', uk: 'Літнє свято з людьми', en: 'Summer fest with people' },
  },
  {
    id: 'sprachpaten', date: '2026-05-12', color: 'green', pdf: false,
    title: { de: 'Neue Sprachpaten gesucht', uk: 'Шукаємо нових мовних наставників', en: 'New language buddies wanted' },
    excerpt: { de: 'Du sprichst gut Deutsch und magst Menschen? Werde Sprachpate – schon 1 Stunde hilft.',
               uk: 'Ти добре говориш німецькою і любиш людей? Стань мовним наставником — навіть 1 година допомагає.',
               en: 'You speak good German and like people? Become a language buddy — even 1 hour helps.' },
    body: { de: 'Für unseren Treff „Wir sprechen Deutsch“ suchen wir Menschen, die beim Üben helfen.\n\nDu brauchst keine Ausbildung – nur Geduld und Freude am Gespräch. Du bestimmst selbst, wann und wie oft du kommst.\n\nMelde dich einfach bei uns über die Kontaktseite. Wir zeigen dir alles.',
            uk: 'Для нашої зустрічі „Розмовляємо німецькою“ ми шукаємо людей, які допоможуть із практикою.\n\nТобі не потрібна спеціальна освіта — лише терпіння та радість від спілкування. Ти сам вирішуєш, коли і як часто приходити.\n\nПросто звʼяжись із нами через сторінку контактів. Ми все покажемо.',
            en: 'For our “We speak German” meetup we are looking for people to help with practice.\n\nYou don’t need any training — just patience and a joy of conversation. You decide when and how often you come.\n\nJust contact us via the contact page. We’ll show you everything.' },
    img: { de: 'Zwei Menschen im Gespräch', uk: 'Двоє людей у розмові', en: 'Two people in conversation' },
  },
  {
    id: 'trommeln-recap', date: '2026-04-30', color: 'pink', pdf: false,
    title: { de: 'Afrikanisches Trommeln war ein Fest', uk: 'Африканські барабани стали святом', en: 'African drumming was a celebration' },
    excerpt: { de: 'Über 30 Kinder und Erwachsene trommelten gemeinsam. Bald gibt es einen neuen Termin.',
               uk: 'Понад 30 дітей і дорослих барабанили разом. Скоро буде нова дата.',
               en: 'Over 30 children and adults drummed together. A new date is coming soon.' },
    body: { de: 'Unser Trommel-Workshop war voll – und laut, im schönsten Sinn!\n\nGemeinsam haben wir Rhythmen gelernt und am Ende zusammen gespielt. Danke an alle, die dabei waren.\n\nWer das nächste Mal mittrommeln will: Trag dich für den Newsletter ein, dann verpasst du keinen Termin.',
            uk: 'Наш барабанний майстер-клас був переповнений — і гучний, у найкращому сенсі!\n\nРазом ми вчили ритми, а наприкінці грали разом. Дякуємо всім, хто був із нами.\n\nХто хоче барабанити наступного разу — підпишись на розсилку, щоб не пропустити дату.',
            en: 'Our drumming workshop was packed — and loud, in the best way!\n\nTogether we learned rhythms and played together at the end. Thanks to everyone who came.\n\nWant to drum next time? Sign up for the newsletter so you don’t miss a date.' },
    img: { de: 'Trommel-Workshop', uk: 'Барабанний майстер-клас', en: 'Drumming workshop' },
  },
];

/* ---------- Angebote (built from events, with longer copy) ---------- */
window.OFFERS = ['deutsch','abc','nadel','spiele','musik','feierabend','trommeln'];

/* ---------- Highlights / Spotlight (curated big projects for the homepage) ----------
   The first item shows as the big feature card, the rest as smaller cards.
   link: { post: '<post-id>' }  OR  { route: '<route>' } */
window.HIGHLIGHTS = [
  {
    id: 'sommerfest', color: 'orange', link: { post: 'sommerfest' },
    kicker: { de: 'Großes Fest', uk: 'Велике свято', en: 'Big celebration' },
    title:  { de: 'Sommerfest am Marktplatz', uk: 'Літнє свято на площі', en: 'Summer fest on the square' },
    text:   { de: 'Musik, Essen aus aller Welt und Spiele für Kinder. Am letzten Samstag im Juni – alle sind eingeladen!',
              uk: 'Музика, страви з усього світу та ігри для дітей. В останню суботу червня — запрошені всі!',
              en: 'Music, food from around the world and games for kids. Last Saturday in June — everyone’s invited!' },
    img: { de: 'Sommerfest – viele Menschen feiern', uk: 'Літнє свято — багато людей святкують', en: 'Summer fest — many people celebrating' },
  },
  {
    id: 'trommeln', color: 'pink', link: { route: 'angebote' },
    kicker: { de: 'Workshop', uk: 'Майстер-клас', en: 'Workshop' },
    title:  { de: 'Afrikanisches Trommeln', uk: 'Африканські барабани', en: 'African drumming' },
    text:   { de: 'Für Kinder und Erwachsene. Bald gibt es einen neuen Termin.',
              uk: 'Для дітей і дорослих. Скоро нова дата.',
              en: 'For children and adults. A new date is coming soon.' },
    img: { de: 'Trommel-Workshop', uk: 'Барабанний майстер-клас', en: 'Drumming workshop' },
  },
  {
    id: 'kapi', color: 'blue', link: { route: 'kapi' },
    kicker: { de: 'Dachprojekt', uk: 'Головний проєкт', en: 'Umbrella project' },
    title:  { de: 'Kappelrodeck International', uk: 'Kappelrodeck International', en: 'Kappelrodeck International' },
    text:   { de: 'Stark durch Vielfalt – das große Netzwerk hinter KaM·in.',
              uk: 'Сильні завдяки різноманіттю — велика мережа за KaM·in.',
              en: 'Strong through diversity — the big network behind KaM·in.' },
    img: { de: 'Menschen aus vielen Ländern', uk: 'Люди з багатьох країн', en: 'People from many countries' },
  },
];

/* ---------- Three look & feel themes ---------- */
// hero: 'split' | 'blob' | 'center'
window.THEMES = {
  warm: {
    label: { de: 'Warm & Ruhig', uk: 'Тепло і спокійно', en: 'Warm & Calm' },
    hero: 'split', playful: false,
    fontHead: "'Nunito', sans-serif", fontBody: "'Nunito Sans', sans-serif",
    vars: {
      '--bg': '#fbf5ec', '--bg2': '#f3e9d9', '--surface': '#fffdf8',
      '--ink': '#2c2722', '--muted': '#7c7264', '--line': '#ece0cd',
      '--brand': '#d98326', '--brand-ink': '#ffffff',
      '--radius': '16px', '--radius-lg': '24px', '--radius-pill': '999px',
      '--shadow': '0 10px 30px -16px rgba(80,60,30,.30)',
      '--shadow-sm': '0 4px 14px -8px rgba(80,60,30,.30)',
    },
  },
  bunt: {
    label: { de: 'Bunt & Verspielt', uk: 'Яскраво і грайливо', en: 'Bright & Playful' },
    hero: 'blob', playful: true,
    fontHead: "'Baloo 2', sans-serif", fontBody: "'Mulish', sans-serif",
    vars: {
      '--bg': '#ffffff', '--bg2': '#fff5ec', '--surface': '#ffffff',
      '--ink': '#241f1e', '--muted': '#736c68', '--line': '#f1e6dc',
      '--brand': '#e2231a', '--brand-ink': '#ffffff',
      '--radius': '22px', '--radius-lg': '34px', '--radius-pill': '999px',
      '--shadow': '0 16px 40px -18px rgba(226,35,26,.30)',
      '--shadow-sm': '0 6px 18px -10px rgba(120,60,40,.35)',
    },
  },
  klar: {
    label: { de: 'Klar & Freundlich', uk: 'Чітко і привітно', en: 'Clear & Friendly' },
    hero: 'center', playful: false,
    fontHead: "'Figtree', sans-serif", fontBody: "'Figtree', sans-serif",
    vars: {
      '--bg': '#ffffff', '--bg2': '#f4f7f8', '--surface': '#ffffff',
      '--ink': '#1d2426', '--muted': '#5b6669', '--line': '#e4eaec',
      '--brand': '#0a93d6', '--brand-ink': '#ffffff',
      '--radius': '12px', '--radius-lg': '18px', '--radius-pill': '10px',
      '--shadow': '0 12px 32px -18px rgba(20,60,80,.30)',
      '--shadow-sm': '0 4px 14px -8px rgba(20,60,80,.25)',
    },
  },
  plakat: {
    label: { de: 'Plakat', uk: 'Плакат', en: 'Poster' },
    hero: 'poster', playful: false,
    fontHead: "'Archivo Black', sans-serif", fontBody: "'Archivo', sans-serif",
    vars: {
      '--bg': '#fdf3e2', '--bg2': '#f4b400', '--surface': '#fffaf0',
      '--ink': '#191512', '--muted': '#6c604e', '--line': '#191512',
      '--brand': '#e2231a', '--brand-ink': '#ffffff',
      '--radius': '10px', '--radius-lg': '14px', '--radius-pill': '10px',
      '--shadow': '7px 7px 0 #191512',
      '--shadow-sm': '4px 4px 0 #191512',
    },
  },
  abend: {
    label: { de: 'Abend', uk: 'Вечір', en: 'Evening' },
    hero: 'split', playful: false,
    fontHead: "'Lora', serif", fontBody: "'Mulish', sans-serif",
    vars: {
      '--bg': '#221a16', '--bg2': '#2b211b', '--surface': '#2f251f',
      '--ink': '#f5ece1', '--muted': '#b8a896', '--line': '#473a31',
      '--brand': '#ef9b30', '--brand-ink': '#231a14',
      '--radius': '14px', '--radius-lg': '20px', '--radius-pill': '999px',
      '--shadow': '0 20px 44px -22px rgba(0,0,0,.7)',
      '--shadow-sm': '0 8px 22px -12px rgba(0,0,0,.6)',
    },
  },
  rein: {
    label: { de: 'Schlicht & Bunt', uk: 'Мінімал + колір', en: 'Minimal Color' },
    hero: 'center', playful: false,
    fontHead: "'Manrope', sans-serif", fontBody: "'Manrope', sans-serif",
    vars: {
      '--bg': '#ffffff', '--bg2': '#f5f5f7', '--surface': '#ffffff',
      '--ink': '#1d1d1f', '--muted': '#6e6e73', '--line': '#e3e3e8',
      '--brand': '#0a93d6', '--brand-ink': '#ffffff',
      '--radius': '14px', '--radius-lg': '22px', '--radius-pill': '980px',
      '--shadow': '0 8px 30px -14px rgba(0,0,0,.14)',
      '--shadow-sm': '0 1px 3px rgba(0,0,0,.05)',
    },
  },
};

/* ---------- helpers (set per-render in app) ---------- */
window.makeT = function (lang) {
  return function t(key) {
    const e = window.T[key];
    if (!e) return key;
    return e[lang] != null ? e[lang] : e.de;
  };
};
window.tr = function (obj, lang) {
  if (!obj) return '';
  return obj[lang] != null ? obj[lang] : obj.de;
};

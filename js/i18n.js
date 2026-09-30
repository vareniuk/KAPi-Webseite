/* KaM·in — UI translation dictionary (Deutsch / Українська / English) */
window.LANGS = [
  { code: 'de', label: 'Deutsch', short: 'DE', flag: '🇩🇪' },
  { code: 'uk', label: 'Українська', short: 'UA', flag: '🇺🇦' },
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
];

window.T = {
  // ---- Navigation ----
  nav_start:    { de: 'Start',     uk: 'Головна',    en: 'Home' },
  nav_termine:  { de: 'Termine',   uk: 'Терміни',    en: 'Dates' },
  nav_aktuelles:{ de: 'Aktuelles', uk: 'Новини',     en: 'News' },
  nav_angebote: { de: 'Projekte',  uk: 'Проєкти',    en: 'Projects' },
  nav_ueberuns: { de: 'Über uns',  uk: 'Про нас',    en: 'About us' },
  nav_kontakt:  { de: 'Kontakt',   uk: 'Контакти',   en: 'Contact' },
  nav_admin:    { de: 'Verwaltung',uk: 'Адмін',      en: 'Admin' },

  // ---- Hero ----
  hero_big:   { de: 'Komm herein!', uk: 'Заходь!', en: 'Come in!' },
  hero_sub:   { de: '„Come in“ – schön, dass du da bist.', uk: '„Come in“ — раді тебе бачити.', en: '“Come in” — glad you are here.' },
  hero_text:  {
    de: 'Ein offener Treffpunkt für Alt und Jung, für alle Kulturen. Alle Angebote sind kostenlos.',
    uk: 'Відкрите місце зустрічі для молодих і літніх, для всіх культур. Усі заходи безкоштовні.',
    en: 'An open meeting place for young and old, for every culture. Everything is free.' },

  chip_when_l:   { de: 'Wann?', uk: 'Коли?', en: 'When?' },
  chip_when_v:   { de: 'Mo–Sa, am Nachmittag', uk: 'Пн–Сб, після обіду', en: 'Mon–Sat, afternoons' },
  chip_where_l:  { de: 'Wo?', uk: 'Де?', en: 'Where?' },
  chip_where_v:  { de: 'Marktplatz 108, Kappelrodeck', uk: 'Marktplatz 108, Kappelrodeck', en: 'Marktplatz 108, Kappelrodeck' },
  chip_welc_l:   { de: 'Bin ich willkommen?', uk: 'Чи я бажаний гість?', en: 'Am I welcome?' },
  chip_welc_v:   { de: 'Ja! Jede und jeder.', uk: 'Так! Кожен і кожна.', en: 'Yes! Everyone.' },

  cta_termine:  { de: 'Alle Termine', uk: 'Усі терміни', en: 'All dates' },
  cta_angebote: { de: 'Unsere Projekte', uk: 'Наші проєкти', en: 'Our projects' },

  // ---- Home sections ----
  home_next:    { de: 'Die nächsten Termine', uk: 'Найближчі терміни', en: 'Upcoming dates' },
  home_news:    { de: 'Neues bei uns', uk: 'Останні новини', en: 'Latest news' },
  view_all:     { de: 'Alle ansehen', uk: 'Дивитися всі', en: 'View all' },
  spot_kicker:  { de: 'Aktuelle Projekte', uk: 'Поточні проєкти', en: 'Current projects' },
  spot_title:   { de: 'Nicht verpassen', uk: 'Не пропусти', en: 'Don’t miss' },
  spot_cta:     { de: 'Mehr erfahren', uk: 'Дізнатися більше', en: 'Learn more' },

  // ---- Newsletter ----
  nl_title: { de: 'Bleib auf dem Laufenden', uk: 'Будь у курсі', en: 'Stay up to date' },
  nl_text:  { de: 'Wir schicken dir das Monats-Programm per E-Mail. Kostenlos.', uk: 'Ми надішлемо тобі програму місяця електронною поштою. Безкоштовно.', en: 'We send you the monthly programme by e-mail. Free.' },
  nl_name:  { de: 'Name', uk: 'Імʼя', en: 'Name' },
  nl_email: { de: 'E-Mail', uk: 'Електронна пошта', en: 'E-mail' },
  nl_btn:   { de: 'Anmelden', uk: 'Підписатися', en: 'Subscribe' },
  nl_done:  { de: 'Danke! Du bist dabei. 💌', uk: 'Дякуємо! Тебе додано. 💌', en: 'Thank you! You are in. 💌' },

  // ---- Termine ----
  ter_title:  { de: 'Termine & Kalender', uk: 'Терміни та календар', en: 'Dates & calendar' },
  ter_sub:    { de: 'Alle Treffen auf einen Blick. Komm einfach vorbei.', uk: 'Усі зустрічі з першого погляду. Просто заходь.', en: 'All meetings at a glance. Just drop by.' },
  ter_list:   { de: 'Liste', uk: 'Список', en: 'List' },
  ter_cal:    { de: 'Kalender', uk: 'Календар', en: 'Calendar' },
  ter_today:  { de: 'Heute', uk: 'Сьогодні', en: 'Today' },
  ter_recur:  { de: 'jede Woche', uk: 'щотижня', en: 'weekly' },
  ter_monthly:{ de: '1× im Monat', uk: '1 раз на місяць', en: 'once a month' },
  ter_byapp:  { de: 'nach Vereinbarung', uk: 'за домовленістю', en: 'by arrangement' },
  ter_none:   { de: 'An diesem Tag gibt es kein Treffen.', uk: 'Цього дня зустрічей немає.', en: 'No meeting on this day.' },
  ter_clock:  { de: 'Uhr', uk: 'год', en: '' },

  // ---- Aktuelles ----
  akt_title:  { de: 'Aktuelles', uk: 'Новини', en: 'News' },
  akt_sub:    { de: 'Was bei KaM·in gerade los ist.', uk: 'Що зараз відбувається в KaM·in.', en: 'What’s happening at KaM·in right now.' },
  akt_pdf:    { de: 'PDF herunterladen', uk: 'Завантажити PDF', en: 'Download PDF' },
  akt_more:   { de: 'Weiterlesen', uk: 'Читати далі', en: 'Read more' },
  akt_back:   { de: 'Zurück zur Übersicht', uk: 'Назад до огляду', en: 'Back to overview' },

  // ---- Angebote ----
  ang_title:  { de: 'Unsere Projekte', uk: 'Наші проєкти', en: 'Our projects' },
  ang_sub:    { de: 'Feste Treffpunkte – jede Woche. Alles kostenlos.', uk: 'Постійні зустрічі — щотижня. Усе безкоштовно.', en: 'Regular meetups — every week. All free.' },
  ang_free:   { de: 'kostenlos', uk: 'безкоштовно', en: 'free' },

  // ---- Über uns ----
  ueb_title:  { de: 'Über uns', uk: 'Про нас', en: 'About us' },
  ueb_lead:   {
    de: 'KaM·in ist ein Begegnungszentrum am Kappler Marktplatz. Hier treffen sich Alt und Jung, Einheimische und Menschen aus aller Welt.',
    uk: 'KaM·in — це центр зустрічей на Kappler Marktplatz. Тут зустрічаються молоді й літні, місцеві та люди з усього світу.',
    en: 'KaM·in is a meeting centre on the Kappler Marktplatz. Old and young, locals and people from all over the world meet here.' },
  ueb_body:   {
    de: 'Der Name spielt auf das englische „Come In“ an: Komm herein! Bei uns sind alle willkommen – egal woher du kommst, welche Sprache du sprichst oder wie alt du bist. Alle Angebote sind kostenlos und niederschwellig.',
    uk: 'Назва натякає на англійське „Come In“: заходь! У нас раді всім — звідки б ти не був, якою б мовою не говорив і скільки б тобі не було років. Усі заходи безкоштовні та доступні.',
    en: 'The name plays on the English “Come In”: come inside! Everyone is welcome here — no matter where you are from, what language you speak or how old you are. Everything is free and easy to access.' },
  mit_title:  { de: 'Mach mit!', uk: 'Долучайся!', en: 'Join in!' },
  mit_sub:    { de: 'Drei einfache Wege, dabei zu sein.', uk: 'Три прості способи долучитися.', en: 'Three easy ways to take part.' },
  mit_come_t: { de: 'Vorbeikommen', uk: 'Завітати', en: 'Drop by' },
  mit_come_b: { de: 'Komm einfach vorbei – ohne Anmeldung. Ein Tee, ein Gespräch, ein Spiel.', uk: 'Просто завітай — без реєстрації. Чай, розмова, гра.', en: 'Just drop in — no sign-up. A tea, a chat, a game.' },
  mit_help_t: { de: 'Helfen', uk: 'Допомагати', en: 'Help out' },
  mit_help_b: { de: 'Hilf als Sprachpate, beim Spieletreff oder beim Café. Schon 1 Stunde hilft.', uk: 'Допоможи як мовний наставник, на ігрових зустрічах чи в кафе. Навіть 1 година допомагає.', en: 'Help as a language buddy, at the games meetup or the café. Even 1 hour helps.' },
  mit_talk_t: { de: 'Kontakt aufnehmen', uk: 'Звʼязатися', en: 'Get in touch' },
  mit_talk_b: { de: 'Du hast eine Idee oder eine Frage? Schreib oder ruf uns an.', uk: 'Маєш ідею чи запитання? Напиши або зателефонуй нам.', en: 'Got an idea or a question? Write or call us.' },

  // ---- Kontakt ----
  kon_title:  { de: 'Kontakt', uk: 'Контакти', en: 'Contact' },
  kon_sub:    { de: 'Komm vorbei, schreib oder ruf an.', uk: 'Завітай, напиши або зателефонуй.', en: 'Drop by, write or call.' },
  kon_address:{ de: 'Adresse', uk: 'Адреса', en: 'Address' },
  kon_hours:  { de: 'Öffnungszeiten', uk: 'Години роботи', en: 'Opening hours' },
  kon_hours_v:{ de: 'Mo–Sa am Nachmittag (siehe Termine)', uk: 'Пн–Сб після обіду (див. терміни)', en: 'Mon–Sat afternoons (see dates)' },
  kon_person: { de: 'Ansprechpartnerin', uk: 'Контактна особа', en: 'Contact person' },
  kon_phone:  { de: 'Telefon', uk: 'Телефон', en: 'Phone' },
  kon_insta:  { de: 'Folge uns auf Instagram', uk: 'Стеж за нами в Instagram', en: 'Follow us on Instagram' },
  kon_map:    { de: 'So findest du uns', uk: 'Як нас знайти', en: 'How to find us' },

  // ---- KAPi (Kappelrodeck International) ----
  kapi_nav:   { de: 'KAPi', uk: 'KAPi', en: 'KAPi' },
  kapi_slogan:{ de: 'Stark durch Vielfalt', uk: 'Сильні завдяки різноманіттю', en: 'Strong through diversity' },
  kapi_title: { de: 'Kappelrodeck International', uk: 'Kappelrodeck International', en: 'Kappelrodeck International' },
  kapi_lead:  {
    de: 'KAPi ist unser Dachprojekt für Integration, Begegnung und Vielfalt in Kappelrodeck. Der Bürgertreff KaM·in ist ein Teil davon.',
    uk: 'KAPi — це наш головний проєкт для інтеграції, зустрічей і різноманіття в Kappelrodeck. Bürgertreff KaM·in є його частиною.',
    en: 'KAPi is our umbrella project for integration, encounter and diversity in Kappelrodeck. The KaM·in meeting place is part of it.' },
  kapi_v1_t:  { de: 'Vielfalt', uk: 'Різноманіття', en: 'Diversity' },
  kapi_v1_b:  { de: 'Menschen aus vielen Ländern leben in Kappelrodeck zusammen.', uk: 'Люди з багатьох країн живуть разом у Kappelrodeck.', en: 'People from many countries live together in Kappelrodeck.' },
  kapi_v2_t:  { de: 'Begegnung', uk: 'Зустріч', en: 'Encounter' },
  kapi_v2_b:  { de: 'Wir bringen Menschen zusammen – über Sprachen und Generationen hinweg.', uk: 'Ми обʼєднуємо людей — попри мови та покоління.', en: 'We bring people together — across languages and generations.' },
  kapi_v3_t:  { de: 'Toleranz', uk: 'Толерантність', en: 'Tolerance' },
  kapi_v3_b:  { de: 'Kappelrodeck als Ort der Toleranz und des Respekts.', uk: 'Kappelrodeck як місце толерантності та поваги.', en: 'Kappelrodeck as a place of tolerance and respect.' },
  kapi_what:  { de: 'Was ist KAPi?', uk: 'Що таке KAPi?', en: 'What is KAPi?' },
  kapi_body:  {
    de: 'Unter dem Dach von KAPi arbeiten Menschen, Vereine und die Gemeinde zusammen, damit sich alle in Kappelrodeck willkommen fühlen – egal woher sie kommen. KaM·in ist der offene Treffpunkt dieses Netzwerks.',
    uk: 'Під дахом KAPi люди, обʼєднання та громада працюють разом, щоб усі в Kappelrodeck почувалися бажаними — звідки б вони не були. KaM·in — це відкрите місце зустрічі цієї мережі.',
    en: 'Under the KAPi umbrella, people, clubs and the municipality work together so everyone feels welcome in Kappelrodeck — wherever they come from. KaM·in is the open meeting place of this network.' },
  kapi_kamin_t:{ de: 'KaM·in gehört zu KAPi', uk: 'KaM·in є частиною KAPi', en: 'KaM·in is part of KAPi' },
  kapi_kamin_b:{ de: 'Komm im Bürgertreff am Marktplatz vorbei – alle Angebote sind kostenlos.', uk: 'Завітай до Bürgertreff на площі — усі заходи безкоштовні.', en: 'Drop by the meeting place on the market square — everything is free.' },
  kapi_tokamin:{ de: 'Zu KaM·in', uk: 'До KaM·in', en: 'Go to KaM·in' },
  kapi_partners:{ de: 'Partner & Förderer', uk: 'Партнери та спонсори', en: 'Partners & supporters' },
  kapi_partners_note:{ de: 'Platzhalter – hier kommen die Logos von Gemeinde, Vereinen und Förderern hin.', uk: 'Заповнювач — тут зʼявляться логотипи громади, обʼєднань і спонсорів.', en: 'Placeholder — logos of the municipality, clubs and supporters go here.' },

  // ---- Footer ----
  ft_tag:     { de: 'Begegnungszentrum für Alt und Jung, für alle Kulturen.', uk: 'Центр зустрічей для молодих і літніх, для всіх культур.', en: 'A meeting centre for young and old, for every culture.' },
  ft_impressum:{ de: 'Impressum', uk: 'Вихідні дані', en: 'Imprint' },
  ft_datenschutz:{ de: 'Datenschutz', uk: 'Конфіденційність', en: 'Privacy' },
  ft_copy:    { de: '© 2026 Bürgertreff KaM·in · Kappelrodeck', uk: '© 2026 Bürgertreff KaM·in · Kappelrodeck', en: '© 2026 Bürgertreff KaM·in · Kappelrodeck' },

  // ---- Admin ----
  adm_title:  { de: 'Termine verwalten', uk: 'Керування термінами', en: 'Manage dates' },
  adm_sub:    { de: 'Hier kannst du Termine anlegen, ändern und löschen.', uk: 'Тут можна додавати, змінювати та видаляти терміни.', en: 'Add, change and delete dates here.' },
  adm_new:    { de: 'Neuen Termin anlegen', uk: 'Додати новий термін', en: 'Add new date' },
  adm_edit:   { de: 'Termin bearbeiten', uk: 'Редагувати термін', en: 'Edit date' },
  adm_f_title:{ de: 'Titel', uk: 'Назва', en: 'Title' },
  adm_f_day:  { de: 'Wochentag', uk: 'День тижня', en: 'Weekday' },
  adm_f_from: { de: 'Von (Uhrzeit)', uk: 'Від (час)', en: 'From (time)' },
  adm_f_to:   { de: 'Bis (Uhrzeit)', uk: 'До (час)', en: 'To (time)' },
  adm_f_place:{ de: 'Ort', uk: 'Місце', en: 'Place' },
  adm_f_desc: { de: 'Beschreibung', uk: 'Опис', en: 'Description' },
  adm_f_recur:{ de: 'Wiederholung', uk: 'Повторення', en: 'Recurrence' },
  adm_save:   { de: 'Speichern', uk: 'Зберегти', en: 'Save' },
  adm_cancel: { de: 'Abbrechen', uk: 'Скасувати', en: 'Cancel' },
  adm_del:    { de: 'Löschen', uk: 'Видалити', en: 'Delete' },
  adm_editbtn:{ de: 'Bearbeiten', uk: 'Редагувати', en: 'Edit' },
  adm_saved:  { de: 'Gespeichert ✓', uk: 'Збережено ✓', en: 'Saved ✓' },
  adm_confirm:{ de: 'Diesen Termin wirklich löschen?', uk: 'Справді видалити цей термін?', en: 'Really delete this date?' },
  adm_count:  { de: 'Termine insgesamt', uk: 'Усього термінів', en: 'Dates in total' },
  adm_back:   { de: 'Zur Website', uk: 'До сайту', en: 'To website' },
  adm_hint:   { de: 'Tipp: Diese Ansicht ist nur für das KaM·in-Team.', uk: 'Підказка: ця сторінка лише для команди KaM·in.', en: 'Tip: this view is for the KaM·in team only.' },
  adm_tab_events: { de: 'Termine', uk: 'Терміни', en: 'Dates' },
  adm_tab_high:   { de: 'Startseite-Highlights', uk: 'Головна сторінка', en: 'Homepage highlights' },
  adm_h_title:    { de: 'Highlights verwalten', uk: 'Керування Highlights', en: 'Manage highlights' },
  adm_h_sub:      { de: 'Hebe deine wichtigsten Projekte oben auf der Startseite hervor.', uk: 'Виділи найважливіші проєкти вгорі головної сторінки.', en: 'Feature your most important projects at the top of the homepage.' },
  adm_h_note:     { de: 'Der oberste Eintrag wird groß angezeigt, die nächsten zwei kleiner. Mit den Pfeilen die Reihenfolge ändern.', uk: 'Верхній запис показується великим, наступні два — меншими. Порядок змінюй стрілками.', en: 'The top entry is shown large, the next two smaller. Use the arrows to reorder.' },
  adm_h_new:      { de: 'Neues Highlight', uk: 'Новий Highlight', en: 'New highlight' },
  adm_h_edit:     { de: 'Highlight bearbeiten', uk: 'Редагувати Highlight', en: 'Edit highlight' },
  adm_h_kicker:   { de: 'Label (klein, z. B. „Workshop")', uk: 'Мітка (мала, напр. «Майстер-клас»)', en: 'Label (small, e.g. “Workshop”)' },
  adm_h_text:     { de: 'Kurzer Text', uk: 'Короткий текст', en: 'Short text' },
  adm_h_img:      { de: 'Bild-Beschriftung', uk: 'Підпис до зображення', en: 'Image caption' },
  adm_h_link:     { de: 'Beim Klick öffnen', uk: 'Відкривати при кліку', en: 'Open on click' },
  adm_h_count:    { de: 'Highlights insgesamt', uk: 'Усього Highlights', en: 'Highlights in total' },
  adm_h_big:      { de: 'Groß', uk: 'Великий', en: 'Large' },
  adm_up:         { de: 'Nach oben', uk: 'Вгору', en: 'Move up' },
  adm_down:       { de: 'Nach unten', uk: 'Вниз', en: 'Move down' },

  // ---- misc ----
  free_all:   { de: 'Alle Angebote kostenlos', uk: 'Усі заходи безкоштовні', en: 'Everything is free' },
  placeholder_photo: { de: 'Foto von echten Menschen', uk: 'Фото справжніх людей', en: 'Photo of real people' },
};

// weekday + month names per language
window.CAL = {
  weekdaysShort: {
    de: ['Mo','Di','Mi','Do','Fr','Sa','So'],
    uk: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'],
    en: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  },
  weekdaysLong: {
    de: ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'],
    uk: ['Понеділок','Вівторок','Середа','Четвер','Пʼятниця','Субота','Неділя'],
    en: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  },
  months: {
    de: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    uk: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  },
};

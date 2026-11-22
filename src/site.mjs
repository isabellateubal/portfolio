// ─────────────────────────────────────────────────────────────
// All the site's content lives in this file.
// To add a project page: add an entry to `projectPages` below,
// and (optionally) a tile for it in `projectSections`.
// Then run `node build.mjs`.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Isabella Teubal',
  intro: 'Hi, I’m Isabella Teubal. Creative Director based in New York.',
  email: 'isateubal@gmail.com',
  phone: '+1 (617) 955-1761',
  instagram: 'https://www.instagram.com/isateubal/',
  linkedin: 'https://www.linkedin.com/in/isabella-teubal-3121a6222/',
  cv: '/isabella-teubal-cv.pdf',
};

// `crop` reproduces how each photo is framed in the Figma design:
// w/h = image size as % of its box, l/t = offset as % of its box.
// Leave `crop` out to simply fill the box (like Figma's "Fill").

// ── Home page: the four big photos ────────────────────────────
export const homeFeatures = [
  { img: 'la-hero.jpg', title: 'LA', subtitle: 'Film Photography', href: '/la',
    ratio: '1300 / 804', crop: { w: 152.59, h: 163.65, l: -9.84, t: -9.01 } },
  { img: 'david-zwirner.jpg', title: 'DAVID ZWIRNER', subtitle: 'Social Media Curation', href: '/dz',
    ratio: '1293 / 769', crop: { w: 113.64, h: 107.41, l: -7.16, t: -6.37 } },
  { img: 'la-vie-est-un-film.jpg', title: 'LA VIE EST UN FILM', subtitle: 'Filmmaking', href: '/la-vie-est-un-film',
    ratio: '1301 / 732' },
  { img: 'greek-islands.jpg', title: 'GREEK ISLANDS', subtitle: 'Photography', href: null,
    ratio: '1311 / 757', crop: { w: 99.95, h: 259.72, l: 0.02, t: -105.83 } },
];

// ── Projects page ─────────────────────────────────────────────
// Each tile: label, date (optional), image, link (a page like '/dz',
// an outside URL, or null for no link).
export const projectSections = [
  { heading: 'Social Media Curation', tiles: [
    { label: 'DAVID ZWIRNER', date: 'Summer 2024', img: 'david-zwirner.jpg', href: '/dz',
      crop: { w: 113.34, h: 110.84, l: -7.14, t: -8.4 } },
    { label: 'GABRIELA HEARST', date: 'March 2025', img: 'gabriela-hearst.jpg', href: null },
    { label: 'ISLAA', date: 'April 2026', img: 'islaa.jpg', href: null },
    { label: 'PERSONAL CURATION', img: 'personal-curation.jpg', href: null },
    { label: 'ENDEAVOR', img: 'endeavor.jpg', href: null,
      crop: { w: 143.84, h: 104.11, l: -20.18, t: -1.42 } },
    { label: 'SOLOMONOFF ARCHITECTURE STUDIO', img: 'solomonoff.jpg', href: '/sas' },
  ]},
  { heading: 'Photography', tiles: [
    { label: 'GREEK ISLANDS', date: 'May 2025', img: 'greek-islands.jpg', href: null,
      crop: { w: 99.95, h: 259.72, l: 0.02, t: -105.83 } },
    { label: 'STORM KING', date: 'October 2025', img: 'storm-king.jpg', href: null,
      crop: { w: 100.11, h: 115.33, l: -0.06, t: -7.66 } },
    { label: 'ISTANBUL', date: 'May 2025', img: 'istanbul.jpg', href: null },
    { label: 'PEOPLE', img: 'people.jpg', href: null,
      crop: { w: 100, h: 259.09, l: 0, t: -22.73 } },
    { label: 'FILM PHOTOGRAPHY', img: 'film-photography.jpg', href: null },
  ]},
  { heading: 'Filmmaking', tiles: [
    { label: 'LA VIE EST UN FILM', date: '2021', img: 'la-vie-est-un-film.jpg', href: '/la-vie-est-un-film',
      crop: { w: 103.44, h: 100.02, l: 0, t: -0.01 } },
    { label: 'LA', date: '2026', img: 'la.jpg', href: '/la',
      crop: { w: 104.53, h: 100, l: -3.59, t: 0 } },
    { label: 'WHATSAPP COMMERCIAL', date: '2022', img: 'whatsapp.jpg', href: '/whatsapp' },
    { label: 'INTERTWINED DISNEY+', date: '2022', img: 'intertwined.jpg', href: '/enla',
      crop: { w: 109.9, h: 100, l: -7.6, t: 0 } },
    { label: 'JANE', date: '2019', img: 'jane.jpg', href: '/jane' },
  ]},
  { heading: 'Writing', tiles: [
    { label: 'Before the Feed: The Return of Carolyn Bessette-Kennedy', date: '2026',
      img: 'writing-carolyn-bessette-kennedy.jpg', href: '/zine-1' },
    { label: 'Has Vogue Redefined the Politics of Being Single?', date: '2025',
      img: 'writing-vogue.jpg', href: '/zine-2' },
    { label: 'The Fashion of Farming: Lessons from Sky High Farm Goods', date: '2025',
      img: 'writing-sky-high-farm.jpg', href: 'https://substack.com/@isateubal/p-188552408' },
    { label: 'Le Valérie: Jacquemus’s Most Personal Bag Yet', date: '2025',
      img: 'writing-jacquemus.jpg', href: 'https://substack.com/@heliosbylara/p-180889814' },
    { label: 'Remembering Diane Keaton: The Woman Who Redefined Suits', date: '2025',
      img: 'writing-diane-keaton.jpg', href: 'https://substack.com/@heliosbylara/p-176339604' },
    { label: 'Desert chic: The fashion looks of the ‘Dune: Part Two’ press tour', date: '2024',
      img: 'writing-dune.jpg', href: 'https://www.tuftsdaily.com/article/2024/03/desert-chic-the-iconic-fashion-looks-of-the-dune-part-two-press-tour' },
    { label: 'Emma Seligman’s ‘Bottoms’ charms its way to the very bottom', date: '2023',
      img: 'writing-bottoms.jpg', href: 'https://www.tuftsdaily.com/article/2023/09/emma-seligmans-bottoms-charms-its-way-to-the-very-bottom' },
    { label: '‘Barbenheimer’: Is pink the new black or black the new pink?', date: '2023',
      img: 'writing-barbenheimer.jpg', href: 'https://www.tuftsdaily.com/article/2023/09/is-pink-the-new-black-or-is-black-the-new-pinkdissecting-the-barbenheimer-phenomenon' },
  ]},
];

export const decks = {
  text: 'Please request access to view my decks.',
  button: 'Access',
  href: 'https://drive.google.com/drive/folders/1xdoI0bmzMcAwxTDl6XqbPLp8wbFtYS6Q?usp=sharing',
};

// ── Individual project pages ──────────────────────────────────
// type 'film'    → title, role, one big image or YouTube video, a button
// type 'zine'    → a stack of large spreads, a button
// type 'gallery' → titled grids of images
export const projectPages = [
  { slug: 'la-vie-est-un-film', type: 'film', title: 'La Vie est un Film',
    role: 'Writer, Director, Cinematographer, Editor',
    youtube: '5xSRxTunwhE',
    button: { text: 'Watch', href: 'https://youtu.be/5xSRxTunwhE' } },
  { slug: 'jane', type: 'film', title: 'Jane?', role: 'Writer, Cinematographer, Editor',
    img: 'jane.jpg',
    button: { text: 'Watch', href: 'https://www.youtube.com/watch?v=Gvf6BEwaax0' } },
  { slug: 'la', type: 'film', title: 'LA', role: 'Travel Diaries',
    img: 'la.jpg',
    button: { text: 'Watch', href: 'https://www.tiktok.com/@isabellateu/video/7626889982577364242' } },
  { slug: 'whatsapp', type: 'film', title: 'Introducing WhatsApp Communities',
    role: 'Assistant Director (2nd AD), Rebolucion (Award-winning film and advertising production company)',
    img: 'whatsapp.jpg',
    button: { text: 'Watch', href: 'https://www.youtube.com/watch?v=ejyS5ybq0xI' } },
  { slug: 'enla', type: 'film', title: 'Intertwined: Season 2 | Disney+',
    role: 'Assistant Director (2nd AD), Pampa Films',
    img: 'intertwined.jpg', crop: { w: 109.9, h: 100, l: -7.6, t: 0 },
    button: { text: 'Watch', href: 'https://www.youtube.com/watch?v=41KN6jGlXsM' } },
  { slug: 'zine-1', type: 'zine', title: 'Helios SS26',
    images: ['zine-1-spread-1.jpg', 'zine-1-spread-2.jpg'],
    button: { text: 'Read entire Zine', href: 'https://portal.printingcenterusa.com/flipbook_share.php?code=984486&title=Helios%20SS26&desc=Zine' } },
  { slug: 'zine-2', type: 'zine', title: 'Helios FW25',
    images: ['zine-2-spread-1.jpg', 'zine-2-spread-2.jpg'],
    button: { text: 'Read entire Zine', href: 'https://portal.printingcenterusa.com/flipbook_share.php?code=973063&title=HELIOS%20FW25&desc=Everything%20Under%20the%20Eye' } },
  { slug: 'dz', type: 'gallery', title: 'David Zwirner', columns: 4, ratio: '284 / 378',
    groups: [
      { heading: 'Curation', images: Array.from({ length: 15 }, (_, i) => `dz-${String(i + 1).padStart(2, '0')}.jpg`) },
      { heading: 'Content creation', images: Array.from({ length: 10 }, (_, i) => `dz-${String(i + 16).padStart(2, '0')}.jpg`) },
    ] },
  { slug: 'sas', type: 'gallery', title: 'Solomonoff Architecture Studio', columns: 4, ratio: '310 / 413',
    groups: [ { heading: 'Curation', images: ['sas-1.jpg', 'sas-2.jpg', 'sas-3.jpg', 'sas-4.jpg'] } ] },
];

export const bio = {
  paragraphs: [
    'Isabella Teubal is a visual storyteller and content creator working at the intersection of culture, media, and brand strategy. Through her experience at David Zwirner, Endeavor, and Leitzes & Co in New York, she has contributed to multi-channel marketing initiatives, developed digital content, supported high-profile brand partnerships, and strengthened audience engagement through strategic communications.',
    'Isabella recently graduated from NYU Tisch School of the Arts as an Honors Scholar with a Bachelor’s degree in Cinema Studies and minors in Business of Entertainment, Media & Technology and French.',
    'With hands-on experience across independent and studio productions, she brings a perspective that combines creative direction, narrative development, and an understanding of how content connects with audiences. She is particularly interested in the journey of a story beyond the screen: how films are positioned, marketed, distributed, and brought to audiences across platforms and markets.',
  ],
  img: 'bio-portrait.jpg',
  press: [
    { outlet: 'El Observador',
      title: '‘From cinema to branding: Isabella Teubal and the new role of narrative in brands,’',
      href: 'https://www.elobservador.com/argentina/tendencias/del-cine-al-branding-isabella-teubal-y-el-nuevo-rol-la-narrativa-las-marcas-n6056705',
      date: 'September 2026.' },
  ],
};

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
  instagram: 'https://www.instagram.com/isateubal/',
  linkedin: 'https://www.linkedin.com/in/isabella-teubal-3121a6222/',
  cv: '/cv',
  cvPdf: '/isabella-teubal-cv.pdf',
};

// `crop` reproduces how each photo is framed in the Figma design:
// w/h = image size as % of its box, l/t = offset as % of its box.
// Leave `crop` out to simply fill the box (like Figma's "Fill").

// ── Home page: the four big photos ────────────────────────────
export const homeFeatures = [
  { img: 'la-hero.jpg', title: 'LA', subtitle: 'Film Photography', href: '/film',
    ratio: '1300 / 804', crop: { w: 152.59, h: 163.65, l: -9.84, t: -9.01 } },
  { img: 'david-zwirner.jpg', title: 'DAVID ZWIRNER', subtitle: 'Social Media Curation', href: '/dz',
    ratio: '1293 / 769', crop: { w: 113.64, h: 107.41, l: -7.16, t: -6.37 } },
  { img: 'la-vie-est-un-film.jpg', title: 'LA VIE EST UN FILM', subtitle: 'Filmmaking', href: '/la-vie-est-un-film',
    ratio: '1301 / 732' },
  { img: 'greek-islands.jpg', title: 'GREEK ISLANDS', subtitle: 'Photography', href: '/greece',
    ratio: '1311 / 757', crop: { w: 99.95, h: 259.72, l: 0.02, t: -105.83 } },
];

// ── Projects page ─────────────────────────────────────────────
// Each tile: label, date (optional), image, link (a page like '/dz',
// an outside URL, or null for no link).
export const projectSections = [
  { heading: 'Social Media Curation', tiles: [
    { label: 'DAVID ZWIRNER', date: 'Summer 2024', img: 'david-zwirner.jpg', href: '/dz',
      crop: { w: 113.34, h: 110.84, l: -7.14, t: -8.4 } },
    { label: 'GABRIELA HEARST', date: 'March 2025', img: 'gabriela-hearst.jpg', href: '/gh' },
    { label: 'ISLAA', date: 'April 2026', img: 'islaa.jpg', href: null },
    { label: 'PERSONAL CURATION', img: 'personal-curation.jpg', href: '/personal-curation' },
    { label: 'ENDEAVOR', img: 'endeavor.jpg', href: '/endeavor',
      crop: { w: 143.84, h: 104.11, l: -20.18, t: -1.42 } },
    { label: 'SOLOMONOFF ARCHITECTURE STUDIO', img: 'solomonoff.jpg', href: '/sas' },
  ]},
  { heading: 'Photography', tiles: [
    { label: 'GREEK ISLANDS', date: 'May 2025', img: 'greek-islands.jpg', href: '/greece',
      crop: { w: 99.95, h: 259.72, l: 0.02, t: -105.83 } },
    { label: 'STORM KING', date: 'October 2025', img: 'storm-king.jpg', href: '/storm-king',
      crop: { w: 100.11, h: 115.33, l: -0.06, t: -7.66 } },
    { label: 'ISTANBUL', date: 'May 2025', img: 'istanbul.jpg', href: '/istanbul' },
    { label: 'PEOPLE', img: 'people.jpg', href: '/people',
      crop: { w: 100, h: 259.09, l: 0, t: -22.73 } },
    { label: 'FILM PHOTOGRAPHY', img: 'film-photography.jpg', href: '/film' },
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
// type 'gallery' → titled grids of images. To make a photo clickable, add its link to
//                  `links` (same order as the images, use null for no link).
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
      { heading: 'Curation', images: Array.from({ length: 15 }, (_, i) => `dz-${String(i + 1).padStart(2, '0')}.jpg`),
        links: [
        'https://www.instagram.com/p/C-24JKMuJ3s/',
        'https://www.instagram.com/p/C9ffYEpx0cl/',
        'https://www.instagram.com/p/C9U7BicsUcn/',
        'https://www.instagram.com/p/C9VTOZhpcQE/',
        'https://www.instagram.com/p/C8uVxXNvS2j/',
        'https://www.instagram.com/p/C9PxZ7iMTVM/',
        'https://www.instagram.com/p/C82GivOspM_/',
        'https://www.instagram.com/p/C9xwn5KJZ-z/',
        'https://www.instagram.com/p/C-k3TdpPk9V/',
        'https://www.instagram.com/p/C-X_mZjv-Sl/',
        'https://www.instagram.com/p/C9sCqD9ueXD/',
        'https://www.instagram.com/p/C9cqPLVuuOy/',
        'https://www.instagram.com/p/C97fcdKAgRw/',
        'https://www.instagram.com/p/C-dDhDCtJbh/',
        'https://www.instagram.com/p/C8hZT0zu53T/'] },
      { heading: 'Content creation', images: Array.from({ length: 10 }, (_, i) => `dz-${String(i + 16).padStart(2, '0')}.jpg`),
        links: [
        'https://www.instagram.com/p/C--mVRNpb9x/',
        'https://www.instagram.com/p/C-Ivam6x4t7/',
        'https://www.instagram.com/p/C-N5B6WMNUT/',
        'https://www.instagram.com/p/C-DW3STun7k/',
        'https://www.instagram.com/p/C8zgBOMs3y9/',
        'https://www.instagram.com/p/C8uUCPTsLIS/',
        'https://www.instagram.com/p/C9Pt5n-Mn7I/',
        'https://www.instagram.com/p/C84poOFJFUB/',
        'https://www.instagram.com/p/C9NaWuhiZOx/',
        'https://www.instagram.com/p/C_TOe2Fo52L/'] },
    ] },
  { slug: 'sas', type: 'gallery', title: 'Solomonoff Architecture Studio', columns: 4, ratio: '310 / 413',
    groups: [ { heading: 'Curation', images: ['sas-1.jpg', 'sas-2.jpg', 'sas-3.jpg', 'sas-4.jpg'],
        links: [
        'https://www.instagram.com/p/DfFH1tolWbD/',
        'https://www.instagram.com/p/DdJpCfwFSqS/',
        'https://www.instagram.com/p/DdC5mPSlT6J/',
        'https://www.instagram.com/p/DeNHrJyj2rf/'] } ] },
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

// ── Text pages ────────────────────────────────────────────────
// Simple HTML: <h2> for bold headings, <p> for paragraphs, <a href> for links.
export const textPages = [];

// ── Endeavor (visual page) ────────────────────────────────────
// Anything set to null shows as a grey placeholder box until real content is added.
// Images go in public/images, videos (mp4) in public/videos.
export const endeavor = {
  slug: 'endeavor', title: 'Endeavor',
  role: 'Social strategy, content, and copy across TikTok, Instagram, LinkedIn, and WhatsApp',
  sections: [
    { title: 'Launching @elsewherebyendeavor', handleUrl: 'https://www.tiktok.com/@elsewherebyendeavor',
      text: 'TikTok strategy and launch plan, from first idea to first post.',
      shape: 'tall', columns: 5,
      // { video: 'file.mp4' or img: 'file.jpg', href: 'https://www.tiktok.com/...' }
      items: [null, null, null, null, null] },
    { title: 'Female Founders in London',
      text: 'Distribution packages for the London event, adapted for each channel and speaker.',
      shape: 'portrait', columns: 4,
      items: [null, null, null, null] },
    { title: 'Founder Storytelling and Copywriting',
      text: 'Social copy for all platforms, and short summaries for the Elsewhere WhatsApp channel.',
      shape: 'tall', columns: 4,
      items: [null, null, null, null] },
    { title: 'Community and Milestones', handleUrl: 'https://www.instagram.com/endeavor_global/',
      text: 'Content for @endeavor_global, from founder gatherings to Cashea ringing the bell at Nasdaq.',
      shape: 'portrait', columns: 4,
      items: [null, null, null, null] },
  ],
};

export const personalCuration = {
  slug: 'personal-curation', title: 'Personal Curation',
  images: ['personal-curation-1.jpg', 'personal-curation-2.jpg'],
  html: `<p>Content curation of personal Instagram account.<br><a href="https://www.instagram.com/isateubal/" target="_blank" rel="noopener">@isateubal</a></p>`,
};

// ── CV page (from the latest CV PDF) ──────────────────────────
export const cv = {
  summary: 'Marketing, content, and communications professional working at the intersection of the art world, luxury, and film. Background in brand partnerships, social strategy, and film production across New York, Paris, Buenos Aires, and Montevideo. Trilingual in English, Spanish, and French.',
  experience: [
    { role: 'Marketing & Communications Analyst', org: 'Endeavor', place: 'New York, NY', dates: 'Jun 2026 – Present', points: [
      'Built Endeavor’s TikTok strategy and launch plan (@elsewherebyendeavor) and presented it to CEO Linda Rottenberg and leadership, leading to an ongoing role running the channel.',
      'Produce social distribution packages for flagship events, including Founder London, and maintain the content calendar across Endeavor’s global network.'] },
    { role: 'Creative Associate & Digital Strategist', org: 'Solomonoff Architecture Studio', place: 'New York, NY', dates: 'Sep 2026 – Present', points: [
      'Concept and write social content for the studio’s exhibition design of the Telenovela show at Americas Society, ensuring accurate credits for curatorial and institutional partners.',
      'Work directly with the founder on creative and digital strategy, including the Buenos Aires Biennial.'] },
    { role: 'Brand Partnerships Analyst (2026) and Intern (2025)', org: 'Leitzes & Co', place: 'New York, NY', dates: 'Jun 2025 – May 2026', points: [
      'Created pitch decks and researched talent and influencers, contributing to partnerships with Spotify, Tinder, and the Whitney.',
      'Tracked press coverage and campaign performance and prepared post-campaign reports that informed client strategy.',
      'Coordinated events, scheduling, and client communications across concurrent accounts.'] },
    { role: 'Creative Direction', org: 'HAULANI', place: 'Argentina', dates: 'Project Based, 2023 – 2026', points: [
      'Contributed to the creative direction of the brand’s frozen bar launch campaign.'] },
    { role: 'Creative Director & Stylist', org: 'Pola Atelier', place: 'Buenos Aires, Argentina', dates: 'Project Based, 2022 – 2026', points: [
      'Directed and styled social campaigns that helped secure projects with Teatro Colón, Casa Lucía, and bridal clients.'] },
    { role: 'Client Development Intern', org: 'David Zwirner', place: 'New York, NY', dates: 'Sep – Dec 2025', points: [
      'Restructured 2,000+ CRM records and tracked press coverage, handling confidential client information with discretion.'] },
    { role: 'Fashion Content Creator', org: 'Bureau Future (Clara Cullen)', place: 'Paris, France', dates: 'Mar 2025', points: [
      'Coordinated on-site logistics and produced behind-the-scenes content for the Gabriela Hearst Fall 2025 Ready-to-Wear show.'] },
    { role: 'Social Media & Content Intern', org: 'David Zwirner', place: 'New York, NY', dates: 'Jun – Aug 2024', points: [
      'Wrote copy and planned content around artist programming and exhibitions for the gallery’s digital platforms.',
      'Created the highest performing post of the summer, with engagement 28% above average.'] },
    { role: 'Creative Director & Donor Outreach Co-Lead', org: 'Fundación Pérez Scremini', place: 'Montevideo, Uruguay', dates: '2023 – 2024', points: [
      'Built relationships with donors and artists for the Foundation’s annual Gala, its most successful on record, raising USD 175,800.'] },
    { role: 'Data Analyst', org: 'Eyecue Insights', place: 'Montevideo, Uruguay', dates: 'Dec 2023 – Jan 2024', points: [
      'Analyzed consumer behavior in luxury beauty for clients including Guerlain, turning social metrics into brand insights.'] },
    { role: 'Assistant to Second Assistant Director', org: 'Pampa Films / Disney+', place: 'Buenos Aires, Argentina', dates: 'Apr – Jun 2022', points: [
      'Supported the directing department on set for Season 2 of Entrelazados, an Argentine TV series for Disney+.'] },
    { role: 'Post Production / Assistant Director', org: 'Rebolucion', place: 'Buenos Aires, Argentina', dates: 'Feb – Mar 2022', points: [
      'Worked as on-set AD for a WhatsApp International commercial and cataloged project assets in post production.'] },
  ],
  education: [
    { school: 'BA, Cinema Studies, NYU Tisch School of the Arts', dates: 'Class of 2026',
      note: 'GPA 3.9 · Honors Scholar · Minors: Business of Entertainment, Media & Technology; French · Writer, NYU Luxury & Retail Association' },
    { school: 'Film & Media Studies and Economics, Tufts University', dates: '2022 – 2024', note: 'Staff Writer, The Tufts Daily' },
  ],
  skills: [
    ['Marketing & Content', 'social strategy · community management · content calendars · short-form video · copywriting · pitch decks · press and campaign tracking'],
    ['Tools', 'Microsoft Office · Google Workspace · Notion · Sprout Social · CRM · Adobe Creative Cloud · Figma · Canva · Final Cut Pro · Python'],
    ['AI Tools', 'Claude · ChatGPT · Gemini'],
    ['Languages', 'Fluent English & Spanish · Advanced French'],
  ],
};

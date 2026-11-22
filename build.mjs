// Builds the site into ./dist — run with:  node build.mjs
import { mkdirSync, rmSync, writeFileSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { site, homeFeatures, projectSections, decks, projectPages, bio } from './src/site.mjs';

const OUT = 'dist';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const isExternal = (href) => /^(https?:|mailto:)/.test(href);
const linkAttrs = (href) => `href="${esc(href)}"${isExternal(href) && !href.startsWith('mailto:') ? ' target="_blank" rel="noopener"' : ''}`;

// A photo framed exactly like in Figma (see `crop` in src/site.mjs)
function photo(img, { crop, alt = '', ratio, eager = false } = {}) {
  const style = ratio ? ` style="aspect-ratio:${ratio}"` : '';
  const load = eager ? 'eager' : 'lazy';
  const imgStyle = crop
    ? ` class="cropped" style="width:${crop.w}%;height:${crop.h}%;left:${crop.l}%;top:${crop.t}%"`
    : '';
  return `<div class="photo"${style}><img src="/images/${img}" alt="${esc(alt)}" loading="${load}" decoding="async"${imgStyle}></div>`;
}

const logo = `<img src="/images/logo.png" alt="Isabella Teubal — home" width="56" height="56">`;

function layout({ title, body, current }) {
  const nav = [
    ['Projects', '/projects', 'projects'],
    ['CV', site.cv, 'cv'],
    ['Bio', '/about', 'about'],
    ['Contact', '/contact', 'contact'],
  ].map(([label, href, key]) =>
    `<a href="${href}"${key === 'cv' ? ' target="_blank" rel="noopener"' : ''}${key === current ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title ? `${title} — ${site.name}` : site.name)}</title>
<meta name="description" content="${esc(site.intro)}">
<link rel="icon" href="/images/logo.png">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<header class="site-header">
  <a class="logo" href="/">${logo}</a>
  <nav>${nav}</nav>
</header>
<main>
${body}
</main>
<footer class="site-footer">
  <a class="logo" href="/">${logo}</a>
  <nav>
    <a href="mailto:${site.email}">Email</a>
    <a href="${site.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    <a href="${site.instagram}" target="_blank" rel="noopener">Instagram</a>
  </nav>
</footer>
</body>
</html>
`;
}

const pill = (b) => `<div class="pill-row"><a class="pill" ${linkAttrs(b.href)}>${esc(b.text)}</a></div>`;

// ── Pages ─────────────────────────────────────────────────────
function homePage() {
  const features = homeFeatures.map((f, i) => {
    const inner = `${photo(f.img, { crop: f.crop, ratio: f.ratio, alt: f.title, eager: i === 0 })}
    <p class="feature-caption"><strong>${esc(f.title)}</strong><em>${esc(f.subtitle)}</em></p>`;
    return f.href
      ? `<a class="feature" href="${f.href}">${inner}</a>`
      : `<div class="feature">${inner}</div>`;
  }).join('\n');
  return layout({ body: `
<p class="intro">${esc(site.intro)}</p>
<section class="features">
${features}
</section>
<div class="pill-row more"><a class="pill pill-grey" href="/projects">More Projects</a></div>` });
}

function projectsPage() {
  const sections = projectSections.map((s) => {
    const tiles = s.tiles.map((t) => {
      const external = t.href && isExternal(t.href);
      const inner = `${photo(t.img, { crop: t.crop, ratio: '380 / 220', alt: t.label })}
      <p class="tile-label${external ? ' underlined' : ''}"><span>${esc(t.label)}</span>${t.date ? `<em>${esc(t.date)}</em>` : ''}</p>`;
      return t.href ? `<a class="tile" ${linkAttrs(t.href)}>${inner}</a>` : `<div class="tile">${inner}</div>`;
    }).join('\n');
    return `<section class="tile-section"><h2>${esc(s.heading)}</h2><div class="tiles">${tiles}</div></section>`;
  }).join('\n');
  return layout({ title: 'Projects', current: 'projects', body: `
<div class="projects">
${sections}
<section class="tile-section decks"><h2>Decks</h2><p>${esc(decks.text)}</p>
<a class="pill pill-small" ${linkAttrs(decks.href)}>${esc(decks.button)}</a></section>
</div>` });
}

function projectPage(p) {
  let body;
  if (p.type === 'film') {
    const media = p.youtube
      ? `<div class="photo video" style="aspect-ratio:1149 / 669"><iframe src="https://www.youtube-nocookie.com/embed/${p.youtube}" title="${esc(p.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
      : photo(p.img, { crop: p.crop, ratio: '1149 / 669', alt: p.title, eager: true });
    body = `<article class="film">
<h1>${esc(p.title)}<em>${esc(p.role)}</em></h1>
${media}
${pill(p.button)}
</article>`;
  } else if (p.type === 'zine') {
    body = `<article class="zine">
<h1 class="visually-hidden">${esc(p.title)}</h1>
${p.images.map((img, i) => photo(img, { ratio: '1092 / 743', alt: `${p.title} spread ${i + 1}`, eager: i === 0 })).join('\n')}
${pill(p.button)}
</article>`;
  } else if (p.type === 'gallery') {
    body = `<article class="gallery" style="--cols:${p.columns}">
<h1 class="visually-hidden">${esc(p.title)}</h1>
${p.groups.map((g) => `<section><h2>${esc(g.heading)}</h2><div class="grid">${g.images.map((img) => photo(img, { ratio: p.ratio, alt: '' })).join('')}</div></section>`).join('\n')}
</article>`;
  }
  return layout({ title: p.title, body });
}

function aboutPage() {
  return layout({ title: 'Bio', current: 'about', body: `
<article class="text-page">
<h1>Bio</h1>
${bio.paragraphs.map((t) => `<p>${esc(t)}</p>`).join('\n')}
${photo(bio.img, { ratio: '659 / 879', alt: 'Isabella Teubal' })}
<p><strong>Press:</strong><br>
${bio.press.map((x) => `${esc(x.outlet)}, <a ${linkAttrs(x.href)}><em>${esc(x.title)}</em></a> ${esc(x.date)}`).join('<br>')}</p>
</article>` });
}

function contactPage() {
  return layout({ title: 'Contact', current: 'contact', body: `
<article class="text-page contact">
<p><strong>Feel free to reach out via:</strong><br>
Email: <a href="mailto:${site.email}">${site.email}</a><br>
Mobile: ${esc(site.phone)}</p>
</article>` });
}

function notFoundPage() {
  return layout({ title: 'Page not found', body: `
<article class="text-page contact"><p><strong>This page doesn’t exist.</strong><br><a href="/">Back to the home page</a></p></article>` });
}

// ── Write everything ──────────────────────────────────────────
rmSync(OUT, { recursive: true, force: true });
cpSync('public', OUT, { recursive: true });
const write = (path, html) => {
  const dir = join(OUT, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
};
write('', homePage());
write('projects', projectsPage());
write('about', aboutPage());
write('contact', contactPage());
for (const p of projectPages) write(p.slug, projectPage(p));
writeFileSync(join(OUT, '404.html'), notFoundPage());
console.log(`Built ${4 + projectPages.length} pages into ./${OUT}`);

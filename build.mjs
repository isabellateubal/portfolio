// Builds the site into ./dist — run with:  node build.mjs
import { mkdirSync, rmSync, writeFileSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { site, homeFeatures, projectSections, decks, projectPages, bio, textPages, personalCuration, cv, endeavor } from './src/site.mjs';
import { photoPages } from './src/photo-pages.mjs';

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

function layout({ title, body, current, bodyClass = '' }) {
  const nav = [
    ['Projects', '/projects', 'projects'],
    ['CV', site.cv, 'cv'],
    ['Bio', '/about', 'about'],
    ['Contact', '/contact', 'contact'],
  ].map(([label, href, key]) =>
    `<a href="${href}"${key === current ? ' aria-current="page"' : ''}>${label}</a>`
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
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
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

const pill = (b) => `<div class="pill-row"><a class="pill${b.down ? ' pill-down' : ''}" ${linkAttrs(b.href)}${b.down ? ' download' : ''}>${esc(b.text)}</a></div>`;

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
<div class="pill-row more"><a class="pill" href="/projects">More Projects</a></div>` });
}

function projectsPage() {
  const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const sections = projectSections.map((s) => {
    const tiles = s.tiles.map((t) => {
      const external = t.href && isExternal(t.href);
      const inner = `${photo(t.img, { crop: t.crop, ratio: '380 / 220', alt: t.label })}
      <p class="tile-label${external ? ' underlined' : ''}"><span>${esc(t.label)}</span>${t.date ? `<em>${esc(t.date)}</em>` : ''}</p>`;
      return t.href ? `<a class="tile" ${linkAttrs(t.href)}>${inner}</a>` : `<div class="tile">${inner}</div>`;
    }).join('\n');
    return `<section class="tile-section" id="${slug(s.heading)}"><h2>${esc(s.heading)}</h2><div class="tiles">${tiles}</div></section>`;
  }).join('\n');
  const cats = [...projectSections.map((s) => s.heading), 'Decks'];
  const index = `<nav class="proj-index" aria-label="Project types">
<a href="#all" data-filter="all" class="on">All</a>
${cats.map((c) => `<a href="#${slug(c)}" data-filter="${slug(c)}">${esc(c)}</a>`).join('\n')}
</nav>`;
  return layout({ title: 'Projects', current: 'projects', body: `
<div class="projects with-index">
${index}
<div class="proj-list">
${sections}
<section class="tile-section decks" id="decks"><h2>Decks</h2><p>${esc(decks.text)}</p>
<a class="pill pill-small" ${linkAttrs(decks.href)}>${esc(decks.button)}</a></section>
</div>
</div>
<script>
(function () {
  var links = document.querySelectorAll('.proj-index a');
  var secs = document.querySelectorAll('.proj-list .tile-section');
  function show(f) {
    if (!f || !document.getElementById(f)) f = 'all';
    secs.forEach(function (s) { s.hidden = f !== 'all' && s.id !== f; });
    links.forEach(function (a) { a.classList.toggle('on', a.dataset.filter === f); });
  }
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var f = a.dataset.filter;
      history.replaceState(null, '', f === 'all' ? location.pathname : '#' + f);
      show(f);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
  show(location.hash.slice(1));
})();
</script>` });
}

function projectPage(p) {
  let body;
  if (p.type === 'film') {
    const media = p.youtube
      ? `<div class="photo video" style="aspect-ratio:16 / 9"><iframe src="https://www.youtube-nocookie.com/embed/${p.youtube}" title="${esc(p.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
      : photo(p.img, { crop: p.crop, ratio: '1149 / 669', alt: p.title, eager: true });
    body = `<article class="film">
<h1>${esc(p.title)}<em>${esc(p.role)}</em></h1>
${media}
${pill(p.button)}
</article>`;
  } else if (p.type === 'shorts') {
    // even grid of same-size tiles (videos are trimmed to fit, like the Projects page)
    const items = p.videos.map(([file, w, h]) => {
      const poster = file.replace(/\.mp4$/, '.jpg');
      return `<button class="short" type="button" aria-label="Play video"><video data-src="/videos/${file}" poster="/images/${poster}" muted loop playsinline preload="none"></video></button>`;
    }).join('\n');
    body = `<article class="shorts">
<h1>${esc(p.title)}</h1>
<div class="shorts-grid">
${items}
</div>
</article>
<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Video player">
  <button class="lb-close" type="button" aria-label="Close">×</button>
  <button class="lb-nav lb-prev" type="button" aria-label="Previous video">←</button>
  <video class="lb-video" controls playsinline></video>
  <button class="lb-nav lb-next" type="button" aria-label="Next video">→</button>
</div>
<script>
(function () {
  // click a video to watch it full screen, with sound; arrows / swipe to go through them
  var tiles = Array.prototype.slice.call(document.querySelectorAll('.shorts .short'));
  var lb = document.querySelector('.lightbox'), lv = lb.querySelector('.lb-video'), cur = 0;
  function open(i) {
    cur = (i + tiles.length) % tiles.length;
    lv.src = tiles[cur].querySelector('video').dataset.src;
    lv.muted = false;
    lb.hidden = false; document.body.style.overflow = 'hidden';
    var p = lv.play(); if (p) p.catch(function () {});
  }
  function close() { lv.pause(); lv.removeAttribute('src'); lv.load(); lb.hidden = true; document.body.style.overflow = ''; tiles[cur].focus(); }
  tiles.forEach(function (t, i) { t.addEventListener('click', function () { open(i); }); });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function () { open(cur - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function () { open(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') open(cur + 1);
    else if (e.key === 'ArrowLeft') open(cur - 1);
  });
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) open(cur + (dx < 0 ? 1 : -1));
  });
})();
(function () {
  // load and play each video only while it is on screen
  var vids = document.querySelectorAll('.shorts video');
  if (!('IntersectionObserver' in window)) { vids.forEach(function (v) { v.src = v.dataset.src; v.play(); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; var p = v.play(); if (p) p.catch(function () {}); }
      else v.pause();
    });
  }, { rootMargin: '200px' });
  vids.forEach(function (v) { io.observe(v); });
})();
</script>`;
  } else if (p.type === 'zine') {
    body = `<article class="zine">
<h1 class="visually-hidden">${esc(p.title)}</h1>
${p.images.map((img, i) => photo(img, { ratio: '1092 / 743', alt: `${p.title} spread ${i + 1}`, eager: i === 0 })).join('\n')}
${pill(p.button)}
</article>`;
  } else if (p.type === 'gallery') {
    body = `<article class="gallery" style="--cols:${p.columns}">
<h1 class="visually-hidden">${esc(p.title)}</h1>
${p.groups.map((g) => `<section><h2>${esc(g.heading)}</h2><div class="grid">${g.images.map((img, i) => { const ph = photo(img, { ratio: p.ratio, alt: '' }); const href = g.links && g.links[i]; return href ? `<a class="tile" ${linkAttrs(href)}>${ph}</a>` : ph; }).join('')}</div></section>`).join('\n')}
</article>`;
  }
  return layout({ title: p.title, body });
}

// Photo essays: photos placed exactly as in Figma, scaled to the screen width
function photoPage(p) {
  const W = 1280;
  const top = Math.min(...p.photos.map((x) => x[2]));
  const bottom = Math.max(...p.photos.map((x) => x[2] + x[4]));
  const H = bottom - top;
  const items = p.photos.map(([id, x, y, w, h, crop], i) => {
    const box = `left:${(x / W * 100).toFixed(3)}%;top:${((y - top) / H * 100).toFixed(3)}%;width:${(w / W * 100).toFixed(3)}%;height:${(h / H * 100).toFixed(3)}%`;
    const img = crop
      ? `<img class="cropped" src="/images/${p.slug}-${id}.jpg" alt="" loading="lazy" decoding="async" style="width:${crop[0]}%;height:${crop[1]}%;left:${crop[2]}%;top:${crop[3]}%">`
      : `<img src="/images/${p.slug}-${id}.jpg" alt="" loading="lazy" decoding="async">`;
    return p.link
      ? `<a class="photo canvas-link" ${linkAttrs(p.link)} style="position:absolute;${box}">${img}</a>`
      : `<div class="photo" style="position:absolute;${box}">${img}</div>`;
  }).join('\n');
  const intro = p.intro ? `<p class="essay-intro">${p.intro.map(esc).join('<br>')}</p>` : '';
  return layout({ title: p.title, body: `
<article class="essay">
<h1>${esc(p.title)}</h1>
${intro}
<div class="canvas" style="aspect-ratio:${W} / ${H}">
${items}
</div>
${p.button ? pill(p.button) : ''}
</article>` });
}

// ── Endeavor: one even grid of 16:9 tiles (title only) ─────────
// Items come from all sections in src/site.mjs, in order. Videos loop silently.
function endeavorPage(e) {
  const items = e.sections.flatMap((sec) => sec.items).filter(Boolean);
  const cell = (item) => {
    const pos = item.pos ? ` style="object-position:${item.pos}"` : '';
    const inner = item.video
      ? `<video data-src="/videos/${item.video}"${item.img ? ` poster="/images/${item.img}"` : ''} muted loop playsinline preload="none"></video>`
      : item.img ? `<img src="/images/${item.img}" alt="" loading="lazy" decoding="async"${pos}>` : '';
    const box = `<div class="short">${inner}</div>`;
    return item.href ? `<a class="tile" ${linkAttrs(item.href)}>${box}</a>` : box;
  };
  return layout({ title: e.title, body: `
<article class="shorts endv-flat">
<h1>${esc(e.title)}</h1>
<div class="shorts-grid">
${items.map(cell).join('\n')}
</div>
</article>
<script>
(function () {
  var vids = document.querySelectorAll('.endv-flat video');
  if (!('IntersectionObserver' in window)) { vids.forEach(function (v) { v.src = v.dataset.src; v.play(); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; var p = v.play(); if (p) p.catch(function () {}); }
      else v.pause();
    });
  }, { rootMargin: '200px' });
  vids.forEach(function (v) { io.observe(v); });
})();
</script>` });
}

function textPage(p) {
  return layout({ title: p.title, body: `
<article class="prose">
<h1>${esc(p.title)}</h1>
${p.html}
</article>` });
}

function personalCurationPage(p) {
  // still grid, edge to edge, no gaps; every photo opens Instagram
  const cells = p.images.map((img, i) =>
    `<a class="tile" ${linkAttrs(p.link)} aria-label="Open Instagram"><div class="photo" style="aspect-ratio:4 / 5"><img src="/images/${img}" alt="" loading="${i < 12 ? 'eager' : 'lazy'}" decoding="async" draggable="false"></div></a>`).join('');
  return layout({ title: p.title, body: `
<article class="curation">
<h1>${esc(p.title)}</h1>
<div class="curation-grid">${cells}</div>
<div class="curation-text">${p.html}</div>
</article>` });
}

function cvPage() {
  const exp = cv.experience.map((e) => `<section class="cv-item">
<p class="cv-line"><span><strong>${esc(e.role)}</strong> | <em>${esc(e.org)},</em> ${esc(e.place)}</span><span class="cv-dates">${esc(e.dates)}</span></p>
<ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
</section>`).join('\n');
  const edu = cv.education.map((e) => `<section class="cv-item">
<p class="cv-line"><strong>${esc(e.school)}</strong><span class="cv-dates">${esc(e.dates)}</span></p>
<p><em>${esc(e.note)}</em></p>
</section>`).join('\n');
  const skills = cv.skills.map(([k, v]) => `<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join('\n');
  return layout({ title: 'CV', current: 'cv', bodyClass: 'cv-body', body: `
<article class="cv">
<h1>My CV</h1>
<p class="cv-name"><strong>${esc(site.name)}</strong><br>New York, NY  ·  <a href="mailto:${site.email}">${site.email}</a>  ·  <a href="${site.linkedin}" target="_blank" rel="noopener">LinkedIn</a></p>
<p>${esc(cv.summary)}</p>
<h2>EXPERIENCE</h2>
${exp}
<h2>EDUCATION</h2>
${edu}
<h2>SKILLS</h2>
${skills}
${pill({ text: 'Download PDF', href: site.cvPdf, down: true })}
</article>` });
}

function aboutPage() {
  return layout({ title: 'Bio', current: 'about', body: `
<article class="text-page bio">
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
Email: <a href="mailto:${site.email}">${site.email}</a></p>
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
for (const p of photoPages) write(p.slug, photoPage(p));
for (const p of textPages) write(p.slug, textPage(p));
write(personalCuration.slug, personalCurationPage(personalCuration));
write('cv', cvPage());
write(endeavor.slug, endeavorPage(endeavor));
writeFileSync(join(OUT, '404.html'), notFoundPage());
console.log(`Built ${7 + projectPages.length + photoPages.length + textPages.length} pages into ./${OUT}`);

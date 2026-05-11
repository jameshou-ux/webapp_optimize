const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'combined.html');
const outDir = path.join(__dirname, 'assets', 'tokens');
const collectionOutDir = path.join(__dirname, 'assets', 'collections');
const src = fs.readFileSync(htmlPath, 'utf8');

const matches = [...src.matchAll(/\{ name:"([^"]+)",\s*sym:"([^"]+)"[^\n]+color:"([^"]+)"/g)];
const tokens = new Map();

for (const [, name, sym, color] of matches) {
  if (!tokens.has(sym)) tokens.set(sym, { name, sym, color });
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(collectionOutDir, { recursive: true });

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function slug(sym) {
  return sym.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

function shade(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  const mix = amount < 0 ? 0 : 255;
  const weight = Math.abs(amount);
  const next = [r, g, b].map(v => Math.round(v * (1 - weight) + mix * weight));
  return `#${next.map(v => v.toString(16).padStart(2, '0')).join('')}`;
}

const motifs = {
  PENDLE: '<path d="M21 34c8-12 22-16 33-7-5 14-18 22-33 7Z" fill="url(#shine)" opacity=".92"/><path d="M24 34c10 2 20-1 29-8" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>',
  AAVE: '<path d="M28 48 43 17l15 31" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 38h14" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
  CRV: '<path d="M18 46c7-20 19-26 26-26s13 6 20 26" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M24 38c7 5 23 5 34 0" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".78"/>',
  CVX: '<path d="m20 23 24 24 24-24" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="m29 22 15 15 15-15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".72"/>',
  LDO: '<path d="M44 15c8 10 14 17 14 27a14 14 0 0 1-28 0c0-10 6-17 14-27Z" fill="#fff" opacity=".95"/><path d="M36 48c4 4 12 4 16 0" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".22"/>',
  FXS: '<path d="M25 24h36M25 44h29M25 34h24" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M54 24 37 44" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".75"/>',
  UNI: '<path d="M22 27c13-12 30-11 42 4-12-4-22-1-31 9l-11-13Z" fill="#fff"/><path d="M51 27c3-7 9-10 15-8-3 5-8 9-15 8Z" fill="#fff" opacity=".76"/>',
  MKR: '<path d="M22 52V24l22 15 22-15v28" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
  COMP: '<path d="M24 46V28l20-10 20 10v18L44 56 24 46Z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="m24 28 20 10 20-10M44 38v18" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".8"/>',
  SNX: '<path d="M22 48c12 8 30 8 42 0M24 25c8-4 18 0 23 8s11 11 17 8" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
  AXS: '<path d="m25 25 38 38M63 25 25 63" stroke="#fff" stroke-width="7" stroke-linecap="round"/><circle cx="44" cy="44" r="8" fill="#fff" opacity=".9"/>',
  SAND: '<path d="M24 25h40v38H24z" rx="8" fill="#fff"/><path d="M34 36h20M34 48h14" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".24"/>',
  ILV: '<path d="M44 15 64 55H24L44 15Z" fill="#fff"/><path d="M44 28v21" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".24"/>',
  GALA: '<path d="M44 18 66 32v24L44 68 22 56V32l22-14Z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="M33 40h22v14H43" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
  IMX: '<path d="M24 24h40v40H24z" rx="10" fill="none" stroke="#fff" stroke-width="5"/><path d="M33 55 55 33M33 33l22 22" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
  TAO: '<path d="M22 27h44M44 27v38M31 65h26" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cx="44" cy="44" r="8" fill="#fff" opacity=".75"/>',
  RNDR: '<circle cx="44" cy="44" r="22" fill="none" stroke="#fff" stroke-width="5"/><circle cx="44" cy="44" r="8" fill="#fff"/><path d="M44 22v44M22 44h44" stroke="#fff" stroke-width="4" opacity=".65"/>',
  FET: '<circle cx="32" cy="32" r="6" fill="#fff"/><circle cx="56" cy="32" r="6" fill="#fff"/><circle cx="44" cy="56" r="6" fill="#fff"/><path d="M37 34h14M35 37l7 13M53 37l-7 13" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
  GRT: '<circle cx="40" cy="40" r="16" fill="none" stroke="#fff" stroke-width="6"/><path d="M53 53 65 65" stroke="#fff" stroke-width="6" stroke-linecap="round"/>',
  OCEAN: '<path d="M20 48c8-8 16-8 24 0s16 8 24 0" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M20 36c8-8 16-8 24 0s16 8 24 0" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".72"/>',
  ARB: '<path d="M44 17 66 30v28L44 71 22 58V30l22-13Z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="m36 55 16-30M47 58l12-22" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
  OP: '<path d="M23 44c0-9 6-15 16-15h10c10 0 16 6 16 15s-6 15-16 15H39c-10 0-16-6-16-15Z" fill="#fff"/><path d="M35 44h18" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".24"/>',
  POL: '<path d="m24 35 14-8 14 8v18l-14 8-14-8V35Z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="m50 35 14-8 14 8v18l-14 8-14-8" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round" opacity=".72"/>',
  STRK: '<path d="M21 53c14-18 33-25 47-26-7 8-11 15-13 25 6-1 11-3 16-7-9 14-24 22-43 21 5-4 9-8 12-14-6 2-12 3-19 1Z" fill="#fff"/>',
  METIS: '<path d="M22 58 44 20l22 38H22Z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="m33 58 11-19 11 19" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round" opacity=".7"/>',
};

function motif(token) {
  return motifs[token.sym] || `<text x="44" y="50" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${token.sym.length > 5 ? 15 : 18}" font-weight="800" fill="#fff">${esc(token.sym.slice(0, 5))}</text>`;
}

for (const token of tokens.values()) {
  const base = token.color;
  const dark = shade(base, -0.24);
  const light = shade(base, 0.34);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" role="img" aria-labelledby="title desc">
  <title id="title">${esc(token.name)} token icon</title>
  <desc id="desc">Generated token badge for ${esc(token.sym)}.</desc>
  <defs>
    <linearGradient id="bg" x1="16" y1="12" x2="72" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="${light}"/>
      <stop offset=".54" stop-color="${base}"/>
      <stop offset="1" stop-color="${dark}"/>
    </linearGradient>
    <linearGradient id="shine" x1="24" y1="20" x2="62" y2="62" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".68"/>
    </linearGradient>
    <filter id="shadow" x="-12" y="-10" width="112" height="112" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="${dark}" flood-opacity=".25"/>
    </filter>
  </defs>
  <circle cx="44" cy="44" r="38" fill="url(#bg)" filter="url(#shadow)"/>
  <circle cx="31" cy="25" r="24" fill="#fff" opacity=".16"/>
  <g color="${dark}">${motif(token)}</g>
</svg>
`;
  fs.writeFileSync(path.join(outDir, `${slug(token.sym)}.svg`), svg);
}

console.log(`Generated ${tokens.size} token icons in ${path.relative(process.cwd(), outDir)}`);

const collectionIcons = [
  {
    name: 'DeFi Summer 2026',
    color: '#007fff',
    accent: '#7b61ff',
    motif: '<path d="M20 54c12-22 32-30 48-23-7 22-25 34-48 23Z" fill="#fff" opacity=".94"/><path d="M26 52c13-2 25-8 36-19" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".22"/><circle cx="30" cy="29" r="7" fill="#fff" opacity=".72"/>',
  },
  {
    name: 'DeFi Blue Chips',
    color: '#1d4ed8',
    accent: '#06b6d4',
    motif: '<path d="M44 16 64 32 56 64H32L24 32 44 16Z" fill="#fff"/><path d="M24 32h40M34 32l10 32 10-32M34 32l10-16 10 16" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round" opacity=".2"/>',
  },
  {
    name: 'GameFi',
    color: '#b45309',
    accent: '#f59e0b',
    motif: '<path d="M24 37c0-7 5-12 12-12h16c7 0 12 5 12 12v12c0 7-5 12-12 12H36c-7 0-12-5-12-12V37Z" fill="#fff"/><path d="M34 43h12M40 37v12M53 39h.1M58 47h.1" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".28"/>',
  },
  {
    name: 'AI Tokens',
    color: '#06b6d4',
    accent: '#7c3aed',
    motif: '<rect x="25" y="25" width="38" height="38" rx="12" fill="#fff"/><path d="M34 25v-8M44 25v-8M54 25v-8M34 71v-8M44 71v-8M54 71v-8M25 34h-8M25 44h-8M25 54h-8M71 34h-8M71 44h-8M71 54h-8" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".82"/><path d="M36 47c4 4 12 4 16 0" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".26"/><circle cx="37" cy="39" r="3" fill="currentColor" opacity=".26"/><circle cx="51" cy="39" r="3" fill="currentColor" opacity=".26"/>',
  },
  {
    name: 'Base Ecosystem',
    color: '#0052ff',
    accent: '#60a5fa',
    motif: '<circle cx="44" cy="44" r="24" fill="none" stroke="#fff" stroke-width="8"/><path d="M44 20c13 0 24 11 24 24H44V20Z" fill="#fff" opacity=".9"/>',
  },
  {
    name: 'Yield Stablecoins',
    color: '#059669',
    accent: '#f5ac37',
    motif: '<circle cx="44" cy="44" r="24" fill="#fff"/><path d="M44 28v32M34 36c0-5 5-8 11-8 5 0 9 2 11 5M54 52c0 5-5 8-11 8-5 0-9-2-11-5" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".26"/>',
  },
  {
    name: 'Layer 2 Leaders',
    color: '#6d28d9',
    accent: '#28a0f0',
    motif: '<path d="M24 56 44 20l20 36H24Z" fill="#fff"/><path d="M34 56 44 38l10 18H34Z" fill="currentColor" opacity=".22"/><path d="M27 66h34" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".78"/>',
  },
  {
    name: 'Real World Assets',
    color: '#c2410c',
    accent: '#1a56db',
    motif: '<path d="M44 19 66 32H22L44 19Z" fill="#fff"/><path d="M27 37h34M31 37v20M44 37v20M57 37v20M25 62h38" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M31 37v20M44 37v20M57 37v20" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".22"/>',
  },
];

for (const collection of collectionIcons) {
  const dark = shade(collection.color, -0.24);
  const light = shade(collection.accent, 0.28);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" role="img" aria-labelledby="title desc">
  <title id="title">${esc(collection.name)} collection icon</title>
  <desc id="desc">Generated collection badge for ${esc(collection.name)}.</desc>
  <defs>
    <linearGradient id="bg" x1="16" y1="12" x2="72" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="${light}"/>
      <stop offset=".56" stop-color="${collection.color}"/>
      <stop offset="1" stop-color="${dark}"/>
    </linearGradient>
    <filter id="shadow" x="-12" y="-10" width="112" height="112" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="${dark}" flood-opacity=".22"/>
    </filter>
  </defs>
  <rect x="9" y="9" width="70" height="70" rx="18" fill="url(#bg)" filter="url(#shadow)"/>
  <circle cx="28" cy="24" r="22" fill="#fff" opacity=".15"/>
  <g color="${dark}">${collection.motif}</g>
</svg>
`;
  fs.writeFileSync(path.join(collectionOutDir, `${slug(collection.name)}.svg`), svg);
}

console.log(`Generated ${collectionIcons.length} collection icons in ${path.relative(process.cwd(), collectionOutDir)}`);

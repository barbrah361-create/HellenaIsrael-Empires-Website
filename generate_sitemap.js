const fs = require('fs');
const path = require('path');

const domain = 'https://hellenacosmetics.co.ke';
const today = new Date().toISOString().split('T')[0];

const mainPages = [
  'index.html',
  'products.html',
  'skintype.html',
  'search.html',
  'checkout.html',
  'articles.html'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

mainPages.forEach(page => {
  if (fs.existsSync(page)) {
    sitemap += `
  <url>
    <loc>${domain}/${page === 'index.html' ? '' : page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>`;
  }
});

const files = fs.readdirSync(__dirname);
const productPages = files.filter(f => f.startsWith('product-') && f.endsWith('.html'));

productPages.forEach(page => {
  sitemap += `
  <url>
    <loc>${domain}/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
});

sitemap += '\n</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Sitemap generated with ${mainPages.length + productPages.length} pages.`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;

fs.writeFileSync('robots.txt', robotsTxt);
console.log('robots.txt generated.');

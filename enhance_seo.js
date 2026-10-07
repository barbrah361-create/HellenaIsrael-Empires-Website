const fs = require('fs');
const cheerio = require('cheerio');

const pages = [
  {
    file: 'index.html',
    title: 'Beauty Cosmetics in Kenya | Hellena Israel Empires',
    desc: 'Buy premium authentic cosmetics, makeup, and skincare in Eldoret, Kenya. Discover top beauty brands from USA, UK, Korea, and Germany at Hellena Israel Empires.',
    schemaType: 'HealthAndBeautyBusiness'
  },
  {
    file: 'products.html',
    title: 'Premium Beauty Products & Cosmetics | Hellena Israel Empires',
    desc: 'Shop our extensive collection of premium beauty products, skincare, and cosmetics in Kenya. High-quality makeup for women, men, and kids at Hellena Israel Empires.',
    schemaType: 'CollectionPage'
  },
  {
    file: 'checkout.html',
    title: 'Checkout | Hellena Israel Empires',
    desc: 'Review your cart and securely check out your premium beauty products at Hellena Israel Empires.',
    schemaType: 'CheckoutPage'
  },
  {
    file: 'skintype.html',
    title: 'Skin Type Analysis & Discovery | Hellena Israel Empires',
    desc: 'Discover your true skin type and get a personalized skincare routine recommendation. Fast and free skin analysis by beauty experts at Hellena Israel Empires.',
    schemaType: 'WebPage'
  },
  {
    file: 'search.html',
    title: 'Search Products | Hellena Israel Empires',
    desc: 'Search our entire catalog of premium authentic cosmetics, makeup, and skincare products.',
    schemaType: 'SearchResultsPage'
  },
  {
    file: 'articles.html',
    title: 'Beauty Blog & Articles | Hellena Israel Empires',
    desc: 'Read the latest beauty tips, skincare routines, and makeup tutorials from the experts at Hellena Israel Empires.',
    schemaType: 'Blog'
  }
];

pages.forEach(page => {
  if (!fs.existsSync(page.file)) return;
  const html = fs.readFileSync(page.file, 'utf8');
  const $ = cheerio.load(html);

  // Clean old schema
  $('script[type="application/ld+json"]').remove();
  
  // Clean old basic meta tags to avoid duplicates
  $('meta[name="description"]').remove();
  $('meta[property^="og:"]').remove();
  $('meta[name^="twitter:"]').remove();

  // Add new meta tags
  const newMeta = `
  <meta name="description" content="${page.desc}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.desc}">
  <meta property="og:url" content="https://hellenacosmetics.co.ke/${page.file === 'index.html' ? '' : page.file}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://hellenacosmetics.co.ke/image/my%20logo%20-%20Copy.jpeg">
  <meta name="twitter:card" content="summary_large_image">
  `;
  $('head').append(newMeta);

  // Add Schema
  let schema = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    "name": page.title,
    "description": page.desc,
    "url": "https://hellenacosmetics.co.ke/" + (page.file === 'index.html' ? '' : page.file)
  };

  if (page.schemaType === 'HealthAndBeautyBusiness') {
    schema.image = "https://hellenacosmetics.co.ke/image/my%20logo%20-%20Copy.jpeg";
    schema.address = {
      "@type": "PostalAddress",
      "addressLocality": "Eldoret",
      "addressRegion": "Uasin Gishu",
      "addressCountry": "KE"
    };
    schema.telephone = "+254717263203";
  }

  const scriptTag = `
  <script type="application/ld+json">
  ${JSON.stringify(schema, null, 2)}
  </script>
  `;
  $('head').append(scriptTag);

  fs.writeFileSync(page.file, $.html());
  console.log('Enhanced SEO for', page.file);
});

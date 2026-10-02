const fs = require('fs');

const descriptions = {
  "01.jpeg": "48h reliable anti-perspirant protection without alcohol. Protects against sweat, body odor, stains, residues, and irritation.",
  "02.jpeg": "Gentle and soothing shaving foam designed for sensitive skin, ensuring a close, smooth shave with minimal irritation.",
  "03.jpeg": "48-hour moisture-rich anti-perspirant roll-on that keeps you fresh, dry, and smelling divine all day.",
  "04.jpeg": "Advanced triple odor defense roll-on for maximum 48-hour wetness and odor protection.",
  "05.jpeg": "Super-blendable foundation that perfectly matches your skin's unique tone and texture for a flawless, natural finish.",
  "06.jpeg": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks.",
  "07.jpeg": "Up to 30-hour wear, full-coverage foundation that feels light as air and resists transfer, water, and sweat.",
  "08.jpeg": "Cream shower gel enriched with milk proteins and honey for a soft, nourished skin feeling and a comforting scent.",
  "09.jpeg": "Mild and moisturizing cream shower gel for daily use, leaving your skin feeling irresistibly soft and cared for.",
  "010.jpeg": "Invigorating 3-in-1 shower gel for men. Cleanses body, face, and hair, leaving a fresh and masculine scent.",
  "011.jpeg": "Revitalizing shower gel for men with a sporty, energetic fragrance for a dynamic start to the day.",
  "012.jpeg": "48H effective deodorant protection with a seductive, long-lasting masculine perfume fragrance.",
  "013.jpeg": "Intensive hand cream with green olive extract and panthenol. Deeply moisturizes dry, chapped hands.",
  "014.jpeg": "Fast-absorbing body oil spray formulated with oat oil and jojoba to intensively nourish and relieve dry, sensitive skin.",
  "015.jpeg": "Lightweight gel moisturizer packed with ceramides to strengthen the skin barrier while targeting blemishes and soothing redness.",
  "016.jpeg": "Illuminating gel serum that smooths out uneven skin texture and brightens the complexion for a radiant glow.",
  "017.jpeg": "Q10 intense day cream that helps reduce the appearance of fine lines and wrinkles while protecting the skin from UV-induced aging.",
  "018.jpeg": "Clarifying serum formulated with Salicylic Acid to exfoliate pores, reduce breakouts, and promote clear, balanced skin.",
  "019.jpeg": "Luxurious lip oil infused with Mirsalehi honey to intensely hydrate, plump, and add a beautiful golden shine to your lips.",
  "020.jpeg": "High-protection SPF 50+ sunscreen that deeply moisturizes while fighting the signs of premature aging for a fresh, glowing complexion.",
  "021.jpeg": "Clinically proven high-protection SPF 50 lotion. Water-resistant and vitamin-enriched for reliable sun defense.",
  "022.jpeg": "Cooling and soothing after-sun lotion with panthenol. Calms sun-stressed skin and provides intense 48-hour moisture.",
  "023.jpeg": "Light, fast-absorbing body lotion that delivers 48 hours of gentle hydration for noticeably smooth skin.",
  "024.jpeg": "Refreshing body lotion enriched with Aloe Vera and hydro-complex for 48-hour deep hydration and a cool, soft skin feel.",
  "025.jpeg": "Firming body lotion with Q10 and Vitamin C. Improves skin elasticity and delivers 48 hours of moisture for firmer-looking skin."
};

let content = fs.readFileSync('products.js', 'utf8');

for (const [img, desc] of Object.entries(descriptions)) {
  const formattedDesc = `<p>${desc}</p>`;
  const regex = new RegExp(`(image:\\s*"image/${img}",\\s*description:\\s*)\`<p>Enhance your beauty routine.*?<\/p>\``, 's');
  content = content.replace(regex, `$1\`${formattedDesc}\``);
}

fs.writeFileSync('products.js', content);
console.log('Descriptions updated!');

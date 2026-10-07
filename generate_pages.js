const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// Read the frontend products.js
const code = fs.readFileSync('products.js', 'utf8');

// Mock DOM and browser environment to allow products.js to evaluate safely
const domMock = `
const document = {
  getElementById: () => ({ style: {}, appendChild: () => {}, innerHTML: '', addEventListener: () => {}, remove: () => {} }),
  querySelectorAll: () => [],
  querySelector: () => ({ addEventListener: () => {}, classList: { add: () => {}, remove: () => {} } }),
  createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} }, setAttribute: () => {}, addEventListener: () => {}, appendChild: () => {} }),
  head: { appendChild: () => {} },
  addEventListener: () => {}
};
const window = { addEventListener: () => {}, scrollTo: () => {}, location: { href: '' } };
const localStorage = { getItem: () => '{}', setItem: () => {} };
`;

// Create a temporary module
fs.writeFileSync('temp_products.js', domMock + code + '\nmodule.exports = products;');

try {
  // Require the temporary module to get the fully processed products array
  const products = require('./temp_products');
  const template = fs.readFileSync('product.ejs', 'utf-8');

  let generatedCount = 0;
  
  if (!fs.existsSync('product-pages')) {
    // Generate them in the root directory for SEO purposes as requested
  }

  products.forEach(product => {
    // Ensure product data is clean before rendering
    if (!product.description) {
      product.description = '<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>';
    }
    const html = ejs.render(template, { product });
    fs.writeFileSync(`product-${product.id}.html`, html);
    generatedCount++;
  });

  console.log('Successfully generated ' + generatedCount + ' product pages.');
} catch (error) {
  console.error('Error generating pages:', error);
} finally {
  // Clean up
  if (fs.existsSync('temp_products.js')) {
    fs.unlinkSync('temp_products.js');
  }
}

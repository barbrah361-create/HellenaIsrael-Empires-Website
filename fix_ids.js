const fs = require('fs');
let content = fs.readFileSync('products.js', 'utf8');
let counter = 1;
content = content.replace(/id:\s*\d+,/g, () => `id: ${counter++},`);
fs.writeFileSync('products.js', content);
console.log('Successfully updated all IDs in products.js to be unique!');

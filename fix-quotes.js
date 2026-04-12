const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let code = fs.readFileSync(filePath, 'utf8');

code = code
  .replace(/\u201C/g, '"')
  .replace(/\u201D/g, '"')
  .replace(/\u2018/g, "'")
  .replace(/\u2019/g, "'")
  .replace(/\u2032/g, "'")
  .replace(/\u2033/g, '"');

fs.writeFileSync(filePath, code, 'utf8');
console.log('Quotes fixed!');

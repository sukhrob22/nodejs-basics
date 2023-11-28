const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
// console.log(path.extname(__filename)); // fayilimizning kengaytmasi
// console.log(path.parse(__filename)); // hamma shu faylga tegishli ma'lumotlarni yig'ib beradi

// console.log(path.join(__dirname, 'template', 'index.html'));
console.log(path.resolve(__dirname, 'template', '/index.html'));

const fs = require('fs');
const path = require('path');

const fileAress = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(fileAress);

readStream.on('data', (chank) => {
  console.log(String(chank));
});

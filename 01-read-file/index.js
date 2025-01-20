const { createReadStream } = require('fs');
const path = require('path');
const { stdout } = require('process');

function readFIle(sourcePath) {
  const filePath = path.join(__dirname, sourcePath);
  const readStream = createReadStream(filePath, {
    encoding: 'utf-8',
  });

  readStream.on('data', (chunk) => {
    stdout.write(chunk);
  });
}

readFIle('text.txt');

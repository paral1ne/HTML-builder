const { createWriteStream } = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');

function createTextFIle(fileName) {
  const filePath = path.join(__dirname, fileName);

  stdout.write('write some text\n');

  const writeStream = createWriteStream(filePath, { flags: 'a' });

  stdin.on('data', (data) => {
    if (String(data).trim() === 'exit') {
      process.exit();
    }
    writeStream.write(data);
  });

  process.on('exit', () => {
    stdout.write('git');
  });
}

createTextFIle('text_01.txt');

const path = require('path');
const { stdout } = require('process');
const { readdir, stat } = require('fs/promises');

async function listFiles() {
  const pathToFiles = path.join(__dirname, './secret-folder');
  const dirents = await readdir(pathToFiles, { withFileTypes: true });
  dirents.forEach(async (el) => {
    if (el.isFile()) {
      const size = (
        (await stat(`${pathToFiles}/${el.name}`)).size / 1024
      ).toFixed(3);
      const { name, ext } = path.parse(el.name);
      stdout.write(`${name} - ${ext.slice(1) || undefined} - ${size}kB\n`);
    }
  });
}

listFiles();

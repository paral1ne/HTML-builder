const path = require('path');
const { readdir, writeFile, readFile } = require('fs/promises');

const styleFolder = path.join(__dirname, 'styles');
const bundleSrc = path.join(__dirname, 'project-dist', 'bundle.css');

async function mergeStyles() {
  const files = await readdir(styleFolder);
  await writeFile(bundleSrc, '', 'utf-8');
  files.forEach(async (el) => {
    let extent = path.parse(el).ext;
    if (extent === '.css') {
      const filePath = path.join(styleFolder, el);
      const data = await readFile(filePath, 'utf8');
      await writeFile(bundleSrc, data, 'utf8');
    }
  });
}

mergeStyles();

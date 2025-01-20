const path = require('path');
const { readdir, copyFile, mkdir, rm } = require('fs/promises');

const pathToFiles = path.join(__dirname, 'files');
const targetFolder = path.join(__dirname, 'files-copy');

async function copyFIle() {
  const dirents = await readdir(pathToFiles);
  await rm(targetFolder, { recursive: true, force: true });
  await mkdir(targetFolder, { recursive: true });
  dirents.forEach(async (el) => {
    const srcFIle = path.join(pathToFiles, el);
    const desFile = path.join(targetFolder, el);
    await copyFile(srcFIle, desFile);
  });
}

copyFIle();

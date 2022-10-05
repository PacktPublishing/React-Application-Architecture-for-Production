const {
  existsSync,
  promises: { readdir },
} = require('fs');
const fse = require('fs-extra');

const BASE_DIR = './code-stages';

const META_FILE = `${BASE_DIR}/meta.json`;

const getDirectories = async (src) => {
  return (await readdir(src, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
};

const getFiles = async (src) => {
  return await readdir(src);
};

const getFilesAndDirectories = async (src) => {
  const [directories, files] = await Promise.all([
    getDirectories(src),
    getFiles(src),
  ]);

  return [...new Set([...directories, ...files])];
};

const readMetaFile = async (shouldThrow = false) => {
  if (!existsSync(META_FILE)) {
    if (shouldThrow) {
      throw new Error('You have no active stages!');
    }
    return {};
  }

  return await fse.readJson(META_FILE);
};

const updateMetaFile = async (content) => {
  return await fse.outputJson(META_FILE, content);
};

const clearCurrent = async () => {
  const { currentStage } = await readMetaFile();

  if (currentStage) {
    await Promise.all(
      (
        await getFilesAndDirectories(
          `${BASE_DIR}/${currentStage}`
        )
      ).map(async (f) => {
        await fse.remove(`./${f}`);
      })
    );

    await fse.remove(META_FILE);
  }
};

module.exports = {
  clearCurrent,
  getDirectories,
  getFiles,
  getFilesAndDirectories,
  readMetaFile,
  updateMetaFile,
  BASE_DIR,
  META_FILE,
};

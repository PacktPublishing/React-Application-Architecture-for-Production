const fse = require('fs-extra');
const inquirer = require('inquirer');
const {
  getFilesAndDirectories,
  readMetaFile,
  BASE_DIR,
} = require('./utils');

async function saveStage() {
  const { currentStage } = await readMetaFile(true);

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `You are about save the progress of ${currentStage}, are you sure?`,
    },
  ]);

  if (confirm) {
    const dest = `${BASE_DIR}/${currentStage}`;

    await Promise.all(
      (
        await getFilesAndDirectories(
          `${BASE_DIR}/${currentStage}`
        )
      ).map(async (f) => {
        await fse.remove(`${dest}/${f}`);
        await fse.copy(`./${f}`, `${dest}/${f}`);
      })
    );

    console.log('Success: stage saved!');
  }
}

saveStage();

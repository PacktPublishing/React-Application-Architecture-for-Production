const fse = require('fs-extra');
const inquirer = require('inquirer');
const {
  getDirectories,
  getFilesAndDirectories,
  updateMetaFile,
  BASE_DIR,
  clearCurrent,
} = require('./utils');

async function switchStage() {
  const { stage } = await inquirer.prompt([
    {
      type: 'list',
      name: 'stage',
      message: 'What stage do you want to switch to?',
      choices: await getDirectories(BASE_DIR),
    },
  ]);


  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `You are about to switch to ${stage} and lose the current progress, are you sure?`,
    },
  ]);

  if (confirm) {

    await clearCurrent();

    const srcDir = `${BASE_DIR}/${stage}`;

    await Promise.all(
      (
        await getFilesAndDirectories(srcDir)
      ).map(async (f) => {
        await fse.copy(`${srcDir}/${f}`, `./${f}`);
      })
    );
    //

    await updateMetaFile({
      currentStage: `${stage}`,
    });

    console.log('Success: stage switched!');
  }
}

switchStage();

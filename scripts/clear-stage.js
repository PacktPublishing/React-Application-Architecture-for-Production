const { clearCurrent } = require('./utils');

async function clearStage() {
  await clearCurrent();

  console.log('Success: stage cleared!');
}

clearStage();

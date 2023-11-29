import inquirer from 'inquirer'
import { questions } from './src/utils/questions.mjs'
import { application, library } from './src/generaters/index.mjs'

async function initialize() {
  const data = await inquirer.prompt(questions)

  const chooseGenerater = {
    '@nx/react:library': library,
    '@nx/react:application': application,
  }

  chooseGenerater[data.generate](data)
}

initialize()

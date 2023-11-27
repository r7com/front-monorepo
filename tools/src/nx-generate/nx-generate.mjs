import inquirer from 'inquirer'
import { questions } from './src/utils/questions.mjs'
import { application, library } from './src/generaters/index.mjs'

async function initialize() {
  const data = await inquirer.prompt(questions)

  const choiceGenerater = {
    '@nx/react:library': library,
    '@nx/react:application': application,
  }

  choiceGenerater[data.generate](data)
}

initialize()

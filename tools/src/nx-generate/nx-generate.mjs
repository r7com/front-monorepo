import inquirer from 'inquirer'
import { questions } from './src/utils/questions.mjs'
import { Application, Library } from './src/generaters/index.mjs'

async function initialize() {
  const data = await inquirer.prompt(questions)

  const choiceGenerater = {
    '@nx/react:library': Library,
    '@nx/react:application': Application,
  }

  new choiceGenerater[data.generate](data)
}

initialize()

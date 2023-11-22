// const cheerio = require('cheerio')
// const prettier = require('prettier')
import inquirer from 'inquirer'
import { questions } from './src/utils/questions.mjs'
import { Library } from './src/generaters/react-library.mjs'
import { Application } from './src/generaters/react-application.mjs'

async function initialize() {
  const data = await inquirer.prompt(questions)

  const choiceGenerater = {
    '@nx/react:library': Library,
    '@nx/react:application': Application,
  }

  new choiceGenerater[data.generate](data)
}

initialize()

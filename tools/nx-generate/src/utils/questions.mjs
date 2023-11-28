import { isValidPrefix } from './utils.mjs'

export const questions = [
  {
    type: 'list',
    name: 'generate',
    message: 'Qual executor vai escolher ?',
    choices: ['@nx/react:library', '@nx/react:application'],
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Qual será o nome do projeto ?',
    validate: function (input) {
      return input.trim() !== '' || 'Por favor, forneça um valor válido.'
    },
  },
  {
    type: 'input',
    name: 'prefixName',
    message: 'Qual será o prefix ? Ex: prefix-',
    validate: input => isValidPrefix(input.trim()),
  },
]

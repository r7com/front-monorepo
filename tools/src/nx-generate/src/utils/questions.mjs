export const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Qual sera o nome do projeto ?',
    validate: function (input) {
      return input.trim() !== '' || 'Por favor, forneça um valor válido.'
    },
  },
  {
    type: 'input',
    name: 'prefixName',
    message: 'Qual sera o prefix ? Ex: prefix-',
    validate: function (input) {
      return input.trim() !== '' || 'Por favor, forneça um valor válido.'
    },
  },
  {
    type: 'list',
    name: 'generate',
    message: 'Qual executor vai escolher ?',
    choices: ['@nx/react:library', '@nx/react:application'],
  },
]

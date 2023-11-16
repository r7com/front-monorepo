# Add auto prefix tailwind

Projeto usado para inserir prefixo de class do tailwind nos componentes e arquivos variants do projeto.
A ideia é que não seja mais necessário utilizar esse arquivo, mas vamos deixar como uma ferramenta de exemplo
para outras situações que possam ser necessárias.

# Como rodar

Inserir o prefix no arquivo de tailwind nesse formato -> prefix: 'article-',

Mudar as variáveis:
const rootDir = 'libs/ui-section-menu' // Projeto que vai inserir o prefix
const prefix = 'article' // Nome do prefix
const variantKey = 'base' // Nome da chave dentro das variants.ts

`node tools/src/add-prefix/add-prefix.js`

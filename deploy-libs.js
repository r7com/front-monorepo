const { writeFileSync } = require('fs')

const createJob = (project, NODE_VERSION, NPM_TOKEN) => `
deploy:${project}:
  interruptible: true
  tags:
    - gitlab-runner-ec2
  stage: deploy
  image: ${NODE_VERSION}
  cache:
    key:
      files:
        - yarn.lock
    paths:
      - '.yarn-cache/'
      - cache/Cypress
  before_script:
    - yarn install --cache-folder .yarn-cache --prefer-offline --frozen-lockfile
  script:
    - yarn nx build ${project}
    - yarn nx build-css-arc ${project}
    - cd ./dist/libs/${project}
    - echo "@r7:registry=https://registry.npmjs.org/" > .npmrc
    - echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
    - npm publish
`

const createDynamicGitlabFile = () => {
  const { CI_COMMIT_TAG, NODE_VERSION, NPM_TOKEN } = process.env

  const project = CI_COMMIT_TAG.replace(/-\d.*$/gi, '')

  const jobContent = createJob(project, NODE_VERSION, NPM_TOKEN)

  writeFileSync('dynamic-gitlab-ci.yml', jobContent)
}

createDynamicGitlabFile()

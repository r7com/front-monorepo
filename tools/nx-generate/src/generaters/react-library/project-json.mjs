import { projectJsonObj } from '../../utils/constants.mjs'
import { readAndModifyFile, writeFile } from '../../utils/utils.mjs'

export async function projectJson(projectName) {
  const projectJson = JSON.parse(
    await readAndModifyFile({ path: `libs/${projectName}/project.json` }),
  )

  if (!projectJson.targets) {
    projectJson.targets = {}
  }

  projectJson.targets['component-test'] = {
    ...projectJson.targets['component-test'],
    dependsOn: projectJsonObj.dependsOn,
    configurations: projectJsonObj.configurations,
  }

  projectJson.targets['component-test'].options = {
    ...projectJson.targets['component-test'].options,
    ...projectJsonObj.options,
  }

  projectJson.targets = {
    ...projectJson.targets,
    typecheck: projectJsonObj.typecheck,
    version: projectJsonObj.version,
  }

  await writeFile({
    path: `libs/${projectName}/project.json`,
    content: JSON.stringify(projectJson),
    type: 'json',
  })
}

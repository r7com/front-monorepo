// REFERENCE: https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff/tree/5b4832f1f55b5b57c2119ced3824f14fe51f182f#readme

type PluginVisualRegressionOptions = {
  pluginVisualRegressionDiffConfig?: { threshold: number }
  pluginVisualRegressionCreateMissingImages?: boolean
  pluginVisualRegressionUpdateImages?: boolean
  pluginVisualRegressionMaxDiffThreshold?: number
  pluginVisualRegressionForceDeviceScaleFactor?: boolean
}

const configs: PluginVisualRegressionOptions = {
  pluginVisualRegressionDiffConfig: { threshold: 0.01 },
}

Object.freeze(configs)

export { configs as configVisualRegressionDiff }

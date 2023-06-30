module.exports = {
  name: 'voting',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
}

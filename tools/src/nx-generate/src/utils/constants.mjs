import path from 'path'

export const rootDir = path.resolve('./')

export const firstTest = `
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })
`

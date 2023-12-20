const { insertCommentInEmptyValues } = require('./add-empty-variable')

describe('insertCommentInEmptyValues', () => {
  it('should insert comment in empty variables', () => {
    const contentCss =
      '.header-rotate-45{--tw-translate-x: 0;--tw-translate-y: 0;}.header-to-dark-high-500/semi-opaque{--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: }'
    const updatedContentCss =
      '.header-rotate-45{--tw-translate-x: 0;--tw-translate-y: 0;}.header-to-dark-high-500/semi-opaque{--tw-gradient-from-position: var(--tw-empty,/*!*/ /*!*/);--tw-gradient-via-position: var(--tw-empty,/*!*/ /*!*/);--tw-gradient-to-position: var(--tw-empty,/*!*/ /*!*/)}'

    expect(insertCommentInEmptyValues(contentCss)).toEqual(updatedContentCss)
  })
})

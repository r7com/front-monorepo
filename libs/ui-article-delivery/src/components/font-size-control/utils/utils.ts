export const numberFontSize = ($text: HTMLElement) => {
  const actualFontSize = window.getComputedStyle($text).fontSize
  return Number(actualFontSize.replace(/px/g, ''))
}

export function getElements(): NodeListOf<HTMLElement> {
  return document.querySelectorAll('article p, [data-font-size-control]')
}

export const getArticle = () => document.querySelector('article') as HTMLElement

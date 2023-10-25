import { useEffect, useState } from 'react'

export type FontSizeChangerProps = {
  maxSize?: number
  minSize?: number
}

function getElements(): NodeListOf<HTMLElement> {
  return document.querySelectorAll('article p, [data-font-size-changer]')
}

export const FontSizeChanger = ({ maxSize = 24, minSize = 12 }: FontSizeChangerProps) => {
  const increaseFontSize = () => {
    const elements = getElements()
    elements.forEach($item => {
      const fontSize = numberFontSize($item)

      if (fontSize >= maxSize) return

      $item.style.fontSize = `${fontSize + 2}px`
    })
  }

  const decreaseFontSize = () => {
    const elements = getElements()
    elements.forEach($item => {
      const fontSize = numberFontSize($item)

      if (fontSize <= minSize) return

      $item.style.fontSize = `${fontSize - 2}px`
    })
  }

  const numberFontSize = ($text: HTMLElement) => {
    const actualFontSize = window.getComputedStyle($text).fontSize
    return Number(actualFontSize.replace(/px/g, ''))
  }

  return (
    <>
      <button onClick={increaseFontSize}>Aumentar Fonte</button>
      <button onClick={decreaseFontSize}>Diminuir Fonte</button>
    </>
  )
}

/*
 credits discussions tailwind: https://github.com/tailwindlabs/tailwindcss/discussions/7502#discussioncomment-6672817
*/
const generateGrid = size => {
  const gridColumn = {}
  const gridTemplateColumns = {}
  const gridRow = {}
  const gridTemplateRows = {}
  const gridRowStart = {}
  const gridRowEnd = {}
  const gridColumnStart = {}
  const gridColumnEnd = {}

  for (let i = 1; i <= size; i++) {
    gridRow[`span-${i}`] = `span ${i} / span ${i}`
    gridColumn[`span-${i}`] = `span ${i} / span ${i}`
    gridTemplateColumns[i] = `repeat(${i}, minmax(0, 1fr))`
    gridTemplateRows[i] = `repeat(${i}, minmax(0, 1fr))`
    gridRowStart[i] = `${i}`
    gridRowEnd[i] = `${i}`
    gridColumnStart[i] = `${i}`
    gridColumnEnd[i] = `${i}`
  }

  return {
    gridColumn,
    gridTemplateColumns,
    gridRow,
    gridTemplateRows,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
  }
}

module.exports = { generateGrid }

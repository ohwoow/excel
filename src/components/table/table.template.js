// 38

const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(content = '', number = '') {
  return `
    <div class="row">
      <div class="row-info">${number}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 10) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cells = new Array(colsCount).fill(createCell()).join('')

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')


  rows.push(createRow(cols))

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(cells, i))
  }

  return rows.join('')
}

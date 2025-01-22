import { Coords } from './Coords'
import { Square } from './Square'

export type BoardRectOptions = {
  width: number
  height: number
  columnsAmount: number
  rowsAmount: number
  offsetX: number
  offsetY: number
}
export class BoardRect {
  width: number
  height: number
  columnsAmount: number
  rowsAmount: number
  offsetX: number
  offsetY: number
  squareWidth: number
  squareHeight: number
  constructor({
    width,
    height,
    columnsAmount,
    rowsAmount,
    offsetX,
    offsetY,
  }: BoardRectOptions) {
    this.width = width
    this.height = height
    this.columnsAmount = columnsAmount
    this.rowsAmount = rowsAmount
    this.offsetX = offsetX
    this.offsetY = offsetY
    this.squareWidth = Math.floor(width / columnsAmount)
    this.squareHeight = Math.floor(height / rowsAmount)
  }
  getSquare(windowCoords: Coords): Square
  getSquare(x: number, y: number): Square
  getSquare(windowXOrCoords: Coords | number, windowY?: number) {
    let windowCoords: Coords
    if (windowY && typeof windowXOrCoords === 'number') {
      windowCoords = new Coords(windowXOrCoords, windowY)
    } else if (typeof windowXOrCoords !== 'number') {
      windowCoords = windowXOrCoords
    } else {
      throw new Error(
        'getSquare: wrong arguments. Expected either two number or Coords object got something else instead instead',
      )
    }
    const { x, y } = windowCoords.withOrigin(this.offsetX, this.offsetY)
    const column = Math.floor(this.squareWidth / x)
    const row = Math.floor(this.squareHeight / y)
    return new Square(column, row)
  }
  getBoardCoords(globalCoords: Coords) {
    return globalCoords.withOrigin(-this.offsetX, -this.offsetY)
  }
}

import { Coords } from './Coords'
import { Square } from './Square'
export type PositionControls<T> = {
  get: (square: Square) => T | null
  put: (item: T | null, square: Square) => T | null
  swap: (squareA: Square, squareB: Square) => void
  remove: (square: Square) => T | null
}
export type BoardEventArgs<T> = {
  item: T
  square: Square
  coords: Coords
} & PositionControls<T>

export type DragEventArgs<T> = BoardEventArgs<T> & {
  initialSquare: Square
}

export type PickEventArgs<T> = BoardEventArgs<T>

export type SelectEventArgs<T> = BoardEventArgs<T>

export type DropEventArgs<T> = BoardEventArgs<T> & {
  initialSquare: Square
}

export class BoardEvent<T> {
  public item: T
  public square: Square
  public coords: Coords

  constructor(args: BoardEventArgs<T>) {
    this.item = args.item
    this.square = args.square
    this.coords = args.coords
  }
}

export class DragEvent<T> extends BoardEvent<T> {
  public initialSquare: Square

  constructor(args: DragEventArgs<T>) {
    super(args)
    this.initialSquare = args.initialSquare
  }
}

export class PickEvent<T> extends BoardEvent<T> {
  constructor(args: PickEventArgs<T>) {
    super(args)
  }
}

export class SelectEvent<T> extends BoardEvent<T> {
  constructor(args: SelectEventArgs<T>) {
    super(args)
  }
}

export class DropEvent<T> extends BoardEvent<T> {
  public initialSquare: Square

  constructor(args: DropEventArgs<T>) {
    super(args)
    this.initialSquare = args.initialSquare
  }
}

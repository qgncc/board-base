import { Color, PieceType } from 'shared/types'
import { Piece as IPiece } from 'shared/types'
export class Piece implements IPiece {
  constructor(
    public color: Color,
    public type: PieceType,
  ) {}
}

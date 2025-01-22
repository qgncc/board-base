import { COLOR, PIECE } from "shared/vars";
export type Piece = {
  color: Color;
  type: PieceType;
};

export type ChessPosition = (Piece | null)[]

export type Color = (typeof COLOR)[keyof typeof COLOR];
export type PieceType = (typeof PIECE)[keyof typeof PIECE];
export type File = "a"|"b"|"c"|"d"|"e"|"f"|"g"|"h"
export type Rank = "1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"
export type SquareString = `${File}${Rank}`;

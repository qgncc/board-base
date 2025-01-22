import { Square } from "../classes";

export const squareToIndexes = (square: Square) =>
  [square.column, 8 - square.row] as const;

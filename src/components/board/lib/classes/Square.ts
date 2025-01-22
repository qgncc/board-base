import { File, Rank, SquareString } from "shared/types";
import {
  columnToFile,
  parseColumn,
  parseRow,
  rankToRow,
  rowToRank,
  fileToColumn,
} from "..";
export class Square {
  // number from 0 to ...
  // from left-top
  private _column: number;
  //number from 0 to ...
  // from left-top
  private _row: number;
  constructor(squareString: SquareString);
  constructor(column: number, row: number);
  constructor(file: File, rank: Rank);
  constructor(fileOrSquareString: number | string, rank?: number | string) {
    if (typeof fileOrSquareString === "string" && rank === undefined) {
      const squareString = fileOrSquareString;
      this._column = parseColumn(squareString);
      this._row = parseRow(squareString);
    } else if (
      typeof fileOrSquareString === "string" &&
      typeof rank === "string"
    ) {
      const file = fileOrSquareString;
      this._column = fileToColumn(file as File);
      this._row = rankToRow(rank as Rank);
    } else if (
      typeof fileOrSquareString === "number" &&
      typeof rank === "number"
    ) {
      this._column = fileOrSquareString;
      this._row = rank;
    } else {
      throw new Error(
        "Square constructor: unexpected set of arguments: " +
          fileOrSquareString +
          ", " +
          rank,
      );
    }
  }
  // returns index of element as if it was in one dimesional array
  // for example
  // [
  //  0,  1,  2,  3
  //  4,  5,  6,  7
  //  8,  9, 10, 11
  // ]
  // here square [1, 1] has index of 5
  toIndex(columnsAmount: number){
    return this._row*columnsAmount + this._column
  }
  get file() {
    return columnToFile(this._column);
  }
  get rank() {
    return rowToRank(this._row);
  }
  get column() {
    return this._column;
  }
  get row() {
    return this._row;
  }
  toString(): SquareString {
    return (this.file + this.rank) as SquareString;
  }
}

import { File, Rank } from "shared";

export const parseFile = (str: string) => str[0] as File;
export const parseRank = (str: string) => str[1] as Rank;
export const fileToColumn = (file: File) => "abcdefgh".indexOf(file);
export const rankToRow = (rank: Rank) => parseInt(rank) - 1;
export const rowToRank = (row: number) => String(row + 1);
export const columnToFile = (column: number) => "abcdefgh".charAt(column);
export const parseColumn = (str: string) => fileToColumn(parseFile(str));
export const parseRow = (str: string) => rankToRow(parseRank(str));

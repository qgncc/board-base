import { Square } from '.'

export class Item<T> {
  constructor(
    public id: number | string,
    public data: T,
    public square: Square,
  ) {}
}

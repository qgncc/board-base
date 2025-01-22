export class Coords {
  constructor(
    public x: number,
    public y: number,
  ) {}
  withOrigin(newOriginX: number, newOriginY: number) {
    return new Coords(this.x + newOriginX, this.y + newOriginY);
  }
}

import { Coords } from "../classes";

export const extractCoords = (event:{clientX: number, clientY: number})=>new Coords(event.clientX, event.clientY)

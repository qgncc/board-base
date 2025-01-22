import { PointerEventHandler, useCallback, useMemo, useState } from 'react'
import { Coords, Square } from './lib'
import { useBoardCoords } from './useBoardCoords'
import {
  DragEvent,
  DropEvent,
  PickEvent,
  SelectEvent,
} from './lib/classes/events'
import {
  OnDragHandler,
  OnDropHandler,
  OnPickHandler,
  OnSelectHandler,
} from './lib/types'
import { usePosition } from './usePosition'
import { extractCoords } from './lib/utils/extractCoords'
import { useElementSize } from 'shared/hooks'

export type UseBoardOptions<T> = {
  onSelect?: OnSelectHandler<T>
  onPick?: OnPickHandler<T>
  onDrag?: OnDragHandler<T>
  onDrop?: OnDropHandler<T>
  rowsAmount: number
  columnsAmount: number
  initPosition: (T | null)[]
}
type Selected<T> = {
  initialSquare: Square
  item: T
  reneredElement: HTMLElement
}
export const useBoard = <T,>({
  initPosition,
  rowsAmount,
  columnsAmount,
  onDrag,
  onDrop,
  onPick,
  onSelect,
}: UseBoardOptions<T>) => {
  const [selected, setSelected] = useState<Selected<T> | null>(null)
  const { position, put, get, remove, swap } = usePosition<T>(
    initPosition,
    columnsAmount,
    rowsAmount,
  )
  const { board, boardRef } = useBoardCoords(rowsAmount, columnsAmount)
  const { width } = useElementSize(boardRef)
  const drag = (x: number, y: number, element: HTMLElement) => {
    element.style.transform = `translateX(${x}px) translateY(${y}px)`
  }
  const onPointerDown = useCallback<PointerEventHandler<HTMLElement>>(
    (event) => {
      if (!board) return

      // Find the figure's container div
      let element = event.target as HTMLElement
      while (element && !element.style.transform) {
        element = element.parentElement as HTMLElement
      }

      // If no figure div was found, return
      if (!element) return
      const globalCoords = extractCoords(event)
      const coords = board.getBoardCoords(globalCoords)
      const square = board.getSquare(globalCoords.x, globalCoords.y)
      const item = get(square)
      if (item && !selected) {
        console.log('Selecting', square)
        setSelected({
          item,
          initialSquare: square,
          reneredElement: element,
        })
        drag(coords.x, coords.y, element)
        if (onSelect)
          onSelect(
            new SelectEvent({
              item,
              square,
              coords,
              put,
              get,
              remove,
              swap,
            }),
          )
        if (onPick) {
          console.log('Picking', square)
          onPick(
            new PickEvent({
              item,
              square,
              coords,
              put,
              get,
              remove,
              swap,
            }),
          )
        }
      } else if (item) {
        if (onDrop) {
          console.log('Dropping', selected)
          onDrop(
            new DropEvent({
              initialSquare: selected!.initialSquare,
              item,
              square,
              coords,
              put,
              get,
              remove,
              swap,
            }),
          )
        }
      }
      const onPointerMove = (event: PointerEvent) => {
        if (!(event.target instanceof HTMLElement)) return
        if (selected) {
          console.log('Dragging', selected)
          const globalCoords = extractCoords(event)
          const coords = board.getBoardCoords(globalCoords)
          drag(coords.x, coords.y, selected.reneredElement)
          if (onDrag)
            onDrag(
              new DragEvent({
                item: selected.item,
                coords,
                initialSquare: selected.initialSquare,
                get,
                put,
                remove,
                swap,
                square: board.getSquare(coords),
              }),
            )
        }
      }
      const onPointerUp = (event: PointerEvent) => {
        document.removeEventListener('pointermove', onPointerMove)
        document.removeEventListener('pointerup', onPointerUp)
        if (!selected) return
        if (onDrop) {
          console.log('Drop', selected)
          onDrop(
            new DropEvent({
              initialSquare: selected!.initialSquare,
              item: selected.item,
              square: board.getSquare(coords),
              coords: new Coords(event.x, event.y),
              put,
              get,
              remove,
              swap,
            }),
          )
        }
        setSelected(null)
      }

      document.addEventListener('pointerup', onPointerUp)
      document.addEventListener('pointermove', onPointerMove)
    },

    [
      setSelected,
      selected,
      board,
      onDrop,
      onSelect,
      put,
      get,
      remove,
      swap,
      onDrag,
      onPick,
    ],
  )
  const figureSize = useMemo(
    () => width / columnsAmount,
    [width, columnsAmount],
  )
  return { ref: boardRef, onPointerDown, position, figureSize }
}

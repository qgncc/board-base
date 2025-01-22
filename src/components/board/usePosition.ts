import { useState } from 'react'
import { Square } from './lib'
import { Item } from './lib/classes/Item'

export const usePosition = <T>(
  initPosition: (T | null)[],
  columnsAmount: number,
  rowsAmount: number,
) => {
  const [position, setPosition] = useState(() =>
    initPosition.map((data, index) =>
      data
        ? new Item(
            index,
            data as T,
            new Square(
              index % columnsAmount,
              Math.floor(index / columnsAmount),
            ),
          )
        : null,
    ),
  )
  /**
  deprecated:
  * lifecycle:
  * 1. init position => position === newPosition
  * 2. position updates => position !== newPosition, we call onPositionChange with commitPosition as arg
  * 3. positionChanges, if commitPositionWhereCalled we commit position
  */

  const _put = (item: T | null | Item<T>, square: Square) => {
    const index = square.toIndex(columnsAmount)
    const replacedItem = position[index]

    setPosition((position) => {
      const newposition = [...position]
      newposition[index] =
        item === null
          ? null
          : item instanceof Item
            ? item
            : new Item(index, item, square)

      return newposition
    })

    return replacedItem
  }
  const _get = (square: Square) => position[square.toIndex(columnsAmount)]
  const swap = (squareA: Square, squareB: Square) => {
    const itemA = get(squareA)
    const itemB = get(squareB)
    put(itemA, squareB)
    put(itemB, squareA)
  }
  const put = (data: T | null, square: Square) =>
    _put(data, square)?.data || null
  const remove = (square: Square) => put(null, square)
  const get = (square: Square) => _get(square)?.data || null
  return { position, put, remove, get, swap }
}

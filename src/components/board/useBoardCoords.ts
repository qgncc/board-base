import { useMemo, useRef } from 'react'
import { BoardRect } from './lib'

export const useBoardCoords = (rowsAmount: number, columnsAmount: number) => {
  const boardRef = useRef<HTMLDivElement>(null)
  const board = useMemo(() => {
    if (!boardRef.current) return null
    const { width, height, left, top } =
      boardRef.current.getBoundingClientRect()
    return new BoardRect({
      rowsAmount,
      columnsAmount,
      width,
      height,
      offsetX: left,
      offsetY: top,
    })
  }, [rowsAmount, columnsAmount, boardRef.current, boardRef])

  return { board, boardRef }
}

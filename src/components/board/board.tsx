import { FC } from 'react'
import './styles.scss'
import {
  OnDragHandler,
  OnDropHandler,
  OnPickHandler,
  OnSelectHandler,
} from './lib/types'
import { useBoard } from './useBoard'
import { Square } from './lib'

export type BoardConfig<T> = {
  onDrop?: OnDropHandler<T>
  onSelect?: OnSelectHandler<T>
  onPick?: OnPickHandler<T>
  onDrag?: OnDragHandler<T>
  rowsAmount: number
  columnsAmount: number
}

export type BoardProps<Data> = {
  initialPosition: Data[]
  Component: FC<Data & { square: Square }>
  config: BoardConfig<Data>
}

export const Board = <Data,>({
  initialPosition,
  Component,
  config,
}: BoardProps<Data>) => {
  const { position, ref, figureSize, onPointerDown } = useBoard({
    initPosition: initialPosition,
    ...config,
  })
  return (
    <div className="board" ref={ref} onPointerDown={onPointerDown}>
      {position.map((figure) =>
        figure ? (
          <div
            key={figure.id}
            style={{
              width: figureSize,
              height: figureSize,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              background: '#fff',
              transform: `translateX(${figure.square.column * 100}%) translateY(${figure.square.row * 100}% )`,
            }}
          >
            <Component
              key={figure.id}
              square={figure.square}
              {...figure.data}
            />
          </div>
        ) : null,
      )}
    </div>
  )
}

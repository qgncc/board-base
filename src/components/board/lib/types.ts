import { DragEvent, DropEvent, PickEvent, SelectEvent } from './classes/events'
import { Item } from './classes/Item'

export type OnDropHandler<T> = (event: DropEvent<T>) => void
export type OnDragHandler<T> = (event: DragEvent<T>) => void
export type OnSelectHandler<T> = (event: SelectEvent<T>) => void
export type OnPickHandler<T> = (event: PickEvent<T>) => void
export type Position<Data> = (Item<Data> | null)[]

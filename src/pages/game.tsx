import { Board } from 'components/board'
import { Square } from 'components/board/lib'
import { Page } from 'shared/ui'

type GameProps = unknown
const Component = (props: { square: Square }) => (
  <span
    style={{
      width: '100%',
      height: '100%',
      color:
        (props.square.column + props.square.row) % 2 === 0 ? '#000' : '#fff',
      backgroundColor:
        (props.square.column + props.square.row) % 2 !== 0 ? '#000' : '#fff',
    }}
  >
    {props.square.toString()}
  </span>
)
export const Game: React.FC<GameProps> = () => {
  return (
    <Page>
      <Board
        config={{
          columnsAmount: 8,
          rowsAmount: 8,
        }}
        Component={Component}
        initialPosition={[
          { type: 'hello', secondWord: 'uno', nonRender: 'MEOW' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
          { type: 'hello', secondWord: 'dos' },
        ]}
      />
    </Page>
  )
}

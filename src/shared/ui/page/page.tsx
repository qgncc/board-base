import { FC, PropsWithChildren } from 'react'
import './styles.scss'

export type PageProps = PropsWithChildren
export const Page: FC<PageProps> = ({ children }) => {
  return <div className="page">{children}</div>
}

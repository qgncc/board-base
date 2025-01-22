import { MutableRefObject, useCallback, useEffect, useState } from 'react'

export function useElementSize<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const updateSize = useCallback(() => {
    const node = ref.current
    if (node) {
      setSize({
        width: node.offsetWidth,
        height: node.offsetHeight,
      })
    }
  }, [ref])

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [updateSize])

  return size
}

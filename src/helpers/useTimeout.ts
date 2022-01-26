import { useEffect, useState } from 'react'

export const useTimeout = (delay: number = 0) => {
  const [handle, setHandle] = useState()

  // release memory
  useEffect(() => () => handle && clearTimeout(handle), [handle])

  // in absence of the second argument use initial delay
  const _setTimeout = (func: () => void, _delay?: number) =>
    setHandle(setTimeout(func, typeof _delay === 'undefined' ? delay : _delay))

  return [handle, _setTimeout]
}

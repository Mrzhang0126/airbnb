import { useState, useEffect } from 'react'
import { throttle } from 'underscore'

export default function useScroll(elRef, interval = 100) {
  const [isReachBottom, setIsReachBottom] = useState(false)
  const [clientHeight, setClientHeight] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    let el = window
    if (elRef) el = elRef.current

    const scrollListener = throttle(() => {
      let ch, st, sh
      if (el === window) {
        ch = document.documentElement.clientHeight
        st = document.documentElement.scrollTop
        sh = document.documentElement.scrollHeight
      } else {
        ch = el.clientHeight
        st = el.scrollTop
        sh = el.scrollHeight
      }

      setClientHeight(ch)
      setScrollTop(st)
      setScrollHeight(sh)

      if (ch + st >= sh) {
        setIsReachBottom(true)
      } else {
        setIsReachBottom(false)
      }
    }, interval)

    el.addEventListener('scroll', scrollListener)

    return () => {
      el.removeEventListener('scroll', scrollListener)
    }
  }, [elRef, interval])

  return { 
    isReachBottom, 
    clientHeight, 
    scrollTop, 
    scrollHeight 
  }
}
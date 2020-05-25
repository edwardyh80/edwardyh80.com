import { useCallback, useEffect, useState } from "react"

const scrollTo = (offset, callback) => {
  const onScroll = () => {
    if (Math.abs(window.pageYOffset - offset) < 1) {
      window.removeEventListener("scroll", onScroll)
      callback()
    }
  }
  window.addEventListener("scroll", onScroll)
  onScroll()
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  })
}

export default (refs) => {
  const [scr, setScr] = useState(false)
  const [tab, setTab] = useState(0)
  const [vis, setVis] = useState(new Set())
  const updateTab = useCallback((event, i) => {
    let offsetTop = refs.current[i].current.offsetTop - 56
    const maxOffsetTop = document.body.scrollHeight - window.innerHeight
    setTab(i)
    setScr(true)
    setTimeout(
      () =>
        scrollTo(
          offsetTop < 0
            ? 0
            : offsetTop > maxOffsetTop
              ? maxOffsetTop
              : offsetTop,
          () => setScr(false)
        ),
      1
    )
  }, [])
  const updateVis = useCallback((i, v) => {
    setVis((vis) => {
      const newVis = new Set(vis)
      if (v) newVis.add(i)
      else newVis.delete(i)
      return newVis
    })
  }, [])
  useEffect(() => {
    if (vis.size && !scr) setTab(Math.max(...Array.from(vis.values())))
  }, [vis, scr])
  return { tab, updateTab, updateVis }
}

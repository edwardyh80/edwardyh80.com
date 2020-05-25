import { useCallback, useEffect, useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default () => {
  const theme = useTheme()
  const [drawer, setDrawer] = useState(false)
  const mobile = useMediaQuery(theme.breakpoints.down("xs"))
  const toggleDrawer = useCallback((event, d) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return
    setDrawer(d)
  }, [])
  useEffect(() => {
    if (!mobile) setDrawer(false)
  }, [mobile])
  return { drawer, toggleDrawer }
}

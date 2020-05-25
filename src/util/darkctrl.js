import { useCallback, useState } from "react"

export default () => {
  const [dark, setDark] = useState(false)
  const toggleDark = useCallback(() => setDark((d) => !d), [])
  return { dark, toggleDark }
}

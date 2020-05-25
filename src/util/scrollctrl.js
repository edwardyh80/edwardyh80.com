import useScrollTrigger from "@material-ui/core/useScrollTrigger"

export default () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  })
  return { trigger }
}

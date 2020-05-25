import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  canvas: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "100vh",
    zIndex: -1,
  },
  container: {
    maxWidth: 720,
    minHeight: "100vh",
    padding: theme.spacing(16, 2),
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
  },
  divider: {
    width: "25%",
    margin: theme.spacing(4, 0),
  },
  monaco: {
    fontFamily: "monaco, Consolas, monospace",
  },
}))

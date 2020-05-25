import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const ScrollTop = ({ updateTab, trigger }) => {
  const classes = useStyles()

  return (
    <Zoom in={trigger}>
      <div
        onClick={() => updateTab(null, 0)}
        role="presentation"
        className={classes.root}
      >
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  )
}

export default ScrollTop

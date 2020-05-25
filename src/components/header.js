import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import Brightness7Icon from "@material-ui/icons/Brightness7"
import MenuIcon from "@material-ui/icons/Menu"

import Tabs from "./tabs"
import Logo from "../svg/logo.svg"

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark"
  return {
    appbar: {
      color: dark
        ? theme.palette.text.primary
        : theme.palette.getContrastText(theme.palette.primary[50]),
      background: dark
        ? theme.palette.background.paper
        : theme.palette.primary[50],
      transition: ["height", "color", "background", "box-shadow"]
        .map((attr) => `${attr} ${theme.transitions.duration.standard}ms`)
        .join(", "),
      height: 56,
    },
    appbarExpanded: {
      color: theme.palette.text.primary,
      background: "transparent",
      transition: ["height", "color", "background", "box-shadow"]
        .map((attr) => `${attr} ${theme.transitions.duration.standard}ms`)
        .join(", "),
      height: 80,
    },
    toolbar: {
      minHeight: 0,
      height: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    leftContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: 28,
      marginRight: theme.spacing(8),
      marginBottom: theme.spacing(0.5),
      fill: "currentColor",
      transition: `transform ${theme.transitions.duration.shortest}ms`,
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  }
})

const Header = ({
  tab,
  updateTab,
  sections,
  trigger,
  toggleDrawer,
  dark,
  toggleDark,
}) => {
  const classes = useStyles()

  return (
    <AppBar
      elevation={trigger ? 4 : 0}
      className={trigger ? classes.appbar : classes.appbarExpanded}
    >
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.leftContainer}>
            <Logo className={classes.logo} onClick={() => updateTab(null, 0)} />
            <Hidden smDown implementation="css">
              <Tabs tab={tab} updateTab={updateTab} sections={sections} />
            </Hidden>
          </div>
          <Hidden mdUp implementation="css">
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={(event) => toggleDrawer(event, true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown implementation="css">
            <IconButton
              aria-label="toggle dark mode"
              edge="end"
              onClick={toggleDark}
            >
              {dark ? <Brightness7Icon /> : <Brightness2Icon />}
            </IconButton>
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header

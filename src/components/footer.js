import React from "react"
import { Icon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import materialUiIcon from "@iconify/icons-logos/material-ui"

import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark"
  return {
    container: {
      background: dark ? "#2b2b2b" : "#f5f5f5",
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2, 2, 8),
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    icon: {
      margin: theme.spacing(0, 0.5),
      verticalAlign: "text-bottom",
    },
  }
})

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.container}>
      <Typography variant="subtitle2" component="p" color="textSecondary">
        Built with{" "}
        <Link
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Icon className={classes.icon} icon={gatsbyIcon} />
          Gatsby
        </Link>{" "}
        &amp;{" "}
        <Link
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Icon className={classes.icon} icon={materialUiIcon} />
          Material-UI
        </Link>
        .<br />© {new Date().getFullYear()} Edward Chow
      </Typography>
    </footer>
  )
}

export default Footer

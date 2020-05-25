import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "@iconify/react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Tooltip from "@material-ui/core/Tooltip"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import Brightness7Icon from "@material-ui/icons/Brightness7"

import Tabs from "./tabs"
import icons from "./icons"
import avatar from "../images/pp.png"

const useStyles = (sns) =>
  makeStyles((theme) => {
    const dark = theme.palette.type === "dark"
    return {
      container: {
        width: 240,
        height: "100%",
        display: "flex",
      },
      list: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(4),
      },
      util: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: theme.palette.action.hover,
        padding: theme.spacing(0.5),
      },
      utilContainer: {
        display: "flex",
        flexDirection: "column",
      },
      avatar: {
        width: 48,
        height: 48,
        padding: theme.spacing(1),
      },
      divider: {
        margin: theme.spacing(1, 0),
      },
      snsIcon: {
        width: 48,
        transition: `${theme.transitions.duration.shortest}ms`,
        ...(!dark &&
          sns
            .map(({ color, icon }) => ({
              key: `&.${icon}:hover`,
              value: { color: color },
            }))
            .reduce((acc, { key, value }) => {
              acc[key] = value
              return acc
            }, {})),
      },
    }
  })

const SwipeableTemporaryDrawer = ({
  tab,
  updateTab,
  sections,
  drawer,
  toggleDrawer,
  dark,
  toggleDark,
}) => {
  const {
    snsData: {
      frontmatter: { sns },
    },
  } = useStaticQuery(graphql`
    {
      snsData: markdownRemark(fileAbsolutePath: { regex: "/sns/" }) {
        frontmatter {
          sns {
            color
            icon
            id
            title
            url
          }
        }
      }
    }
  `)
  const classes = useMemo(() => useStyles(sns), [sns])()

  return (
    <SwipeableDrawer
      anchor="right"
      open={drawer}
      onClose={(event) => toggleDrawer(event, false)}
      onOpen={(event) => toggleDrawer(event, true)}
    >
      <div className={classes.container}>
        <div
          className={classes.list}
          role="presentation"
          onClick={(event) => toggleDrawer(event, false)}
          onKeyDown={(event) => toggleDrawer(event, false)}
        >
          <Tabs tab={tab} updateTab={updateTab} sections={sections} vertical />
        </div>
        <div className={classes.util}>
          <Avatar alt="Avatar" src={avatar} className={classes.avatar} />
          <div className={classes.utilContainer}>
            <Tooltip title="Dark Mode" placement="left" arrow>
              <IconButton aria-label="toggle dark mode" onClick={toggleDark}>
                {dark ? <Brightness7Icon /> : <Brightness2Icon />}
              </IconButton>
            </Tooltip>
            <Divider className={classes.divider} />
            {sns.map(({ icon, id, title, url }) => (
              <Tooltip key={id} title={title} placement="left" arrow>
                <IconButton
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className={`${classes.snsIcon} ${icon}`}
                >
                  <Icon icon={icons[icon]} />
                </IconButton>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  )
}

export default SwipeableTemporaryDrawer

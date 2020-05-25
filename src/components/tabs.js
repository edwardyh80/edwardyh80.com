import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const useStyles = makeStyles((theme) => ({
  tab: {
    height: 56,
    minWidth: 0,
    textTransform: "none",
  },
  vWrapper: {
    alignItems: "flex-start",
    paddingLeft: theme.spacing(2),
  },
  vIndicator: {
    right: "auto",
    width: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  hIndicator: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  selected: {
    color: theme.palette.primary.main,
  },
}))

const SimpleTabs = ({ tab, updateTab, sections, vertical = false }) => {
  const classes = useStyles()

  return (
    <Tabs
      value={tab || false}
      onChange={updateTab}
      aria-label="tabs"
      orientation={vertical ? "vertical" : "horizontal"}
      indicatorColor="primary"
      TabIndicatorProps={{
        className: vertical ? classes.vIndicator : classes.hIndicator,
      }}
    >
      {sections.map(
        ({ id, title }, i) =>
          i && (
            <Tab
              key={id}
              label={title}
              value={i}
              aria-controls={sections[i].id}
              classes={{
                root: classes.tab,
                wrapper: vertical && classes.vWrapper,
                selected: classes.selected,
              }}
            />
          )
      )}
    </Tabs>
  )
}

export default SimpleTabs

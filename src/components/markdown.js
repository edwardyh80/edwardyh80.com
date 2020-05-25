import React from "react"
import ReactMarkdown from "markdown-to-jsx"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme) => ({
  unorderedList: {
    marginBlockStart: 0,
    paddingInlineStart: `${theme.spacing(2)}px`,
    listStyle: "none",
    position: "relative",
  },
  listItem: {
    marginTop: theme.spacing(1),
    "&::before": {
      content: "'▹'",
      position: "absolute",
      left: 0,
      color: theme.palette.primary.main,
    },
  },
  normalFW: {
    fontWeight: 400,
  },
}))

const options = () => {
  const classes = useStyles()

  return {
    overrides: {
      h1: {
        component: Typography,
        props: {
          paragraph: true,
          variant: "h6",
          component: "p",
          className: classes.normalFW,
        },
      },
      p: {
        component: Typography,
        props: { paragraph: true, variant: "body1", component: "p" },
      },
      a: {
        component: Link,
        props: { target: "_blank", rel: "noopener" },
      },
      ul: {
        component: "ul",
        props: {
          className: classes.unorderedList,
        },
      },
      li: {
        component: "li",
        props: {
          className: classes.listItem,
        },
      },
    },
  }
}

const Markdown = (props) => <ReactMarkdown options={options()} {...props} />

export default Markdown

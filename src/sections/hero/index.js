import React from "react"
import { useTheme } from "@material-ui/core/styles"
import Particles from "react-particles-js"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

import useData from "./data"
import useStyles from "./styles"
import particleParams from "./particleparams"
import Markdown from "../../components/markdown"

const Hero = ({ updateTab }) => {
  const {
    rawMarkdownBody,
    frontmatter: { buttonText, greeting, name, duty },
  } = useData()
  const classes = useStyles()
  const dark = useTheme().palette.type === "dark"

  return (
    <>
      <Particles className={classes.canvas} params={particleParams(dark)} />
      <Container className={classes.container}>
        <Typography
          variant="body1"
          component="p"
          className={classes.monaco}
          color="primary"
        >
          {greeting}
        </Typography>
        <Typography variant="h2" component="p">
          {name}.
        </Typography>
        <Typography variant="h2" component="p" color="textSecondary">
          {duty}
        </Typography>
        <Divider className={classes.divider} />
        <Markdown color="textSecondary">{rawMarkdownBody}</Markdown>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateTab(null, 1)}
        >
          {buttonText}
        </Button>
      </Container>
    </>
  )
}

export default Hero

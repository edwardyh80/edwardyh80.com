import React, { useCallback, useState } from "react"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Switch from "@material-ui/core/Switch"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import WorkIcon from "@material-ui/icons/Work"

import useData from "./data"
import useStyles from "./styles"
import icons from "./icons"
import Markdown from "../../components/markdown"
import Image from "../../components/image"

const WhatIDoPaper = ({ subTitle, work, hobby, classes }) => {
  const [flip, setFlip] = useState(false)
  const toggleFlip = (b) =>
    useCallback(() => {
      if (b === undefined) setFlip((s) => !s)
      else setFlip(b)
    }, [])

  return (
    <Paper className={classes.paperContainer}>
      <div className={classes.subTitleContainer}>
        <Typography variant="h5" component="p" className={classes.subTitle}>
          {subTitle}
        </Typography>
        <Grid
          container
          alignItems="center"
          spacing={1}
          style={{ width: "auto" }}
        >
          <Grid item>
            <WorkIcon
              className={!flip ? classes.activeIcon : classes.disabledIcon}
              onClick={toggleFlip(false)}
            />
          </Grid>
          <Grid item>
            <Switch
              checked={flip}
              onChange={toggleFlip()}
              value="flip"
              color="primary"
              inputProps={{ "aria-label": "flip" }}
            />
          </Grid>
          <Grid item>
            <FavoriteIcon
              className={flip ? classes.activeIcon : classes.disabledIcon}
              onClick={toggleFlip(true)}
            />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        {(flip ? hobby : work).nodes.map(
          ({ frontmatter: { id, title, icon }, rawMarkdownBody }) => (
            <Grid key={id} item xs={12} sm={6} md={3}>
              <div className={classes.subContainer}>
                {React.cloneElement(icons[icon], {
                  className: flip ? classes.hobbyIcon : classes.workIcon,
                })}
                <Typography variant="h6" component="p">
                  {title}
                </Typography>
                <Divider className={classes.divider} />
                <Markdown color="textSecondary" style={{ minHeight: 96 }}>
                  {rawMarkdownBody}
                </Markdown>
              </div>
            </Grid>
          )
        )}
      </Grid>
    </Paper>
  )
}

const About = () => {
  const {
    main: {
      rawMarkdownBody,
      frontmatter: { title, subTitle },
    },
    work,
    hobby,
  } = useData()
  const classes = useStyles()

  return (
    <Container maxWidth="md" fixed className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {title}
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Markdown>{rawMarkdownBody}</Markdown>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.imgContainer}>
            <Image />
          </div>
        </Grid>
      </Grid>
      <WhatIDoPaper
        subTitle={subTitle}
        work={work}
        hobby={hobby}
        classes={classes}
      />
    </Container>
  )
}

export default About

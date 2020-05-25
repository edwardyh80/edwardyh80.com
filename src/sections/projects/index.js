import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import repoForked from "@iconify/icons-octicon/repo-forked"
import starIcon from "@iconify/icons-octicon/star"
import Card from "@material-ui/core/Card"
import Chip from "@material-ui/core/Chip"
import CardContent from "@material-ui/core/CardContent"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import LaunchIcon from "@material-ui/icons/Launch"

import useData from "./data"
import useStyles from "./styles"
import colors from "./colors"

const Projects = () => {
  const {
    main: {
      frontmatter: { title, subTitle },
    },
  } = useData()
  const classes = useStyles()
  const [repo, setRepo] = useState([])
  useEffect(() => {
    const fetchRepo = async () => {
      const response = await fetch(
        "https://api.github.com/users/edwardyh80/repos",
        { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
      )
      const json = await response.json()
      setRepo(
        json
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6)
      )
    }
    fetchRepo()
  }, [])

  return (
    <Container maxWidth="md" fixed className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {title}
        </Typography>
      </div>
      <Typography variant="body1" component="p" className={classes.subTitle}>
        {subTitle}
      </Typography>
      <Grid container spacing={2}>
        {repo.map(
          ({
            id,
            full_name,
            html_url,
            description,
            stargazers_count,
            language,
            forks_count,
            homepage,
            topics,
          }) => (
            <Grid key={id} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.cardTitle}>
                    <Link href={html_url} target="_blank" rel="noopener">
                      <Typography
                        variant="body1"
                        component="p"
                        className={classes.breakWord}
                      >
                        {full_name}
                      </Typography>
                    </Link>
                    {homepage && (
                      <Link
                        href={homepage}
                        target="_blank"
                        rel="noopener"
                        aria-label="launch"
                      >
                        <LaunchIcon className={classes.launchIcon} />
                      </Link>
                    )}
                  </div>
                  <Typography
                    variant="body2"
                    component="p"
                    paragraph
                    className={classes.breakWord}
                  >
                    {description}
                  </Typography>
                </CardContent>
                <div className={classes.cardFooter}>
                  <div className={classes.chipContainer}>
                    {topics.map((topic) => (
                      <Chip
                        key={topic}
                        size="small"
                        label={topic}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                  <div>
                    {language && (
                      <span className={classes.footnote}>
                        <Typography variant="caption" component="span">
                          <span
                            className={classes.colorDot}
                            style={{ background: colors[language].color }}
                          />
                          {language}
                        </Typography>
                      </span>
                    )}
                    <Link
                      href={`${html_url}/stargazers`}
                      target="_blank"
                      rel="noopener"
                      className={classes.footnoteLink}
                      underline="none"
                    >
                      <Typography variant="caption" component="span">
                        <Icon
                          icon={starIcon}
                          className={classes.octicon}
                          width={14}
                          height={16}
                        />
                        {stargazers_count}
                      </Typography>
                    </Link>
                    <Link
                      href={`${html_url}/network/members`}
                      target="_blank"
                      rel="noopener"
                      className={classes.footnoteLink}
                      underline="none"
                    >
                      <Typography variant="caption" component="span">
                        <Icon
                          icon={repoForked}
                          className={classes.octicon}
                          width={10}
                          height={16}
                        />
                        {forks_count}
                      </Typography>
                    </Link>
                  </div>
                </div>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  )
}

export default Projects

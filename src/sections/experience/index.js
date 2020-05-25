import React, { useState } from "react"
import { Icon } from "@iconify/react"
import Container from "@material-ui/core/Container"
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepButton from "@material-ui/core/StepButton"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import BuildIcon from "@material-ui/icons/Build"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

import useData from "./data"
import useStyles from "./styles"
import icons from "./icons"
import Markdown from "../../components/markdown"

const JobStepper = ({ jobs, classes }) => {
  const [activeStep, setActiveStep] = useState(-1)

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      classes={{ root: classes.stepperRoot }}
    >
      {jobs.nodes.map(
        (
          {
            frontmatter: { chip, company, dept, id, period, title, url },
            rawMarkdownBody,
          },
          i
        ) => (
          <Step
            key={id}
            active={(!i && activeStep === -1) || activeStep === i}
            completed={false}
            disabled={false}
            expanded={(!i && activeStep === -1) || activeStep === i}
          >
            <StepButton
              onClick={() => setActiveStep(i)}
              icon="●"
              optional={
                <Typography
                  variant="body2"
                  component="span"
                  align="left"
                  color={activeStep === i ? "textPrimary" : "textSecondary"}
                  style={{ display: "block" }}
                >
                  {period}
                </Typography>
              }
            >
              <StepLabel
                classes={{
                  label: `MuiTypography-h6 ${classes.stepLabelRoot}`,
                  iconContainer: classes.stepLabelIconContainer,
                }}
                StepIconProps={{
                  classes: {
                    root: activeStep === -1 && classes.stepIconRootAnime,
                  },
                }}
              >
                {title} -{" "}
                <Link href={url} target="_blank" rel="noopener">
                  {company}
                </Link>
              </StepLabel>
            </StepButton>
            <StepContent classes={{ root: classes.stepContentRoot }}>
              <Typography variant="body2" component="p">
                <em>{dept}</em>
              </Typography>
              <Markdown>{rawMarkdownBody}</Markdown>
              {chip.map(({ id, title }) => (
                <Chip
                  key={id}
                  size="small"
                  label={title}
                  className={classes.chip}
                />
              ))}
            </StepContent>
          </Step>
        )
      )}
    </Stepper>
  )
}

const Experience = () => {
  const {
    main: {
      frontmatter: { title, jobsTitle, educationTitle, skillTitle },
    },
    jobs,
    education,
    skills,
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
        <Grid item xs={12} md={8}>
          <Typography
            variant="h6"
            component="p"
            className={classes.stepperTitle}
          >
            <WorkIcon className={classes.stepperTitleIcon} color="primary" />
            {jobsTitle}
          </Typography>
          <Divider className={classes.divider} />
          <JobStepper jobs={jobs} classes={classes} />
          <Typography
            variant="h6"
            component="p"
            className={classes.stepperTitle}
          >
            <SchoolIcon
              className={classes.stepperTitleIcon}
              color="secondary"
            />
            {educationTitle}
          </Typography>
          <Divider className={classes.divider} />
          <Stepper
            orientation="vertical"
            classes={{ root: classes.stepperRoot }}
          >
            {education.nodes.map(
              ({ frontmatter: { id, period, school, title, url } }) => (
                <Step key={id} active={true} completed={false} disabled={false}>
                  <StepLabel
                    icon="●"
                    optional={
                      <Typography variant="body2" component="span" align="left">
                        {period}
                      </Typography>
                    }
                    classes={{
                      label: `MuiTypography-body1 ${classes.stepLabelRoot} ${classes.boldFW}`,
                      iconContainer: classes.stepLabelIconContainer,
                    }}
                    StepIconProps={{
                      classes: {
                        root: classes.stepIconRootAlt,
                      },
                    }}
                  >
                    {title} -{" "}
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener"
                      color="secondary"
                    >
                      {school}
                    </Link>
                  </StepLabel>
                </Step>
              )
            )}
          </Stepper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="p"
            className={classes.stepperTitle}
          >
            <BuildIcon className={classes.stepperTitleIcon} color="disabled" />
            {skillTitle}
          </Typography>
          <Divider className={classes.divider} />
          {skills.nodes.map(({ frontmatter: { id, products, title } }) => (
            <div key={id} className={classes.skillContainer}>
              <Typography
                variant="button"
                component="p"
                className={classes.skillCategory}
              >
                {title}
              </Typography>
              <Grid container spacing={2}>
                {products.map(({ icon, id, title, url }) => (
                  <Grid
                    key={id}
                    item
                    xs={3}
                    sm={2}
                    md={4}
                    style={{
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Tooltip title={title} placement="bottom">
                      <Link href={url} target="_blank" rel="noopener">
                        <Icon
                          icon={icons[icon]}
                          className={classes.skillIcon}
                        />
                      </Link>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Experience

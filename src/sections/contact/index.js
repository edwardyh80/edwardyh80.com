import React, { useCallback, useState, useMemo } from "react"
import { Icon } from "@iconify/react"
import Alert from "@material-ui/lab/Alert"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

import useData from "./data"
import useStyles from "./styles"
import icons from "./icons"
import validate from "./validate"

const SubmitMessage = ({
  submitStatus,
  setSubmitStatus,
  className,
  submitStatusMsg,
}) =>
  submitStatus ? (
    <Alert
      severity={submitStatusMsg[submitStatus + 2].type}
      onClose={submitStatus !== 1 && (() => setSubmitStatus(0))}
      className={className}
    >
      {submitStatusMsg[submitStatus + 2].msg}
    </Alert>
  ) : null

const ContactForm = ({ classes, contactForm }) => {
  const {
    label: { name, email, message, clear, submit },
    submitStatusMsg,
  } = contactForm
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitStatus, setSubmitStatus] = useState(0)
  const isValidData = validate(formData)
  const updateFormData = (field, content) => {
    setFormData((formData) => {
      const newFormData = { ...formData }
      newFormData[field] = content
      return newFormData
    })
  }
  const handleChange = (field) =>
    useCallback((event) => {
      updateFormData(field, event.target.value)
    }, [])
  const handleClear = () => setFormData({ name: "", email: "", message: "" })
  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus(1)
    let response
    try {
      response = await fetch("https://api.edwardyh80.com/msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
    } catch (e) {
      setSubmitStatus(-2)
      return
    }
    if (!response.ok) {
      setSubmitStatus(-2)
    } else {
      const data = await response.json()
      if (data.success) {
        setSubmitStatus(2)
      } else {
        setSubmitStatus(-1)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactName"
            name="name"
            label={name}
            type="text"
            fullWidth
            variant="outlined"
            error={!isValidData.name.isValid && !isValidData.name.isEmpty}
            disabled={submitStatus === 1}
            value={formData.name}
            onChange={handleChange("name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactEmail"
            name="email"
            label={email}
            type="email"
            fullWidth
            variant="outlined"
            error={!isValidData.email.isValid && !isValidData.email.isEmpty}
            disabled={submitStatus === 1}
            value={formData.email}
            onChange={handleChange("email")}
          />
        </Grid>
        <Grid item xs={12} style={{ position: "relative" }}>
          <TextField
            required
            id="contactMessage"
            name="message"
            label={message}
            type="text"
            fullWidth
            multiline
            rows="8"
            variant="outlined"
            error={!isValidData.message.isValid && !isValidData.message.isEmpty}
            disabled={submitStatus === 1}
            value={formData.message}
            onChange={handleChange("message")}
          />
          <SubmitMessage
            submitStatus={submitStatus}
            setSubmitStatus={setSubmitStatus}
            className={classes.submitStatus}
            submitStatusMsg={submitStatusMsg}
          />
        </Grid>
      </Grid>
      <div className={classes.btnContainer}>
        <div className={classes.circularContainer}>
          <CircularProgress
            variant="static"
            size={36}
            value={100}
            className={classes.circularBg}
          />
          <CircularProgress
            variant="static"
            size={36}
            value={
              isValidData.message.isTooLong
                ? 100
                : formData.message.length / 5.12
            }
            className={`${classes.circularProgress} ${
              isValidData.message.isTooLong
                ? classes.circularErr
                : isValidData.message.isLong
                  ? classes.circularWarn
                  : ""
            }`}
          />
          {isValidData.message.isLong && (
            <Typography
              variant="button"
              component="p"
              className={`${classes.circularIndicator} ${
                isValidData.message.isTooLong
                  ? classes.circularErr
                  : classes.circularWarn
              }`}
            >
              {512 - formData.message.length}
            </Typography>
          )}
        </div>
        <div>
          <Button
            onClick={handleClear}
            disabled={submitStatus === 1}
            className={classes.btn}
          >
            {clear}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={
              !(
                isValidData.name.isValid &&
                isValidData.email.isValid &&
                isValidData.message.isValid
              ) || submitStatus === 1
            }
            className={classes.btn}
          >
            {submit}
          </Button>
        </div>
      </div>
    </form>
  )
}

const Contact = () => {
  const {
    main: {
      frontmatter: { title, subTitle, contactForm },
    },
    snsData: {
      frontmatter: { sns },
    },
  } = useData()
  const classes = useMemo(() => useStyles(sns), [sns])()

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
        <Grid item xs={12} md={8}>
          <ContactForm classes={classes} contactForm={contactForm} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Hidden smDown implementation="css">
            <List component="div">
              {sns.map(({ icon, id, url, user }) => (
                <ListItem
                  button
                  key={id}
                  component={Link}
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className={`${classes.snsIcon} ${icon}`}
                >
                  <ListItemIcon>
                    <Icon icon={icons[icon]} />
                  </ListItemIcon>
                  <ListItemText primary={user} />
                </ListItem>
              ))}
            </List>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact

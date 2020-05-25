import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => {
  const dark = theme.palette.type === "dark"
  return {
    container: {
      padding: theme.spacing(4, 2),
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    titleContainer: {
      position: "relative",
      marginBottom: theme.spacing(4),
      "&::after": {
        content: "''",
        borderStyle: "solid",
        borderWidth: "8px 8px 0 8px",
        borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
        position: "absolute",
        left: "calc(50% - 8px)",
        bottom: -8,
      },
    },
    title: {
      position: "relative",
      "&::before": {
        content: "'<'",
        color: theme.palette.action.hover,
        position: "absolute",
        right: "100%",
      },
      "&::after": {
        content: "' />'",
        whiteSpace: "pre",
        color: theme.palette.action.hover,
        position: "absolute",
        left: "100%",
      },
    },
    imgContainer: {
      width: "75%",
      maxWidth: 300,
      margin: "auto",
      padding: theme.spacing(2),
    },
    paperContainer: {
      padding: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    subTitleContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: theme.spacing(2),
    },
    subTitle: {
      marginBottom: theme.spacing(1),
    },
    activeIcon: {
      color: theme.palette.primary.main,
      transform: "scale(1.5)",
      transition: `${theme.transitions.duration.shortest}ms`,
      cursor: "pointer",
    },
    disabledIcon: {
      color: theme.palette.text.disabled,
      transition: `${theme.transitions.duration.shortest}ms`,
      cursor: "pointer",
    },
    subContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: 320,
      margin: "auto",
    },
    workIcon: {
      width: 64,
      height: 64,
      color: theme.palette.primary.main,
      background: dark ? theme.palette.primary[900] : theme.palette.primary[50],
      padding: theme.spacing(2),
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "25%",
      marginBottom: theme.spacing(1),
    },
    hobbyIcon: {
      width: 64,
      height: 64,
      color: theme.palette.background.paper,
      background: theme.palette.primary.main,
      padding: theme.spacing(2),
      border: `1px solid ${theme.palette.main}`,
      borderRadius: "25%",
      marginBottom: theme.spacing(1),
    },
    divider: {
      width: "25%",
      margin: theme.spacing(2, 0),
    },
  }
})

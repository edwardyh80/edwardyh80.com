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
    stepperRoot: {
      padding: 0,
      background: "transparent",
      marginBottom: theme.spacing(4),
    },
    stepLabelRoot: {
      textAlign: "left",
    },
    stepLabelIconContainer: {
      paddingRight: theme.spacing(2),
    },
    stepContentRoot: {
      paddingLeft: 28,
    },
    stepIconRootAnime: {
      "&:not(.MuiStepIcon-active)": {
        animation: "$pulse 2s infinite ease",
      },
    },
    stepIconRootAlt: {
      color: `${theme.palette.secondary.main} !important`,
    },
    skillContainer: {
      position: "relative",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 4,
      padding: theme.spacing(2.5, 2, 2, 2),
      margin: theme.spacing(4, 0),
    },
    skillCategory: {
      position: "absolute",
      top: -14,
      left: 16,
      background: dark ? "#2b2b2b" : "#f5f5f5",
      padding: theme.spacing(0, 1, 0, 3),
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 4,
      "&::before": {
        content: "'▹'",
        position: "absolute",
        left: 8,
        color: theme.palette.primary.main,
      },
    },
    skillIcon: {
      width: "100%",
      height: "100%",
      maxWidth: 80,
      maxHeight: 48,
      padding: theme.spacing(0.5),
      transition: `transform ${theme.transitions.duration.shortest}ms`,
      filter: dark ? "invert(1) grayscale(100%)" : "none",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%) !important",
      backfaceVisibility: "hidden",
      "&:hover": {
        transform: "translateY(-50%) scale(1.1) !important",
      },
    },
    boldFW: {
      fontWeight: 500,
    },
    stepperTitle: {
      marginBottom: theme.spacing(2),
    },
    stepperTitleIcon: {
      verticalAlign: "text-bottom",
      marginRight: theme.spacing(2),
    },
    divider: {
      width: "25%",
      margin: theme.spacing(2, 0),
    },
    chip: {
      marginTop: theme.spacing(0.5),
      marginRight: theme.spacing(1),
    },
    "@keyframes pulse": {
      "0%": { color: theme.palette.text.disabled },
      "50%": { color: theme.palette.action.hover },
      "100%": { color: theme.palette.text.disabled },
    },
  }
})

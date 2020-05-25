import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
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
  subTitle: {
    textAlign: "center",
    margin: `0 auto ${theme.spacing(2)}px`,
    maxWidth: 450,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    transition: ["transform", "box-shadow"]
      .map((attr) => `${attr} ${theme.transitions.duration.standard}ms`)
      .join(", "),
    "&:hover": {
      transform: `translateY(-${theme.spacing(0.5)}px)`,
      boxShadow: theme.shadows[4],
    },
  },
  cardTitle: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  launchIcon: {
    color: theme.palette.text.primary,
    verticalAlign: "text-bottom",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  cardContent: {
    paddingBottom: "0 !important",
  },
  chipContainer: {
    marginBottom: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  cardFooter: {
    padding: theme.spacing(0, 2, 2),
  },
  footnote: {
    color: "inherit",
    marginRight: theme.spacing(2),
  },
  footnoteLink: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  colorDot: {
    display: "inline-block",
    borderRadius: "50%",
    height: 12,
    width: 12,
    marginRight: theme.spacing(0.5),
    verticalAlign: "text-bottom",
  },
  octicon: {
    marginRight: theme.spacing(0.5),
    verticalAlign: "text-bottom",
  },
  breakWord: {
    wordWrap: "break-word",
  },
}))

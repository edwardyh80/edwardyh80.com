import { makeStyles } from "@material-ui/core/styles"

export default (sns) =>
  makeStyles((theme) => {
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
      subTitle: {
        textAlign: "center",
        margin: `0 auto ${theme.spacing(2)}px`,
        maxWidth: 450,
      },
      btnContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      btn: {
        margin: theme.spacing(1),
      },
      circularContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
      },
      circularProgress: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: theme.spacing(1),
      },
      circularErr: {
        color: theme.palette.error.main,
      },
      circularWarn: {
        color: theme.palette.warning.main,
      },
      circularBg: {
        margin: theme.spacing(1),
        color: theme.palette.divider,
      },
      circularIndicator: {
        position: "absolute",
        width: 36,
        height: 36,
        lineHeight: "36px",
        textAlign: "center",
        margin: theme.spacing(1),
        top: 0,
        left: 0.5,
        userSelect: "none",
      },
      submitStatus: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      snsIcon: {
        color: theme.palette.text.secondary,
        transition: `${theme.transitions.duration.shortest}ms`,
        "& .MuiListItemIcon-root": {
          color: "inherit",
        },
        "& svg": {
          height: "100%",
          width: "100%",
          maxWidth: 32,
          maxHeight: 32,
        },
        ...(dark
          ? {
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }
          : sns
            .map(({ color, icon }) => ({
              key: `&.${icon}:hover`,
              value: { color: color },
            }))
            .reduce((acc, { key, value }) => {
              acc[key] = value
              return acc
            }, {})),
      },
    }
  })

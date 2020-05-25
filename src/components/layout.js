import React, { useMemo } from "react"
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"
import { teal as primary, red as secondary } from "@material-ui/core/colors"
import "typeface-roboto"
import "./layout.css"

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render")
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  })
}

const makeTheme = (dark) =>
  responsiveFontSizes(
    createMuiTheme({
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
      palette: {
        primary: { ...primary, main: dark ? primary["A400"] : primary[500] },
        secondary: {
          ...secondary,
          main: dark ? secondary["A200"] : secondary[900],
        },
        type: dark ? "dark" : "light",
        background: {
          default: dark ? "#212121" : "#fafafa",
        },
      },
    })
  )

const Layout = ({ dark, children }) => {
  const theme = useMemo(() => makeTheme(dark), [dark])
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Layout

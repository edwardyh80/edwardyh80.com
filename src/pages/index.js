import React, { createRef, memo, useMemo, useRef } from "react"

import { Waypoint } from "react-waypoint"
import CssBaseline from "@material-ui/core/CssBaseline"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import ScrollTop from "../components/scrolltop"
import Drawer from "../components/drawer"
import sections from "../sections"

import useDarkCtrl from "../util/darkctrl"
import useDrawerCtrl from "../util/drawerctrl"
import useScrollCtrl from "../util/scrollctrl"
import useTabCtrl from "../util/tabctrl"

const Section = memo(
  ({ id, i, updateVis, forwardedRef, component, forwardedProps }) => (
    <Waypoint
      onEnter={() => updateVis(i, true)}
      onLeave={() => updateVis(i, false)}
      bottomOffset="25%"
    >
      <section id={id} ref={forwardedRef}>
        {React.cloneElement(component, forwardedProps[i])}
      </section>
    </Waypoint>
  )
)

const IndexPage = () => {
  const refs = useRef(sections.map(() => createRef()))
  const { dark, toggleDark } = useDarkCtrl()
  const { drawer, toggleDrawer } = useDrawerCtrl()
  const { trigger } = useScrollCtrl()
  const { tab, updateTab, updateVis } = useTabCtrl(refs)
  const forwardedProps = useMemo(() => [{ updateTab }, {}, {}], [])

  return (
    <Layout dark={dark}>
      <SEO />
      <CssBaseline />
      <Header
        tab={tab}
        updateTab={updateTab}
        sections={sections}
        trigger={trigger}
        toggleDrawer={toggleDrawer}
        dark={dark}
        toggleDark={toggleDark}
      />
      {sections.map(({ id, component }, i) => (
        <Section
          id={id}
          key={id}
          i={i}
          updateVis={updateVis}
          forwardedRef={refs.current[i]}
          component={component}
          forwardedProps={forwardedProps}
        />
      ))}
      <Footer />
      <Drawer
        tab={tab}
        updateTab={updateTab}
        sections={sections}
        drawer={drawer}
        toggleDrawer={toggleDrawer}
        dark={dark}
        toggleDark={toggleDark}
      />
      <ScrollTop updateTab={updateTab} trigger={trigger} />
    </Layout>
  )
}

export default IndexPage

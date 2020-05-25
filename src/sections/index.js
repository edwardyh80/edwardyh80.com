import React from "react"
import Hero from "./hero"
import About from "./about"
import Experience from "./experience"
import Projects from "./projects"
import Contact from "./contact"

export default [
  {
    id: "hero",
    title: "Hero",
    component: <Hero />,
  },
  {
    id: "about",
    title: "About",
    component: <About />,
  },
  {
    id: "experience",
    title: "Experience",
    component: <Experience />,
  },
  {
    id: "projects",
    title: "Projects",
    component: <Projects />,
  },
  {
    id: "contact",
    title: "Contact",
    component: <Contact />,
  },
]

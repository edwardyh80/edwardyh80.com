import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { main } = useStaticQuery(graphql`
    {
      main: markdownRemark(fileAbsolutePath: { regex: "/hero/index/" }) {
        rawMarkdownBody
        frontmatter {
          buttonText
          duty
          greeting
          name
        }
      }
    }
  `)
  return main
}

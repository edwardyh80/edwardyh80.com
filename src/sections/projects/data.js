import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { main } = useStaticQuery(graphql`
    {
      main: markdownRemark(fileAbsolutePath: { regex: "/projects/index/" }) {
        frontmatter {
          title
          subTitle
        }
      }
    }
  `)
  return { main }
}

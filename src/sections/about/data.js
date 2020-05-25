import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { main, work, hobby } = useStaticQuery(graphql`
    {
      main: markdownRemark(fileAbsolutePath: { regex: "/about/index/" }) {
        rawMarkdownBody
        frontmatter {
          title
          subTitle
        }
      }
      work: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/work/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            id
            title
            icon
          }
          rawMarkdownBody
        }
      }
      hobby: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/hobby/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            id
            title
            icon
          }
          rawMarkdownBody
        }
      }
    }
  `)
  return { main, work, hobby }
}

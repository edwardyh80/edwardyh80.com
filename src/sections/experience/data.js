import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { main, jobs, education, skills } = useStaticQuery(graphql`
    {
      main: markdownRemark(fileAbsolutePath: { regex: "/experience/index/" }) {
        frontmatter {
          title
          jobsTitle
          educationTitle
          skillTitle
        }
      }
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/jobs/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            chip {
              id
              title
            }
            company
            dept
            id
            location
            period
            title
            url
          }
          rawMarkdownBody
        }
      }
      education: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/education/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            id
            location
            period
            school
            title
            url
          }
          rawMarkdownBody
        }
      }
      skills: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/skills/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            id
            products {
              icon
              id
              title
              url
            }
            title
          }
        }
      }
    }
  `)
  return { main, jobs, education, skills }
}

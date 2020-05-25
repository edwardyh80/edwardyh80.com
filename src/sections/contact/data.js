import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { main, snsData } = useStaticQuery(graphql`
    {
      main: markdownRemark(fileAbsolutePath: { regex: "/contact/index/" }) {
        frontmatter {
          title
          subTitle
          contactForm {
            label {
              name
              email
              message
              clear
              submit
            }
            submitStatusMsg {
              msg
              type
            }
          }
        }
      }
      snsData: markdownRemark(fileAbsolutePath: { regex: "/sns/" }) {
        frontmatter {
          sns {
            color
            icon
            id
            url
            user
          }
        }
      }
    }
  `)
  return { main, snsData }
}

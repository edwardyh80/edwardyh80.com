module.exports = {
  siteMetadata: {
    title: "Edward Chow | NoSQL Database Engineer",
    description:
      "Meet Edward Chow - NoSQL database engineer based in Tokyo, specializing in design and administration of NoSQL databases.",
    author: "@edwardyh80",
    siteUrl: "https://www.edwardyh80.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Edward Chow",
        short_name: "Edward",
        start_url: "/",
        background_color: "#009688",
        theme_color: "#009688",
        display: "minimal-ui",
        icon: "src/images/pp.png",
      },
    },
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-162033755-1",
      },
    },
    "gatsby-plugin-offline",
  ],
}

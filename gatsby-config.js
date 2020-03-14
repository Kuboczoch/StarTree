module.exports = {
  siteMetadata: {
    title: `StarTree Website`,
    description: `StarTree is a website that will render vis network from firestore!`,
    author: `@kuboczoch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `startree-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#323232`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`
  ],
}

module.exports = {
  siteMetadata: {
    title: 'StarTree Website',
    description: 'StarTree is a website that will render vis network from firestore!',
    author: '@kuboczoch'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',

        // WebApp Manifest Configuration
        appDescription: null,
        developerName: 'Kuboczoch',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'startree-website',
        short_name: 'startree',
        start_url: '/',
        background_color: '#323232',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require('./.env.firebase.json'),
        types: [
          {
            type: 'User',
            collection: 'users',
            map: doc => ({
              color: doc.color,
              cross: doc.cross,
              nickname: doc.nickname,
              hearth: doc.hearth,
              relations: doc.relations
            })
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}

/* eslint-disable @typescript-eslint/camelcase */
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Infplans',
    description:
      'This website sells Insurance for Visitors for Parents. Relatives visiting USA. Full Pre-Existing Insurance for Visitors for Parents visiting USA. We cover all Pre-Existing Conditions. Insurance for Non-US Citizens Living in the USA. H1-B, K1, J1 Visa Insurance',
    siteUrl: 'https://www.infplans.com/',
    author: '',
    twitter: '',
    adsense: '',
    backendUrl: 'https://adrienb3.sg-host.com',
    phoneNumber: '800-490-9678',
    emailAddress: 'support@infplans.com',
  },
  flags: {
    DEV_SSR: false,
    FAST_REFRESH: true,
    FAST_DEV: true,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PFKVWBN',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'gatsby-route-change',
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/components/`,
        name: 'components',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/types/`,
        name: 'types',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, 'src/images'),
        components: path.join(__dirname, 'src/components'),
        scss: path.join(__dirname, 'src/scss'),
        templates: path.join(__dirname, 'src/templates'),
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Infplans',
        short_name: 'Infplans',
        description:
          'This website sells Insurance for Visitors for Parents. Relatives visiting USA. Full Pre-Existing Insurance for Visitors for Parents visiting USA. We cover all Pre-Existing Conditions. Insurance for Non-US Citizens Living in the USA. H1-B, K1, J1 Visa Insurance',
        homepage_url: '',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    /*{
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },*/
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    /*{
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },*/
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
  ],
}

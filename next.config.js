const path = require('path');

module.exports = {

  reactStrictMode: false,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  compiler: {
    relay: {
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
      styledComponents: true,
    },
  },

  i18n: {
    defaultLocale: 'am',
    locales: ['am', 'ru', 'en'],
  },
}

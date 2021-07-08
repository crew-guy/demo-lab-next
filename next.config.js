require('dotenv').config()

// next.config.js
module.exports = {
    images: {
      domains: ['cdn.farmako.in','randomuser.me'],
      disableStaticImages: true
  },
  env:{
    INSTI_TYPE : process.env.INSTI_TYPE
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
}
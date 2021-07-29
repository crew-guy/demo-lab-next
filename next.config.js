require('dotenv').config()

// next.config.js
module.exports = {
  env:{
    INSTI_TYPE : process.env.INSTI_TYPE
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
      ],
    })
    return config;
  },
  images: {
    domains: ['cdn.farmako.in'],
    disableStaticImages: true
  },
}
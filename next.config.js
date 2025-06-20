// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(hbs|handlebars)$/,
      loader: "handlebars-loader",
      options: {
        // Any Handlebars specific options go here
      },
    });

    // Rule for HTML files
    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader",
    });

    return config;
  },
};

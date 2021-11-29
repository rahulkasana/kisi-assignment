const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    presets: [],
    plugins:
      process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : [],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#6787f0" },
            javascriptEnabled: true,
          },
        },
      },
      // module: {
      //   rules: [
      //     {
      //       test: /\.css$/i,
      //       loader: "css-loader",
      //       options: {
      //         modules: {
      //           localIdentName: "[name]-[local]--[hash:base64:5]",
      //         },
      //       },
      //     },
      //   ],
      // },
    },
  ],
};

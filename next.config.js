module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index/index",
      },
    ];
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new webpack.DefinePlugin({
        GLOBALS: JSON.stringify({
          TITLE: "ColorColl",
        }),
      })
    );

    return config;
  },
};

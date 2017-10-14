export default config => ({
  ...config,
  protocol: 'http',
  host: "localhost",
  ports: {
    client: process.env.PORT || 8888,
    server: 8880
  },
  publicPath: process.env.ASSET_URL || "/assets/"
});

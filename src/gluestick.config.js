export default config => ({
  ...config,
  protocol: 'http',
  host: process.env.HOSTNAME || "localhost",
  ports: {
    client: 8888,
    server: process.env.PORT || 8880
  },
  publicPath: process.env.ASSET_URL || "/assets/"
});

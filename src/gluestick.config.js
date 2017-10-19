export default config => ({
  ...config,
  protocol: 'http',
  host: "localhost",
  ports: {
    client: 8888,
    server: 8880
  },
  publicPath: process.env.ASSET_URL || "/assets/"
});

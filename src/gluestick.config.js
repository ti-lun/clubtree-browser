export default config => ({
  ...config,
  protocol: 'https',
  host: "0.0.0.0",
  ports: {
    client: 8888,
    server: process.env.PORT
  },
  publicPath: process.env.ASSET_URL || "/assets/"
});

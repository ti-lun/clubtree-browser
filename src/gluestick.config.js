export default config => ({
  ...config,
  host: "0.0.0.0",
  port: process.env.PORT,
  publicPath: process.env.ASSET_URL || "/assets/"
});

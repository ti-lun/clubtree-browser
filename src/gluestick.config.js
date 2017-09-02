export default config => ({
  ...config,
  host: 'localhost',
  publicPath: process.env.ASSET_URL || "/assets/"
});

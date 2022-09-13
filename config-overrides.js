const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push(
        {
          loader: path.resolve('./loaders/scss-module-loader/index.js')
        },{
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, 'src/assets/styles/index.scss'),
          ]
        }
      })
    }
  }),
);

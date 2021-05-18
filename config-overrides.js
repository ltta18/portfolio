const path = require('path');
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function (config, env) {
  config = rewireReactHotLoader(config, env);
  return Object.assign(
    config,
    override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // style: 'css',
        style: true,
      }),
      addLessLoader({
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#000',
            '@heading-color': '#000',
            '@text-color': '#222',
            '@font-size-base': '13px',
          },
        },
      }),
      // add an alias for "our" imports
      addWebpackAlias({
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@css': path.resolve(__dirname, 'src/css'),
      }),
    )(config, env),
  );
};
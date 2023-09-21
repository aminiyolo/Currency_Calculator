const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = './src/index.tsx';
      return webpackConfig;
    },
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/api': path.resolve(__dirname, 'src/api'),
    },
  },
  devServer: {
    client: {
      overlay: { errors: true, warnings: false, runtimeErrors: false },
    },
  },
};

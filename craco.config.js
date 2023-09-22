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
      '@/query': path.resolve(__dirname, 'src/query'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  devServer: {
    client: {
      overlay: { errors: true, warnings: false, runtimeErrors: false },
    },
  },
};

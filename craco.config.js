const path = require('path');

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ],
    plugins: ['@emotion/babel-plugin'],
  },
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
      '@/hook': path.resolve(__dirname, 'src/hook'),
    },
  },
  devServer: {
    client: {
      overlay: { errors: true, warnings: false, runtimeErrors: false },
    },
  },
};

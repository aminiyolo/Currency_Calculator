const path = require('path');

module.exports = {
  babel: {
    presets: [
      // emotion/react를 사용함에 있어 각각의 파일에 jsx pragma를 사용하지 않기 위해 하는 설정
      '@emotion/babel-preset-css-prop',
      // runtime을 automatic으로 바꾸어 import 'react'를 하지 않기 위한 설정
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ],
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
    },
  },
  devServer: {
    client: {
      overlay: { errors: true, warnings: false, runtimeErrors: false },
    },
  },
};

module.exports = {
  presets: [
    // [
    //   '@babel/preset-env',
    //   {
    //     useBuiltIns: 'usage',
    //     corejs: {
    //       version: 3.6,
    //       proposals: true,
    //     },
    //   },
    // ],
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};

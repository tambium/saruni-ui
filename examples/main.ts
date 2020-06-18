const path = require(`path`);

module.exports = {
  stories: ['./src/**/*.stories.*'],
  logLevel: 'debug',
  addons: ['@storybook/addon-essentials', '@storybook/addon-controls'],
  typescript: {
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
};

const path = require(`path`);

/*
 * Q: Why is @babel/register installed?
 * A: Before install, received the following warning:
 * main.ts is detected but impossible to import loader for .ts
 * No stories were visible and storybook loader was spinning permanently.
 * https://github.com/storybookjs/storybook/pull/3785#issuecomment-506600235
 */

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

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@saruni-ui/button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button onClick={action('clicked')}>Hello, world!</Button>
);

const baseStyles = {
  border: 'none',
  padding: '0px 8px',
  borderRadius: '8px',
  fontWeight: 'bold',
};

const customTheme = {
  default: {
    background: {
      default: 'red',
      hovered: 'orange',
      active: 'green',
    },
  },
};

const extract = (newTheme, { mode, appearance, state }) => {
  if (!newTheme[appearance]) {
    return undefined;
  }
  const root = newTheme[appearance];
  return Object.keys(root).reduce((acc, val) => {
    let node = root;
    [val, state, mode].forEach((item) => {
      if (!node[item]) {
        return undefined;
      }
      if (typeof node[item] !== 'object') {
        acc[val] = node[item];
        return undefined;
      }
      node = node[item];
      return undefined;
    });
    return acc;
  }, {});
};

export const withTheme = () => (
  <Button
    theme={(currentTheme, themeProps) => {
      const { buttonStyles, ...rest } = currentTheme(themeProps);
      return {
        buttonStyles: {
          ...buttonStyles,
          ...baseStyles,
          ...extract(customTheme, themeProps),
        },
        ...rest,
      };
    }}
  >
    Hello, theme!
  </Button>
);

import React from 'react';
import { addDecorator } from '@storybook/react';
import {
  GlobalThemeProvider,
  Reset,
  ResetThemeTokens,
  ResetThemeProps,
} from '@saruni-ui/theme';

const customTheme = (baseTokens: ResetThemeTokens, props?: ResetThemeProps) => {
  return {
    ...baseTokens,
  };
};

addDecorator((storyFn) => (
  <GlobalThemeProvider>
    <Reset theme={customTheme}>{storyFn()}</Reset>
  </GlobalThemeProvider>
));

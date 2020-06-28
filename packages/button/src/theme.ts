import React from 'react';
import { colors, createTheme, ThemeModes } from '@saruni-ui/theme';

export interface ButtonThemeProps {
  mode: ThemeModes;
}

export interface ButtonThemeTokens {
  button: React.CSSProperties;
  spinner: React.CSSProperties;
}

export const Theme = createTheme<ButtonThemeTokens, ButtonThemeProps>(
  ({ mode }) => {
    return {
      button: {
        backgroundColor: 'red',
      },
      spinner: {
        backgroundColor: 'pink',
      },
    };
  },
);

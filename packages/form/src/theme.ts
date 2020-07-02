import React from 'react';
import { colors, createTheme, font, ThemeModes } from '@saruni-ui/theme';

export interface FormThemeProps {
  mode: ThemeModes;
}

export interface FormThemeTokens {
  invalidMessage: React.CSSProperties;
  label: React.CSSProperties;
}

export const Theme = createTheme<FormThemeTokens, FormThemeProps>(
  ({ mode }) => {
    return {
      invalidMessage: {
        alignItems: 'center',
        color: colors.textCritical[mode],
        display: 'flex',
        fontSize: font.size.small,
        fontWeight: 500,
        marginTop: 4,
      },
      label: {
        display: 'inline-block',
        fontWeight: 500,
        marginBottom: 4,
      },
    };
  },
);

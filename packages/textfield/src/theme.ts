import React from 'react';
import { createTheme, ThemeModes } from '@saruni-ui/theme';

import * as componentTokens from './component-tokens';

const getContainerBoxShadow = ({
  hasBase = true,
  isFocused,
}: {
  hasBase?: boolean;
  isFocused: boolean;
}) => {
  if (isFocused)
    return `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.36) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`;
  if (hasBase)
    return `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`;
  return undefined;
};

export interface ThemeProps {
  isFocused: boolean;
  mode: ThemeModes;
}

export interface ThemeTokens {
  container: React.CSSProperties;
}

const boxShadow = componentTokens.defaultBoxShadowColor;

export const Theme = createTheme<ThemeTokens, ThemeProps>(({ isFocused }) => {
  return {
    container: {
      backgroundColor: '#fff',
      borderRadius: 4,
      boxShadow: getContainerBoxShadow({ isFocused }),
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease',
    },
  };
});

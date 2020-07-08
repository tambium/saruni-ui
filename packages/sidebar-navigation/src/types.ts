import React from 'react';
import { CSSObject } from '@emotion/core';
import { ThemeProp, ThemeModes } from '@saruni-ui/theme';

export interface SidebarNavigationThemeProps {
  mode: ThemeModes;
}

export interface SidebarNavigationThemeTokens {
  sidebarNavigation: CSSObject;
}

export interface SidebarNavigationProps {
  children: React.ReactNode;
  /** Theme component should use. */
  theme?: ThemeProp<SidebarNavigationThemeTokens, SidebarNavigationThemeProps>;
}

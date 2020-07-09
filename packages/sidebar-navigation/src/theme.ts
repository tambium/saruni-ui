import { createTheme, colors } from '@saruni-ui/theme';

import {
  SidebarNavigationThemeTokens,
  SidebarNavigationThemeProps,
} from './types';

export const Theme = createTheme<
  SidebarNavigationThemeTokens,
  SidebarNavigationThemeProps
>(({ mode }) => {
  return {
    sidebarNavigation: {
      backgroundColor: colors.surface[mode],
      borderRight: `1px solid ${colors.borderSubdued[mode]}`,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minWidth: 240,
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
    },
  };
});

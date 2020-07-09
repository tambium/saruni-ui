import React from 'react';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { Theme } from '../../theme';
import { SidebarNavigationProps } from '../../types';

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  children,
  theme,
}) => {
  return (
    <Theme.Provider theme={theme}>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer mode={mode}>
            {(tokens) => <div css={tokens.sidebarNavigation}>{children}</div>}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

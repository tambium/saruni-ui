import React from 'react';
import { CSSObject } from '@emotion/core';
import { GlobalThemeConsumer, ThemeModes, font } from '@saruni-ui/theme';
import {
  CircularCheck,
  Error as ErrorIcon,
  Info,
  Warning,
} from '@saruni-ui/icon';

import { Theme } from '../theme';
import { BannerProps } from '../types';

export const Banner: React.FC<BannerProps> = ({
  appearance = 'default',
  children,
  title,
}) => {
  const getIcon = () => {
    switch (appearance) {
      case 'critical':
        return ErrorIcon;
      case 'success':
        return CircularCheck;
      case 'warning':
        return Warning;
      default:
        return Info;
    }
  };

  const Icon: React.ReactType = getIcon();

  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer appearance={appearance} mode={mode}>
            {(tokens) => (
              <div css={tokens.container as CSSObject}>
                <div css={tokens.iconContainer as CSSObject}>
                  <Icon />
                </div>
                <div>
                  {title && (
                    <div
                      css={{ fontWeight: 500, fontSize: font.size.subtitle }}
                    >
                      {title}
                    </div>
                  )}
                  {children}
                </div>
              </div>
            )}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

import React from 'react';
import { CSSObject } from '@emotion/core';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { mapAttributesToState } from './utils';
import { Theme } from '../theme';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({
  appearance = 'primary',
  children,
  href,
  isDisabled,
}) => {
  const [state, setState] = React.useState({
    isActive: false,
    isFocused: false,
    isHovered: false,
  });

  const getElement = () => {
    if (href) return isDisabled ? 'span' : 'a';
    return 'button';
  };

  const Element: React.ReactType = getElement();

  const attributes = { ...state, isDisabled };

  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer
            appearance={appearance}
            mode={mode}
            state={mapAttributesToState(attributes)}
          >
            {(tokens) => (
              <Element css={tokens.button as CSSObject}>
                {children && <React.Fragment>{children}</React.Fragment>}
              </Element>
            )}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

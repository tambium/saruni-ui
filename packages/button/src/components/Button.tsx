import React from 'react';
import { CSSObject } from '@emotion/core';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { mapAttributesToState } from './utils';
import { Theme } from '../theme';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = (props) => {
  const { appearance = 'primary', children, href, isDisabled } = props;

  const [state, setState] = React.useState({
    isActive: false,
    isFocused: false,
    isHovered: false,
  });

  const getElement = () => {
    if (href) return isDisabled ? 'span' : 'a';
    return 'button';
  };

  const onBlur: React.FocusEventHandler<HTMLButtonElement> = (e) => {
    setState((prevState) => ({ ...prevState, isFocused: false }));
    if (props.onFocus) props.onFocus(e);
  };

  const onFocus: React.FocusEventHandler<HTMLButtonElement> = (e) => {
    setState((prevState) => ({ ...prevState, isFocused: true }));
    if (props.onFocus) props.onFocus(e);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setState((prevState) => ({ ...prevState, isHovered: true }));
    if (props.onMouseEnter) props.onMouseEnter(e);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setState((prevState) => ({ ...prevState, isHovered: false }));
    if (props.onMouseLeave) props.onMouseLeave(e);
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
              <Element
                css={tokens.button as CSSObject}
                onBlur={onBlur}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {children && <React.Fragment>{children}</React.Fragment>}
              </Element>
            )}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

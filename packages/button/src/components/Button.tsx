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

  const onBlur: React.FocusEventHandler<HTMLElement> = (e) => {
    setState((prevState) => ({ ...prevState, isFocused: false }));
    if (props.onBlur) props.onBlur(e);
  };

  const onFocus: React.FocusEventHandler<HTMLElement> = (e) => {
    setState((prevState) => ({ ...prevState, isFocused: true }));
    if (props.onFocus) props.onFocus(e);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setState((prevState) => ({ ...prevState, isHovered: true }));
    if (props.onMouseEnter) props.onMouseEnter(e);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setState((prevState) => ({
      ...prevState,
      isActive: false,
      isHovered: false,
    }));
    if (props.onMouseLeave) props.onMouseLeave(e);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isActive: true }));
    if (props.onMouseDown) props.onMouseDown(e);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    setState((prevState) => ({ ...prevState, isActive: false }));
    if (props.onMouseUp) props.onMouseUp(e);
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
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
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

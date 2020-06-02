/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import GlobalTheme from '@saruni-ui/theme';
import { Theme } from '../theme';
import { ButtonProps, ThemeMode, ThemeProps, ThemeTokens } from './../types';
import { mapAttributesToState } from './utils';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    component: CustomComponent,
    href,
    theme = (current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) =>
      current(props),
    isSelected,
    isDisabled,
  } = props;

  const [isActive, setActive] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);
  const [isHovered, setHovered] = React.useState(false);

  const attributes = { isActive, isFocused, isHovered, isSelected, isDisabled };

  const onMouseEnter = () => setHovered(true);

  const onMouseLeave = () => {
    setHovered(false);
    setActive(false);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const onMouseUp = () => setActive(false);

  const onFocus: React.FocusEventHandler<HTMLButtonElement> = () =>
    setFocused(true);

  const onBlur: React.FocusEventHandler<HTMLButtonElement> = () =>
    setFocused(false);

  const getElement = () => {
    if (href) return isDisabled ? 'span' : 'a';
    return 'button';
  };

  const StyledButton: React.ReactType = CustomComponent || getElement();

  const specifiers = (styles: {}) => {
    if (StyledButton === 'a') {
      return {
        'a&': styles,
      };
    } else if (StyledButton === CustomComponent) {
      return {
        '&, a&, &:hover, &:active, &:focus': styles,
      };
    }
    return styles;
  };

  return (
    <Theme.Provider value={theme}>
      <GlobalTheme.Consumer>
        {({ mode }: { mode: ThemeMode }) => (
          <Theme.Consumer
            mode={mode}
            state={mapAttributesToState(attributes)}
            {...props}
          >
            {({ buttonStyles }) => (
              <StyledButton
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onFocus={onFocus}
                onBlur={onBlur}
                css={specifiers(buttonStyles)}
              >
                {children && <React.Fragment>{children}</React.Fragment>}
              </StyledButton>
            )}
          </Theme.Consumer>
        )}
      </GlobalTheme.Consumer>
    </Theme.Provider>
  );
};

Button.defaultProps = {
  appearance: 'default',
};

import React from 'react';
import { CSSObject } from '@emotion/core';
import { Check } from '@saruni-ui/icon';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { Theme } from '../theme';
import { CheckboxProps } from '../types';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    isChecked: propsIsChecked,
    isDefaultChecked,
    isDisabled,
    label,
    name,
    value,
  } = props;
  const [state, setState] = React.useState({
    isActive: false,
    isChecked: propsIsChecked !== undefined ? propsIsChecked : isDefaultChecked,
    isFocused: false,
    isHovered: false,
    isMouseDown: false,
  });

  const onBlur = () => {
    /** onBlur is called after onMouseDown if checkbox was focused, but in this case we need to check if mouse was down. */
    setState((prevState) => ({
      ...prevState,
      isActive: state.isMouseDown && state.isActive,
      isFocused: false,
    }));
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (isDisabled) return null;
    event.persist();
    if (event.target.checked !== undefined) {
      setState((prevState) => ({
        ...prevState,
        isChecked: event.target.checked,
      }));
    }
    if (props.onChange) props.onChange(event);
  };

  const onFocus = () => {
    setState((prevState) => ({ ...prevState, isFocused: true }));
  };

  const onMouseUp = () => {
    setState((prevState) => ({
      ...prevState,
      isActive: false,
      isMouseDown: false,
    }));
  };

  const onMouseDown = () => {
    setState((prevState) => ({
      ...prevState,
      isActive: true,
      isMouseDown: true,
    }));
  };

  const isChecked =
    propsIsChecked === undefined ? state.isChecked : propsIsChecked;

  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer
            isActive={state.isActive}
            isFocused={state.isFocused}
            isChecked={state.isChecked}
            mode={mode}
          >
            {(tokens) => (
              <label
                css={{ alignItems: 'center', display: 'flex' }}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
              >
                <div
                  css={{
                    display: 'inline-flex',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <input
                    checked={isChecked}
                    css={tokens.hiddenCheckbox as CSSObject}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                    name={name}
                    type="checkbox"
                    value={value}
                  />
                  <span css={tokens.customCheckbox as CSSObject}>
                    <Check size="small" />
                  </span>
                </div>
                <span css={{ paddingLeft: 8 }}>{label}</span>
              </label>
            )}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

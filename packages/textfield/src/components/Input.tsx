import React from 'react';
import { TextfieldThemeTokens } from '../theme';
import { CSSObject } from '@emotion/core';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  innerRef: (ref: HTMLInputElement | null) => void;

  isDisabled: boolean;
  isReadOnly: boolean;
  isRequired: boolean;

  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onMouseDown: React.MouseEventHandler<HTMLElement>;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;

  theme: TextfieldThemeTokens;
}

export const Input: React.FC<Props> = ({
  innerRef,
  isDisabled,
  isReadOnly,
  isRequired,
  onBlur,
  onFocus,
  theme,
  ...externalInputProps
}) => {
  const localInputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    onFocus,
    onBlur,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
  };

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...externalInputProps,
    ...localInputProps,
  };

  return (
    <div css={theme.container as CSSObject}>
      <input css={theme.input as CSSObject} ref={innerRef} {...inputProps} />
    </div>
  );
};

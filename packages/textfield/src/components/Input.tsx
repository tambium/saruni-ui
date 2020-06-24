import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isDisabled: boolean;
  isReadOnly: boolean;
  isRequired: boolean;

  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onMouseDown: React.MouseEventHandler<HTMLElement>;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;

  innerRef: (ref: HTMLInputElement | null) => void;
}

export const Input: React.FC<Props> = ({
  innerRef,
  isDisabled,
  isReadOnly,
  isRequired,
  onBlur,
  onFocus,
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
    <input
      css={{
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderWidth: 0,
        flex: '1 1 auto',
        padding: '8px 4px',
        outline: 0,
        width: '100%',
      }}
      ref={innerRef}
      {...inputProps}
    />
  );
};

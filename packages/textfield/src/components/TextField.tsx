import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldContext } from '@saruni-ui/form';
import { useGlobalTheme } from '@saruni-ui/theme-next';

import { Theme } from '../theme';
import { Input } from './Input';
import { InternalProps, PublicProps } from '../types';

const getBoxShadow = ({ hasBase = true, isFocused }) => {
  if (isFocused)
    return `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.36) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`;
  if (hasBase)
    return `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`;
  return undefined;
};

const Pressable = ({ children, isFocused }) => {
  return (
    <div
      css={{
        backgroundColor: '#fff',
        borderRadius: 4,
        boxShadow: getBoxShadow({ isFocused }),
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      {children}
    </div>
  );
};

const TextFieldWithForwardRef: React.FC<InternalProps> = (props) => {
  const [state, setState] = React.useState({
    isFocused: false,
    isHovered: false,
  });
  const localRef = React.useRef();

  const { forwardedRef, isReadOnly, width } = props;
  const {
    isDisabled,
    isInvalid,
    isRequired,
    // width,
    ...otherProps
  } = React.useContext(FieldContext);
  const { register } = useFormContext() || {};

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, isFocused: false }));
    if (props.onBlur) props.onBlur(event);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, isFocused: true }));
    if (props.onFocus) props.onFocus(event);
  };

  const handleOnMouseEnter = () => {
    if (!props.isDisabled) {
      setState((prevState) => ({ ...prevState, isHovered: true }));
    }
  };

  const handleOnMouseLeave = () => {
    if (!props.isDisabled) {
      setState((prevState) => ({ ...prevState, isHovered: false }));
    }
  };

  const inputRef = React.useCallback(
    (ref) => {
      localRef.current = ref;

      if (register) {
        register({ required: isRequired })(ref);
      }

      if (forwardedRef && typeof forwardedRef === 'function') {
        forwardedRef(ref);
      }

      if (forwardedRef && typeof forwardedRef === 'object') {
        forwardedRef.current = ref;
      }
    },
    [register, props.forwardedRef],
  );

  const handleOnMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (inputRef && !props.isDisabled) {
      // handle focus...
    }
    if (props.onMouseDown) props.onMouseDown(event);
  };

  const { isFocused, isHovered } = state;

  const { mode } = useGlobalTheme();
  const { container } = Theme.useTheme(mode);

  return (
    <Pressable isFocused={isFocused}>
      <Input
        {...otherProps}
        isDisabled={isDisabled!}
        isReadOnly={isReadOnly!}
        isRequired={isRequired!}
        innerRef={inputRef}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onMouseDown={handleOnMouseDown}
      />
    </Pressable>
  );
};

export const TextField = React.forwardRef<HTMLInputElement, PublicProps>(
  function WrappedTextField(props, ref) {
    const { mode } = useGlobalTheme();

    return (
      <Theme.ThemeProvider mode={mode}>
        <TextFieldWithForwardRef {...props} forwardedRef={ref} />
      </Theme.ThemeProvider>
    );
  },
);

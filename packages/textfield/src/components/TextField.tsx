import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldContext } from '@saruni-ui/form';
import { useGlobalTheme } from '@saruni-ui/theme-next';

// import { Theme } from '../theme';
import { Input } from './Input';
import { InternalProps, PublicProps } from '../types';

// export const ThemedTextField: React.FC<InternalProps> = (props) => {
export const TextField: React.FC<InternalProps> = (props) => {
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
        // TODO: fix
        // forwardedRef.current = ref;
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

  // const { mode } = useGlobalTheme({ mode: 'light' });
  // const tokens = Theme.useTheme({ isFocused, mode });

  return (
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
      // theme={tokens}
      theme={{ container: {} }}
    />
  );
};

// export const TextField = React.forwardRef<HTMLInputElement, PublicProps>(
//   function WrappedTextField(props, ref) {
//     return (
//       // <Theme.Provider>
//       <ThemedTextField {...props} forwardedRef={ref} />
//       // </Theme.Provider>
//     );
//   },
// );

// export const TextField = () => <button>Hello, world</button>;

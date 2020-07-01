import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldContext } from '@saruni-ui/form';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { Theme } from '../theme';
import { Input } from './Input';
import { InternalProps, PublicProps } from '../types';

export const TextFieldWithForwardRef: React.FC<InternalProps> = (props) => {
  const [state, setState] = React.useState({
    isFocused: false,
    isHovered: false,
  });
  /** Support internal use of ref for focus, etc. */
  const localRef = React.useRef<HTMLInputElement>();
  const { register } = useFormContext() || {};

  const localProps = { ...props };
  const propsFromFieldContext = React.useContext(FieldContext);

  const textFieldProps = {
    ...propsFromFieldContext,
    ...localProps,
  };

  const { forwardedRef, isInvalid, onBlur, onFocus } = textFieldProps;

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, isFocused: false }));
    if (onBlur) onBlur(event);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, isFocused: true }));
    if (onFocus) onFocus(event);
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

  /** Manage the saving of ref. */
  const inputRef = React.useCallback(
    (ref) => {
      /**
       * Ref should be in mutable state, so we save it
       * This is so we can pass to register, or give it back to developer for use.
       */
      localRef.current = ref;

      /** If within <Form />, we "register" ref for react-hook-form to use. */
      if (register) register({ required: isRequired })(ref);

      /**
       * If developer is using ref, forwardedRef will be defined.
       * React API supports ref of function and object type, so we support both.
       */
      if (forwardedRef && typeof forwardedRef === 'function') forwardedRef(ref);

      if (forwardedRef && typeof forwardedRef === 'object') {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065
        // @ts-ignore
        forwardedRef.current = ref;
      }
    },
    [register, props.forwardedRef],
  );

  const handleOnMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (localRef && localRef.current && !props.isDisabled) {
      localRef.current.focus();
    }
    if (props.onMouseDown) props.onMouseDown(event);
  };

  const { isFocused, isHovered } = state;
  const {
    isDisabled,
    isReadOnly,
    isRequired,
    forwardedRef: fr,
    ...inputProps
  } = textFieldProps;

  return (
    <Theme.Provider theme={props.theme}>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer
            isFocused={isFocused}
            isInvalid={isInvalid}
            mode={mode}
          >
            {(tokens) => (
              <Input
                {...inputProps}
                isDisabled={isDisabled!}
                isReadOnly={isReadOnly!}
                isRequired={isRequired!}
                innerRef={inputRef}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onMouseDown={handleOnMouseDown}
                theme={tokens}
              />
            )}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

export const TextField = React.forwardRef<HTMLInputElement, PublicProps>(
  (props, ref) => <TextFieldWithForwardRef {...props} forwardedRef={ref} />,
);

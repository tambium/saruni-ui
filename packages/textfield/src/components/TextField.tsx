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

  return (
    <Theme.Provider theme={props.theme}>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer isFocused={isFocused} mode={mode}>
            {(tokens) => (
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

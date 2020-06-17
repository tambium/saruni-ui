import React from 'react';
import { useFormContext } from 'react-hook-form';

import { FieldContext } from '@saruni-ui/form';

export const TextField = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, forwardedRef) => {
  const ownRef = React.useRef();

  const { validation, ...rest } = React.useContext(FieldContext);

  const { register } = useFormContext() || {};

  const { ...textFieldProps } = props;

  const assignRef = React.useCallback(
    (ref) => {
      ownRef.current = ref;

      if (register) {
        register(validation || { required: false })(ref);
      }

      if (forwardedRef && typeof forwardedRef === 'function') {
        forwardedRef(ref);
      }

      if (forwardedRef && typeof forwardedRef === 'object') {
        forwardedRef.current = ref;
      }
    },
    [register, forwardedRef],
  );

  return (
    <div>
      <input {...rest} {...textFieldProps} ref={assignRef} />
    </div>
  );
});

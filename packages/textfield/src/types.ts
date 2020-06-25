import React from 'react';

export interface PublicProps extends React.AllHTMLAttributes<HTMLInputElement> {
  /** Sets the field uneditable. */
  isDisabled?: boolean;
  /** Sets styling to indicate that the input is invalid */
  isInvalid?: boolean;
  /** If true, prevents the value of the input from being edited. */
  isReadOnly?: boolean;
  /** Set required for form that the field is part of. */
  isRequired?: boolean;
  /** Mousedown handler that will fire on the container element */
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  /** Sets maximum width of input */
  width?: string | number;
  /** Name of the input form control */
  name?: string;
}

export interface InternalProps extends PublicProps {
  forwardedRef?: React.Ref<HTMLInputElement>;
}

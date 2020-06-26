import React from 'react';
import { ThemeProp } from '@saruni-ui/theme-next';
import { ThemeProps, ThemeTokens } from './theme';

export interface PublicProps extends React.AllHTMLAttributes<HTMLInputElement> {
  /** Sets the field uneditable. */
  isDisabled?: boolean;
  /** Sets styling to indicate that the input is invalid */
  isInvalid?: boolean;
  /** If true, prevents the value of the input from being edited. */
  isReadOnly?: boolean;
  /** Set required for form that the field is part of. */
  isRequired?: boolean;
  /** Name of the input form control */
  name?: string;
  /** Mousedown handler that will fire on the container element */
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  /** Theme component should use. */
  theme?: ThemeProp<ThemeTokens, ThemeProps>;
  /** Sets maximum width of input */
  width?: string | number;
}

export interface InternalProps extends PublicProps {
  forwardedRef?: React.Ref<HTMLInputElement>;
}

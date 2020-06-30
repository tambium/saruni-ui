import React from 'react';
import { ThemeModes } from '@saruni-ui/theme';

export interface CheckboxThemeProps extends Partial<CheckboxProps> {
  isActive: boolean;
  isFocused: boolean;
  mode: ThemeModes;
}

export interface CheckboxProps {
  /** Sets whether checkbox is checked or unchecked. */
  isChecked?: boolean;
  /** Sets whether checkbox starts checked. */
  isDefaultChecked?: boolean;
  /** Sets whether checkbox is disabled. */
  isDisabled?: boolean;
  /** Text to be displayed to the right of the checkbox. */
  label?: React.ReactChild;
  /** Name of the field associated with the checkbox. */
  name?: string;
  /** Function called whenever the state of the checkbox changes. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  /** Value used in the checkbox input, which is returned on form submission. */
  value?: number | string;
}

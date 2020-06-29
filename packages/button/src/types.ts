import React from 'react';
import { ThemeModes } from '@saruni-ui/theme';

export interface ButtonThemeProps extends Partial<ButtonProps> {
  appearance: ButtonAppearances;
  state: string;
  mode: ThemeModes;
}

export type ButtonAppearances = 'default' | 'primary' | 'link';

export interface ButtonProps {
  appearance: ButtonAppearances;
  children?: React.ReactNode;
  href?: string;
  isDisabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseUp?: React.MouseEventHandler<HTMLElement>;
  target?: string;
}

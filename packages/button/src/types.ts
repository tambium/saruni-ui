import React from 'react';
import { ThemeModes } from '@saruni-ui/theme';

export interface ButtonThemeProps extends Partial<ButtonProps> {
  appearance: ButtonAppearances;
  state: string;
  mode: ThemeModes;
}

export type ButtonAppearances = 'default' | 'primary';

export interface ButtonProps {
  appearance: ButtonAppearances;
  children?: React.ReactNode;
  href?: string;
  isDisabled?: boolean;
}

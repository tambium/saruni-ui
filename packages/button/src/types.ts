import React from 'react';
import { ThemeModes } from '@saruni-ui/theme';

export interface ButtonThemeProps extends Partial<ButtonProps> {
  appearance: ButtonAppearances;
  state: string;
  mode: ThemeModes;
}

export type ButtonAppearances = 'default' | 'primary' | 'link';

/*
 * We remove CustomButtonProps from AllHTMLAttributes
 * so props that overlap with HTML attributes are defined
 * by the types specified in CustomButtonProps.
 */
type HtmlAttributes = Pick<
  React.AllHTMLAttributes<HTMLElement>,
  Exclude<keyof React.AllHTMLAttributes<HTMLElement>, keyof CustomButtonProps>
>;

export interface CustomButtonProps {
  appearance?: ButtonAppearances;
  children?: React.ReactNode;
  href?: string;
  isDisabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseUp?: React.MouseEventHandler<HTMLElement>;
  shouldFitContainer?: boolean;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonProps extends HtmlAttributes, CustomButtonProps {}

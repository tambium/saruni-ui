import * as React from 'react';

export type ButtonAppearances = 'default' | 'link' | 'primary' | 'subtle-link';

type Spacing = 'default' | 'none' | 'small' | 'large';

interface Props {
  /** The base styling to apply to the button */
  appearance?: ButtonAppearances;
  /** Contents of the button */
  children?: React.ReactNode;
  /** A custom component to use instead of the default button */
  component?: React.ElementType<any>;
  /** Provides a url for buttons being used as a link */
  href?: string;
  /** Set if the button is disabled */
  isDisabled?: boolean;
  /** Set if the button is pending */
  isPending?: boolean;
  /** Set the button style to indication selection */
  isSelected?: boolean;
  /** Option to fit button width to its parent width */
  shouldFitContainer?: boolean;
  /** Set the amount of spacing for the button */
  spacing?: Spacing;
  /** Pass in a custom theme */
  theme?: (
    current: (props: ThemeProps) => ThemeTokens,
    props: ThemeProps,
  ) => ThemeTokens;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps extends Props {}

export type ThemeMode = 'dark' | 'light';

export type ThemeTokens = {
  buttonStyles: Record<string, any>;
  spinnerStyles: Record<string, any>;
};

export interface ThemeProps extends Partial<ButtonProps> {
  state: string;
  mode?: ThemeMode;
}

export type ThemeFallbacks = {
  [index: string]: { [index: string]: string };
};

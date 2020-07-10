import { ThemeModes } from '@saruni-ui/theme';

export interface CardProps {
  /** Box shadow applied to the card. */
  elevation?: elevationOpts;
  /** Content of the card. */
  children?: React.ReactNode;
  /** Whether content should be rendered on a transparent background without shadow. */
  isChromeless?: boolean;
  /** Width of the card. */
  width?: number | string | widthOpts;
}

export interface WidthEnumType {
  values: string[];
  widths: { [index in widthOpts]: number };
  defaultValue: string;
}

export const WIDTH_ENUM: WidthEnumType = {
  values: ['small', 'medium', 'large', 'x-large'],
  widths: {
    small: 400,
    medium: 600,
    large: 800,
    'x-large': 1000,
  },
  defaultValue: 'medium',
};

export type elevationOpts = 'x-small' | 'small' | 'medium' | 'large';

export type widthOpts = 'small' | 'medium' | 'large' | 'x-large';

export interface CardThemeProps extends Partial<CardProps> {
  mode: ThemeModes;
  widthName: widthOpts | undefined;
  widthValue: number | string | undefined;
}

import { ThemeModes } from '@saruni-ui/theme';

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

export type widthOpts = 'small' | 'medium' | 'large' | 'x-large';

export type scrollOpts = 'inside' | 'outside' | 'inside-wide';

export interface ModalProps {
  autoFocus?: boolean;
  height?: number | string;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<any> | React.KeyboardEvent<any>) => void;
  scrollBehavior?: scrollOpts;
  shouldCloseOnBackdropClick?: boolean;
  width?: number | string | widthOpts;
}

export interface ModalThemeProps extends Partial<ModalProps> {
  mode: ThemeModes;
  widthName: widthOpts | undefined;
  widthValue: number | string | undefined;
}

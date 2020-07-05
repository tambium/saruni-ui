import React from 'react';
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
  /** Whether the first tabbable element is focused on opening */
  autoFocus?: boolean;
  /** Contents of the modal. */
  children?: React.ReactNode;
  /** Title of the modal. */
  heading?: React.ReactNode;
  /** Height of the modal. If not set, the modal grows to fit the content. */
  height?: number | string;
  /** Whether the modal is visible. */
  isOpen: boolean;
  /** Function called to initiate the exit transition. */
  onClose: (event: React.MouseEvent<any> | React.KeyboardEvent<any>) => void;
  /** Function called when exit transition is complete. */
  onCloseComplete?: (element: HTMLElement) => void;
  /** Function called when enter transition is complete. */
  onOpenComplete?: (node: HTMLElement, isAppearing: boolean) => void;
  /**
   * Positioning and scroll behavior of the modal.
   * `inside` locks the modal on the outside and allows scroll only on the modal body.
   * `outside` lets the entire modal be scrolled in its container.
   * `inside-wide` is like `inside` but for body wider than the viewport.
   */
  scrollBehavior?: scrollOpts;
  /** Whether clicking the overlay should close the modal. */
  shouldCloseOnBackdropClick?: boolean;
  /** Width of the modal. */
  width?: number | string | widthOpts;
}

export interface ModalThemeProps extends Partial<ModalProps> {
  mode: ThemeModes;
  widthName: widthOpts | undefined;
  widthValue: number | string | undefined;
}

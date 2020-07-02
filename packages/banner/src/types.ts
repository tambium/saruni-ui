import React from 'react';
import { ThemeModes } from '@saruni-ui/theme';

export type BannerAppearances =
  | 'default'
  | 'success'
  | 'info'
  | 'warning'
  | 'critical';

export interface BannerThemeProps extends Partial<BannerProps> {
  appearance: BannerAppearances;
  mode: ThemeModes;
}

export interface BannerProps {
  /** Visual style of the banner. */
  appearance?: BannerAppearances;
  /** The child elements to render in the banner. */
  children?: React.ReactNode;
  /** Title content for the banner. */
  title?: string;
}

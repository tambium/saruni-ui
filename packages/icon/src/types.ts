import React from 'react';

export type sizeOpts = 'small' | 'medium' | 'large' | 'xlarge';

export interface IconProps {
  /** String to use as the aria-label for the icon. */
  label?: string;
  /** Glyph to display in Icon component (not required when importing a glyph directly). */
  glyph?: (props: { role: string }) => React.ReactElement;
  /** Primary colour of icon. */
  primaryColor?: string;
  /** Secondary colour of 2-color icons. Set to `inherit` to control this via `fill` in CSS. */
  secondaryColor?: string;
  /** Size of the icon. */
  size?: sizeOpts;
}

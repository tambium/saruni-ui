import React from 'react';

export interface BackdropProps {
  /** Whether the backdrop has a visible background color. */
  isOpaque?: boolean;
  /** Whether elements "underneath" the backdrop are clickable. */
  isClickThroughEnabled?: boolean;
  /** Handler function called when the backdrop is clicked. */
  onBackdropClicked?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

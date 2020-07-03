import React from 'react';
import { colors, layers } from '@saruni-ui/theme';

import { BackdropProps } from '../types';

export const Backdrop: React.FC<BackdropProps> = ({
  isOpaque = false,
  isClickThroughEnabled = false,
  onBackdropClicked = () => {},
}) => {
  const onClick = isClickThroughEnabled ? undefined : onBackdropClicked;

  return (
    <div
      css={{
        backgroundColor: colors.backdrop,
        bottom: 0,
        left: 0,
        opacity: isOpaque ? 0 : 1,
        pointerEvents: isClickThroughEnabled ? 'initial' : 'none',
        position: 'fixed',
        right: 0,
        top: 0,
        transition: 'opacity 220ms',
        zIndex: layers.backdrop,
      }}
      onClick={onClick}
    />
  );
};

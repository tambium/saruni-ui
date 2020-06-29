import React from 'react';

import { sizes } from '../constants';
import { IconProps } from '../types';

export const Icon: React.FC<IconProps> = ({
  glyph: Glyph,
  label,
  primaryColor,
  secondaryColor,
  size,
}) => {
  const getSize = () => {
    return size ? { height: sizes[size], width: sizes[size] } : {};
  };

  return (
    <span
      aria-label={label ? label : undefined}
      css={{
        ...getSize(),
        color: primaryColor || 'currentColor',
        display: 'inline-block',
        fill: secondaryColor || 'todo:background',
        flexShrink: 0,
        lineHeight: 1,

        '& > svg': {
          ...getSize(),
          maxHeight: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          verticalAlign: 'bottom',
        },
      }}
      role={label ? 'img' : 'presentation'}
    >
      {Glyph ? <Glyph role="presentation" /> : null}
    </span>
  );
};

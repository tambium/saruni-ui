import React from 'react';

import { Icon } from '../.';
import { IconProps } from '../types';

export const Error: React.FC<IconProps> = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.99 9.609a3.382 3.382 0 000 4.783l7.619 7.617a3.382 3.382 0 004.783 0l7.617-7.617a3.382 3.382 0 000-4.783L14.392 1.99a3.382 3.382 0 00-4.783 0L1.99 9.609zM10.5 16.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm.505-4.4c.12 1.2 1.87 1.2 1.99 0l.5-5A1 1 0 0012.5 6h-1a1 1 0 00-.995 1.1l.5 5z"
            fill="currentColor"
          />
        </svg>
      )}
      {...props}
    />
  );
};

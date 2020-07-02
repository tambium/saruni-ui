import React from 'react';

import { Icon } from '../.';
import { IconProps } from '../types';

export const Warning: React.FC<IconProps> = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-12.65 4.95a1.65 1.65 0 103.3 0 1.65 1.65 0 00-3.3 0zm.555-4.84c.133 1.32 2.057 1.32 2.19 0l.55-5.5A1.1 1.1 0 0012.55 5.4h-1.1a1.1 1.1 0 00-1.095 1.21l.55 5.5z"
            fill="currentColor"
          />
        </svg>
      )}
      {...props}
    />
  );
};

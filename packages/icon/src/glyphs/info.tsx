import React from 'react';

import { Icon } from '../.';
import { IconProps } from '../types';

export const Info: React.FC<IconProps> = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-12-1a1 1 0 001 1h.675l-1.636 5.725A1 1 0 0011.001 19h2a1 1 0 100-2h-.675l1.636-5.725A1 1 0 0013.001 10h-2a1 1 0 00-1 1zm1.5-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
            fill="currentColor"
          />
        </svg>
      )}
      {...props}
    />
  );
};

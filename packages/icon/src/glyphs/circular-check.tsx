import React from 'react';

import { Icon } from '../.';
import { IconProps } from '../types';

export const CircularCheck: React.FC<IconProps> = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-7.897-3.675l-4.77 4.77-1.436-1.436a1.111 1.111 0 00-1.572 1.571l2.223 2.222a1.11 1.11 0 001.571 0l5.556-5.555a1.111 1.111 0 00-1.572-1.572z"
            fill="currentColor"
          />
        </svg>
      )}
      {...props}
    />
  );
};

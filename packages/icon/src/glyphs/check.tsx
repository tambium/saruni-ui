import React from 'react';

import { Icon } from '../.';
import { IconProps } from '../types';

export const Check: React.FC<IconProps> = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.4247 4.57534C23.1918 5.34246 23.1918 6.5862 22.4247 7.35332L9.92374 19.8542C9.15662 20.6214 7.91288 20.6214 7.14576 19.8542C7.14336 19.8518 7.14096 19.8494 7.13857 19.847C7.13614 19.8446 7.13372 19.8422 7.1313 19.8398L1.57534 14.2838C0.80822 13.5167 0.80822 12.273 1.57534 11.5058C2.34246 10.7387 3.5862 10.7387 4.35332 11.5058L8.53475 15.6873L19.6467 4.57534C20.4138 3.80822 21.6575 3.80822 22.4247 4.57534Z"
            fill="currentColor"
          />
        </svg>
      )}
      {...props}
    />
  );
};

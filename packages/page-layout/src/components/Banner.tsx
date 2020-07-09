import React from 'react';

import { BANNER, DEFAULT_BANNER_HEIGHT, BANNER_HEIGHT } from '../constants';
import { DimensionsHandler } from './DimensionsHandler';

interface BannerProps {
  children: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div css={{ gridArea: BANNER, height: `var(--${BANNER_HEIGHT})` }}>
      <DimensionsHandler
        propertyName={BANNER_HEIGHT}
        value={DEFAULT_BANNER_HEIGHT}
      />
      {children}
    </div>
  );
};

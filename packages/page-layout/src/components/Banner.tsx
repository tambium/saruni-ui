import React from 'react';

import { BANNER, DEFAULT_BANNER_HEIGHT } from '../constants';

interface BannerProps {
  children: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div css={{ gridArea: BANNER, height: DEFAULT_BANNER_HEIGHT }}>
      {children}
    </div>
  );
};

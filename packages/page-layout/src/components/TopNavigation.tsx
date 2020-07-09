import React from 'react';

import {
  TOPBAR_NAVIGATION,
  DEFAULT_TOPBAR_NAVIGATION_HEIGHT,
  TOPBAR_NAVIGATION_HEIGHT,
} from '../constants';
import { DimensionsHandler } from './DimensionsHandler';

interface TopNavigationProps {
  children: React.ReactNode;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ children }) => {
  return (
    <div
      css={{
        gridArea: TOPBAR_NAVIGATION,
        height: `var(--${TOPBAR_NAVIGATION_HEIGHT})`,
      }}
    >
      <DimensionsHandler
        propertyName={TOPBAR_NAVIGATION_HEIGHT}
        value={DEFAULT_TOPBAR_NAVIGATION_HEIGHT}
      />
      {children}
    </div>
  );
};

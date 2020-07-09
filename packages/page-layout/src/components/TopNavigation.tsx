import React from 'react';

import { TOP_NAVIGATION, DEFAULT_TOP_NAVIGATION_HEIGHT } from '../constants';

interface TopNavigationProps {
  children: React.ReactNode;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ children }) => {
  return (
    <div
      css={{ gridArea: TOP_NAVIGATION, height: DEFAULT_TOP_NAVIGATION_HEIGHT }}
    >
      {children}
    </div>
  );
};

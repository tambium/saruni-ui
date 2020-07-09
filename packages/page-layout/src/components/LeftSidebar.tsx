import React from 'react';

import { DEFAULT_LEFT_SIDEBAR_WIDTH, LEFT_SIDEBAR } from '../constants';

interface LeftSidebarProps {
  children: React.ReactNode;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ children }) => {
  return (
    <div css={{ gridArea: LEFT_SIDEBAR, width: DEFAULT_LEFT_SIDEBAR_WIDTH }}>
      {children}
    </div>
  );
};

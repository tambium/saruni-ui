import React from 'react';

import { DEFAULT_RIGHT_SIDEBAR_WIDTH, RIGHT_SIDEBAR } from '../constants';

interface RightSidebarProps {
  children: React.ReactNode;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ children }) => {
  return (
    <div css={{ gridArea: RIGHT_SIDEBAR, width: DEFAULT_RIGHT_SIDEBAR_WIDTH }}>
      {children}
    </div>
  );
};

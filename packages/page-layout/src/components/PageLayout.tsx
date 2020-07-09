import React from 'react';

import {
  BANNER,
  CONTENT,
  TOP_NAVIGATION,
  DEFAULT_BANNER_HEIGHT,
  DEFAULT_TOP_NAVIGATION_HEIGHT,
} from '../constants';
import { PageLayoutProps } from '../types';

export const gridTemplateAreas = `
  "${BANNER}"
  "${TOP_NAVIGATION}"
  "${CONTENT}"
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateAreas,
        gridTemplateRows: `${DEFAULT_BANNER_HEIGHT}px ${DEFAULT_TOP_NAVIGATION_HEIGHT}px auto`,
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

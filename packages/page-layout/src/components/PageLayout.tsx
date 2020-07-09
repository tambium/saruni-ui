import React from 'react';
import { css, Global } from '@emotion/core';

import {
  BANNER,
  CONTENT,
  DEFAULT_BANNER_HEIGHT,
  DEFAULT_TOPBAR_NAVIGATION_HEIGHT,
  LEFT_SIDEBAR_WIDTH,
  TOPBAR_NAVIGATION,
  BANNER_HEIGHT,
  RIGHT_SIDEBAR_WIDTH,
  TOPBAR_NAVIGATION_HEIGHT,
} from '../constants';
import { PageLayoutProps } from '../types';

export const gridTemplateAreas = `
  "${BANNER}"
  "${TOPBAR_NAVIGATION}"
  "${CONTENT}"
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateAreas,
        gridTemplateRows: `var(--${BANNER_HEIGHT}) var(--${TOPBAR_NAVIGATION_HEIGHT}) auto`,
        height: '100%',
      }}
    >
      <Global
        styles={css`
        :root {
          --${LEFT_SIDEBAR_WIDTH}: 0px;
          --${RIGHT_SIDEBAR_WIDTH}: 0px;
          --${TOPBAR_NAVIGATION_HEIGHT}: 0px;
          --${BANNER_HEIGHT}: 0px;
        }
      `}
      />
      {children}
    </div>
  );
};

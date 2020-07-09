import React from 'react';

import { CONTENT, LEFT_SIDEBAR, MAIN, RIGHT_SIDEBAR } from '../constants';

interface ContentProps {
  children: React.ReactNode;
}

export const gridTemplateAreas = `
  "${LEFT_SIDEBAR} ${MAIN} ${RIGHT_SIDEBAR}"
`;

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div css={{ display: 'flex', gridArea: CONTENT }}>{children}</div>;
};

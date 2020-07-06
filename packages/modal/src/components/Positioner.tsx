import React from 'react';
import { CSSObject } from '@emotion/core';

interface PositionerProps {
  children: React.ReactNode;
  tokens: CSSObject;
}

export const Positioner: React.FC<PositionerProps> = ({ children, tokens }) => {
  return <div css={tokens}>{children}</div>;
};

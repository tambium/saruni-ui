import React from 'react';
import { CSSObject } from '@emotion/core';

interface HeaderProps {
  heading?: React.ReactNode;
  tokens: { container: CSSObject };
}

export const Header: React.FC<HeaderProps> = ({ heading, tokens }) => {
  return (
    <div css={tokens.container}>
      <h4
        css={{
          alignItems: 'center',
          display: 'flex',
          fontSize: 20,
          fontStyle: 'inherit',
          fontWeight: 500,
          lineHeight: 1,
          margin: 0,
          minWidth: 0,
        }}
      >
        {heading}
      </h4>
    </div>
  );
};

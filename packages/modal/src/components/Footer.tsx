import React from 'react';
import { CSSObject } from '@emotion/core';
import { Button } from '@saruni-ui/button';

import { ActionProps } from '../types';

interface FooterProps {
  actions?: Array<ActionProps>;
  tokens: { container: CSSObject };
}

export const Footer: React.FC<FooterProps> = ({ actions, tokens }) => {
  return (
    <div css={tokens.container}>
      <div css={{ display: 'inline-flex', margin: '0 -6px' }}>
        {actions
          ? actions.map(({ title, ...rest }, index) => {
              return (
                <div css={{ flex: '1 1 auto', margin: '0 6px' }} key={index}>
                  <Button {...rest}>{title}</Button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

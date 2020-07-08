import React from 'react';

import { Theme } from '../../theme';
import { BaseItemProps } from '../../types';

export const BaseItem: React.FC<BaseItemProps> = ({
  children,
  description,
  iconAfter,
  iconBefore,
  mode,
}) => {
  const { tokens } = Theme.useTheme({ mode });

  return (
    <div css={tokens.base.wrapper}>
      {iconBefore && (
        <span css={tokens.base.iconBeforeWrapper}>{iconBefore}</span>
      )}
      {children && (
        <span css={tokens.base.content}>
          {children}
          {description && <span>{description}</span>}
        </span>
      )}
      {iconAfter && <span css={tokens.base.iconAfterWrapper}>{iconAfter}</span>}
    </div>
  );
};

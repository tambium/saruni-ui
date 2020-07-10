import React from 'react';

import { Theme } from '../theme';
import { CardProps, WIDTH_ENUM, widthOpts } from '../types';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 'small',
  isChromeless,
  width,
}) => {
  const widthName = width
    ? WIDTH_ENUM.values.indexOf(width.toString()) !== -1
      ? (width as widthOpts)
      : undefined
    : undefined;
  const widthValue = widthName ? undefined : width;

  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer
            elevation={elevation}
            isChromeless={isChromeless}
            mode={mode}
            widthName={widthName}
            widthValue={widthValue}
          >
            {(tokens) => {
              return <div css={tokens.container}>{children}</div>;
            }}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

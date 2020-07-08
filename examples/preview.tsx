import React from 'react';
import { addDecorator } from '@storybook/react';
import { css, Global } from '@emotion/core';
import {
  DEFAULT_THEME_MODE,
  GlobalThemeProvider,
  Reset,
  ResetThemeTokens,
  ResetThemeProps,
  ThemeModes,
} from '@saruni-ui/theme';

const customTheme = (baseTokens: ResetThemeTokens, props?: ResetThemeProps) => {
  return {
    ...baseTokens,
  };
};

const AppContext = (props: { children: React.ReactNode }) => {
  const [mode, setMode] = React.useState<ThemeModes>(DEFAULT_THEME_MODE);

  const switchMode = (mode: ThemeModes) =>
    setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <GlobalThemeProvider theme={() => ({ mode })}>
      <div
        onClick={() => switchMode(mode)}
        style={{ bottom: 8, cursor: 'pointer', position: 'fixed', right: 8 }}
      >
        Toggle
      </div>
      <Global
        styles={css`
          #root {
            height: 100%;
          }
        `}
      />
      <Reset theme={customTheme}>{props.children}</Reset>
    </GlobalThemeProvider>
  );
};

addDecorator((storyFn) => {
  return <AppContext>{storyFn()}</AppContext>;
});

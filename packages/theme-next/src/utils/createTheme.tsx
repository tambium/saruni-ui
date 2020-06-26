import React from 'react';
import { ThemeProp } from '../types';

export function createTheme<ThemeTokens, ThemeProps>(
  createTokenFn: (props: ThemeProps) => ThemeTokens,
) {
  const emptyThemeFn: ThemeProp<ThemeTokens, ThemeProps> = (baseTokens) =>
    baseTokens;

  const ThemeContext = React.createContext({
    createTokenFn,
    customTheme: emptyThemeFn,
  });

  const Provider = (props: {
    children: React.ReactNode;
    theme?: ThemeProp<ThemeTokens, ThemeProps>;
  }) => {
    const customTheme = props.theme || emptyThemeFn;

    return (
      <ThemeContext.Provider
        {...props}
        value={{ createTokenFn, customTheme }}
      />
    );
  };

  function useTheme(props: ThemeProps) {
    const { createTokenFn, customTheme } = React.useContext(ThemeContext);

    const baseTokens = createTokenFn(props);

    const customizedTokens = {
      ...baseTokens,
      ...customTheme(baseTokens, props),
    };

    return { tokens: customizedTokens };
  }

  return { Provider, useTheme };
}

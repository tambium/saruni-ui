import React from 'react';

export function createTheme<ThemeTokens, ThemeProps>(
  defaultGetTokens: (props: ThemeProps) => ThemeTokens,
) {
  const ThemeContext = React.createContext(defaultGetTokens);

  const ThemeProvider = (props: { children: React.ReactNode }) => {
    return <ThemeContext.Provider value={defaultGetTokens} {...props} />;
  };

  function useTheme(themeProps?: ThemeProps) {
    const theme = React.useContext(ThemeContext);
    return theme(themeProps);
  }

  return { ThemeProvider, useTheme };
}

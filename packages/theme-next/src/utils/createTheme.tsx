import React from 'react';

export function createTheme<T, U>(themeDefault: T) {
  const ThemeContext = React.createContext<T>(themeDefault);

  const ThemeProvider = (props: { children: React.ReactNode }) => {
    return <ThemeContext.Provider value={themeDefault} {...props} />;
  };

  function useTheme(themeProps: U) {
    const theme = React.useContext(ThemeContext);
    // @ts-ignore
    return theme(themeProps);
  }

  return { ThemeProvider, useTheme };
}

import React, { createContext, ComponentType, ReactNode } from 'react';

export type ThemeProp<ThemeTokens, ThemeProps> = (
  getTokens: (props: ThemeProps) => ThemeTokens,
  themeProps: ThemeProps,
) => ThemeTokens;

export function createTheme<ThemeTokens, ThemeProps>(
  defaultGetTokens: (props: ThemeProps) => ThemeTokens,
): {
  Consumer: ComponentType<
    ThemeProps & {
      children: (tokens: ThemeTokens) => ReactNode;
    }
  >;
  Provider: ComponentType<{
    children?: ReactNode;
    value?: ThemeProp<ThemeTokens, ThemeProps>;
  }>;
} {
  const emptyThemeFn: ThemeProp<ThemeTokens, ThemeProps> = (getTokens, props) =>
    getTokens(props);

  const ThemeContext = createContext(defaultGetTokens);

  function Consumer(
    props: ThemeProps & { children: (tokens: ThemeTokens) => ReactNode },
  ) {
    const { children, ...themeProps } = props;
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const themeFn = theme || emptyThemeFn;
          // @ts-ignore
          const tokens = themeFn(themeProps);
          return children(tokens);
        }}
      </ThemeContext.Consumer>
    );
  }

  function Provider(props: {
    children?: ReactNode;
    value?: ThemeProp<ThemeTokens, ThemeProps>;
  }) {
    return (
      <ThemeContext.Consumer>
        {(themeFn) => {
          const valueFn = props.value || emptyThemeFn;
          const mixedFn = (themeProps: ThemeProps) =>
            valueFn(themeFn, themeProps);
          return (
            <ThemeContext.Provider value={mixedFn}>
              {props.children}
            </ThemeContext.Provider>
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  return { Consumer, Provider };
}

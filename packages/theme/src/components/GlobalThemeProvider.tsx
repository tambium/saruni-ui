import { createTheme } from '../utils';
import { GlobalThemeTokens } from '../types';

const GlobalTheme = createTheme<GlobalThemeTokens, any>(({ mode }) => {
  return {
    mode,
  };
});

const { Consumer, Provider, useTheme } = GlobalTheme;

export {
  Consumer as GlobalThemeConsumer,
  Provider as GlobalThemeProvider,
  useTheme as useGlobalTheme,
};

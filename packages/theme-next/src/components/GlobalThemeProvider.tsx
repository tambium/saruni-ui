import { createTheme } from '../utils';
import { DEFAULT_THEME_MODE } from '../constants';
import { GlobalThemeProps, GlobalThemeTokens } from '../types';

const GlobalTheme = createTheme<GlobalThemeTokens, GlobalThemeProps>(() => ({
  mode: DEFAULT_THEME_MODE,
}));

const { Provider, useTheme } = GlobalTheme;

export { Provider as GlobalThemeProvider, useTheme as useGlobalTheme };

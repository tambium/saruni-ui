import { createTheme } from '../utils';
import { DEFAULT_THEME_MODE } from '../constants';

type ThemeModes = 'light' | 'dark';
interface Theme {
  mode: ThemeModes;
}

type GlobalThemeTokens = Theme;

interface GlobalThemeProps {
  mode: ThemeModes;
}

const GlobalTheme = createTheme<GlobalThemeTokens, GlobalThemeProps>(() => ({
  mode: DEFAULT_THEME_MODE,
}));

const { ThemeProvider, useTheme } = GlobalTheme;

export { ThemeProvider as GlobalThemeProvider, useTheme as useGlobalTheme };

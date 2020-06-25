import { createTheme } from '../utils';
import { DEFAULT_THEME_MODE } from '../constants';

const GlobalTheme = createTheme({ mode: DEFAULT_THEME_MODE });

const { ThemeProvider, useTheme } = GlobalTheme;

export { ThemeProvider as GlobalThemeProvider, useTheme as useGlobalTheme };

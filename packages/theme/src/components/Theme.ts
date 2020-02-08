import { createTheme } from '../utils/createTheme';
import { GlobalThemeTokens } from '../types';
import { DEFAULT_THEME_MODE } from '../constants';

export default createTheme<GlobalThemeTokens, any>(() => ({
  mode: DEFAULT_THEME_MODE,
}));

import * as colors from './colors';
import {
  GlobalThemeConsumer,
  GlobalThemeProvider,
  useGlobalTheme,
} from './components/GlobalThemeProvider';
import { Reset } from './components/Reset';
import { createTheme } from './utils/createTheme';

export {
  colors,
  createTheme,
  GlobalThemeConsumer,
  GlobalThemeProvider,
  Reset,
  useGlobalTheme,
};

export * from './constants';
export * from './types';

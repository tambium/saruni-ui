import * as colors from './colors';
import {
  GlobalThemeConsumer,
  GlobalThemeProvider,
  useGlobalTheme,
} from './components/GlobalThemeProvider';
import { Reset } from './components/Reset';
import { createTheme, hexToRgba, generateShadow } from './utils';

export {
  colors,
  createTheme,
  generateShadow,
  hexToRgba,
  GlobalThemeConsumer,
  GlobalThemeProvider,
  Reset,
  useGlobalTheme,
};

export * from './constants';
export * from './types';

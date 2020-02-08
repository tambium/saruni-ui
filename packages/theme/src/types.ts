export type ThemeModes = 'light' | 'dark';

export interface Theme {
  mode: ThemeModes;
}

export interface GlobalThemeTokens extends Theme {}

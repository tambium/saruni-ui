export type ThemeModes = 'light' | 'dark';

export interface Theme {
  mode: ThemeModes;
}

export type GlobalThemeTokens = Theme;

export type ThemeProp<ThemeTokens, ThemeProps> = (
  baseTokens: ThemeTokens,
  themeProps?: ThemeProps,
) => ThemeTokens;

export interface ResetThemeTokens {
  backgroundColor: string;
  color: string;
  fontSize?: number;
}

export interface ResetThemeProps {
  mode: ThemeModes;
  theme?: (
    baseTokens: ResetThemeTokens,
    props: ResetThemeProps,
  ) => ResetThemeTokens;
}

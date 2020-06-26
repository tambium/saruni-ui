export type ThemeModes = 'light' | 'dark';

export interface Theme {
  mode: ThemeModes;
}

export type GlobalThemeTokens = Theme;

export interface GlobalThemeProps {
  mode: ThemeModes;
}

export type ThemeProp<ThemeTokens, ThemeProps> = (
  baseTokens: ThemeTokens,
  themeProps?: ThemeProps,
) => ThemeTokens;

export interface ResetThemeTokens {
  backgroundColor: string;
  fontSize?: number;
}

export interface ResetThemeProps {
  mode: ThemeModes;
  theme?: (
    baseTokens: ResetThemeTokens,
    props: ResetThemeProps,
  ) => ResetThemeTokens;
}

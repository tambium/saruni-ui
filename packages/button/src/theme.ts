import { colors, createTheme } from '@saruni-ui/theme';
import { getButtonStyles } from './components/getStyles';
import { ThemeFallbacks, ThemeMode, ThemeProps, ThemeTokens } from './types';

export const fallbacks: ThemeFallbacks = {
  background: { light: 'red', dark: 'blue' },
  color: { light: 'green', dark: 'pink' },
  textDecoration: { light: 'none', dark: 'none' },
};

export const baseTheme = {
  background: {
    default: {
      default: { light: '#fff', dark: '#fff' },
      hovered: { light: '#fff', dark: '#fff' },
      active: { light: '#fff', dark: '#fff' },
      disabled: { light: '#fafafd', dark: '#fafafd' },
      selected: { light: '#fff', dark: '#fff' },
      focusedSelected: { light: '#fff', dark: '#fff' },
    },
    primary: {
      default: { light: colors.P500, dark: '#5469d4' },
      hovered: { light: colors.P400, dark: '#5469d4' },
      active: { light: colors.P600, dark: '#5469d4' },
      disabled: { light: colors.P500, dark: '#5469d4' },
      selected: { light: colors.P500, dark: '#5469d4' },
      focusedSelected: { light: colors.P500, dark: '#5469d4' },
    },
  },
  borderColor: {
    default: {
      default: { light: '#E3E4E7', dark: '#E3E4E7' },
      hovered: { light: '#DFE1E3', dark: '#DFE1E3' },
      active: { light: '#EAEBEC', dark: '#EAEBEC' },
      disabled: { light: '#E6E7E9', dark: '#E6E7E9' },
      selected: { light: '#EAEBEC', dark: '#EAEBEC' },
      focusedSelected: { light: '#EAEBEC', dark: '#EAEBEC' },
    },
    primary: {
      default: { light: 'transparent', dark: 'transparent' },
      hovered: { light: 'transparent', dark: 'transparent' },
      active: { light: 'transparent', dark: 'transparent' },
      disabled: { light: 'transparent', dark: 'transparent' },
      selected: { light: 'transparent', dark: 'transparent' },
      focusedSelected: { light: 'transparent', dark: 'transparent' },
    },
  },
  color: {
    default: {
      default: { light: '#4f566b', dark: '#4f566b' },
      hovered: { light: '#2a2f45', dark: '#2a2f45' },
      active: { light: '#2a2f45', dark: '#2a2f45' },
      disabled: { light: '#8792a2', dark: '#8792a2' },
      selected: { light: '#2a2f45', dark: '#2a2f45' },
      focusedSelected: { light: '#2a2f45', dark: '#2a2f45' },
    },
    primary: {
      default: { light: '#fff', dark: '#fff' },
      hovered: { light: '#fff', dark: '#fff' },
      active: { light: '#fff', dark: '#fff' },
      disabled: { light: '#fff', dark: '#fff' },
      selected: { light: '#fff', dark: '#fff' },
      focusedSelected: { light: '#fff', dark: '#fff' },
    },
  },
};

export function applyPropertyStyle(
  property: string,
  {
    appearance = 'default',
    state = 'default',
    mode = 'light',
  }: { appearance?: string; state?: string; mode?: ThemeMode },
  theme: any,
) {
  const propertyStyles = theme[property];
  if (!propertyStyles) {
    return 'initial';
  }

  if (!propertyStyles[appearance]) {
    if (!propertyStyles['default']) {
      return fallbacks[property][mode] ? fallbacks[property][mode] : 'initial';
    }
    appearance = 'default';
  }

  if (!propertyStyles[appearance][state]) {
    state = 'default';
  }

  const appearanceStyles = propertyStyles[appearance];
  const stateStyles = appearanceStyles[state];

  if (!stateStyles) {
    return 'inherit';
  }
  return stateStyles[mode] || appearanceStyles.default[mode];
}

export const Theme = createTheme<ThemeTokens, ThemeProps>((themeProps) => ({
  buttonStyles: getButtonStyles(themeProps),
  spinnerStyles: {},
}));

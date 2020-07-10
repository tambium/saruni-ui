export interface RoleColors {
  /** The surface role is used for the backgrounds of the UI. */
  surface: string;
  /** The onSurface role is made up of elements which appear on top of a surface, including borders, secondary icons, and text. */
  onSurface: string;
  /** The interactive role is used to express interactivity in components. It is used in links, as an indicator of focus, and as an indicator of selected interactive states. */
  interactive: string;
  /** A secondary interactive color role, for use in secondary and tertiary buttons as a background color, as well as in form elements as a background color. */
  secondary: string;
  /** A primary interactive color, for use in primary buttons as a background color. Also used in navigation and tabs for icons, and for a surface color when in a selected state. */
  primary: string;
  /** Used to communicate destructive outcomes on interactive elements, for communicating errors, and to indicate a critical event in inert elements that requires immediate action. */
  critical: string;
  /** For use as an indicator that action should be taken in components including badges, banners, and exception lists. */
  warning: string;
  /** Used to highlight elements of the UI that are important, but do not require immediate action. Used in information banners and badges, indicators that draw attention to new information, bars that indicate loading or progress, and in data visualization. */
  highlight: string;
  /** Used to indicate the result of a successful action taken, to indicate a positive event, or to illustrate growth. */
  success: string;
  /** Used to decorate elements where color does convey a specific meaning in components like avatars */
  decorative: string;
}

export const baseTheme = {
  colors: {
    backdrop: 'rgba(0, 0, 0, 0.5)',
    borderCritical: '#E32F0E',
    interactiveText: '#FFFFFF',
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    actionDefault: '#EAEBEC',
    actionDefaultHovered: '#E1E3E5',
    actionDefaultPressed: '#D8DADD',
    background: '#FAFAFA',
    border: '#8C9196',
    borderCriticalSubdued: '#E0B3B2',
    borderHighlightSubdued: '#98C6CD',
    borderNeutralSubdued: '#BABFC3',
    borderSubdued: '#E1E3E5',
    borderSuccessSubdued: '#95C9B4',
    borderWarningSubdued: '#E1B878',
    focused: '#458FFF',
    icon: '#5C5F62',
    iconCritical: '#D72C0D',
    iconHighlight: '#00A0AC',
    iconSuccess: '#007F5F',
    iconWarning: '#B98900',
    interactive: '#2C6ECB',
    interactiveHovered: '#1F5199',
    interactivePressed: '#103262',
    shadowFromAmbientLight: 'rgba(23, 24, 24, 0.05)',
    shadowFromDimLight: 'rgba(0, 0, 0, 0.2)',
    shadowFromDirectLight: 'rgba(0, 0, 0, 0.15)',
    surface: '#FFFFFF',
    surfaceCriticalSubdued: '#FFF4F4',
    surfaceHighlightSubdued: '#EBF9FC',
    surfaceHovered: '#F6F6F7',
    surfaceSelectedPressed: '#E5EFFD',
    surfaceSuccessSubdued: '#F1F8F5',
    surfaceWarningSubdued: '#FFF5EA',
    text: '#202223',
    textCritical: '#D72C0D',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    actionDefault: '#4D5053',
    actionDefaultHovered: '#54575B',
    actionDefaultPressed: '#606467',
    background: '#0B0C0D',
    border: '#505356',
    borderCriticalSubdued: '#E32F0E',
    borderHighlightSubdued: '#449DA7',
    borderNeutralSubdued: '#505356',
    borderSubdued: '#494C4E',
    borderSuccessSubdued: '#008766',
    borderWarningSubdued: '#997000',
    focused: '#2662B6',
    icon: '#A6ACB2',
    iconCritical: '#DA2D0D',
    iconHighlight: '#2C6C73',
    iconSuccess: '#005E46',
    iconWarning: '#684B00',
    interactive: '#36A3FF',
    interactiveHovered: '#67AFFF',
    interactivePressed: '#88BCFF',
    shadowFromAmbientLight: 'rgba(23, 24, 24, 0.05)',
    shadowFromDimLight: 'rgba(255, 255, 255, 0.2)',
    shadowFromDirectLight: 'rgba(255, 255, 255, 0.15)',
    surface: '#202123',
    surfaceCriticalSubdued: '#450701',
    surfaceHighlightSubdued: '#123539',
    surfaceHovered: '#2F3133',
    surfaceSelectedPressed: '#0D2B56',
    surfaceSuccessSubdued: '#1C352C',
    surfaceWarningSubdued: '#4D3B1D',
    text: '#E3E5E7',
    textCritical: '#E9807A',
  },
};

export const actionDefault = {
  light: lightTheme.colors.actionDefault,
  dark: darkTheme.colors.actionDefault,
};

export const actionDefaultHovered = {
  light: lightTheme.colors.actionDefaultHovered,
  dark: darkTheme.colors.actionDefaultHovered,
};

export const actionDefaultPressed = {
  light: lightTheme.colors.actionDefaultPressed,
  dark: darkTheme.colors.actionDefaultPressed,
};

export const backdrop = baseTheme.colors.backdrop;

export const background = {
  light: lightTheme.colors.background,
  dark: darkTheme.colors.background,
};

export const border = {
  light: lightTheme.colors.border,
  dark: darkTheme.colors.border,
};

export const borderCritical = baseTheme.colors.borderCritical;

export const borderCriticalSubdued = {
  light: lightTheme.colors.borderCriticalSubdued,
  dark: darkTheme.colors.borderCriticalSubdued,
};

export const borderHighlightSubdued = {
  light: lightTheme.colors.borderHighlightSubdued,
  dark: darkTheme.colors.borderHighlightSubdued,
};

export const borderNeutralSubdued = {
  light: lightTheme.colors.borderNeutralSubdued,
  dark: darkTheme.colors.borderNeutralSubdued,
};

export const borderSubdued = {
  light: lightTheme.colors.borderSubdued,
  dark: darkTheme.colors.borderSubdued,
};

export const borderSuccessSubdued = {
  light: lightTheme.colors.borderSuccessSubdued,
  dark: darkTheme.colors.borderSuccessSubdued,
};

export const borderWarningSubdued = {
  light: lightTheme.colors.borderWarningSubdued,
  dark: darkTheme.colors.borderWarningSubdued,
};

export const focused = {
  light: lightTheme.colors.focused,
  dark: darkTheme.colors.focused,
};

export const icon = {
  light: lightTheme.colors.icon,
  dark: darkTheme.colors.icon,
};

export const iconCritical = {
  light: lightTheme.colors.iconCritical,
  dark: darkTheme.colors.iconCritical,
};

export const iconHighlight = {
  light: lightTheme.colors.iconHighlight,
  dark: darkTheme.colors.iconHighlight,
};

export const iconSuccess = {
  light: lightTheme.colors.iconSuccess,
  dark: darkTheme.colors.iconSuccess,
};

export const iconWarning = {
  light: lightTheme.colors.iconWarning,
  dark: darkTheme.colors.iconWarning,
};

export const interactive = {
  light: lightTheme.colors.interactive,
  dark: darkTheme.colors.interactive,
};

export const interactiveHovered = {
  light: lightTheme.colors.interactiveHovered,
  dark: darkTheme.colors.interactiveHovered,
};

export const interactivePressed = {
  light: lightTheme.colors.interactivePressed,
  dark: darkTheme.colors.interactivePressed,
};

export const interactiveText = baseTheme.colors.interactiveText;

export const shadowFromAmbientLight = {
  light: lightTheme.colors.shadowFromAmbientLight,
  dark: darkTheme.colors.shadowFromAmbientLight,
};

export const shadowFromDimLight = {
  light: lightTheme.colors.shadowFromDimLight,
  dark: darkTheme.colors.shadowFromDimLight,
};

export const shadowFromDirectLight = {
  light: lightTheme.colors.shadowFromDirectLight,
  dark: darkTheme.colors.shadowFromDirectLight,
};

export const surface = {
  light: lightTheme.colors.surface,
  dark: darkTheme.colors.surface,
};

export const surfaceCriticalSubdued = {
  light: lightTheme.colors.surfaceCriticalSubdued,
  dark: darkTheme.colors.surfaceCriticalSubdued,
};

export const surfaceHighlightSubdued = {
  light: lightTheme.colors.surfaceHighlightSubdued,
  dark: darkTheme.colors.surfaceHighlightSubdued,
};

export const surfaceHovered = {
  light: lightTheme.colors.surfaceHovered,
  dark: darkTheme.colors.surfaceHovered,
};

export const surfaceSelectedPressed = {
  light: lightTheme.colors.surfaceSelectedPressed,
  dark: darkTheme.colors.surfaceSelectedPressed,
};

export const surfaceSuccessSubdued = {
  light: lightTheme.colors.surfaceSuccessSubdued,
  dark: darkTheme.colors.surfaceSuccessSubdued,
};

export const surfaceWarningSubdued = {
  light: lightTheme.colors.surfaceWarningSubdued,
  dark: darkTheme.colors.surfaceWarningSubdued,
};

export const text = {
  light: lightTheme.colors.text,
  dark: darkTheme.colors.text,
};

export const textCritical = {
  light: lightTheme.colors.textCritical,
  dark: darkTheme.colors.textCritical,
};

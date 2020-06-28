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
    borderCritical: '#E32F0E',
    interactiveText: '#FFFFFF',
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#FFFFFF',
    border: '#8C9196',
    focused: '#458FFF',
    interactive: '#2C6ECB',
    interactiveHovered: '#1F5199',
    text: '#202223',
    textCritical: '#D72C0D',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#0B0C0D',
    border: '#505356',
    focused: '#2662B6',
    interactive: '#36A3FF',
    interactiveHovered: '#67AFFF',
    text: '#E3E5E7',
    textCritical: '#E9807A',
  },
};

export const background = {
  light: lightTheme.colors.background,
  dark: darkTheme.colors.background,
};

export const border = {
  light: lightTheme.colors.border,
  dark: darkTheme.colors.border,
};

export const borderCritical = baseTheme.colors.borderCritical;

export const interactive = {
  light: lightTheme.colors.interactive,
  dark: darkTheme.colors.interactive,
};

export const interactiveHovered = {
  light: lightTheme.colors.interactiveHovered,
  dark: darkTheme.colors.interactiveHovered,
};

export const interactiveText = baseTheme.colors.interactiveText;

export const focused = {
  light: lightTheme.colors.focused,
  dark: darkTheme.colors.focused,
};

export const text = {
  light: lightTheme.colors.text,
  dark: darkTheme.colors.text,
};

export const textCritical = {
  light: lightTheme.colors.textCritical,
  dark: darkTheme.colors.textCritical,
};

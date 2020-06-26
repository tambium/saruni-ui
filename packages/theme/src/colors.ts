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

export const baseColors = {
  critical: '#D82C0D',
  decorative: '#FFC96B',
  highlight: '#5BCDDA',
  interactive: '#2E72D2',
  onSurface: '#111213',
  primary: '#008060',
  secondary: '#111213',
  success: '#008060',
  surface: '#111213',
  warning: '#FFC453',
};

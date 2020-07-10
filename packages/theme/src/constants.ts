export const DEFAULT_THEME_MODE = 'light';

export const font = {
  family: {
    ui:
      'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
  },
  size: {
    heading: 28,
    subheading: 24,
    title: 20,
    section: 18,
    subtitle: 16,
    body: 14,
    caption: 12,
  },
};

export const shadows = {
  state: {
    keyline: `0 0 0 1px`,
    hovered: `0 3px 9px 0`,
    focused: `0 0 0 3px`,
    elevated: {
      'x-small': {
        base: `0 2px 5px -1px`,
        support: `0 1px 3px -1px`,
      },
      small: {
        base: `0 6px 12px -2px`,
        support: `0 3px 7px -3px`,
      },
      medium: {
        base: `0 13px 27px -5px`,
        support: `0 8px 16px -8px`,
      },
      large: {
        base: `0 30px 60px -12px`,
        support: `0 18px 36px -18px`,
      },
    },
  },
};

export const layers = {
  dialog: 300,
  backdrop: 500,
  modal: 510,
};

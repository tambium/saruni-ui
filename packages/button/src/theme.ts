import React from 'react';
import { colors, createTheme } from '@saruni-ui/theme';
import { ButtonThemeProps, ButtonAppearances } from './types';

export interface ButtonThemeTokens {
  button: React.CSSProperties;
  spinner: React.CSSProperties;
}

const appearances = {
  backgroundColor: {
    primary: {
      default: colors.interactive,
      isHovered: colors.interactiveHovered,
    },
  },
  color: {
    primary: {
      default: colors.interactiveText,
    },
  },
};

const pluckStyle = ({
  property,
  props,
  appearances,
}: {
  property: string;
  props: { appearance: ButtonAppearances; state: string; mode: string };
  appearances: any;
}) => {
  const propertyStyles = appearances[property];
  if (!propertyStyles) return 'initial';
  if (!propertyStyles[props.appearance][props.state]) {
    props.state = 'default';
  }
  const appearanceStyles = propertyStyles[props.appearance];
  const stateStyles = appearanceStyles[props.state];
  if (!stateStyles) return 'inherit';
  // We may or may not supply light/dark modes.
  if (stateStyles && typeof stateStyles === 'object') {
    return stateStyles[props.mode];
  } else return stateStyles;
};

const getBackgroundColor = (props: ButtonThemeProps) =>
  pluckStyle({ property: 'backgroundColor', props, appearances });

const getColor = (props: ButtonThemeProps) =>
  pluckStyle({ property: 'color', props, appearances });

const staticStyles = {
  border: 0,
  borderRadius: 4,
  display: 'inline-flex',
  font: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'normal',
  fontWeight: 500,
  maxWidth: '100%',
  outline: 0,
  padding: '8px 16px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

export const Theme = createTheme<ButtonThemeTokens, ButtonThemeProps>(
  (props) => {
    return {
      button: {
        ...staticStyles,
        backgroundColor: getBackgroundColor(props),
        color: getColor(props),
      },
      spinner: {
        backgroundColor: 'transparent',
      },
    };
  },
);

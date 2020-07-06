import React from 'react';
import {
  colors,
  createTheme,
  generateShadow,
  shadows,
  hexToRgba,
} from '@saruni-ui/theme';
import { ButtonThemeProps, ButtonAppearances } from './types';

export interface ButtonThemeTokens {
  button: React.CSSProperties;
  spinner: React.CSSProperties;
}

const appearances = {
  backgroundColor: {
    default: {
      default: colors.actionDefault,
      isHovered: colors.actionDefaultHovered,
      isActive: colors.actionDefaultPressed,
    },
    primary: {
      default: colors.interactive,
      isHovered: colors.interactiveHovered,
      isActive: colors.interactivePressed,
    },
    link: { default: 'initial' },
  },
  boxShadowColor: {
    default: {
      default: colors.actionDefault,
      isActive: colors.actionDefaultHovered,
      isHovered: colors.actionDefaultPressed,
      isFocused: colors.focused,
    },
    primary: {
      default: colors.interactive,
      isActive: colors.interactivePressed,
      isHovered: colors.interactiveHovered,
      isFocused: colors.focused,
    },
    link: {
      default: 'transparent',
      isActive: colors.interactivePressed,
      isFocused: colors.focused,
    },
  },
  color: {
    default: { default: colors.text },
    primary: { default: colors.interactiveText },
    link: { default: colors.interactive },
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
  let state = props.state;
  const propertyStyles = appearances[property];
  if (!propertyStyles) return 'initial';
  if (!propertyStyles[props.appearance][props.state]) state = 'default';
  const appearanceStyles = propertyStyles[props.appearance];
  const stateStyles = appearanceStyles[state];
  if (!stateStyles) return 'inherit';
  // We may or may not supply light/dark modes, so check for object.
  if (stateStyles && typeof stateStyles === 'object') {
    return stateStyles[props.mode];
  } else return stateStyles;
};

const getBackgroundColor = (props: ButtonThemeProps) => {
  return pluckStyle({ property: 'backgroundColor', props, appearances });
};

const getBoxShadow = (props: ButtonThemeProps) => {
  const getKeylineBoxShadowColor = pluckStyle({
    property: 'boxShadowColor',
    props: {
      ...props,
      state: props.state === 'isFocused' ? 'default' : props.state,
    },
    appearances,
  });

  const getBoxShadowColor = pluckStyle({
    property: 'boxShadowColor',
    props,
    appearances,
  });

  const shadowConfigs = {
    hasKeyline: [
      {
        values: shadows.state.keyline,
        color: getKeylineBoxShadowColor,
      },
    ],
    isFocused: [
      {
        values: shadows.state.focused,
        color: hexToRgba(getBoxShadowColor, 0.36),
      },
    ],
  };

  return generateShadow({
    props: { isFocused: props.state === 'isFocused', hasKeyline: true },
    shadowConfigs,
  });
};

const getColor = (props: ButtonThemeProps) => {
  return pluckStyle({ property: 'color', props, appearances });
};

const getCursor = ({ state }: ButtonThemeProps) => {
  if (state === 'isHovered' || state === 'isActive') return 'pointer';
  if (state === 'isDisabled') return 'not-allowed';
  return 'default';
};

const staticStyles = {
  alignItems: 'center',
  border: 0,
  borderRadius: 4,
  display: 'inline-flex',
  font: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'normal',
  fontWeight: 500,
  height: 32,
  maxWidth: '100%',
  outline: 0,
  padding: '0px 16px',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease-out, box-shadow 0.2s ease-out',
};

export const Theme = createTheme<ButtonThemeTokens, ButtonThemeProps>(
  (props) => {
    return {
      button: {
        ...staticStyles,
        backgroundColor: getBackgroundColor(props),
        boxShadow: getBoxShadow(props),
        color: getColor(props),
        cursor: getCursor(props),
      },
      spinner: {
        backgroundColor: 'transparent',
      },
    };
  },
);

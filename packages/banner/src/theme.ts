import React from 'react';
import { colors, createTheme, shadows, generateShadow } from '@saruni-ui/theme';
import { BannerThemeProps } from './types';

export interface BannerThemeTokens {
  container: React.CSSProperties;
  iconContainer: React.CSSProperties;
}

const appearances = {
  backgroundColor: {
    default: { default: colors.background },
    success: { default: colors.surfaceSuccessSubdued },
    info: { default: colors.surfaceHighlightSubdued },
    warning: { default: colors.surfaceWarningSubdued },
    critical: { default: colors.surfaceCriticalSubdued },
  },
  boxShadowColor: {
    default: { default: colors.borderNeutralSubdued },
    success: { default: colors.borderSuccessSubdued },
    info: { default: colors.borderHighlightSubdued },
    warning: { default: colors.borderWarningSubdued },
    critical: { default: colors.borderCriticalSubdued },
  },
  iconColor: {
    default: { default: colors.icon },
    success: { default: colors.iconSuccess },
    info: { default: colors.iconHighlight },
    warning: { default: colors.iconWarning },
    critical: { default: colors.iconCritical },
  },
};

const getBackgroundColor = (props: BannerThemeProps) => {
  const color = appearances['backgroundColor'][props.appearance]['default'];
  return typeof color === 'object' ? color[props.mode] : color;
};

const getBoxShadow = (props: BannerThemeProps) => {
  const getBoxShadowColor = () => {
    const color = appearances['boxShadowColor'][props.appearance]['default'];
    return typeof color === 'object' ? color[props.mode] : color;
  };

  const shadowConfigs = {
    hasKeyline: [{ values: shadows.state.keyline, color: getBoxShadowColor() }],
  };

  return generateShadow({ props: { hasKeyline: true }, shadowConfigs });
};

const getIconColor = (props: BannerThemeProps) => {
  const color = appearances['iconColor'][props.appearance]['default'];
  return typeof color === 'object' ? color[props.mode] : color;
};

export const Theme = createTheme<BannerThemeTokens, BannerThemeProps>(
  (props) => {
    return {
      container: {
        backgroundColor: getBackgroundColor(props),
        boxShadow: getBoxShadow(props),
        borderRadius: 4,
        display: 'flex',
        padding: 16,
      },
      iconContainer: {
        color: getIconColor(props),
        paddingRight: 16,
      },
    };
  },
);

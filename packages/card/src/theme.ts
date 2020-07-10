import { CSSObject } from '@emotion/core';
import { createTheme, generateShadow, shadows, colors } from '@saruni-ui/theme';

import { CardThemeProps, WIDTH_ENUM } from './types';

export interface CardThemeTokens {
  container: CSSObject;
}

const getBoxShadow = (props: CardThemeProps) => {
  const shadowConfigs = {
    base: [
      {
        values: shadows.state.elevated[props.elevation!].base,
        color: colors.shadowFromDirectLight[props.mode],
      },
    ],
    support: [
      {
        values: shadows.state.elevated[props.elevation!].support,
        color: colors.shadowFromAmbientLight[props.mode],
      },
    ],
  };

  return generateShadow({
    props: { base: true, support: true },
    shadowConfigs,
  });
};

const getCardWidth = (props: CardThemeProps) => {
  if (typeof props.widthValue === 'number') return `${props.widthValue}px`;

  return props.widthName
    ? `${WIDTH_ENUM.widths[props.widthName]}px`
    : props.widthValue || 'auto';
};

export const Theme = createTheme<CardThemeTokens, CardThemeProps>((props) => {
  return {
    container: {
      backgroundColor: props.isChromeless
        ? 'transparent'
        : colors.surface[props.mode],
      boxShadow: props.isChromeless ? undefined : getBoxShadow(props),
      borderRadius: 4,
      width: getCardWidth(props),
      padding: 16,
    },
  };
});

import { CSSObject } from '@emotion/core';
import {
  colors,
  createTheme,
  generateShadow,
  hexToRgba,
  shadows,
  ThemeModes,
} from '@saruni-ui/theme';

interface MenuThemeProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  mode: ThemeModes;
}

interface MenuThemeTokens {
  base: {
    content: CSSObject;
    iconAfterWrapper: CSSObject;
    iconBeforeWrapper: CSSObject;
    wrapper: CSSObject;
  };
  linkItem: CSSObject;
}

const sharedItemStyles = ({
  isDisabled,
  isSelected,
  mode,
}: MenuThemeProps): CSSObject => {
  const shadowConfigs = {
    isFocused: [
      {
        values: shadows.state.focused,
        color: hexToRgba(colors.focused[mode], 0.36),
      },
    ],
  };

  return {
    backgroundColor: isSelected ? colors.surfaceHovered[mode] : 'transparent',
    borderRadius: 4,
    color: isSelected ? colors.interactive[mode] : colors.text[mode],
    cursor: 'pointer',
    display: 'flex',
    margin: `4px 0`,
    padding: `8px 20px`,
    userSelect: 'none',

    '&:hover': {
      backgroundColor: colors.surfaceHovered[mode],
      textDecoration: 'none',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: generateShadow({
        props: { isFocused: true },
        shadowConfigs,
      }),
    },
    '&:active': {
      backgroundColor: colors.surfaceSelectedPressed[mode],
      boxShadow: 'none',
      color: colors.interactive[mode],
    },
    '::-moz-focus-inner': {
      border: 0,
    },
  };
};

export const Theme = createTheme<MenuThemeTokens, MenuThemeProps>((props) => {
  return {
    base: {
      content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        fontWeight: 500,
        outline: 'none',
        overflow: 'hidden',
        textAlign: 'left',
      },
      iconAfterWrapper: {
        display: 'flex',
        flexShrink: 0,
        marginLeft: 12,
      },
      iconBeforeWrapper: {
        display: 'flex',
        flexShrink: 0,
        marginRight: 12,
      },
      wrapper: {
        alignItems: 'center',
        display: 'flex',
        minHeight: 24,
        width: '100%',
      },
    },
    linkItem: {
      ...sharedItemStyles(props),
    },
  };
});

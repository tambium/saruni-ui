import {
  colors,
  createTheme,
  shadows,
  hexToRgba,
  generateShadow,
} from '@saruni-ui/theme';

import { CheckboxThemeProps } from './types';

interface CheckboxThemeTokens {
  hiddenCheckbox: React.CSSProperties;
  customCheckbox: React.CSSProperties;
}

const getBackgroundColor = (props: CheckboxThemeProps) => {
  if (props.isChecked) return colors.interactive[props.mode];
  return colors.background[props.mode];
};

const getBoxShadow = ({
  isActive,
  isChecked,
  isFocused,
  mode,
}: CheckboxThemeProps) => {
  const shadowConfigs = {
    isFocusedOrActive: [
      {
        values: shadows.state.focused,
        color: hexToRgba(colors.focused[mode], 0.36),
      },
    ],
    hasKeyline: [
      {
        values: shadows.state.keyline,
        color: isChecked
          ? colors.interactive[mode]
          : hexToRgba(colors.border[mode], 0.36),
      },
    ],
  };

  return generateShadow({
    props: { hasKeyline: true, isFocusedOrActive: isActive || isFocused },
    shadowConfigs,
  });
};

const getColor = (props: CheckboxThemeProps) => {
  if (props.isChecked) return colors.interactiveText;
  return 'transparent';
};

export const Theme = createTheme<CheckboxThemeTokens, CheckboxThemeProps>(
  (props) => {
    return {
      hiddenCheckbox: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        clippath: 'inset(50%)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: 1,
      },
      customCheckbox: {
        backgroundColor: getBackgroundColor(props),
        boxShadow: getBoxShadow(props),
        borderRadius: 4,
        color: getColor(props),
        transition: '0.2s box-shadow ease',
        '& > span': {
          padding: 2,
        },
      },
    };
  },
);

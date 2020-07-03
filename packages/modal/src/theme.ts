import { CSSObject } from '@emotion/core';
import { createTheme, colors, layers } from '@saruni-ui/theme';

import { ModalThemeProps, WIDTH_ENUM } from './types';
import { IEMaxHeightCalcPx, flexMaxHeightIEFix } from './utils';

export interface ModalThemeTokens {
  positioner: CSSObject;
  modal: CSSObject;
}

const gutter = 24;
const maxWidthDimensions = `calc(100% - ${gutter * 2}px)`;
const maxHeightDimensions = `calc(100% - ${gutter * 2 - IEMaxHeightCalcPx}px)`;

const getModalWidth = (props: ModalThemeProps) => {
  if (typeof props.widthValue === 'number') return `${props.widthValue}px`;

  return props.widthName
    ? `${WIDTH_ENUM.widths[props.widthName]}px`
    : props.widthValue || 'auto';
};

export const getModalHeight = ({
  height,
}: Partial<ModalThemeProps>): string => {
  if (typeof height === 'number') return `${height}px`;
  return height || 'auto';
};

const getBasePositionerStyles = (props: ModalThemeProps) => ({
  display: 'flex',
  flexDirection: 'column',
  height: maxHeightDimensions,
  left: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: maxWidthDimensions,
  pointerEvents: 'none',
  right: 0,
  top: gutter,
  width: getModalWidth(props),
  zIndex: layers.modal,
});

const getBaseResponsivePositionerStyles: React.CSSProperties = {
  height: '100%',
  left: '0',
  maxWidth: '100%',
  position: 'fixed',
  top: '0',
  width: '100%',
};

export const getAbsolutePositionerStyles = (props: ModalThemeProps) =>
  ({
    ...getBasePositionerStyles(props),
    position: 'absolute',

    // '@media (min-width: 320px) and (max-width: 480px)': {
    //   ...getBaseResponsivePositionerStyles,
    // },
  } as CSSObject);

const getRelativePositionerStyles = (props: ModalThemeProps) =>
  ({
    margin: `${gutter}px auto`,
    position: 'relative',
    width: getModalWidth(props),
    zIndex: layers.modal,
    pointerEvents: 'none',

    // '@media (min-width: 320px) and (max-width: 480px)': {
    //   ...getBaseResponsivePositionerStyles,
    // },
  } as CSSObject);

export const getFixedPositionerStyles = (props: ModalThemeProps) =>
  ({
    ...getBasePositionerStyles(props),
    position: 'fixed',
    // '@media (min-width: 320px) and (max-width: 480px)': {
    //   ...getBaseResponsivePositionerStyles,
    // },
  } as CSSObject);

const getPositionerStyles = (props: ModalThemeProps) => {
  if (props.scrollBehavior === 'outside') {
    return getRelativePositionerStyles(props);
  }
  if (props.scrollBehavior === 'inside-wide') {
    return getFixedPositionerStyles(props);
  }
  return getAbsolutePositionerStyles(props);
};

export const Theme = createTheme<ModalThemeTokens, ModalThemeProps>((props) => {
  return {
    positioner: {
      ...getPositionerStyles(props),
    },
    modal: {
      backgroundColor: colors.background[props.mode],
      borderRadius: 4,
      color: colors.text[props.mode],
      display: 'flex',
      flexDirection: 'column',
      height: getModalHeight({ height: props.height }),
      ...flexMaxHeightIEFix,
      outline: 0,
      pointerEvents: 'auto',
    },
  };
});

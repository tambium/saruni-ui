import { CSSObject } from '@emotion/core';
import { createTheme, colors, layers } from '@saruni-ui/theme';

import { ModalThemeProps, WIDTH_ENUM } from './types';
import { IEMaxHeightCalcPx, flexMaxHeightIEFix } from './utils';

export interface ModalThemeTokens {
  body: { container: CSSObject };
  container: CSSObject;
  footer: { container: CSSObject };
  header: { container: CSSObject };
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
  display: 'grid',
  gridTemplateRows: 'minmax(40px,1fr) auto minmax(40px,2fr)',
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

export const getAbsolutePositionerStyles = (props: ModalThemeProps) =>
  ({ ...getBasePositionerStyles(props), position: 'absolute' } as CSSObject);

const getRelativePositionerStyles = (props: ModalThemeProps) =>
  ({
    margin: `${gutter}px auto`,
    position: 'relative',
    width: getModalWidth(props),
    zIndex: layers.modal,
    pointerEvents: 'none',
  } as CSSObject);

export const getFixedPositionerStyles = (props: ModalThemeProps) =>
  ({ ...getBasePositionerStyles(props), position: 'fixed' } as CSSObject);

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
    container: {
      height: '100vh',
      left: 0,
      overflowY: 'auto',
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: layers.modal,
      WebkitOverflowScrolling: 'touch',
    },
    positioner: {
      ...getPositionerStyles(props),
    },
    modal: {
      backgroundColor: colors.surface[props.mode],
      borderRadius: 4,
      color: colors.text[props.mode],
      display: 'flex',
      gridRow: 2,
      flexDirection: 'column',
      height: getModalHeight({ height: props.height }),
      ...flexMaxHeightIEFix,
      outline: 0,
      pointerEvents: 'auto',
    },
    body: {
      container: {
        flex: '1 1 auto',
        padding: 20,
      },
    },
    header: {
      container: {
        alignItems: 'center',
        display: 'flex',
        flex: '0 0 auto',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: '16px 20px 15px 20px',
        boxShadow: `0 1px 0 0 ${colors.borderSubdued[props.mode]}`,
      },
    },
    footer: {
      container: {
        display: 'flex',
        flex: '0 0 auto',
        justifyContent: 'flex-end',
        zIndex: 1,
        padding: '15px 20px 16px 20px',
        boxShadow: `0 -1px 0 0 ${colors.borderSubdued[props.mode]}`,
      },
    },
  };
});

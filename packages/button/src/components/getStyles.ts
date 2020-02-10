import { borderRadius, fontSize, gridSize } from '@tambium-ui/theme';
import { ThemeProps } from '../types';
import { applyPropertyStyle, baseTheme } from '../theme';

const smallButtonHeight = `${(gridSize() * 3) / fontSize()}em`;
const largeButtonHeight = `${(gridSize() * 5) / fontSize()}em`;
const buttonHeight = `${(gridSize() * 4) / fontSize()}em`;

/** Background */
const getBackground = (props: ThemeProps) =>
  applyPropertyStyle('background', props, baseTheme);

/** Border Color */
const getBorderColor = (props: ThemeProps) =>
  applyPropertyStyle('borderColor', props, baseTheme);

/** Color */
const getColor = (props: ThemeProps) =>
  applyPropertyStyle('color', props, baseTheme);

/** Cursor */
const getCursor = ({ state = 'default' }: ThemeProps) =>
  state === 'hovered' || state === 'active' || state === 'selected'
    ? 'pointer'
    : state === 'disabled'
    ? 'not-allowed'
    : 'default';

/** Height */
const getHeight = ({ spacing = 'default' }: ThemeProps) =>
  spacing === 'small'
    ? smallButtonHeight
    : spacing === 'large'
    ? largeButtonHeight
    : spacing === 'none'
    ? 'auto'
    : buttonHeight;

/** Line Height */
const getLineHeight = ({ spacing = 'default' }: ThemeProps) =>
  spacing === 'small'
    ? smallButtonHeight
    : spacing === 'large'
    ? largeButtonHeight
    : spacing === 'none'
    ? 'inherit'
    : buttonHeight;

/** Padding */
const getPadding = ({ spacing = 'default' }: ThemeProps) =>
  spacing === 'small'
    ? `0 ${gridSize() / 2}px`
    : spacing === 'large'
    ? `0 ${gridSize() * 2}px`
    : spacing === 'none'
    ? 0
    : `0 ${gridSize()}px`;

/** Text Decoration */
const getTextDecoration = ({
  appearance = 'default',
  state = 'default',
}: ThemeProps) =>
  state === 'hovered' && (appearance === 'link' || appearance === 'subtle-link')
    ? 'underline'
    : 'inherit';

/** Transition Duration */
const getTransitionDuration = ({ state = 'default' }: ThemeProps) =>
  state === 'active' ? '0s' : state === 'focus' ? '0s, 0.2s' : '0.1s, 0.15s';

/** Vertical Align */
const getVerticalAlign = ({ spacing = 'default' }: ThemeProps) =>
  spacing === 'none' ? 'baseline' : 'middle';

/** Width */
const getWidth = ({ shouldFitContainer }: ThemeProps) =>
  shouldFitContainer ? '100%' : 'auto';

/** Base styles */
const staticStyles = {
  alignItems: 'baseline',
  borderStyle: 'solid',
  borderWidth: 1,
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontSize: 'inherit',
  fontStyle: 'normal',
  fontWeight: 'normal',
  maxWidth: '100%',
  outline: 'none !important',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background-color .08s ease-in, color .08s ease-in',
  whiteSpace: 'nowrap',
};

export const getButtonStyles = (props: ThemeProps) => ({
  ...staticStyles,
  backgroundColor: getBackground(props),
  borderRadius: `${borderRadius()}px`,
  borderColor: getBorderColor(props),
  color: `${getColor(props)}`,
  cursor: getCursor(props),
  height: getHeight(props),
  lineHeight: getLineHeight(props),
  padding: getPadding(props),
  transitionDuration: getTransitionDuration(props),
  verticalAlign: getVerticalAlign(props),
  width: getWidth(props),

  '&::-moz-focus-inner': {
    border: 0,
    margin: 0,
    padding: 0,
  },

  '&:hover': {
    textDecoration: getTextDecoration(props),
  },

  ...(props.isPending && { pointerEvents: 'none' }),
});

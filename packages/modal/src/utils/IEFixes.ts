/* Adjusts flex parent height to account for subtraction in `flexMaxHeightIEFix`. */
export const IEMaxHeightCalcPx = 1;

/**
 * Flex column children overflow the height of their parents in IE.
 * Fix is to set a pixel max-height on the flex children.
 * More: https://github.com/philipwalton/flexbugs/issues/216
 */
export const flexMaxHeightIEFix = {
  maxHeight: '100%',
  // '@media only screen and (-ms-high-contrast:active), (-ms-high-contrast:none)': {
  //   maxHeight: `calc(100% - ${IEMaxHeightCalcPx}px)`,
  // },
};

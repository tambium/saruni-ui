const isRgb = (color: string): boolean => /rgba?\(/.test(color);

const isHex = (color: string): boolean =>
  /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);

/**
 * @return String with HEX-coded color
 */
const normalizeHexColor = (color: string | null): string | null => {
  if (!color) {
    return null;
  }

  // Normalize to hex
  color = color.trim().toLowerCase();
  if (isHex(color)) {
    // Normalize 3-hex to 6-hex colours
    if (color.length === 4) {
      color = color
        .split('')
        .map((c) => (c === '#' ? '#' : `${c}${c}`))
        .join('');
    }
  } else if (isRgb(color)) {
    return rgbToHex(color);
  } else return null;

  return color;
};

/**
 * Converts hex color format to rgb.
 * Works with full hex color format and shortcut.
 *
 * @param color - hex color string (#xxx, or #xxxxxx)
 */
export const hexToRgb = (color: string): string | null => {
  if (!isHex(color)) {
    return null;
  }

  let colorBits = color.substring(1).split('');
  if (colorBits.length === 3) {
    colorBits = [
      colorBits[0],
      colorBits[0],
      colorBits[1],
      colorBits[1],
      colorBits[2],
      colorBits[2],
    ];
  }

  const rgb = Number(`0x${colorBits.join('')}`);
  return `rgb(${(rgb >> 16) & 255},${(rgb >> 8) & 255},${rgb & 255})`;
};

/**
 * Converts hex color format to rgba.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
export const hexToRgba = (rawColor: string, alpha: number): string => {
  const color = normalizeHexColor(rawColor);
  if (!color) return ``;
  const hex2rgb = (color: string) =>
    color.match(/[a-z0-9]{2}/gi)!.map((hex) => parseInt(hex, 16));
  return `rgba(${hex2rgb(color).concat(alpha).join(',')})`;
};

export const rgbToHex = (value: string): string | null => {
  const matches = value.match(/(0?\.?\d{1,3})%?\b/g);

  if (matches && matches.length >= 3) {
    const [red, green, blue] = matches.map(Number);
    return (
      '#' +
      (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1)
    );
  }

  return null;
};

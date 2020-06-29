export const mapAttributesToState = ({
  isDisabled = false,
  isActive = false,
  isFocused = false,
  isHovered = false,
}): string => {
  if (isDisabled) return 'isDisabled';
  if (isActive) return 'isActive';
  if (isHovered) return 'isHovered';
  if (isFocused) return 'isFocused';
  return 'default';
};

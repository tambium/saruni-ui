export const mapAttributesToState = ({
  isDisabled = false,
  isActive = false,
  isFocused = false,
  isHovered = false,
  isSelected = false,
}) => {
  if (isDisabled) {
    return 'disabled';
  }
  if (isSelected && isFocused) {
    return 'focusedSelected';
  }
  if (isSelected) {
    return 'selected';
  }
  if (isActive) {
    return 'active';
  }
  if (isHovered) {
    return 'hovered';
  }
  if (isFocused) {
    return 'focused';
  }
  return 'default';
};

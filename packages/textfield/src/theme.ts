import { createTheme } from '@saruni-ui/theme-next';

export const Theme = createTheme((themeProps) => {
  return {
    container: {
      backgroundColor: themeProps.mode === 'light' ? 'red' : 'blue',
      borderWidth: 20,
    },
  };
});

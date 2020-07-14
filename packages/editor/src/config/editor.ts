import { EditorConfig } from '../types';

export const defaultConfig: EditorConfig = {
  plugins: {
    options: 'inline',
  },
  toolbar: {
    top: {
      options: 'inline',
      block: { options: 'p h1 h2 h3 h4 h5 h6', grouped: true },
      inline: { options: 'strong em underline strike code' },
    },
  },
};

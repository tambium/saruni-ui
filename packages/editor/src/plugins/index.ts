import common from './common';
import inline from './inline';

import { EditorPlugin } from '../types';

export const Plugins: { [key: string]: EditorPlugin } = {
  common,
  inline,
};

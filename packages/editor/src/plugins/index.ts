import common from './common';
import inline from './inline';

import { EditorPlugin } from '../types';

export const Plugins: { [key: string]: EditorPlugin } = {
  // @ts-ignore
  common,
  // @ts-ignore
  inline,
};

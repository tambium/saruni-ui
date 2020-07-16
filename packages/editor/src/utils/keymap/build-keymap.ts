import { Schema } from 'prosemirror-model';
import { toggleMark } from 'prosemirror-commands';

import { KeymapPluginType } from '../../types';

export const buildKeymap = (schema: Schema): KeymapPluginType => {
  return {
    'Mod-b': toggleMark(schema.marks.strong),
  };
};

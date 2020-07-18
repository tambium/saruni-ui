import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';

import { doc, paragraph, text } from '../../schema';
import { EditorPlugin } from '../../types/editor-plugin';

interface BasePluginOptions {}

export const base = (options?: BasePluginOptions): EditorPlugin => ({
  name: 'base',

  nodes() {
    return [
      { name: 'doc', node: doc },
      { name: 'paragraph', node: paragraph },
      { name: 'text', node: text },
    ];
  },

  pmPlugins() {
    return [
      {
        name: 'codeBlockIndent',
        plugin: keymap(baseKeymap),
      },
    ];
  },
});

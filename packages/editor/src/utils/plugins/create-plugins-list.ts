import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { gapCursor } from 'prosemirror-gapcursor';
import { Plugin } from 'prosemirror-state';

import { EditorPluginListOptions } from '../../types';
import { buildInputRules } from '../../plugins/input-rules';
import { createTextFormattingPlugin } from '../../plugins/text-formatting';
import { createTextAlignmentPlugin } from '../../plugins/text-alignment';
import { buildKeymap } from '../keymap/build-keymap';

export const createPluginList = (
  options: EditorPluginListOptions,
): Array<Plugin> => {
  const plugins = [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema)),
    keymap(baseKeymap),
    gapCursor(),

    createTextFormattingPlugin(),
    createTextAlignmentPlugin(),
  ];

  return plugins;
};

import {
  Plugin,
  EditorState,
  PluginKey,
  StateField,
  Transaction,
} from 'prosemirror-state';

import { toggleTextAlignment } from '../../commands';
import { TextAlignmentPluginState } from '../../types';

export const pluginKey = new PluginKey('textAlignment');

export const createTextAlignmentPlugin = (): Plugin<
  StateField<TextAlignmentPluginState>
> => {
  return new Plugin({
    key: pluginKey,
    state: {
      init(): TextAlignmentPluginState {
        return {
          alignmentDisabled: false,
        };
      },

      apply(
        tr: Transaction,
        oldPluginState: TextAlignmentPluginState,
        _,
        newEditorState: EditorState,
      ): TextAlignmentPluginState {
        if (tr.selectionSet || tr.docChanged) {
          return {
            ...oldPluginState,
            alignmentDisabled: !toggleTextAlignment('left')(newEditorState),
          };
        }

        return oldPluginState;
      },
    },
  });
};

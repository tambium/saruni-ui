import { EditorState, Plugin, PluginKey, Transaction } from 'prosemirror-state';

export const pluginKey = new PluginKey('lists');

export interface ListsState {
  bulletListActive: boolean;
  bulletListDisabled: boolean;
  orderedListActive: boolean;
  orderedListDisabled: boolean;
}

export const plugin = () =>
  new Plugin({
    state: {
      init: (): ListsState => ({
        bulletListActive: false,
        bulletListDisabled: false,
        orderedListActive: false,
        orderedListDisabled: false,
      }),
      apply(
        tr: Transaction,
        pluginState: ListsState,
        oldState: EditorState,
        newState: EditorState,
      ): ListsState {
        const { bulletList, orderedList } = newState.schema.nodes;
        return pluginState;
      },
    },
    key: pluginKey,
    props: {},
  });

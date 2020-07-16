import { EditorView } from 'prosemirror-view';

import { EditorPluginStates } from './.';

export type EditorContextType = {
  editorPluginStates: EditorPluginStates;
  editorView: EditorView | null;
};

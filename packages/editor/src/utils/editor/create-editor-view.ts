import { EditorState, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Plugin } from 'prosemirror-state';

import { schema } from '../../schema';
import { createPluginList } from '../plugins/create-plugins-list';

const plugins = createPluginList({
  schema,
});

type CreateEditorViewOptions = {
  onCreateEditorView: (
    newEditorState: EditorState,
    plugins: Array<Plugin>,
  ) => void;
  onUpdateEditorState: (
    newEditorState: EditorState,
    plugins: Array<Plugin>,
  ) => void;
};

export const createEditorView = (
  target: HTMLDivElement,
  options: CreateEditorViewOptions,
): EditorView => {
  const { onUpdateEditorState, onCreateEditorView } = options;

  const editorView = new EditorView(target, {
    state: EditorState.create({
      plugins,
      schema,
    }),
    dispatchTransaction(tr: Transaction) {
      const newEditorState = editorView.state.apply(tr);
      editorView.updateState(newEditorState);
      onUpdateEditorState(newEditorState, plugins);
    },
  });

  onCreateEditorView(editorView.state, plugins);

  return editorView;
};

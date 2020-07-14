import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import {
  EditorPlugin,
  ProseMirrorDocument,
  ProseMirrorViewProvider,
} from '../types';
import { buildKeymap } from './keymap';
import { buildSchema } from './schema';
import { getProseMirrorPlugins } from './plugins';

const defaultContent = {
  doc: {
    type: 'doc',
    content: [{ type: 'paragraph' }],
  },
  selection: {
    type: 'text',
    anchor: 1,
    head: 1,
  },
};

export const buildEditorState = (
  plugins: EditorPlugin[],
  content?: ProseMirrorDocument,
  viewProvider?: ProseMirrorViewProvider,
) => {
  const editorContent = content || defaultContent;
  return EditorState.fromJSON(
    {
      schema: buildSchema(plugins),
      plugins: [
        buildKeymap(plugins, viewProvider),
        ...getProseMirrorPlugins(plugins),
      ],
    },
    editorContent,
  );
};

export const updateEditorState = (view: EditorView, state: EditorState) => {
  view.updateState(state);
  return view;
};

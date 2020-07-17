import { EditorState, Transaction } from 'prosemirror-state';

export type EditorDispatch = (tr: Transaction) => void;

export type Command = (
  state: EditorState,
  editorDispatch?: EditorDispatch,
) => boolean;

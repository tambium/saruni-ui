import { EditorView } from 'prosemirror-view';

export interface EditorProps {
  onChange: (document: EditorView) => void;
}

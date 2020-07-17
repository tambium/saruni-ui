import { EditorView } from 'prosemirror-view';
import { MarkSpec, NodeSpec } from 'prosemirror-model';

/** Used internally... */
export interface EditorPrivateConfig {
  editorView: EditorView;
}

export interface NodeConfig {
  name: string;
  node: NodeSpec;
}

export interface MarkConfig {
  name: string;
  mark: MarkSpec;
}

/** Commonly used externally... */
export interface EditorConfig {
  marks: MarkConfig[];
  nodes: NodeConfig[];
}

import { EditorView } from 'prosemirror-view';
import { MarkSpec, NodeSpec } from 'prosemirror-model';

/**
 * Provides access to classes and configurations
 * editor components depend on.
 */
export interface EditorSharedConfig {
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

export interface EditorConfig {
  marks: MarkConfig[];
  nodes: NodeConfig[];
}

import { EditorView } from 'prosemirror-view';
import { MarkSpec, NodeSpec } from 'prosemirror-model';

import { EditorProps } from './editor';

/**
 * Provides access to classes and configurations
 * editor components depend on.
 */
export interface EditorSharedConfig {
  disabled: EditorProps['disabled'];
  editorView: EditorView;
  onChange?: EditorProps['onChange'];
  onDestroy?: EditorProps['onDestroy'];
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

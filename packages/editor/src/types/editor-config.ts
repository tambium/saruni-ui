import { EditorView } from 'prosemirror-view';
import { MarkSpec, NodeSpec } from 'prosemirror-model';

import { EditorProps } from './editor';
import { PMPlugin } from './editor-plugin';
import { ToolbarComponentFactory } from './toolbar';

/**
 * Provides access to classes and configurations
 * editor components depend on.
 */
export interface EditorSharedConfig {
  disabled: EditorProps['disabled'];
  editorView: EditorView;
  onChange?: EditorProps['onChange'];
  onDestroy?: EditorProps['onDestroy'];
  toolbarComponents?: ToolbarComponentFactory[];
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
  pmPlugins: PMPlugin[];
  toolbarComponents: ToolbarComponentFactory[];
}

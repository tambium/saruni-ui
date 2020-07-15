import { NodeSpec, MarkSpec } from 'prosemirror-model';
import {
  PMPlugin,
  UIComponentFactory,
  ToolbarUIComponentFactory,
} from './editor-plugin';

export interface NodeConfig {
  name: string;
  node: NodeSpec;
}

export interface MarkConfig {
  name: string;
  mark: MarkSpec;
}

export interface EditorConfig {
  nodes: NodeConfig[];
  marks: MarkConfig[];
  pmPlugins: Array<PMPlugin>;
  contentComponents: UIComponentFactory[];
  primaryToolbarComponents: ToolbarUIComponentFactory[];
}

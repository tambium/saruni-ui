import { Plugin } from 'prosemirror-state';

import { MarkConfig, NodeConfig } from './editor-config';
import { ToolbarComponentFactory } from './toolbar';

export type PMPlugin = {
  name: string;
  plugin: Plugin | undefined;
};

export interface EditorPlugin {
  marks?: () => MarkConfig[];
  name: string;
  nodes?: () => NodeConfig[];
  pmPlugins?: (pluginOptions?: any) => PMPlugin[];
  toolbarComponent?: ToolbarComponentFactory;
}

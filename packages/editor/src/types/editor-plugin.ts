import { Plugin } from 'prosemirror-state';

import { MarkConfig, NodeConfig } from './editor-config';

export type PMPlugin = {
  name: string;
  plugin: Plugin | undefined;
};

export interface EditorPlugin {
  marks?: () => MarkConfig[];
  name: string;
  nodes?: () => NodeConfig[];
  pmPlugins?: (pluginOptions?: any) => PMPlugin[];
}

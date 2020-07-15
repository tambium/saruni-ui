import { Plugin } from 'prosemirror-state';
import { Schema } from 'prosemirror-model';

import { MarkConfig, NodeConfig, EditorConfig } from './editor-config';
import { EditorView } from 'prosemirror-view';

export type PMPluginFactoryParams = {
  schema: Schema;
};

export type PluginsOptions = {
  [pluginName: string]: any;
};

export type PMPluginFactory = (
  params: PMPluginFactoryParams,
) => Plugin | undefined;

export type PMPlugin = {
  name: string;
  plugin: PMPluginFactory;
};

export type UiComponentFactoryParams = {
  editorView: EditorView;
  containerElement: HTMLElement | undefined;
  disabled: boolean;
};

export type UIComponentFactory = (
  params: UiComponentFactoryParams,
) => React.ReactElement<any> | null;

export type ToolbarUiComponentFactoryParams = UiComponentFactoryParams & {};

export type ToolbarUIComponentFactory = (
  params: ToolbarUiComponentFactoryParams,
) => React.ReactElement<any> | null;

export interface EditorPlugin {
  /** Name of plugin. */
  name: string;
  /** Options passed to plugin with corresponding name if it exists and is enabled. */
  pluginsOptions?: PluginsOptions;
  /** List of ProseMirror plugins. This is where we define which plugins will be added to EditorView (main-plugin, keybindings, input-rules, etc.). */
  pmPlugins?: (pluginOptions?: any) => Array<PMPlugin>;
  /** List of Nodes to add to the schema. */
  nodes?: () => NodeConfig[];
  /** List of Marks to add to the schema. */
  marks?: () => MarkConfig[];
  /** Optional UI-component that lives inside the actual content-area (like mention-picker, floating toolbar for links, etc.) */
  contentComponent?: UIComponentFactory;
  /** Optional UI-component that will be added to the toolbar at the top of the editor (doesn't exist in the compact-editor). */
  primaryToolbarComponent?: ToolbarUIComponentFactory;
}

export type PMPluginCreateConfig = PMPluginFactoryParams & {
  editorConfig: EditorConfig;
};

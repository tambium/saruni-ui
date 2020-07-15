import { Schema, MarkSpec, NodeSpec } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';

import { EditorConfig } from '../types/editor-config';
import {
  EditorPlugin,
  PluginsOptions,
  PMPluginCreateConfig,
} from '../types/editor-plugin';

export function processPluginsList(plugins: EditorPlugin[]): EditorConfig {
  /** First pass to collect pluginsOptions. */
  const pluginsOptions = plugins.reduce((acc, plugin) => {
    if (plugin.pluginsOptions) {
      Object.keys(plugin.pluginsOptions).forEach((pluginName) => {
        if (!acc[pluginName]) {
          acc[pluginName] = [];
        }
        acc[pluginName].push(plugin.pluginsOptions![pluginName]);
      });
    }

    return acc;
  }, {} as PluginsOptions);

  /** Process plugins */
  return plugins.reduce(
    (acc, plugin) => {
      if (plugin.pmPlugins) {
        acc.pmPlugins.push(
          ...plugin.pmPlugins(
            plugin.name ? pluginsOptions[plugin.name] : undefined,
          ),
        );
      }

      if (plugin.nodes) {
        acc.nodes.push(...plugin.nodes());
      }

      if (plugin.marks) {
        acc.marks.push(...plugin.marks());
      }

      if (plugin.contentComponent) {
        acc.contentComponents.push(plugin.contentComponent);
      }

      if (plugin.primaryToolbarComponent) {
        acc.primaryToolbarComponents.push(plugin.primaryToolbarComponent);
      }

      return acc;
    },
    {
      nodes: [],
      marks: [],
      pmPlugins: [],
      contentComponents: [],
      primaryToolbarComponents: [],
      secondaryToolbarComponents: [],
    } as EditorConfig,
  );
}

export function createSchema(editorConfig: EditorConfig) {
  const marks = editorConfig.marks.reduce((acc, mark) => {
    acc[mark.name] = mark.mark;
    return acc;
  }, {} as { [nodeName: string]: MarkSpec });
  const nodes = editorConfig.nodes.reduce((acc, node) => {
    acc[node.name] = node.node;
    return acc;
  }, {} as { [nodeName: string]: NodeSpec });

  return new Schema({ nodes, marks });
}

export function createPMPlugins({
  editorConfig,
  schema,
}: PMPluginCreateConfig): Plugin[] {
  return editorConfig.pmPlugins
    .map(({ plugin }) => plugin({ schema }))
    .filter((plugin) => !!plugin) as Plugin[];
}

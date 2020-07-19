import { EditorConfig } from '../../types/editor-config';
import { EditorPlugin } from '../../types/editor-plugin';

export const createEditorConfig = (plugins: EditorPlugin[]): EditorConfig => {
  return plugins.reduce(
    (acc, plugin) => {
      if (plugin.pmPlugins) {
        acc.pmPlugins.push(...plugin.pmPlugins());
      }

      if (plugin.nodes) {
        acc.nodes.push(...plugin.nodes());
      }

      if (plugin.marks) {
        acc.marks.push(...plugin.marks());
      }

      if (plugin.toolbarComponent) {
        acc.toolbarComponents.push(plugin.toolbarComponent);
      }

      return acc;
    },
    {
      nodes: [],
      marks: [],
      pmPlugins: [],
      toolbarComponents: [],
    } as EditorConfig,
  );
};

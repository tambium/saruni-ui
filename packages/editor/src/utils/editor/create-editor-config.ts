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

      return acc;
    },
    {
      nodes: [],
      marks: [],
      pmPlugins: [],
    } as EditorConfig,
  );
};

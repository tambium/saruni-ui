import { PluginKey } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

export const getPluginsStates = (
  plugins: { [name: string]: PluginKey },
  editorView?: EditorView,
) => {
  if (!editorView || !plugins) {
    return {};
  }

  return Object.keys(plugins).reduce<Record<string, any>>((acc, propName) => {
    const pluginKey = plugins[propName];
    if (!pluginKey) {
      return acc;
    }
    acc[propName] = pluginKey.getState(editorView.state);
    return acc;
  }, {});
};

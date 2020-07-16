import { EditorState, PluginKey, Plugin } from 'prosemirror-state';

import { EditorPluginStates, PluginState } from '../../types';
import { pluginKey as textFormattingPluginKey } from '../../plugins/text-formatting';
import { pluginKey as textAlignmentPluginKey } from '../../plugins/text-alignment';

const generateNewPluginStates = (
  pluginSpecs: WeakMap<PluginKey, PluginState>,
): EditorPluginStates => {
  return {
    textFormattingPluginState: pluginSpecs.get(textFormattingPluginKey),
    textAlignmentPluginState: pluginSpecs.get(textAlignmentPluginKey),
  };
};

export const buildPluginStates = (
  newEditorState: EditorState,
  plugins: Array<Plugin>,
): EditorPluginStates => {
  const pluginStates = plugins
    .map((plugin) => {
      if (plugin.spec.key instanceof PluginKey) {
        return plugin;
      }

      return null;
    })
    .filter(Boolean)
    .reduce((acc, currentValue) => {
      if (currentValue && currentValue.spec && currentValue.spec.key) {
        acc.set(
          currentValue.spec.key,
          currentValue.spec.key.getState(newEditorState),
        );
      }

      return acc;
    }, new WeakMap<PluginKey, PluginState>());

  return generateNewPluginStates(pluginStates);
};

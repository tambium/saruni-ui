import { getPluginArray } from './plugins';
import { EditorPlugin, Addon } from '../types';

export const getToolbarComponents = (
  pluginOption: string,
  toolbarOptions: string,
  addons: Addon[] = [],
) => {
  const pluginOpt = pluginOption.trim().split(' ');
  const toolbarOpt = toolbarOptions.trim().split(' ');
  const supportedOptions = toolbarOpt.filter(
    (opt) =>
      pluginOpt.indexOf(opt) >= 0 ||
      addons.some((addon) => addon.name === opt) ||
      opt === 'history',
  );

  return getPluginArray(supportedOptions, addons).map(
    (plugin: EditorPlugin) => {
      return {
        name: plugin.name,
        toolbarComponent: plugin.toolbarComponent,
      };
    },
  );
};

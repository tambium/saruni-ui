import { Plugin } from 'prosemirror-state';
import { Plugins } from '../plugins';

import { EditorPlugin, Addon } from '../types';

export const getProseMirrorPlugins = (plugins: EditorPlugin[]) => {
  let pluginList: Plugin[] = [];
  plugins.forEach((p) => {
    if (p) {
      if (p.plugins) {
        // @ts-ignore
        pluginList = [...pluginList, ...p.plugins];
      } else if (p.plugin) {
        // @ts-ignore
        pluginList = [...pluginList, p.plugin];
      }
    }
  });
  return pluginList;
};

export const getPluginList = (plugins: string) =>
  plugins
    .trim()
    .split(' ')
    .reduce((pluginList, plugin) => {
      if (pluginList && pluginList.indexOf(plugin) < 0) {
        pluginList.push(plugin);
      }
      return pluginList;
    }, [] as string[])
    .map((key) => Plugins[key]);

export const getPluginArray = (plugins: string[], addons: Addon[]) =>
  plugins.map(
    (key) => Plugins[key] || addons.find((a: Addon) => a.name === key),
  );

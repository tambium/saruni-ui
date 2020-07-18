import { Plugin } from 'prosemirror-state';

import { EditorConfig } from '../../types';
import { ranks } from '../../plugins/rank';

export function sortByOrder(item: 'plugins' | 'nodes' | 'marks') {
  return function (a: { name: string }, b: { name: string }): number {
    return ranks[item].indexOf(a.name) - ranks[item].indexOf(b.name);
  };
}

export const createPMPlugins = ({
  editorConfig,
}: {
  editorConfig: EditorConfig;
}): Plugin[] => {
  return editorConfig.pmPlugins
    .sort(sortByOrder('plugins'))
    .map(({ plugin }) => plugin)
    .filter((plugin) => !!plugin) as Plugin[];
};

import { em, strike, strong } from '../../schema';
import { EditorPlugin } from '../../types/editor-plugin';
import { plugin as textFormattingPlugin } from './pm-plugins/text-formatting';

interface TextFormattingPluginOptions {}

export const textFormatting = (
  options?: TextFormattingPluginOptions,
): EditorPlugin => ({
  name: 'textFormatting',

  marks() {
    return [
      { name: 'em', mark: em },
      { name: 'strike', mark: strike },
      { name: 'strong', mark: strong },
    ];
  },

  pmPlugins() {
    return [
      {
        name: 'textFormatting',
        plugin: textFormattingPlugin(),
      },
    ];
  },
});

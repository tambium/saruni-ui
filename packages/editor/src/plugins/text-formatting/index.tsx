import React from 'react';

import { em, strike, strong, underline } from '../../schema';
import { EditorPlugin } from '../../types/editor-plugin';
import {
  plugin as textFormattingPlugin,
  pluginKey as textFormattingPluginKey,
} from './pm-plugins/text-formatting';
import { ToolbarTextFormatting } from './ui';
import { WithPluginState } from '../../hocs/with-plugin-state';

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
      { name: 'underline', mark: underline },
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

  toolbarComponent({ editorView }) {
    return (
      <WithPluginState
        editorView={editorView}
        plugins={{
          textFormattingState: textFormattingPluginKey,
        }}
      >
        {({ textFormattingState }: any) => (
          <ToolbarTextFormatting
            editorView={editorView}
            textFormattingState={textFormattingState}
          />
        )}
      </WithPluginState>
    );
  },
});

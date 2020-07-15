import React from 'react';
import {
  plugin as textFormattingPlugin,
  pluginKey as textFormattingPluginKey,
} from './pm-plugins/core';
import { code, em, strike, strong, underline } from '../../schema';
import { EditorPlugin } from '../../types/editor-plugin';

interface TextFormattingOptions {}

export const textFormatting = (
  options: TextFormattingOptions,
): EditorPlugin => ({
  name: 'textFormatting',

  marks() {
    return [
      { name: 'code', mark: code },
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
        plugin: ({ dispatch }) => textFormattingPlugin(dispatch),
      },
    ];
  },

  primaryToolbarComponent() {
    return <div>Hello</div>;
  },
});

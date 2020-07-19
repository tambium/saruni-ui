import React from 'react';

import {
  plugin as listsPlugin,
  pluginKey as listsPluginKey,
} from './pm-plugins/lists';
import { EditorPlugin } from '../../types';
import { bulletList, listItem, orderedList } from '../../schema';
import { WithPluginState } from '../../hocs/with-plugin-state';
import { ToolbarLists } from './ui/toolbar-lists';

interface ListsPluginOptions {}

export const lists = (options?: ListsPluginOptions): EditorPlugin => ({
  name: 'lists',

  nodes() {
    return [
      { name: 'bulletList', node: bulletList },
      { name: 'orderedList', node: orderedList },
      { name: 'listItem', node: listItem },
    ];
  },

  pmPlugins() {
    return [{ name: 'lists', plugin: listsPlugin() }];
  },

  toolbarComponent({ editorView }) {
    return (
      <WithPluginState
        editorView={editorView}
        plugins={{ listsState: listsPluginKey }}
      >
        {({ listsState }) => (
          <ToolbarLists editorView={editorView} listsState={listsState} />
        )}
      </WithPluginState>
    );
  },
});

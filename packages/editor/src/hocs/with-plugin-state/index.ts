import React from 'react';
import { PluginKey } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { getPluginsStates } from '../../utils/plugins/get-plugins-states';

interface WithPluginStateProps {
  children: (state: Record<string, any>) => React.ReactElement;
  editorView?: EditorView;
  plugins: { [name: string]: PluginKey };
}

export const WithPluginState = ({
  children,
  editorView,
  plugins,
}: WithPluginStateProps) => {
  const state = getPluginsStates(plugins, editorView);

  return children({
    ...state,
  });
};

import React from 'react';

import { EditorContextType } from '../types/context';

export const {
  Consumer: EditorConsumer,
  Provider: EditorProvider,
} = React.createContext<EditorContextType>({
  editorView: null,
  editorPluginStates: {},
});

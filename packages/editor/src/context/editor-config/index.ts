import React from 'react';
import { EditorSharedConfig } from '../../types/editor-config';

const EditorConfigContext = React.createContext<EditorSharedConfig | null>(
  null,
);

export const {
  Consumer: EditorConfigConsumer,
  Provider: EditorConfigProvider,
} = EditorConfigContext;

export const useEditorConfig = () => React.useContext(EditorConfigContext);

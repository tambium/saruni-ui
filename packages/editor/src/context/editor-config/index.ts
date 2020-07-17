import React from 'react';
import { EditorPrivateConfig } from '../../types/editor-config';

const EditorConfigContext = React.createContext<EditorPrivateConfig | null>(
  null,
);

export const {
  Consumer: EditorConfigConsumer,
  Provider: EditorConfigProvider,
} = EditorConfigContext;

export const useEditorConfig = () => React.useContext(EditorConfigContext);

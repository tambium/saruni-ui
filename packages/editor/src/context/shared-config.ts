import React from 'react';
import { EditorView } from 'prosemirror-view';
import { EditorPluginStates } from '../types';

export interface EditorSharedConfig {
  editorPluginStates: EditorPluginStates;
  editorRef: React.MutableRefObject<HTMLDivElement | null>;
  editorView: EditorView | null;
}

export const EditorSharedConfigContext = React.createContext<EditorSharedConfig | null>(
  null,
);

export const {
  Consumer: EditorSharedConfigConsumer,
  Provider: EditorSharedConfigProvider,
} = EditorSharedConfigContext;

export const useEditorSharedConfig = () =>
  React.useContext(EditorSharedConfigContext);

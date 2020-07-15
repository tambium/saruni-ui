import React from 'react';

import { processPluginsList } from '../create-editor/create-editor';
import { basePlugin, textFormattingPlugin } from '../plugins';
import { EditorProps } from '../types/editor-props';
import { EditorConfig } from '../types/editor-config';

interface EditorContextProviderProps extends EditorProps {
  children?: React.ReactNode;
}

interface IEditorContext {
  config: EditorConfig;
}

const EditorContext = React.createContext({} as IEditorContext);

export const EditorContextProvider: React.FC<EditorContextProviderProps> = (
  props,
) => {
  const { children, ...rest } = props;

  const getDefaultPluginsList = (props: EditorProps) => {
    return [basePlugin({}), textFormattingPlugin({})];
  };

  const createPluginList = (props: EditorProps) => {
    const plugins = getDefaultPluginsList(props);
    return plugins;
  };

  const getPlugins = (editorProps: EditorProps) => {
    return createPluginList(editorProps);
  };

  const config = processPluginsList(getPlugins(rest));

  return (
    <EditorContext.Provider value={{ config }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => ({
  ...React.useContext(EditorContext),
});

export const withContext = (ComposedComponent: React.FC<EditorProps>) => {
  return function (props: EditorProps) {
    return (
      <EditorContextProvider {...props}>
        <ComposedComponent {...props} />
      </EditorContextProvider>
    );
  };
};

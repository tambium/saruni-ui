import React from 'react';

import { Editor } from './Editor';
import { EditorProps } from '../types';
import { ConfigContextProvider } from '../context/config';
import { StateContextProvider } from '../context/editor-state';
import { Toolbar } from './Toolbar';

interface EditorWrapperProps extends EditorProps {
  isToolbarVisible?: boolean;
}

export const EditorWrapper: React.FC<EditorWrapperProps> = (props) => {
  const { isToolbarVisible = true, ...rest } = props;

  return (
    <ConfigContextProvider>
      <StateContextProvider>
        {isToolbarVisible && <Toolbar />}
        <Editor {...rest} />
      </StateContextProvider>
    </ConfigContextProvider>
  );
};

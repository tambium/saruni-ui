import React from 'react';

import { EditorProps } from '../types/editor';
import { EditorInternal } from './EditorInternal';
import { basePlugin, textFormattingPlugin } from '../plugins';

export const Editor: React.FC<EditorProps> = (props) => {
  const plugins = [basePlugin(), textFormattingPlugin()];

  return (
    <React.Fragment>
      <EditorInternal {...props} plugins={plugins} />
    </React.Fragment>
  );
};

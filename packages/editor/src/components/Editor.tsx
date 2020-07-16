import React from 'react';
import { css, Global } from '@emotion/core';

import { EditorMount } from './EditorMount';
import { EditorProps } from '../types';

export const Editor: React.FC<EditorProps> = (props) => {
  const editorRef = React.useRef<HTMLDivElement>(document.createElement('div'));

  return (
    <React.Fragment>
      <EditorMount editorRef={editorRef} {...props} />
      <div id="editor" ref={editorRef} />
      <Global
        styles={css`
          .text-align__centre {
            text-align: center;
          }

          .text-align__right {
            text-align: right;
          }
        `}
      />
    </React.Fragment>
  );
};

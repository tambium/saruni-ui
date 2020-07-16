import React from 'react';
import { css, Global } from '@emotion/core';

import { EditorProps } from '../types';
import { EditorInternal } from './EditorInternal';

export const Editor: React.FC<EditorProps> = (props) => {
  return (
    <React.Fragment>
      <EditorInternal {...props} />

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

import React from 'react';
import { DirectEditorProps } from 'prosemirror-view';

import { EditorSharedConfig } from '../../types/editor-config';
import { createDispatchTransaction } from '../../utils/editor/create-dispatch-transaction';

export const useApplyEditorViewProps = (
  editorSharedConfig: EditorSharedConfig | null,
  disabled?: boolean,
) => {
  React.useEffect(() => {
    if (editorSharedConfig) {
      editorSharedConfig.editorView.setProps({
        dispatchTransaction: createDispatchTransaction(editorSharedConfig),
      } as DirectEditorProps);

      editorSharedConfig.editorView.setProps({
        editable: (_state) => !disabled,
      } as DirectEditorProps);
    }
  }, [editorSharedConfig, disabled]);
};

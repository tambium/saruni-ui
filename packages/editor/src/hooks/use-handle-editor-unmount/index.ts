import React from 'react';
import { DirectEditorProps } from 'prosemirror-view';

import { EditorSharedConfig } from '../../types/editor-config';

export const useHandleEditorUnmount = (
  editorConfigRef: React.MutableRefObject<EditorSharedConfig | null>,
) => {
  React.useEffect(() => {
    const editorSharedConfig = editorConfigRef;

    return () => {
      if (!editorSharedConfig.current) {
        return;
      }

      const { editorView, onDestroy } = editorSharedConfig.current;

      if (editorView) {
        // Prevent transactions when unmounting
        editorView.setProps({
          dispatchTransaction: (tr) => {},
        } as DirectEditorProps);

        if (onDestroy) {
          onDestroy();
        }

        // Destroy plugin and editor state when unmounting
        const editorState = editorView.state;
        editorState.plugins.forEach((plugin) => {
          const state = plugin.getState(editorState);
          if (state && state.destroy) {
            state.destroy();
          }
        });

        editorView.destroy();
      }
    };
  }, [editorConfigRef]);
};

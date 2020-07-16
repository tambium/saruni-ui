import React from 'react';
import { EditorView } from 'prosemirror-view';
import { EditorState, Plugin } from 'prosemirror-state';

import { EditorProps, EditorPluginStates } from '../types';
import { createEditorView } from '../utils/editor/create-editor-view';
import { buildPluginStates } from '../utils/plugins/build-plugin-states';

import {
  EditorSharedConfigProvider,
  EditorSharedConfig,
} from '../context/shared-config';

export const EditorInternal: React.FC<EditorProps> = (props) => {
  const editorRef = React.useRef<HTMLDivElement | null>(null);
  const editorView = React.useRef<EditorView | null>(null);
  const [editorPluginStates, setEditorPluginStates] = React.useState<
    EditorPluginStates
  >({});

  const editorSharedConfig: EditorSharedConfig = {
    editorPluginStates,
    editorRef,
    editorView: editorView.current,
  };

  React.useEffect(() => {
    if (editorRef && editorRef.current) {
      const target = editorRef.current;
      const updateEditorPluginState = (
        newEditorState: EditorState,
        plugins: Array<Plugin>,
      ) => {
        setEditorPluginStates(buildPluginStates(newEditorState, plugins));
      };

      /*
       * We have two lifecycle events: `init` and `update`;
       * These methods sync React State with ProseMirror PluginState.
       * */
      editorView.current = createEditorView(target, {
        onCreateEditorView: updateEditorPluginState,
        onUpdateEditorState: updateEditorPluginState,
      });

      return () => {
        if (editorView.current) {
          editorView.current.destroy();
        }
      };
    }
  }, [editorRef]);

  return (
    <EditorSharedConfigProvider value={editorSharedConfig}>
      {props.children}
    </EditorSharedConfigProvider>
  );
};

import React from 'react';
import { EditorView } from 'prosemirror-view';
import { EditorState, Plugin } from 'prosemirror-state';

import { EditorProvider, EditorConsumer } from '../context/editor';
import { EditorPluginStates, EditorProps } from '../types';
import { Toolbar } from './Toolbar';
import { createEditorView } from '../utils/editor/create-editor-view';
import { buildPluginStates } from '../utils/plugins/build-plugin-states';

export const EditorMount: React.FC<
  EditorProps & { editorRef: React.RefObject<HTMLDivElement> }
> = (props) => {
  const { editorRef, onChange } = props;
  const [editorPluginStates, setEditorPluginStates] = React.useState<
    EditorPluginStates
  >({});

  const editorView = React.useRef<EditorView | null>(null);

  React.useEffect(() => {
    if (editorRef && editorRef.current) {
      const target = editorRef.current;
      const updateEditorPluginState = (
        newEditorState: EditorState,
        plugins: Array<Plugin>,
      ) => {
        if (onChange) onChange(newEditorState);
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
    <EditorProvider
      value={{
        editorPluginStates,
        editorView: editorView.current,
      }}
    >
      <EditorConsumer>
        {({ editorView, editorPluginStates }) => {
          if (!editorView) {
            return null;
          }

          return (
            <Toolbar
              editorView={editorView}
              editorPluginStates={editorPluginStates}
            />
          );
        }}
      </EditorConsumer>
    </EditorProvider>
  );
};

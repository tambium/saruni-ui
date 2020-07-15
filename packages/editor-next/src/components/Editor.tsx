import React from 'react';
import { EditorView, DirectEditorProps } from 'prosemirror-view';
import { EditorState, Transaction } from 'prosemirror-state';

import { EditorProps } from '../types/editor-props';
import { createSchema, createPMPlugins } from '../create-editor/create-editor';
import { useEditorContext, withContext } from '../context';

export const Editor: React.FC<EditorProps> = withContext((props) => {
  const editorRef = React.useRef<HTMLDivElement>(null);
  let [view] = React.useState<EditorView>();

  const { config } = useEditorContext();

  const createEditorState = () => {
    const schema = createSchema(config);
    const plugins = createPMPlugins({
      schema,
      editorConfig: config,
    });

    return EditorState.create({
      schema,
      plugins,
    });
  };

  const dispatchTransaction = (transaction: Transaction) => {
    if (!view) return;
    const editorState = view.state.apply(transaction);
    view.updateState(editorState);
    if (props.onChange) props.onChange(view);
  };

  const getDirectEditorProps = (state?: EditorState): DirectEditorProps => {
    return {
      state: state || createEditorState(),
      dispatchTransaction: (tr: Transaction) => {
        dispatchTransaction(tr);
      },
    };
  };

  React.useEffect(() => {
    view = new EditorView(
      { mount: editorRef.current! },
      getDirectEditorProps(),
    );
  }, []);

  return <div ref={editorRef} />;
});

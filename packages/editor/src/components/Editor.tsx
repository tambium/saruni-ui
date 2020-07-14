import React from 'react';
import { EditorView } from 'prosemirror-view';
import { Transaction } from 'prosemirror-state';

import { buildEditorState, updateEditorState } from '../utils/state';
import { EditorPlugin, EditorProps } from '../types';
import { getPluginList } from '../utils/plugins';
import { useConfigContext } from '../context/config';

export const Editor: React.FC<EditorProps> = ({
  autoFocus,
  defaultValue,
  onChange = () => {},
}) => {
  const editorRef = React.useRef<HTMLDivElement>(null);
  let [view] = React.useState<EditorView>();

  const viewProvider = () => view;
  const {
    config: { plugins },
    dispatcher,
  } = useConfigContext();

  const updateViewListeners = () => {
    dispatcher.dispatch(view);
  };

  React.useEffect(() => {
    const pluginList: Array<EditorPlugin> = getPluginList(
      `${plugins.options} common`,
    );
    const state = buildEditorState(pluginList, defaultValue, viewProvider);
    view = new EditorView(editorRef.current!, {
      state,
      dispatchTransaction: (tr: Transaction) => {
        const editorState = view!.state.apply(tr);

        updateEditorState(view!, editorState);
        updateViewListeners();
        const serializableState = view!.state.toJSON();

        if (onChange) onChange(serializableState);
      },
    });

    if (autoFocus) view.focus();

    updateViewListeners();

    return () => view!.destroy();
  }, []);

  return <div ref={editorRef} />;
};

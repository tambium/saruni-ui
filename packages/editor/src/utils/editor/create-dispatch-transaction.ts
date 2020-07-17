import { Transaction } from 'prosemirror-state';
import { Node as PMNode } from 'prosemirror-model';

import { EditorSharedConfig } from '../../types/editor-config';
import { findChangedNodesFromTransaction } from '../nodes';
import { validateNodes } from '../nodes/validate-nodes';

export const createDispatchTransaction = (editorConfig: EditorSharedConfig) => {
  return function dispatchTransaction(transaction: Transaction) {
    const { editorView, onChange } = editorConfig;
    if (!editorView) {
      return;
    }

    const nodes: PMNode[] = findChangedNodesFromTransaction(transaction);
    if (validateNodes(nodes)) {
      const editorState = editorView.state.apply(transaction);
      editorView.updateState(editorState);
      if (onChange && transaction.docChanged) {
        onChange(editorView.state.doc);
      }
    }
  };
};

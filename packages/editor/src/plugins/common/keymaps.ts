import { Selection, TextSelection, EditorState } from 'prosemirror-state';

import { ProseMirrorDispatch, ProseMirrorCommand } from '../../types';

const insertHardBreak = (): ProseMirrorCommand => (state, dispatch) => {
  const { hardBreak } = state.schema.nodes;
  dispatch(state.tr.replaceSelectionWith(hardBreak.create()));
};

export const keymaps = () => ({
  'Shift-Enter': (state: EditorState, dispatch: ProseMirrorDispatch) =>
    insertHardBreak()(state, dispatch),
  'Mod-a': (state: EditorState, dispatch: ProseMirrorDispatch) => {
    const textSelection = new TextSelection(
      Selection.atStart(state.doc).$anchor,
      Selection.atEnd(state.doc).$head,
    );
    dispatch(state.tr.setSelection(textSelection));
    return true;
  },
});

export const keymapInfo = {
  help: { key: 'Shift-Enter', label: 'Soft newline' },
};

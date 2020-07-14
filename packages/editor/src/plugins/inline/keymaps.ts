import { toggleMark } from 'prosemirror-commands';
import { EditorState } from 'prosemirror-state';

import { KeyValue, ProseMirrorCommand, ProseMirrorDispatch } from '../../types';

const toggleMarkofType = (
  markTypeName: string,
  attrs?: KeyValue,
): ProseMirrorCommand => (state, dispatch) => {
  const markType = state.schema.marks[markTypeName];
  return toggleMark(markType, attrs)(state, dispatch);
};

export const keymaps = () => ({
  'Mod-b': (state: EditorState, dispatch: ProseMirrorDispatch) =>
    toggleMarkofType('strong')(state, dispatch),
  'Mod-i': (state: EditorState, dispatch: ProseMirrorDispatch) =>
    toggleMarkofType('em')(state, dispatch),
  'Mod-u': (state: EditorState, dispatch: ProseMirrorDispatch) =>
    toggleMarkofType('underline')(state, dispatch),
  'Mod-Shift-s': (state: EditorState, dispatch: ProseMirrorDispatch) =>
    toggleMarkofType('strike')(state, dispatch),
  'Mod-Shift-m': (state: EditorState, dispatch: ProseMirrorDispatch) =>
    toggleMarkofType('code')(state, dispatch),
});

export const keymapInfo = {
  strong: { key: 'Mod-B', label: 'Bold' },
  em: { key: 'Mod-I', label: 'Italic' },
  underline: { key: 'Mod-U', label: 'Underline' },
  strike: { key: 'Mod-Shift-S', label: 'Strikethrough' },
  code: { key: 'Mod-Shift-M', label: 'Code' },
};

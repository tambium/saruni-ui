import { EditorState } from 'prosemirror-state';
import { MarkType } from 'prosemirror-model';

/** Determine if a mark of a specific type exists anywhere in the selection. */
export const isMarkActive = (
  state: EditorState,
  markType: MarkType,
): boolean => {
  const { $from, from, to, empty } = state.selection;
  if (empty) {
    return !!markType.isInSet(state.storedMarks || $from.marks());
  }

  let rangeHasMark = false;
  rangeHasMark = state.doc.rangeHasMark(from, to, markType);

  return rangeHasMark;
};

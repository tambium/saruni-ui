import { MarkType } from 'prosemirror-model';

import { Command } from '../types';

function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export const toggleTextAlignment = (
  alignment: 'left' | 'centre' | 'right',
): Command => (state, dispatch) => {
  const doc = state.doc;
  const selection = state.selection;
  const tr = state.tr;

  const textAlignmentMarkType: MarkType = state.schema.marks.text_align;
  doc.nodesBetween(selection.from, selection.to, (node, pos) => {
    if (node.type.name === 'paragraph' || node.type.name === 'heading') {
      const marks = node.marks
        .map((mark) => {
          if (mark.type !== textAlignmentMarkType) {
            return mark;
          }
          return null;
        })
        .filter(nonNullable);

      if (alignment !== 'left') {
        marks.push(textAlignmentMarkType.create({ alignment }));
      }

      tr.setNodeMarkup(pos, undefined, undefined, marks);

      return false;
    }
  });

  if (!tr.docChanged) {
    return false;
  }

  if (dispatch) {
    dispatch(tr);
  }

  return true;
};

import { NodeSpec } from 'prosemirror-model';

export const listItem: NodeSpec = {
  content: '(paragraph) (paragraph | bulletList | orderedList)*',
  defining: true,
  parseDOM: [{ tag: 'li' }],
  toDOM() {
    return ['li', 0];
  },
};

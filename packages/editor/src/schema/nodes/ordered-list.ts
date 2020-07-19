import { NodeSpec } from 'prosemirror-model';

export const orderedListSelector = '.sr-ol';

export const orderedList: NodeSpec = {
  group: 'block',
  content: 'listItem+',
  parseDOM: [{ tag: 'ol' }],
  toDOM() {
    const attrs = {
      class: orderedListSelector.substr(1),
    };
    return ['ol', attrs, 0];
  },
};

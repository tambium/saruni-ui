import { NodeSpec } from 'prosemirror-model';

export const bulletListSelector = '.sr-ul';

export const bulletList: NodeSpec = {
  group: 'block',
  content: 'listItem+',
  parseDOM: [{ tag: 'ul' }],
  toDOM() {
    const attrs = {
      class: bulletListSelector.substr(1),
    };
    return ['ul', attrs, 0];
  },
};

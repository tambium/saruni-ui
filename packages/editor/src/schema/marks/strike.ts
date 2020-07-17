import { MarkSpec } from 'prosemirror-model';

export const strike: MarkSpec = {
  parseDOM: [
    { tag: 'strike' },
    { tag: 's' },
    { tag: 'del' },
    {
      style: 'text-decoration',
      getAttrs: (value) => value === 'line-through' && null,
    },
  ],
  toDOM(): [string] {
    return ['s'];
  },
};

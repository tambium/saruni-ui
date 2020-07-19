import { MarkSpec } from 'prosemirror-model';

export const underline: MarkSpec = {
  inclusive: true,
  parseDOM: [
    { tag: 'u' },
    {
      style: 'text-decoration',
      getAttrs: (value) => value === 'underline' && null,
    },
  ],
  toDOM(): [string] {
    return ['u'];
  },
};

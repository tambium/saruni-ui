import { MarkSpec } from 'prosemirror-model';

import { FONT_STYLE } from '../groups';

export interface UnderlineDefinition {
  type: 'underline';
}

export const underline: MarkSpec = {
  inclusive: true,
  group: FONT_STYLE,
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

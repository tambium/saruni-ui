import { MarkSpec, DOMOutputSpec } from 'prosemirror-model';

import { FONT_STYLE } from '../groups';

export interface StrongDefinition {
  type: 'strong';
}

const strongDOM: DOMOutputSpec = ['strong'];
export const strong: MarkSpec = {
  inclusive: true,
  group: FONT_STYLE,
  parseDOM: [
    { tag: 'strong' },
    {
      style: 'font-weight',
      getAttrs(value) {
        return (
          typeof value === 'string' &&
          /^(bold(er)?|[5-9]\d{2,})$/.test(value) &&
          null
        );
      },
    },
  ],
  toDOM() {
    return strongDOM;
  },
};

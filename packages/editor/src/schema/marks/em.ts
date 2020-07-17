import { DOMOutputSpec, MarkSpec } from 'prosemirror-model';

const emDOM: DOMOutputSpec = ['em'];

export const em: MarkSpec = {
  inclusive: true,
  parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
  toDOM() {
    return emDOM;
  },
};

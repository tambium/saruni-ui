import { DOMOutputSpec, NodeSpec } from 'prosemirror-model';

const pDOM: DOMOutputSpec = ['p', 0];
export const paragraph: NodeSpec = {
  content: 'inline*',
  group: 'block',
  marks: '',
  parseDOM: [{ tag: 'p' }],
  toDOM() {
    return pDOM;
  },
};

const emDOM = ['em', 0];
export const em = {
  parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
  toDOM: () => emDOM,
};

const pDOM = ['p', 0];

export const paragraph = {
  content: 'inline*',
  group: 'block',
  parseDOM: [{ tag: 'p' }],
  toDOM() {
    return pDOM;
  },
};

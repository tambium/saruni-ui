const strikeDOM = ['s', 0];
export const strike = {
  parseDOM: [
    { tag: 'strike' },
    { tag: 's' },
    { tag: 'del' },
    {
      style: 'text-decoration',
      getAttrs: (value: string) => value === 'line-through' && null,
    },
  ],
  toDOM: () => strikeDOM,
};

const strongDOM = ['strong', 0];
export const strong = {
  parseDOM: [
    { tag: 'strong' },
    {
      tag: 'b',
      getAttrs: (node: HTMLElement) =>
        node.style.fontWeight != 'normal' && null,
    },
    {
      style: 'font-weight',
      getAttrs: (value: string) =>
        /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
    },
  ],
  toDOM: () => strongDOM,
};

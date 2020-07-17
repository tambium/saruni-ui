import { DOMOutputSpec, MarkSpec } from 'prosemirror-model';

const strongDOM: DOMOutputSpec = ['strong'];

export const strong: MarkSpec = {
  parseDOM: [
    { tag: 'strong' },

    /* Workaround Google Docs behavior where
     * pasted content is wrapped in `<b>` tags
     * with font-weight set to normal. */
    {
      tag: 'b',
      getAttrs(node) {
        const element = node as HTMLElement;
        return element.style.fontWeight !== 'normal' && null;
      },
    },
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

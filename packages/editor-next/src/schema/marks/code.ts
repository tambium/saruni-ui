import { MarkSpec } from 'prosemirror-model';

import { FONT_STYLE } from '../groups';

export interface CodeDefinition {
  type: 'code';
}

export const code: MarkSpec = {
  excludes: `${FONT_STYLE}`,
  inclusive: true,
  parseDOM: [
    { tag: 'span.code', preserveWhitespace: true },
    { tag: 'code', preserveWhitespace: true },
    { tag: 'tt', preserveWhitespace: true },
    {
      tag: 'span',
      preserveWhitespace: true,
      getAttrs: (domNode) => {
        let dom = domNode as HTMLSpanElement;
        if (dom.style.whiteSpace === 'pre') {
          return {};
        }
        if (
          dom.style.fontFamily &&
          dom.style.fontFamily.toLowerCase().indexOf('monospace') >= 0
        ) {
          return {};
        }
        return false;
      },
    },
  ],
  toDOM() {
    return [
      'span',
      {
        style: 'white-space: pre-wrap;',
        class: 'code',
      },
    ];
  },
};

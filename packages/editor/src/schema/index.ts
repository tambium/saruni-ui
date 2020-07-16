import {
  Schema,
  NodeSpec,
  MarkSpec,
  Node as ProseMirrorNode,
} from 'prosemirror-model';

export const nodes: { [key: string]: NodeSpec } = {
  doc: {
    content: 'block+',
    marks: 'text_align',
  },

  text: {
    group: 'inline',
  },

  paragraph: {
    content: 'inline*',
    group: 'block',
    parseDOM: [{ tag: 'p' }],
    toDOM() {
      return ['p', 0];
    },
  },

  heading: {
    attrs: { level: { default: 1 } },
    content: 'inline*',
    marks: 'em',
    group: 'block',
    defining: true,
    parseDOM: [
      { tag: 'h1', attrs: { level: 1 } },
      { tag: 'h2', attrs: { level: 2 } },
      { tag: 'h3', attrs: { level: 3 } },
    ],
    toDOM(node: ProseMirrorNode) {
      return ['h' + node.attrs.level, 0];
    },
  },

  code_block: {
    content: 'text*',
    marks: '',
    group: 'block',
    code: true,
    defining: true,
    parseDOM: [{ tag: 'pre', preserveWhitespace: 'full' }],
    toDOM() {
      return ['pre', ['code', 0]];
    },
  },

  hard_break: {
    inline: true,
    group: 'inline',
    selectable: false,
    parseDOM: [{ tag: 'br' }],
    toDOM() {
      return ['br'];
    },
  },
};

export const marks: { [key: string]: MarkSpec } = {
  strong: {
    parseDOM: [
      { tag: 'strong' },
      {
        tag: 'b',
        getAttrs: (node) => {
          if (typeof node === 'string') {
            return null;
          }
          return (node as HTMLElement).style.fontWeight !== 'normal' && null;
        },
      },
      {
        style: 'font-weight',
        getAttrs: (value) => {
          if (typeof value === 'string') {
            return /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null;
          }
          return null;
        },
      },
    ],
    toDOM() {
      return ['strong', 0];
    },
  },

  em: {
    parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
    toDOM() {
      return ['em', 0];
    },
  },

  text_align: {
    attrs: {
      alignment: {
        default: null,
      },
    },
    parseDOM: [{ tag: 'div.text-align' }],
    toDOM(mark) {
      const alignment = mark.attrs.alignment;
      return ['div', { class: `text-align text-align__${alignment}` }, 0];
    },
  },
};

export const schema = new Schema({ nodes, marks });

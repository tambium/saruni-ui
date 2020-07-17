import { Schema, MarkSpec, NodeSpec } from 'prosemirror-model';

import { EditorConfig } from '../../types/editor-config';

export const createSchema = (editorConfig: EditorConfig) => {
  const marks = editorConfig.marks.reduce((acc, mark) => {
    acc[mark.name] = mark.mark;
    return acc;
  }, {} as { [nodeName: string]: MarkSpec });
  const nodes = editorConfig.nodes.reduce((acc, node) => {
    acc[node.name] = node.node;
    return acc;
  }, {} as { [nodeName: string]: NodeSpec });

  return new Schema({ nodes, marks });
};

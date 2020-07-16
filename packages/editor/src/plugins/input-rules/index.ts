import { NodeType, Schema } from 'prosemirror-model';
import { textblockTypeInputRule, inputRules } from 'prosemirror-inputrules';
import { Plugin } from 'prosemirror-state';

const headingRule = (nodeType: NodeType, maxLevel: number) => {
  return textblockTypeInputRule(
    new RegExp('^(#{1,' + maxLevel + '})\\s$'),
    nodeType,
    (match) => ({ level: match[1].length }),
  );
};

export const buildInputRules = (schema: Schema): Plugin => {
  const {
    nodes: { heading },
  } = schema;

  return inputRules({ rules: [headingRule(heading, 3)] });
};

import { Transaction } from 'prosemirror-state';
import { Node as PMNode, Slice } from 'prosemirror-model';
import { Step } from 'prosemirror-transform';

export const findChangedNodesFromTransaction = (tr: Transaction): PMNode[] => {
  const nodes: PMNode[] = [];
  const steps = (tr.steps || []) as (Step & {
    from: number;
    to: number;
    slice?: Slice;
  })[];

  steps.forEach((step) => {
    const { to, from, slice } = step;
    const size = slice && slice.content ? slice.content.size : 0;
    for (let i = from; i <= to + size; i++) {
      if (i <= tr.doc.content.size) {
        const topLevelNode = tr.doc.resolve(i).node(1);
        if (topLevelNode && !nodes.find((n) => n === topLevelNode)) {
          nodes.push(topLevelNode);
        }
      }
    }
  });

  return nodes;
};

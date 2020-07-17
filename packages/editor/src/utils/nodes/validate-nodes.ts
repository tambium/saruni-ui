import { Node as PMNode } from 'prosemirror-model';

export const validNode = (node: PMNode): boolean => {
  try {
    node.check();
  } catch (error) {
    return false;
  }
  return true;
};

export const validateNodes = (nodes: PMNode[]): boolean =>
  nodes.every(validNode);

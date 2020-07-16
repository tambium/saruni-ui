import { toggleMark } from 'prosemirror-commands';

import { Command } from '../types';

export const toggleStrongMark = (): Command => (state, dispatch) => {
  const {
    schema: {
      marks: { strong },
    },
  } = state;

  return toggleMark(strong)(state, dispatch);
};

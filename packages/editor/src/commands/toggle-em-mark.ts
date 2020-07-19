import { toggleMark } from 'prosemirror-commands';

import { Command } from '../types/command';

export const toggleEmMark = (): Command => (state, dispatch) => {
  const {
    schema: {
      marks: { em },
    },
  } = state;

  return toggleMark(em)(state, dispatch);
};

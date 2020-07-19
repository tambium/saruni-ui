import { toggleMark } from 'prosemirror-commands';

import { Command } from '../types/command';

export const toggleStrikeMark = (): Command => (state, dispatch) => {
  const {
    schema: {
      marks: { strike },
    },
  } = state;

  return toggleMark(strike)(state, dispatch);
};

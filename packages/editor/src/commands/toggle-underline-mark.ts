import { toggleMark } from 'prosemirror-commands';

import { Command } from '../types/command';

export const toggleUnderlineMark = (): Command => (state, dispatch) => {
  const {
    schema: {
      marks: { underline },
    },
  } = state;

  return toggleMark(underline)(state, dispatch);
};

import { toggleMark } from 'prosemirror-commands';
import { EditorState, Plugin, PluginKey, Transaction } from 'prosemirror-state';

import { isMarkActive } from '../../../utils/marks/is-mark-active';
import { shallowEqual } from '../../../utils/object';

export const pluginKey = new PluginKey('textFormatting');

export interface TextFormattingState {
  emActive?: boolean;
  emDisabled?: boolean;
  emHidden?: boolean;
  strikeActive?: boolean;
  strikeDisabled?: boolean;
  strikeHidden?: boolean;
  strongActive?: boolean;
  strongDisabled?: boolean;
  strongHidden?: boolean;
  underlineActive?: boolean;
  underlineDisabled?: boolean;
  underlineHidden?: boolean;
}

const getTextFormattingState = (
  editorState: EditorState,
): TextFormattingState => {
  const { em, strike, strong, underline } = editorState.schema.marks;
  const state: TextFormattingState = {};
  if (em) {
    state.emActive = isMarkActive(editorState, em);
    state.emDisabled = !toggleMark(em)(editorState);
  }
  if (strike) {
    state.strikeActive = isMarkActive(editorState, strike);
    state.strikeDisabled = !toggleMark(strike)(editorState);
  }
  if (strong) {
    state.strongActive = isMarkActive(editorState, strong);
    state.strongDisabled = !toggleMark(strong)(editorState);
  }
  if (underline) {
    state.underlineActive = isMarkActive(editorState, underline);
    state.underlineDisabled = !toggleMark(underline)(editorState);
  }
  return state;
};

export const plugin = () =>
  new Plugin({
    state: {
      init(_config, state: EditorState): TextFormattingState {
        return getTextFormattingState(state);
      },
      apply(
        tr: Transaction,
        pluginState: TextFormattingState,
        oldState: EditorState,
        newState: EditorState,
      ): TextFormattingState {
        const state = getTextFormattingState(newState);
        if (!shallowEqual(pluginState, state)) {
          return state;
        }
        return pluginState;
      },
    },
    key: pluginKey,
    props: {},
  });

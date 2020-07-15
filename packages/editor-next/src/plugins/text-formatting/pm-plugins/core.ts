import { EditorState, PluginKey, Plugin } from 'prosemirror-state';
import { toggleMark } from 'prosemirror-commands';

import { isMarkActive, shallowEqual } from '../../../utils';

export const pluginKey = new PluginKey('textFormatting');

export interface TextFormattingState {
  codeActive?: boolean;
  codeDisabled?: boolean;
  codeHidden?: boolean;
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
  const { code, em, strike, strong, underline } = editorState.schema.marks;
  const state: TextFormattingState = {};

  if (code) {
    state.codeActive = isMarkActive(editorState, code.create());
    state.codeDisabled = !toggleMark(code)(editorState);
  }
  if (em) {
    state.emActive = isMarkActive(editorState, em);
    state.emDisabled = state.codeActive ? true : !toggleMark(em)(editorState);
  }
  if (strike) {
    state.strikeActive = isMarkActive(editorState, strike);
    state.strikeDisabled = state.codeActive
      ? true
      : !toggleMark(strike)(editorState);
  }
  if (strong) {
    state.strongActive = isMarkActive(editorState, strong);
    state.strongDisabled = state.codeActive
      ? true
      : !toggleMark(strong)(editorState);
  }
  if (underline) {
    state.underlineActive = isMarkActive(editorState, underline);
    state.underlineDisabled = state.codeActive
      ? true
      : !toggleMark(underline)(editorState);
  }
  return state;
};

export const plugin = (dispatch) => {
  return new Plugin({
    state: {
      init(_config, state: EditorState): TextFormattingState {
        return getTextFormattingState(state);
      },
      apply(
        _tr,
        pluginState: TextFormattingState,
        _oldState,
        newState,
      ): TextFormattingState {
        const state = getTextFormattingState(newState);
        if (!shallowEqual(pluginState, state)) {
          dispatch(pluginKey, state);
          return state;
        }
        return pluginState;
      },
    },
    key: pluginKey,
    props: {},
  });
};

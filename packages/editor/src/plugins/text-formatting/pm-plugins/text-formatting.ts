import { toggleMark } from 'prosemirror-commands';
import { EditorState, Plugin, PluginKey, Transaction } from 'prosemirror-state';
import { isMarkActive } from '../../../utils/marks/is-mark-active';

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
}

const getTextFormattingState = (
  editorState: EditorState,
): TextFormattingState => {
  const { em, strike, strong } = editorState.schema.marks;
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
        if (tr.selectionSet || tr.docChanged) {
          const {
            schema: {
              marks: { strong },
            },
          } = newState;

          return state;
        }
        return pluginState;
      },
    },
    key: pluginKey,
    props: {},
  });

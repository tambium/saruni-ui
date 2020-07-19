import React from 'react';
import { EditorView } from 'prosemirror-view';

import { TextFormattingState } from '../../pm-plugins/text-formatting';
import {
  toggleEmMark,
  toggleStrikeMark,
  toggleStrongMark,
  toggleUnderlineMark,
} from '../../../../commands';

interface ToolbarTextFormattingProps {
  editorView: EditorView;
  textFormattingState: TextFormattingState;
}

export const ToolbarTextFormatting: React.FC<ToolbarTextFormattingProps> = ({
  editorView,
  textFormattingState,
}) => {
  const handleBoldClick = () => {
    const { strongDisabled } = textFormattingState;
    if (!strongDisabled) {
      const { state, dispatch } = editorView;
      toggleStrongMark()(state, dispatch);
    }
    return false;
  };

  const handleEmClick = () => {
    const { emDisabled } = textFormattingState;
    if (!emDisabled) {
      const { state, dispatch } = editorView;
      toggleEmMark()(state, dispatch);
    }
    return false;
  };

  const handleStrikeClick = () => {
    const { strikeDisabled } = textFormattingState;
    if (!strikeDisabled) {
      const { state, dispatch } = editorView;
      toggleStrikeMark()(state, dispatch);
    }
    return false;
  };

  const handleUnderlineClick = () => {
    const { underlineDisabled } = textFormattingState;
    if (!underlineDisabled) {
      const { state, dispatch } = editorView;
      toggleUnderlineMark()(state, dispatch);
    }
    return false;
  };

  return (
    <React.Fragment>
      <button onClick={handleBoldClick}>Bold</button>
      <button onClick={handleEmClick}>Italic</button>
      <button onClick={handleStrikeClick}>Strike</button>
      <button onClick={handleUnderlineClick}>Underline</button>
    </React.Fragment>
  );
};

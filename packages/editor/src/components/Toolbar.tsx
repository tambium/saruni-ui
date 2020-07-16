import React, { useCallback } from 'react';
import { EditorView } from 'prosemirror-view';

import { TextFormattingPluginState, TextAlignmentPluginState } from '../types';
import {
  toggleStrongMark,
  createCodeBlock,
  createHeading,
  toggleTextAlignment,
} from '../commands';
import { useEditorSharedConfig } from '../context/shared-config';

type ToolbarItem<T> = {
  editorView: EditorView;
  pluginState?: T;
};

const BoldToolbarItem = ({
  editorView: { state, dispatch },
  pluginState,
}: ToolbarItem<TextFormattingPluginState>) => {
  const onClick = useCallback(() => {
    toggleStrongMark()(state, dispatch);
  }, [state, dispatch]);

  const { strongActive = false, strongDisabled = true } = pluginState || {};

  return (
    <button
      disabled={strongDisabled}
      className={strongActive ? 'menu-item__active' : ''}
      onClick={onClick}
    >
      BOLD
    </button>
  );
};

const CodeBlockToolbarItem = ({
  editorView: { state, dispatch },
  pluginState,
}: ToolbarItem<TextFormattingPluginState>) => {
  const onClick = useCallback(() => {
    createCodeBlock()(state, dispatch);
  }, [state, dispatch]);

  return <button onClick={onClick}>Code Block</button>;
};

const HeadingToolbarItem = ({
  editorView: { state, dispatch },
  pluginState,
  level,
}: ToolbarItem<TextFormattingPluginState> & { level: number }) => {
  const onClick = useCallback(() => {
    createHeading(level)(state, dispatch);
  }, [state, dispatch, level]);

  const { headingActive = null } = pluginState || {};

  return (
    <button
      className={headingActive === level ? 'menu-item__active' : ''}
      onClick={onClick}
    >
      H{level}
    </button>
  );
};

const TextAlignmentLeftToolbarItem = ({
  editorView: { state, dispatch },
  pluginState,
}: ToolbarItem<TextAlignmentPluginState>) => {
  const onClick = useCallback(() => {
    toggleTextAlignment('left')(state, dispatch);
  }, [state, dispatch]);

  const { alignmentDisabled = false } = pluginState || {};

  return (
    <button disabled={alignmentDisabled} onClick={onClick}>
      LEFT ALIGN
    </button>
  );
};

const TextAlignmentCentreToolbarItem = ({
  editorView: { state, dispatch },
  pluginState,
}: ToolbarItem<TextAlignmentPluginState>) => {
  const onClick = useCallback(() => {
    toggleTextAlignment('centre')(state, dispatch);
  }, [state, dispatch]);

  const { alignmentDisabled = false } = pluginState || {};

  return (
    <button disabled={alignmentDisabled} onClick={onClick}>
      CENTRE ALIGN
    </button>
  );
};

const TextAlignmentRightToolbarItem = ({
  editorView: { state, dispatch },
  pluginState,
}: ToolbarItem<TextAlignmentPluginState>) => {
  const onClick = useCallback(() => {
    toggleTextAlignment('right')(state, dispatch);
  }, [state, dispatch]);

  const { alignmentDisabled = false } = pluginState || {};

  return (
    <button disabled={alignmentDisabled} onClick={onClick}>
      RIGHT ALIGN
    </button>
  );
};

export const Toolbar = () => {
  const sharedConfig = useEditorSharedConfig();

  if (!sharedConfig) return null;

  const {
    editorPluginStates: { textAlignmentPluginState, textFormattingPluginState },
    editorView,
  } = sharedConfig;

  if (!editorView) return null;

  return (
    <div id="menu-bar">
      <BoldToolbarItem
        editorView={editorView}
        pluginState={textFormattingPluginState}
      />
      <CodeBlockToolbarItem
        editorView={editorView}
        pluginState={textFormattingPluginState}
      />

      <HeadingToolbarItem
        editorView={editorView}
        pluginState={textFormattingPluginState}
        level={1}
      />
      <HeadingToolbarItem
        editorView={editorView}
        pluginState={textFormattingPluginState}
        level={2}
      />
      <HeadingToolbarItem
        editorView={editorView}
        pluginState={textFormattingPluginState}
        level={3}
      />
      <TextAlignmentLeftToolbarItem
        editorView={editorView}
        pluginState={textAlignmentPluginState}
      />
      <TextAlignmentCentreToolbarItem
        editorView={editorView}
        pluginState={textAlignmentPluginState}
      />
      <TextAlignmentRightToolbarItem
        editorView={editorView}
        pluginState={textAlignmentPluginState}
      />
    </div>
  );
};

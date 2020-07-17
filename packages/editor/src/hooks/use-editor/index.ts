import React from 'react';
import { CreateEditorParams } from '../../types/editor';
import { EditorSharedConfig } from '../../types/editor-config';
import { useCreateEditor } from '../use-create-editor';
import { useApplyEditorViewProps } from '../use-apply-editor-view';
import { useHandleEditorUnmount } from '../use-handle-editor-unmount';

export const useEditor = (
  createEditorParams: CreateEditorParams,
): [EditorSharedConfig | null, (ref: HTMLDivElement | null) => void] => {
  const [editorConfig, mountRef] = useCreateEditor(createEditorParams);

  const editorConfigRef = React.useRef<EditorSharedConfig | null>(null);
  editorConfigRef.current = editorConfig;

  useApplyEditorViewProps(editorConfig, createEditorParams.disabled);
  useHandleEditorUnmount(editorConfigRef);

  return [editorConfig, mountRef];
};

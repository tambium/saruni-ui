import React from 'react';

import { CreateEditorParams } from '../../types/editor';
import { EditorSharedConfig } from '../../types/editor-config';
import { createEditor } from '../../utils/editor/create-editor';

export const useCreateEditor = (
  createEditorParams: CreateEditorParams,
): [EditorSharedConfig | null, (ref: HTMLDivElement | null) => void] => {
  const [
    editorConfig,
    setEditorConfig,
  ] = React.useState<EditorSharedConfig | null>(null);

  return [
    editorConfig,
    React.useCallback(
      (ref: HTMLDivElement | null) => {
        if (!ref) return;

        setEditorConfig((editorConfig) => {
          const sharedConfig =
            editorConfig || createEditor({ ...createEditorParams, ref });
          return sharedConfig;
        });
      },
      [createEditorParams],
    ),
  ];
};

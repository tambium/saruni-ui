import React from 'react';

import { CreateEditorParams } from '../../types/editor';
import { EditorPrivateConfig } from '../../types/editor-config';
import { createEditor } from '../../utils/editor/create-editor';

export const useCreateEditor = (
  createEditorParams: CreateEditorParams,
): [EditorPrivateConfig | null, (ref: HTMLDivElement | null) => void] => {
  const [
    editorConfig,
    setEditorConfig,
  ] = React.useState<EditorPrivateConfig | null>(null);

  return [
    editorConfig,
    React.useCallback(
      (ref: HTMLDivElement | null) => {
        if (!ref) return;

        setEditorConfig((editorConfig) => {
          const config =
            editorConfig || createEditor({ ...createEditorParams, ref });
          return config;
        });
      },
      [createEditorParams],
    ),
  ];
};

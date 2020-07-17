import React from 'react';

import { EditorProps } from '../types/editor';
import { EditorConfigProvider } from '../context/editor-config';
import { EditorContentProvider } from './EditorContent';
import { useEditor } from '../hooks/use-editor';

export const EditorInternal: React.FC<EditorProps> = ({
  children,
  plugins,
}) => {
  const [editorConfig, mountRef] = useEditor({ plugins });

  return (
    <EditorConfigProvider value={editorConfig}>
      <EditorContentProvider value={mountRef}>{children}</EditorContentProvider>
    </EditorConfigProvider>
  );
};

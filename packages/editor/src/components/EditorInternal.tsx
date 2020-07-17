import React from 'react';

import { EditorProps } from '../types/editor';
import { EditorConfigProvider } from '../context/editor-config';
import { EditorContentProvider } from './EditorContent';
import { useEditor } from '../hooks/use-editor';

export const EditorInternal: React.FC<EditorProps> = ({
  children,
  disabled,
  onChange,
  onDestroy,
  plugins,
}) => {
  const [editorConfig, mountRef] = useEditor({
    disabled,
    onChange,
    onDestroy,
    plugins,
  });

  return (
    <EditorConfigProvider value={editorConfig}>
      <EditorContentProvider value={mountRef}>{children}</EditorContentProvider>
    </EditorConfigProvider>
  );
};

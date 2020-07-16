import React from 'react';
import { useEditorSharedConfig } from '../context/shared-config';

interface EditorContentProps {}

export const EditorContent: React.FC<EditorContentProps> = () => {
  const sharedConfig = useEditorSharedConfig();
  if (!sharedConfig) return null;

  return <div id="editor" ref={sharedConfig.editorRef} />;
};

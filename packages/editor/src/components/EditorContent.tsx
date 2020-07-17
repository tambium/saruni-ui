import React from 'react';

const EditorContentContext = React.createContext<
  (mountRef: HTMLDivElement) => void
>(() => {});

const EditorContentProvider = EditorContentContext.Provider;

/** ProseMirror View mount point. */
const EditorContent = React.memo(() => {
  const mountRef = React.useContext(EditorContentContext);
  return (
    <div style={{ border: `2px solid red`, height: 250 }} ref={mountRef} />
  );
});

export { EditorContentProvider, EditorContent };

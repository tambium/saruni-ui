import React from 'react';
import { Editor, EditorContent, Toolbar } from '@saruni-ui/editor';

export default { title: 'Editor' };

export const BasicEditor = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  const [mounted, setMounted] = React.useState(true);
  const [output, setOutput] = React.useState(null);

  const handleChange = (doc) => {
    setOutput(JSON.stringify(doc, null, 2));
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? `Unmount` : `Mount`}
        </button>
        <button onClick={() => setDisabled(!disabled)}>
          {disabled ? `Enable` : `Disable`}
        </button>
      </div>
      {mounted ? (
        <Editor
          disabled={disabled}
          onChange={handleChange}
          onDestroy={() => console.log('Destroyed!')}
        >
          <Toolbar />
          <EditorContent />
        </Editor>
      ) : null}
      {output && <pre>{output}</pre>}
    </React.Fragment>
  );
};

BasicEditor.story = {
  name: 'Editor',
};

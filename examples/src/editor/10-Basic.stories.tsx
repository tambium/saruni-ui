import React from 'react';
import { Editor } from '@saruni-ui/editor';

export default { title: 'Editor' };

export const BasicEditor = (props) => {
  const [state, setState] = React.useState({ output: null });

  const handleChange = (view) => {
    setState({ output: JSON.stringify(view.doc, null, 2) });
  };

  return (
    <React.Fragment>
      <Editor onChange={handleChange} />
      {state.output && <pre>{state.output}</pre>}
    </React.Fragment>
  );
};

BasicEditor.story = {
  name: 'Editor',
};

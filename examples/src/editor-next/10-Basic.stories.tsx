import React from 'react';
import { Editor, Toolbar } from '@saruni-ui/editor-next';

export default { title: 'Editor Next' };

export const BasicEditor = (props) => {
  const [state, setState] = React.useState({ output: null });

  const handleChange = (view) => {
    setState({ output: JSON.stringify(view.state.toJSON(), null, 2) });
  };

  return (
    <React.Fragment>
      <Toolbar />
      <Editor onChange={handleChange} />
      {state.output && <pre>{state.output}</pre>}
    </React.Fragment>
  );
};

BasicEditor.story = {
  name: 'Editor Next',
};

import React from 'react';
import { Button } from '@saruni-ui/button';

export default { title: 'Button' };

export const Options = (props) => {
  return (
    <React.Fragment>
      <Button shouldFitContainer>shouldFitContainer</Button>
    </React.Fragment>
  );
};

Options.story = {
  name: 'Options',
};

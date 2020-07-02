import React from 'react';
import { Button } from '@saruni-ui/button';

export default { title: 'Button' };

export const BasicButton = (props) => {
  return <Button appearance="primary">Button</Button>;
};

BasicButton.story = {
  name: 'Button',
};

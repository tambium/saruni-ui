import React from 'react';
import { Portal } from '@saruni-ui/portal';

export default { title: 'Portal' };

export const BasicPortal = (props) => {
  return <Portal zIndex={100}>Hello, Portal!</Portal>;
};

BasicPortal.story = {
  name: 'Portal',
};

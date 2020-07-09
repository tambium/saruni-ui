import React from 'react';
import { Checkbox } from '@saruni-ui/checkbox';

export default { title: 'Checkbox' };

export const BasicCheckbox = (props) => {
  return <Checkbox isDefaultChecked={false} label="Basic checkbox" />;
};

BasicCheckbox.story = {
  name: 'Checkbox',
};

import React from 'react';
import { Checkbox } from '@saruni-ui/checkbox';

export default { title: 'Checkbox' };

export const Basic = (props) => {
  return <Checkbox isDefaultChecked={false} label="Basic checkbox" />;
};

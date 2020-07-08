import React from 'react';
import { LinkItem } from '@saruni-ui/menu';

export default { title: 'Menu' };

export const ItemElements = (props) => {
  return (
    <React.Fragment>
      <LinkItem href="#">Link item</LinkItem>
    </React.Fragment>
  );
};

ItemElements.story = {
  name: 'Item Elements',
};

import React from 'react';
import { Button, ButtonAppearances } from '@saruni-ui/button';

export default { title: 'Button' };

const appearanceOptions: ButtonAppearances[] = ['primary', 'link'];

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const Appearances = (props) => {
  return (
    <React.Fragment>
      {appearanceOptions.map((appearance) => (
        <Button appearance={appearance} key={appearance}>
          {capitalize(appearance)}
        </Button>
      ))}
    </React.Fragment>
  );
};

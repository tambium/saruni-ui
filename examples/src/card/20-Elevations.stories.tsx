import React from 'react';
import { Card, elevationOpts } from '@saruni-ui/card';

export default { title: 'Card' };

const elevationOptions: elevationOpts[] = [
  'x-small',
  'small',
  'medium',
  'large',
];

export const Elevations = (props) => {
  return (
    <div
      css={{
        '& > *': {
          marginBottom: 48,
        },
      }}
    >
      {elevationOptions.map((elevationOption) => (
        <Card elevation={elevationOption} key={elevationOption} width="small">
          {elevationOption}
        </Card>
      ))}
    </div>
  );
};

Elevations.story = {
  name: 'Elevations',
};

import React from 'react';
import { Card } from '@saruni-ui/card';

export default { title: 'Card' };

export const BasicCard = (props) => {
  return (
    <React.Fragment>
      <div css={{ marginBottom: 48 }}>
        <Card width="small">Card</Card>
      </div>
      <Card isChromeless width="small">
        Chromeless Card
      </Card>
    </React.Fragment>
  );
};

BasicCard.story = {
  name: 'Card',
};

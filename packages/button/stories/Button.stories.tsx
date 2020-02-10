import React from 'react';

import { Button } from '../src';
import { Reset } from '@tambium-ui/theme';

export default {
  component: Button,
  title: 'Tambium UI|Button',
};

export const spacing = (): React.ReactNode => (
  <Reset>
    <Button spacing="default">Default</Button>
    <Button spacing="none">None</Button>
    <Button spacing="small">Small</Button>
    <Button spacing="large">Large</Button>
  </Reset>
);

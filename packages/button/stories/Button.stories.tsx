/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { Button, ButtonAppearances } from '../src';
import { Reset } from '@tambium-ui/theme';

const appearances: ButtonAppearances[] = [
  'default',
  'primary',
  'link',
  'subtle-link',
];

export default {
  component: Button,
  title: 'Tambium UI|Button',
};

const Table = (props: React.HTMLProps<HTMLDivElement>) => (
  <div css={{ display: 'table' }} {...props} />
);
const Row = (props: React.HTMLProps<HTMLDivElement>) => (
  <div css={{ display: 'flex', flexWrap: 'wrap' }} {...props} />
);
const Cell = (props: React.HTMLProps<HTMLDivElement>) => (
  <div css={{ width: '100px', padding: '4px 0' }} {...props} />
);

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const Appearances = (): React.ReactNode => (
  <Reset>
    <Table>
      {appearances.map((a) => (
        <Row key={a}>
          <Cell>
            <Button appearance={a}>{capitalize(a)}</Button>
          </Cell>
          <Cell>
            <Button appearance={a} isDisabled={true}>
              Disabled
            </Button>
          </Cell>
          <Cell>
            <Button appearance={a} isSelected={true}>
              Selected
            </Button>
          </Cell>
        </Row>
      ))}
    </Table>
  </Reset>
);

export const spacing = (): React.ReactNode => (
  <Reset>
    <Button spacing="default">Default</Button>
    <Button spacing="none">None</Button>
    <Button spacing="small">Small</Button>
    <Button spacing="large">Large</Button>
  </Reset>
);

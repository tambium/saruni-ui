import React from 'react';
import { Reset as SaruniReset } from '@saruni-ui/theme';

export default {
  title: 'Theme',
  component: SaruniReset,
};

export const Reset = () => (
  <React.Fragment>
    <SaruniReset
      theme={() => ({
        backgroundColor: 'green',
        customCss: `#target {
          color: pink;
        }`,
      })}
    />
    <div id="target">
      <span>Hello, Reset!</span>
    </div>
  </React.Fragment>
);

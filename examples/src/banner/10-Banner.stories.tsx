import React from 'react';
import { Banner } from '@saruni-ui/banner';

export default { title: 'Banner' };

export const BasicBanner = (props) => {
  return (
    <div
      css={{
        '& > *': {
          marginBottom: 16,
        },
      }}
    >
      <Banner appearance="default" title="Default banner">
        Default banner.
      </Banner>
      <Banner appearance="success" title="Success banner">
        Success banner.
      </Banner>
      <Banner appearance="critical" title="Critical banner">
        Critical banner.
      </Banner>
      <Banner appearance="info" title="Info banner">
        Info banner.
      </Banner>
      <Banner appearance="warning" title="Warning banner">
        Warning banner.
      </Banner>
    </div>
  );
};

BasicBanner.story = {
  name: 'Banner',
};

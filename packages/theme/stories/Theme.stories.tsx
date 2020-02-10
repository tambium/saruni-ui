import React from 'react';

import Theme, { GlobalThemeTokens, Reset } from '../src';

export default {
  title: 'Tambium UI|Theme',
};

export const mode = () => {
  return (
    <Theme.Consumer>
      {(tokens: GlobalThemeTokens) => (
        <div>
          The default mode is <code>{tokens.mode}</code>.
        </div>
      )}
    </Theme.Consumer>
  );
};

export const reset = () => {
  return <Reset>This is the default reset.</Reset>;
};

import React from 'react';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { Theme } from '../theme';

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = () => {
  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer mode={mode}>
            {(tokens) => <button>Hello, world</button>}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

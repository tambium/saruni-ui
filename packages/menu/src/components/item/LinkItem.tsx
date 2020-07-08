import React from 'react';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';

import { BaseItem } from './BaseItem';
import { Theme } from '../../theme';
import { LinkItemProps } from '../../types';

export const LinkItem: React.FC<LinkItemProps> = ({
  children,
  href,
  description,
  iconAfter,
  iconBefore,
  isDisabled,
  isSelected,
}) => {
  const Element: React.ReactType = isDisabled ? 'span' : 'a';

  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer
            isDisabled={isDisabled}
            isSelected={isSelected}
            mode={mode}
          >
            {(tokens) => (
              <Element
                css={tokens.linkItem}
                draggable={false}
                href={isDisabled ? undefined : href}
              >
                <BaseItem
                  description={description}
                  iconAfter={iconAfter}
                  iconBefore={iconBefore}
                  mode={mode}
                >
                  {children}
                </BaseItem>
              </Element>
            )}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

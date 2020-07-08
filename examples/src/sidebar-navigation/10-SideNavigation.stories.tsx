import React from 'react';
import { Check, CircularCheck } from '@saruni-ui/icon';
import {
  NavigationHeader,
  Section,
  SidebarNavigation,
} from '@saruni-ui/sidebar-navigation';
import { LinkItem } from '@saruni-ui/menu';

export default { title: 'Sidebar Navigation' };

export const BasicSidebarNavigation = (props) => {
  return (
    <SidebarNavigation>
      <NavigationHeader>
        <div css={{ padding: 8 }}>Header</div>
      </NavigationHeader>
      <Section>
        <LinkItem href="#" iconBefore={<CircularCheck />}>
          Link Item
        </LinkItem>
        <LinkItem href="#" iconBefore={<Check />} isSelected>
          Selected Link Item
        </LinkItem>
      </Section>
    </SidebarNavigation>
  );
};

BasicSidebarNavigation.story = {
  name: 'Sidebar Navigation',
};

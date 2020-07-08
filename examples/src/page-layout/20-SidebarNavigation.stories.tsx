import React from 'react';
import {
  Banner,
  Content,
  LeftSidebar,
  Main,
  PageLayout,
  RightSidebar,
  TopNavigation,
} from '@saruni-ui/page-layout';

import { BasicSidebarNavigation } from '../sidebar-navigation/10-SideNavigation.stories';

export default { title: 'Page Layout' };

const Identifier = ({ borderColor, children }) => (
  <div
    css={{
      height: '100%',
      padding: 8,
      outline: `2px dashed ${borderColor}`,
      outlineOffset: -4,
    }}
  >
    {children}
  </div>
);

export const WithSidebarNavigation = (props) => {
  return (
    <PageLayout>
      <Content>
        <LeftSidebar>
          <BasicSidebarNavigation />
        </LeftSidebar>
        <Main>
          <Identifier borderColor="green">Main</Identifier>
        </Main>
        <RightSidebar>
          <Identifier borderColor="blue">Right Sidebar</Identifier>
        </RightSidebar>
      </Content>
      <Banner>
        <Identifier borderColor="orange">Banner</Identifier>
      </Banner>
      <TopNavigation>
        <Identifier borderColor="purple">TopNavigation</Identifier>
      </TopNavigation>
    </PageLayout>
  );
};

WithSidebarNavigation.story = {
  name: 'Sidebar Navigation',
};

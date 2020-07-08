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

export const BasicPageLayout = (props) => {
  return (
    <PageLayout>
      <Content>
        <LeftSidebar>
          <Identifier borderColor="red">Left Sidebar</Identifier>
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

BasicPageLayout.story = {
  name: 'Page Layout',
};

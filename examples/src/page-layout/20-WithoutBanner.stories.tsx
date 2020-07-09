import React from 'react';
import {
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

export const WithoutBanner = (props) => {
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
      <TopNavigation>
        <Identifier borderColor="purple">TopNavigation</Identifier>
      </TopNavigation>
    </PageLayout>
  );
};

WithoutBanner.story = {
  name: 'Without Banner',
};

import React from 'react';

interface NavigationContentProps {
  children: React.ReactNode;
}

export const NavigationContent: React.FC<NavigationContentProps> = ({
  children,
}) => {
  return (
    <div
      css={{
        display: 'flex',
        height: '100%',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div
          css={{
            marginLeft: 8,
            marginRight: 8,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

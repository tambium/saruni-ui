import React from 'react';

interface NavigationHeaderProps {
  children: React.ReactNode;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  children,
}) => {
  return <div css={{ padding: '24px 8px 8px' }}>{children}</div>;
};

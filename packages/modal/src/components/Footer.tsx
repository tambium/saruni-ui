import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      css={{
        display: 'flex',
        flex: '0 0 auto',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: '19px 24px 20px 24px',
        boxShadow: `0 -1px 0 0 red`,
      }}
    >
      footer
    </div>
  );
};

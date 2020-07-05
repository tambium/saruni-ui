import React from 'react';

interface HeaderProps {
  heading?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <div
      css={{
        alignItems: 'center',
        display: 'flex',
        flex: '0 0 auto',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: '20px 24px 19px 24px',
        boxShadow: `0 1px 0 0 red`,
      }}
    >
      <h4
        css={{
          alignItems: 'center',
          display: 'flex',
          fontSize: 20,
          fontStyle: 'inherit',
          fontWeight: 500,
          lineHeight: 1,
          margin: 0,
          minWidth: 0,
        }}
      >
        {heading}
      </h4>
    </div>
  );
};

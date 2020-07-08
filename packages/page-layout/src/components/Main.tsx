import React from 'react';
import { MAIN } from '../constants';

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div
      css={{
        gridArea: MAIN,
        flexGrow: 1,
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
};

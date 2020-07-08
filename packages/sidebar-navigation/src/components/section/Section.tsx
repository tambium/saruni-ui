import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <div style={{ marginLeft: 8, marginRight: 8 }}>{children}</div>;
};

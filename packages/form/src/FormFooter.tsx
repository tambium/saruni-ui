import React from 'react';

interface FormFooterProps {
  children: React.ReactNode;
}

export const FormFooter: React.FC<FormFooterProps> = ({ children }) => {
  return <div css={{ display: 'flex', marginTop: 16 }}>{children}</div>;
};

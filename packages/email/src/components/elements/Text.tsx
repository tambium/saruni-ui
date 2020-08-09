import React from 'react';

interface TextProps {
  children: React.ReactNode;
  isSpaced?: boolean;
}

export const Text: React.FC<TextProps> = ({ children, isSpaced = true }) => {
  return <p css={{ marginBottom: isSpaced ? 16 : 0 }}>{children}</p>;
};

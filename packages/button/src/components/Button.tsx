import * as React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from './../types';

const StyledButton = styled.button<ButtonProps>`
  background: navy;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 32px;
`;

export const Button: React.FC<ButtonProps> = ({ children, appearance }) => {
  return (
    <StyledButton appearance={appearance}>
      {children && <React.Fragment>{children}</React.Fragment>}
    </StyledButton>
  );
};

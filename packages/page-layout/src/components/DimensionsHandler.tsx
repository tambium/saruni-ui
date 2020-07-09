import React from 'react';
import { css, Global } from '@emotion/core';

interface DimensionsHandlerProps {
  propertyName: string;
  value: number;
}

export const DimensionsHandler: React.FC<DimensionsHandlerProps> = ({
  propertyName,
  value,
}) => {
  return (
    <Global
      styles={css`
      :root {
        --${propertyName}: ${value}px;
      }
   `}
    />
  );
};

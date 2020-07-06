import React from 'react';

export interface PortalProps {
  /** Contents to render in the React Portal. */
  children: React.ReactNode;
  /** Stack order of the container DOM element. */
  zIndex: number | string;
}

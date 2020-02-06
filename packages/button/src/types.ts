import * as React from 'react';

type ButtonAppearances = 'default' | 'primary';

interface Props {
  appearance?: ButtonAppearances;
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps extends Props {}

import * as React from 'react';

type ButtonAppearances = 'default' | 'primary';

interface Props {
  appearance?: ButtonAppearances;
  children?: React.ReactNode;
}

export interface ButtonProps extends Props {}

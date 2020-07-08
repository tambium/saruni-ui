import React from 'react';
import { ThemeModes } from '@saruni-ui/theme';

export interface BaseItemProps {
  children?: React.ReactNode;
  description?: string;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
  mode: ThemeModes;
}

export interface LinkItemProps {
  children: React.ReactNode;
  description?: string;
  href?: string;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
  isDisabled?: boolean;
  isSelected?: boolean;
}

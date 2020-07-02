import React from 'react';
import { font } from '@saruni-ui/theme';

interface FormHeaderProps {
  /** Subheading used to describe the form. */
  description?: string;
  /** Heading form the form. */
  title?: string;
}

export const FormHeader: React.FC<FormHeaderProps> = ({
  description,
  title,
}) => {
  return (
    <div>
      {title && (
        <div css={{ fontSize: font.size.title, fontWeight: 500 }}>{title}</div>
      )}
      {description && (
        <div css={{ fontSize: font.size.subtitle }}>{description}</div>
      )}
    </div>
  );
};

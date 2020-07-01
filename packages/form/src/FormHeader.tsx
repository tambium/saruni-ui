import React from 'react';

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
      {title && <span>{title}</span>}
      {description && <span>{description}</span>}
    </div>
  );
};

import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FieldProps {
  children: React.ReactNode;
  label?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

export const FieldContext = React.createContext<{
  name: string;
  defaultValue?: string;
  placeholder?: string;
  validation?: { required: boolean };
}>({
  name: '',
});

export const Field: React.FC<FieldProps> = (props) => {
  const { children, label, name, ...rest } = props;

  const formContext = useFormContext();

  if (!formContext) {
    throw new Error('<Field /> should only be used inside a <Form />');
  }

  const { errors } = formContext;

  const isInvalid = !!errors[name];

  const invalidMessage = errors[name]?.message;

  return (
    <FieldContext.Provider value={{ name, ...rest }}>
      {label && <label>{label}</label>}
      {children}
      {isInvalid && invalidMessage && <div>{invalidMessage}</div>}
    </FieldContext.Provider>
  );
};

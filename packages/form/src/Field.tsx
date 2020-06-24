import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface FieldProps {
  id?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
  placeholder?: string;
  'aria-invalid'?: 'true' | 'false';
  'aria-labelledby'?: string;
}

export const FieldContext = React.createContext<FieldProps>({
  name: '',
});

interface Props {
  /* Children to render in the field. */
  children: React.ReactNode;
  /* The default value of the field. */
  defaultValue?: string;
  /* Passed to the ID attribute of the field. */
  id?: string;
  /* Whether the field is required for submission. */
  isRequired?: boolean;
  /* Whether the field is disabled. */
  isDisabled?: boolean;
  /* Label displayed above the field. */
  label?: React.ReactNode;
  /* The name of the field */
  name: string;
  /* The placeholder for the field */
  placeholder?: string;
}

export const Field: React.FC<Props> = (props) => {
  const formContext = useFormContext();

  if (!formContext) {
    throw new Error('<Field /> should only be used inside a <Form />');
  }

  const { errors } = formContext;

  const isInvalid = Boolean(errors[props.name]);
  const invalidMessage = errors[props.name]?.message;

  const fieldId = React.useMemo(() => (props.id ? props.id : `${props.name}`), [
    props.id,
    props.name,
  ]);

  const extendedFieldProps = {
    'aria-invalid': (errors[name] ? 'true' : 'false') as 'true' | 'false',
    'aria-labelledby': `${fieldId}-label ${fieldId}-helper ${fieldId}-valid ${fieldId}-error`,
    id: fieldId,
    isDisabled: Boolean(props.isDisabled),
    isInvalid,
    isRequired: Boolean(props.isRequired),
    name: props.name,
    placeholder: props.placeholder,
  };

  return (
    <FieldContext.Provider value={{ ...extendedFieldProps }}>
      {props.label && <label>{props.label}</label>}
      {props.children}
      {isInvalid && invalidMessage && <div>{invalidMessage}</div>}
    </FieldContext.Provider>
  );
};

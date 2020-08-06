import React from 'react';
import { FormProvider, UseFormMethods } from 'react-hook-form';

interface FormProps {
  formMethods: UseFormMethods<Record<string, any>>;
  onSubmit: <T>(
    data: T,
    e: React.BaseSyntheticEvent | undefined,
  ) => void | Promise<void>;
}

interface FormErrorProps {
  render?: (error: string) => React.ReactNode;
}

export const FormErrorContext = React.createContext<string | undefined>(
  undefined,
);

export const FormError: React.FC<FormErrorProps> = (props) => {
  const formError = React.useContext(FormErrorContext);

  if (!formError) return null;

  return (
    <React.Fragment>
      {props.render ? props.render(formError) : formError}
    </React.Fragment>
  );
};

export const Form: React.FC<FormProps> = (props) => {
  const [formError, setFormError] = React.useState<string | undefined>(
    undefined,
  );

  const { formMethods, onSubmit, ...formProps } = props;

  return (
    <form
      {...formProps}
      onSubmit={formMethods.handleSubmit(async (data, reactEvent) => {
        try {
          setFormError(undefined);

          await onSubmit(data, reactEvent);
        } catch (e) {
          setFormError(e.message);
        }
      })}
    >
      <FormErrorContext.Provider value={formError}>
        <FormProvider {...formMethods}>{props.children}</FormProvider>
      </FormErrorContext.Provider>
    </form>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@saruni-ui/textfield';
import { Field, Form } from '@saruni-ui/form';

export default { title: 'Form' };

export const SignupForm = () => {
  const formMethods = useForm({
    mode: 'onBlur',
  });

  return (
    <Form formMethods={formMethods} onSubmit={(data) => console.log(data)}>
      <Field name="firstName" label="First name" placeholder="First name">
        <TextField />
      </Field>
    </Form>
  );
};

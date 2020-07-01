import React from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { Button } from '@saruni-ui/button';
import { TextField } from '@saruni-ui/textfield';
import { Field, Form, FormHeader, FormFooter } from '@saruni-ui/form';

export default { title: 'Form' };

const SignupSchema = object().shape({
  email: string()
    .email('Email address must be valid.')
    .required('Email is required.'),
  firstName: string().required('First name is required.'),
  lastName: string().required('Last name is required.'),
  password: string()
    .min(8, 'Password should be at least 8 characters.')
    .required(),
});

export const SignupForm = (props) => {
  const formMethods = useForm({
    mode: 'onBlur',
    validationSchema: SignupSchema,
  });

  return (
    <Form formMethods={formMethods} onSubmit={(data) => console.log(data)}>
      <FormHeader title="Create your account" />
      <Field name="firstName" label="First name" placeholder="First name">
        <TextField />
      </Field>
      <FormFooter>
        <Button appearance="primary">Sign up</Button>
      </FormFooter>
    </Form>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { TextField } from '@saruni-ui/textfield';
import { Field, Form } from '@saruni-ui/form';

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

export const SignupForm = () => {
  const formMethods = useForm({
    mode: 'onBlur',
    validationSchema: SignupSchema,
  });

  return (
    <div css={{ backgroundColor: '#F8FAFC' }}>
      <Form formMethods={formMethods} onSubmit={(data) => console.log(data)}>
        <Field name="firstName" label="First name" placeholder="First name">
          <TextField />
        </Field>
      </Form>
    </div>
  );
};

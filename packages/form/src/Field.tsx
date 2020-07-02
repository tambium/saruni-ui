import React from 'react';
import { useFormContext } from 'react-hook-form';
import { GlobalThemeConsumer, ThemeModes } from '@saruni-ui/theme';
import { Error } from '@saruni-ui/icon';
import { CSSObject } from '@emotion/core';

import { Theme } from './theme';

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

export const FieldContext = React.createContext<Partial<FieldProps>>({});

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
    console.warn('<Field /> should only be used inside a <Form />');
    return null;
  }

  const { errors } = formContext;

  const isInvalid = Boolean(errors[props.name]);
  const invalidMessage = errors[props.name]?.message;

  const fieldId = React.useMemo(() => (props.id ? props.id : `${props.name}`), [
    props.id,
    props.name,
  ]);

  const extendedFieldProps = {
    'aria-invalid': (errors[props.name] ? 'true' : 'false') as 'true' | 'false',
    'aria-labelledby': `${fieldId}-label ${fieldId}-helper ${fieldId}-valid ${fieldId}-error`,
    id: fieldId,
    isDisabled: Boolean(props.isDisabled),
    isInvalid,
    isRequired: Boolean(props.isRequired),
    name: props.name,
    placeholder: props.placeholder,
  };

  return (
    <Theme.Provider>
      <GlobalThemeConsumer>
        {({ mode }: { mode: ThemeModes }) => (
          <Theme.Consumer mode={mode}>
            {(tokens) => {
              return (
                <FieldContext.Provider value={{ ...extendedFieldProps }}>
                  <div css={{ marginTop: 8 }}>
                    {props.label && (
                      <label css={tokens.label as CSSObject}>
                        {props.label}
                      </label>
                    )}
                    {props.children}
                    {isInvalid && invalidMessage && (
                      <div css={tokens.invalidMessage as CSSObject}>
                        <div css={{ paddingRight: 4 }}>
                          <Error size={14} />
                        </div>
                        {invalidMessage}
                      </div>
                    )}
                  </div>
                </FieldContext.Provider>
              );
            }}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

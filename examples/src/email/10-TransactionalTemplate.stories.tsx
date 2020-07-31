import React from 'react';
import { TransactionalTemplate as SNTransactionalTemplate } from '@saruni-ui/email';

export default { title: 'Email' };

export const TransactionalTemplate = (props) => {
  return (
    <SNTransactionalTemplate
      subject="Welcome to Saruni UI"
      unsubscribeURL="http://example.com"
    />
  );
};

TransactionalTemplate.story = {
  name: 'Email',
};

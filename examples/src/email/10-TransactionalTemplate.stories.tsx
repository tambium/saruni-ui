import React from 'react';
import {
  Button,
  Divider,
  TransactionalTemplate as SNTransactionalTemplate,
  Text,
} from '@saruni-ui/email';
import { font } from '@saruni-ui/theme';

export default { title: 'Email' };

export const TransactionalTemplate = (props) => {
  const Body = (
    <React.Fragment>
      <Text>Hi there,</Text>
      <Text>
        Please click the button below to confirm your email address. If you
        didn’t request this email, you can safely ignore it.
      </Text>
      <Button href="https://saruni.dev/" title="Confirm email" />
      <Text isSpaced={false}>Have a great day!</Text>
    </React.Fragment>
  );

  const Header = (
    <React.Fragment>
      <h1 css={{ fontSize: font.size.subheading }}>Saruni</h1>
      <Divider />
    </React.Fragment>
  );

  const Footer = (
    <div css={{ clear: 'both', fontSize: font.size.caption, width: '100%' }}>
      <table>
        <tbody>
          <tr>
            <td css={{ padding: 16 }}>
              <p>
                Don’t like these emails?{' '}
                <a href={'http://example.com'}>Unsubscribe</a>.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <SNTransactionalTemplate
      components={{
        Body,
        Footer,
        Header,
      }}
      subject="Please confirm your email for Saruni."
    />
  );
};

TransactionalTemplate.story = {
  name: 'Transactional',
};

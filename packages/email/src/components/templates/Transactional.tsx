import React from 'react';
import { DefaultLayout } from '../layouts';
import { Button } from '../partials';
import { font } from '@saruni-ui/theme';

interface TransactionalProps {
  subject: string;
  unsubscribeURL: string;
}

export const Transactional: React.FC<TransactionalProps> = ({
  subject,
  unsubscribeURL,
}) => {
  return (
    <DefaultLayout subject={subject}>
      <React.Fragment>
        <table
          css={{
            background: '#ffffff',
            borderRadius: 4,
            width: '100%',
          }}
        >
          <tr>
            <td css={{ padding: 16 }}>
              <table>
                <tr>
                  <td>
                    <h1>Transactional Template</h1>
                    <p>Hi there,</p>
                    <p>
                      Please click the button below to confirm your email
                      address. If you didn’t request this email, you can safely
                      ignore it.
                    </p>
                    <Button href="https://saruni.dev/" title="Confirm email" />
                    <p>Have a great day!</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div
          css={{ clear: 'both', fontSize: font.size.caption, width: '100%' }}
        >
          <table>
            <tr>
              <td css={{ padding: 16 }}>
                <p>
                  Don’t like these emails?{' '}
                  <a href={unsubscribeURL}>Unsubscribe</a>.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    </DefaultLayout>
  );
};

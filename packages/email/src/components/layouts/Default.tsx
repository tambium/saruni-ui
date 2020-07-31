import React from 'react';
import { font } from '@saruni-ui/theme';

import { EMAIL_WIDTH } from '../../constants';

interface DefaultProps {
  children?: React.ReactNode;
  subject: string;
}

export const Default: React.FC<DefaultProps> = ({ children, subject }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{subject}</title>
      </head>

      <body>
        <table
          css={{
            fontFamily: font.family.ui,
            fontSize: font.size.body,
            height: '100%',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          <tr>
            <td></td>
            <td
              css={{
                display: 'block',
                margin: '0 auto',
                maxWidth: EMAIL_WIDTH,
                padding: 8,
                width: EMAIL_WIDTH || 'auto',
              }}
            >
              <div
                css={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: EMAIL_WIDTH,
                  padding: 8,
                }}
              >
                {children}
              </div>
            </td>
            <td></td>
          </tr>
        </table>
      </body>
    </html>
  );
};

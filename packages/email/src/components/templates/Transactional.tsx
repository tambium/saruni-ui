import React from 'react';
import { css } from '@emotion/core';
import { colors, Reset } from '@saruni-ui/theme';

import { EMAIL_SPACING, EMAIL_WIDTH } from '../../constants';

interface TransactionalProps {
  appearance?: 'contained' | 'full' | 'plain';
  components: {
    Body?: React.ReactNode;
    Footer?: React.ReactNode;
    Header?: React.ReactNode;
  };
  subject: string;
}

export const Transactional: React.FC<TransactionalProps> = ({
  appearance = 'contained',
  components,
  subject,
}) => {
  const { Body, Footer, Header } = components;

  return (
    <React.Fragment>
      <Reset />
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="x-apple-disable-message-reformatting" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="color-scheme" content="light dark" />
          <meta name="supported-color-schemes" content="light dark" />
          <title>{subject}</title>
        </head>
        <body
          css={css`
            color: ${colors.text['light']};
            height: 100%;
            margin: 0;
            -webkit-text-size-adjust: none;
            width: 100% !important;
            @media (prefers-color-scheme: dark) {
              color: ${colors.text['dark']};
            }
          `}
        >
          <table
            cellPadding="0"
            cellSpacing="0"
            css={css`
              background-color: ${colors.background['light']};
              margin: 0;
              padding: 0;
              width: 100%;
              @media (prefers-color-scheme: dark) {
                background-color: ${colors.background['dark']};
              }
              ${appearance === 'plain' &&
              `
              background-color: ${colors.surface['light']};
              @media (prefers-color-scheme: dark) {
                background-color: ${colors.surface['dark']};
              }
            `}
            `}
            role="presentation"
            width="100%"
          >
            <tr>
              <td align="center">
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  css={{
                    margin: '0',
                    padding: '0',
                    width: '100%',
                  }}
                  role="presentation"
                  width="100%"
                >
                  {/* Header Start */}
                  <tr>
                    <td
                      css={{
                        padding: `${EMAIL_SPACING}px 0`,
                        textAlign: 'center',
                      }}
                    >
                      {Header}
                    </td>
                  </tr>
                  {/* Header End */}
                  {/* Body Start */}
                  <tr>
                    <td
                      css={css`
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        ${appearance !== 'contained' &&
                        `
                        background-color: ${colors.surface['light']};
                        @media (prefers-color-scheme: dark) {
                          background-color: ${colors.surface['dark']};
                        }
                      `}
                      `}
                      width={appearance === 'contained' ? EMAIL_WIDTH : '100%'}
                    >
                      <table
                        css={css`
                          background-color: ${colors.surface['light']};
                          margin: 0 auto;
                          padding: 0;
                          width: ${EMAIL_WIDTH}px;
                          @media (prefers-color-scheme: dark) {
                            background-color: ${colors.surface['dark']};
                          }
                        `}
                        cellPadding="0"
                        cellSpacing="0"
                        width={EMAIL_WIDTH}
                        role="presentation"
                      >
                        {/* Content Start */}
                        <tr>
                          <td css={{ padding: EMAIL_SPACING }}>
                            <div>{Body}</div>
                          </td>
                        </tr>
                        {/* Content End */}
                      </table>
                    </td>
                  </tr>
                  {/* Body End */}
                  {/* Footer Start */}
                  <tr>
                    <td>
                      <table
                        css={{
                          margin: '0 auto',
                          padding: 0,
                          width: EMAIL_WIDTH,
                        }}
                        width={EMAIL_WIDTH}
                        cellPadding="0"
                        cellSpacing="0"
                        role="presentation"
                      >
                        <tr>
                          <td align="center" css={{ padding: EMAIL_SPACING }}>
                            {Footer}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  {/* Footer End */}
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    </React.Fragment>
  );
};

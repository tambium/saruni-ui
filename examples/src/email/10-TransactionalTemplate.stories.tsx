import React from 'react';
import { css } from '@emotion/core';
import {
  Button,
  HighlightedSection,
  TransactionalTemplate as SNTransactionalTemplate,
  Text,
} from '@saruni-ui/email';
import { colors, font } from '@saruni-ui/theme';

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
    <a
      css={css`
        color: ${colors.textSubdued['light']};
        font-weight: 500;
        text-decoration: none;
        @media (prefers-color-scheme: dark) {
          color: ${colors.textSubdued['dark']};
        }
      `}
      href="https://example.com"
    >
      Saruni
    </a>
  );

  const Footer = (
    <p
      css={css`
        color: ${colors.textSubdued['light']};
        font-size: ${font.size.caption}px;
        text-align: center;
        @media (prefers-color-scheme: dark) {
          color: ${colors.textSubdued['dark']};
        }
      `}
    >
      &copy; Tambium {new Date().getFullYear()}
      <br />
      221B Baker Street
      <br />
      London, UK
    </p>
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

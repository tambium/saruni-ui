import React from 'react';
import { css } from '@emotion/core';
import { colors } from '@saruni-ui/theme';
import { EMAIL_SPACING } from '../../constants';

interface HighlightedSectionProps {
  children: React.ReactNode;
  isSpaced?: boolean;
}

export const HighlightedSection: React.FC<HighlightedSectionProps> = ({
  children,
  isSpaced = true,
}) => {
  return (
    <table
      css={{
        margin: isSpaced ? `${EMAIL_SPACING}px 0` : undefined,
      }}
      className="attributes"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      width="100%"
    >
      <tr>
        <td
          css={css`
            background-color: ${colors.background['light']};
            padding: 16px;
            @media (prefers-color-scheme: dark) {
              background-color: ${colors.background['dark']};
            }
          `}
        >
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
          >
            {children}
          </table>
        </td>
      </tr>
    </table>
  );
};

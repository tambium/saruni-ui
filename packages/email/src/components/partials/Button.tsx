import React from 'react';
import { font } from '@saruni-ui/theme';

interface ButtonProps {
  align?: 'left' | 'center' | 'right' | 'justify';
  href: string;
  title: string;
}

// TODO: theme (backgroundColor, color)

export const Button: React.FC<ButtonProps> = ({
  align = 'left',
  href,
  title,
}) => {
  return (
    <table cellPadding="0" cellSpacing="0">
      <tr>
        <td align={align}>
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td>
                <a
                  css={{
                    backgroundColor: '#2C6ECB',
                    borderRadius: 4,
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'inline-block',
                    fontSize: font.size.body,
                    fontWeight: 500,
                    margin: '0',
                    padding: '8px 16px',
                    textDecoration: 'none',
                  }}
                  href={href}
                >
                  {title}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

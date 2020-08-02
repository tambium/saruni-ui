import React from 'react';

// TODO: theme (borderColor)

export const Divider: React.FC = () => {
  return (
    <table css={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>
            <table
              css={{
                borderCollapse: 'separate',
                padding: '12px 0',
                width: '100%',
              }}
              cellPadding="0"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <td
                    css={{
                      borderTop: '1px solid #E1E3E5',
                      lineHeight: '0',
                      fontSize: '0',
                      height: '1px',
                      margin: '0',
                      padding: '0',
                    }}
                  ></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

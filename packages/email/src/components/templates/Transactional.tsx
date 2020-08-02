import React from 'react';
import { DefaultLayout } from '../layouts';

interface TransactionalProps {
  components: {
    Body?: React.ReactNode;
    Footer?: React.ReactNode;
    Header?: React.ReactNode;
  };
  subject: string;
}

export const Transactional: React.FC<TransactionalProps> = ({
  components,
  subject,
}) => {
  const { Body, Footer, Header } = components;

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
          <tbody>
            <tr>
              <td css={{ padding: 16 }}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {Header} {Body}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        {Footer}
      </React.Fragment>
    </DefaultLayout>
  );
};

import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import { createTheme, ThemeProp } from '../utils/createTheme';
import { fontFamily, fontSize } from '../constants';

export type ResetThemeProps = { children?: ReactNode } | undefined;

interface ResetProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  theme?: ThemeProp<ResetThemeTokens, ResetThemeProps>;
}

export interface ResetThemeTokens {
  backgroundColor: string;
  fontFamily?: string;
  fontSize?: string;
  customCss?: string;
}

export const ResetTheme = createTheme<ResetThemeTokens, ResetThemeProps>(
  () => ({
    backgroundColor: '#fff',
  }),
);

export const Reset = (props: ResetProps) => {
  return (
    <ResetTheme.Provider value={props.theme}>
      <ResetTheme.Consumer>
        {(tokens: ResetThemeTokens) => {
          return (
            <React.Fragment>
              <Global
                styles={css`
                  html,
                  body,
                  p,
                  div,
                  h1,
                  h2,
                  h3,
                  h4,
                  h5,
                  h6,
                  ul,
                  ol,
                  dl,
                  img,
                  pre,
                  form,
                  fieldset {
                    margin: 0;
                    padding: 0;
                  }
                  img,
                  fieldset {
                    border: 0;
                  }

                  * {
                    box-sizing: inherit;
                  }

                  html {
                    box-sizing: border-box;
                  }

                  body,
                  html {
                    height: 100%;
                    width: 100%;
                  }

                  body {
                    background-color: ${tokens.backgroundColor};
                    font-family: ${tokens.fontFamily || fontFamily()};
                    font-size: ${tokens.fontSize || fontSize()}px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 1.42857142857;
                    -ms-overflow-style: -ms-autohiding-scrollbar;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-decoration-skip-ink: auto;
                  }

                  a {
                    text-decoration: none;
                  }
                  a:hover {
                    text-decoration: underline;
                  }

                  a:focus {
                    outline-offset: 2px;
                  }

                  /* IE11 doesn't support <template> elements which shouldn't be displayed */
                  template {
                    display: none;
                  }

                  /* IE11 and some older browsers don't support these elements yet and treat them as display: inline; */
                  article,
                  aside,
                  details,
                  figcaption,
                  figure,
                  footer,
                  header,
                  hgroup,
                  main,
                  menu,
                  nav,
                  section {
                    display: block;
                  }

                  /* Suppress the ugly broken image styling in Firefox */
                  @-moz-document url-prefix() {
                    img {
                      font-size: 0;
                    }
                    img:-moz-broken {
                      font-size: inherit;
                    }
                  }

                  ${tokens?.customCss}
                `}
              />
              {props.children}
            </React.Fragment>
          );
        }}
      </ResetTheme.Consumer>
    </ResetTheme.Provider>
  );
};

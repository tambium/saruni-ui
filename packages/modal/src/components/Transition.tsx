import React from 'react';
import { CSSObject } from '@emotion/core';
import { Transition as RTGTransition } from 'react-transition-group';

interface TransitionProps {
  children: ({ fade }: { fade: CSSObject }) => React.ReactNode;
  in: boolean;
}

const duration = 500;

export const Transition: React.FC<TransitionProps> = ({
  children,
  in: inProp,
}) => {
  return (
    <RTGTransition
      in={inProp}
      timeout={{ enter: 0, exit: duration }}
      unmountOnExit
    >
      {(state) => {
        console.log(state);
        const fadeBaseStyles = {
          transition: `opacity ${duration / 2}ms`,
          opacity: 1,
        };
        const fadeTransitionStyles = {
          entering: {
            opacity: 0,
          },
          entered: {},
          exiting: {
            opacity: 0,
          },
          exited: {},
          unmounted: {},
        };

        return (
          <React.Fragment>
            {children({
              fade: {
                ...fadeBaseStyles,
                ...fadeTransitionStyles[state],
              },
            })}
          </React.Fragment>
        );
      }}
    </RTGTransition>
  );
};

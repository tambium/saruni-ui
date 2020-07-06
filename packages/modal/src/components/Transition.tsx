import React from 'react';
import { CSSObject } from '@emotion/core';
import { Transition as RTGTransition } from 'react-transition-group';

interface TransitionProps {
  children: ({
    fade,
    scale,
  }: {
    fade: CSSObject;
    scale: CSSObject;
  }) => React.ReactNode;
  in: boolean;
}

const duration = 200;

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
        const fadeBaseStyles = {
          transition: `opacity ${duration}ms ease`,
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

        const scaleBaseStyles = {
          transition: `transform ${duration}ms ease-in-out`,
          transform: `scale(1)`,
        };
        const scaleTransitionStyles = {
          entering: {
            transform: `scale(0.5)`,
          },
          entered: {},
          exiting: {
            transform: `scale(0.5)`,
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
              scale: {
                ...scaleBaseStyles,
                ...scaleTransitionStyles[state],
              },
            })}
          </React.Fragment>
        );
      }}
    </RTGTransition>
  );
};

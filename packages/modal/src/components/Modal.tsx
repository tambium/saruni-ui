import React from 'react';
import { Backdrop } from '@saruni-ui/backdrop';
import { Portal } from '@saruni-ui/portal';
import { GlobalThemeConsumer, ThemeModes, layers } from '@saruni-ui/theme';

import { FocusLock } from './FocusLock';
import { Positioner } from './Positioner';
import { ModalProps, widthOpts, WIDTH_ENUM } from '../types';
import { Theme } from '../theme';
import { Transition } from './Transition';

export const Modal: React.FC<ModalProps> = ({
  autoFocus = true,
  height,
  isOpen = true,
  scrollBehavior = 'inside',
  shouldCloseOnBackdropClick = true,
  onClose,
  width,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (shouldCloseOnBackdropClick) onClose(e);
  };

  const widthName = width
    ? WIDTH_ENUM.values.indexOf(width.toString()) !== -1
      ? (width as widthOpts)
      : undefined
    : undefined;
  const widthValue = widthName ? undefined : width;

  return (
    <Theme.Provider>
      <Transition in={isOpen}>
        {({ fade }) => (
          <Portal zIndex={layers.modal}>
            <div
              css={{
                height: '100vh',
                left: 0,
                overflowY: 'auto',
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: layers.modal,
                WebkitOverflowScrolling: 'touch',
                ...fade,
              }}
            >
              <GlobalThemeConsumer>
                {({ mode }: { mode: ThemeModes }) => (
                  <Theme.Consumer
                    height={height}
                    mode={mode}
                    scrollBehavior={scrollBehavior}
                    widthName={widthName}
                    widthValue={widthValue}
                  >
                    {(tokens) => {
                      return (
                        <FocusLock autoFocus={autoFocus} isEnabled={isOpen}>
                          <Backdrop onBackdropClicked={handleBackdropClick} />
                          <Positioner tokens={tokens.positioner}>
                            <div css={tokens.modal}>Modal</div>
                          </Positioner>
                        </FocusLock>
                      );
                    }}
                  </Theme.Consumer>
                )}
              </GlobalThemeConsumer>
            </div>
          </Portal>
        )}
      </Transition>
    </Theme.Provider>
  );
};

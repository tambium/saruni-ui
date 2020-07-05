import React from 'react';
import { Backdrop } from '@saruni-ui/backdrop';
import { Portal } from '@saruni-ui/portal';
import { GlobalThemeConsumer, ThemeModes, layers } from '@saruni-ui/theme';

import { FocusLock } from './FocusLock';
import { Footer } from './Footer';
import { Header } from './Header';
import { Positioner } from './Positioner';
import { ModalProps, widthOpts, WIDTH_ENUM } from '../types';
import { Theme } from '../theme';
import { Transition } from './Transition';

export const Modal: React.FC<ModalProps> = ({
  autoFocus = true,
  children,
  heading,
  height,
  isOpen = true,
  scrollBehavior = 'inside',
  shouldCloseOnBackdropClick = true,
  onClose,
  width = 'medium',
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
        {({ fade, scale }) => (
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
                          <Positioner
                            tokens={{ ...tokens.positioner, ...scale }}
                          >
                            <div css={tokens.modal}>
                              <React.Fragment>
                                <Header heading={heading} />
                                <div css={{ flex: '1 1 auto', padding: 24 }}>
                                  {children}
                                </div>
                                <Footer />
                              </React.Fragment>
                            </div>
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

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
  actions,
  autoFocus = true,
  children,
  heading,
  height,
  isOpen = true,
  scrollBehavior = 'inside',
  shouldCloseOnBackdropClick = true,
  shouldCloseOnEscapePress = true,
  onClose,
  width = 'medium',
}) => {
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (shouldCloseOnEscapePress) onClose(event);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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
                <Transition in={isOpen}>
                  {({ fade, scale }) => (
                    <Portal zIndex={layers.modal}>
                      <div css={{ ...tokens.container, ...fade }}>
                        <FocusLock autoFocus={autoFocus} isEnabled={isOpen}>
                          <Backdrop onBackdropClicked={handleBackdropClick} />
                          <Positioner
                            tokens={{ ...tokens.positioner, ...scale }}
                          >
                            <div css={tokens.modal}>
                              <React.Fragment>
                                <Header
                                  heading={heading}
                                  tokens={tokens.header}
                                />
                                <div css={tokens.body.container}>
                                  {children}
                                </div>
                                <Footer
                                  actions={actions}
                                  tokens={tokens.footer}
                                />
                              </React.Fragment>
                            </div>
                          </Positioner>
                        </FocusLock>
                      </div>
                    </Portal>
                  )}
                </Transition>
              );
            }}
          </Theme.Consumer>
        )}
      </GlobalThemeConsumer>
    </Theme.Provider>
  );
};

import React from 'react';
import ReactFocusLock from 'react-focus-lock';

interface Props {
  /** Whether to focus the first tabbable element within the focus lock. */
  autoFocus: boolean;
  /** Content inside the focus lock. */
  children?: React.ReactNode;
  /** Whether the focus lock is active. */
  isEnabled: boolean;
}

export const FocusLock: React.FC<Props> = ({
  autoFocus,
  children,
  isEnabled,
}) => {
  return (
    <ReactFocusLock disabled={!isEnabled} autoFocus={!!autoFocus}>
      {children}
    </ReactFocusLock>
  );
};

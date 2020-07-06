import React from 'react';
import { Button } from '@saruni-ui/button';
import { Modal } from '@saruni-ui/modal';

export default { title: 'Modal' };

export const BasicModal = (props) => {
  const [state, setState] = React.useState({
    isOpen: false,
  });

  const close = () =>
    setState((prevState) => ({ ...prevState, isOpen: false }));

  const open = () => setState((prevState) => ({ ...prevState, isOpen: true }));

  return (
    <React.Fragment>
      <Button appearance="primary" onClick={open}>
        Open
      </Button>
      <Modal
        actions={[
          { title: 'Close', onClick: close },
          {
            appearance: 'primary',
            title: 'Action',
            onClick: () => console.log('Action!'),
          },
        ]}
        heading="Modal"
        isOpen={state.isOpen}
        onClose={close}
      >
        Body of the modal
      </Modal>
    </React.Fragment>
  );
};

BasicModal.story = {
  name: 'Modal',
};

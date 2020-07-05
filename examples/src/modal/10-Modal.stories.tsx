import React from 'react';
import { Button } from '@saruni-ui/button';
import { Modal } from '@saruni-ui/modal';

export default { title: 'Modal' };

export const BasicModal = (props) => {
  const [state, setState] = React.useState({
    isOpen: false,
  });

  return (
    <React.Fragment>
      <Button
        appearance="primary"
        onClick={() =>
          setState((prevState) => ({ ...prevState, isOpen: true }))
        }
      >
        Open
      </Button>
      <Modal
        heading="Modal"
        isOpen={state.isOpen}
        onClose={() =>
          setState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        Body of the modal
      </Modal>
    </React.Fragment>
  );
};

BasicModal.story = {
  name: 'Modal',
};

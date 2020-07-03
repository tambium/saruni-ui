import React from 'react';
import { Modal } from '@saruni-ui/modal';

export default { title: 'Modal' };

export const BasicModal = (props) => {
  const [state, setState] = React.useState({
    isOpen: true,
  });

  console.log(state);

  return (
    <Modal
      isOpen={state.isOpen}
      onClose={() => setState((prevState) => ({ ...prevState, isOpen: false }))}
    />
  );
};

BasicModal.story = {
  name: 'Modal',
};

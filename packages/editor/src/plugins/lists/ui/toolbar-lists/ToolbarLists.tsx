import React from 'react';
import { EditorView } from 'prosemirror-view';

import { ListsState } from '../../pm-plugins/lists';

interface ToolbarListsProps {
  listsState: ListsState;
  editorView: EditorView;
}

export const ToolbarLists: React.FC<ToolbarListsProps> = ({
  listsState,
  editorView,
}) => {
  const handleBulletListClick = () => {
    // TODO: handle bullet list creation.
    return false;
  };

  return (
    <React.Fragment>
      <button onClick={handleBulletListClick}>Bullet List</button>
    </React.Fragment>
  );
};

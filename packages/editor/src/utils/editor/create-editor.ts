import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { CreateEditorParams } from '../../types/editor';
import { EditorSharedConfig } from '../../types/editor-config';
import { createSchema } from '../schema/create-schema';
import { createEditorConfig } from './create-editor-config';
import { createPMPlugins } from '../plugins/create-pm-plugins';

export const createEditor = ({
  disabled,
  onChange,
  onDestroy,
  plugins,
  ref,
}: CreateEditorParams & {
  ref?: HTMLDivElement | null;
}): EditorSharedConfig | null => {
  if (!ref) return null;

  const editorConfig = createEditorConfig(plugins || []);
  const schema = createSchema(editorConfig);
  const pmPlugins = createPMPlugins({ editorConfig });

  const state = EditorState.create({
    schema,
    plugins: pmPlugins,
  });

  const editorView = new EditorView(
    { mount: ref },
    {
      state,
      attributes: { 'data-gramm': 'false' },
      /*
       * Ignore all transactions and disabled the
       * contentEditable attribute of the editor by default
       * since these will be applied after creation.
       */
      dispatchTransaction: () => {},
      editable: (_state) => !!disabled,
    },
  );

  return { disabled, editorView, onChange, onDestroy };
};

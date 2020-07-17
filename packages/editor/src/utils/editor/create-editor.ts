import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { CreateEditorParams } from '../../types/editor';
import { EditorPrivateConfig } from '../../types/editor-config';
import { createSchema } from '../schema/create-schema';
import { createEditorConfig } from './create-editor-config';

export const createEditor = ({
  plugins,
  ref,
}: CreateEditorParams & {
  ref?: HTMLDivElement | null;
}): EditorPrivateConfig | null => {
  if (!ref) return null;

  const editorConfig = createEditorConfig(plugins || []);
  const schema = createSchema(editorConfig);

  const state = EditorState.create({
    schema,
  });

  const editorView = new EditorView({ mount: ref }, { state });

  return { editorView };
};

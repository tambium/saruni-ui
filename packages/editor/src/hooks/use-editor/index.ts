import { CreateEditorParams } from '../../types/editor';
import { EditorSharedConfig } from '../../types/editor-config';
import { useCreateEditor } from '../use-create-editor';

export const useEditor = (
  createEditorParams: CreateEditorParams,
): [EditorSharedConfig | null, (ref: HTMLDivElement | null) => void] => {
  const [editorConfig, mountRef] = useCreateEditor(createEditorParams);
  return [editorConfig, mountRef];
};

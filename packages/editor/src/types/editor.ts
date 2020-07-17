import { EditorPlugin } from './editor-plugin';

export interface EditorProps {
  children: React.ReactNode;
  disabled?: boolean;
  onChange?: (value: any) => void;
  onDestroy?: () => void;
  plugins?: EditorPlugin[];
}

export type CreateEditorParams = Pick<
  EditorProps,
  'disabled' | 'onChange' | 'onDestroy' | 'plugins'
>;

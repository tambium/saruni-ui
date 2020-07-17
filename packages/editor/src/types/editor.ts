import { EditorPlugin } from './editor-plugin';

export interface EditorProps {
  children: React.ReactNode;
  onChange?: (value: any) => void;
  plugins?: EditorPlugin[];
}

export type CreateEditorParams = Pick<EditorProps, 'onChange' | 'plugins'>;

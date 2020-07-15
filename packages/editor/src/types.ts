import React from 'react';
import { EditorView } from 'prosemirror-view';
import { EditorState, Plugin, Transaction } from 'prosemirror-state';
import { NodeType, MarkType } from 'prosemirror-model';

export interface EditorProps {
  autoFocus?: boolean;
  defaultValue?: ProseMirrorDocument;
  onChange?: (document: ProseMirrorDocument) => void;
}

export interface KeyValue {
  [key: string]: any;
}

export interface KeymapData {
  key: string;
  label?: string;
}

export interface KeymapDataMap {
  [key: string]: KeymapData;
}

export type ProseMirrorDocument = KeyValue;

export interface ProseMirrorViewProvider {
  (): EditorView<any> | undefined;
}

export interface ProseMirrorDispatch {
  (tr: Transaction): void;
}

export interface ProseMirrorCommand {
  (state: EditorState, dispatch: ProseMirrorDispatch): boolean | void;
}

export interface EditorTheme {
  color: KeyValue;
}

interface StyleFunction {
  ({ theme }: { theme: EditorTheme }): KeyValue | void;
}

export interface EditorStyleConfig {
  input?: {
    wrapper?: StyleFunction;
    input?: StyleFunction;
  };
}

export interface EditorStyle extends EditorStyleConfig {
  constants: EditorTheme;
}

export interface PluginStyleFn {
  (theme: EditorStyle): string;
}

export interface EditorKeymap {
  (viewProvider?: ProseMirrorViewProvider): {
    [key: string]: ProseMirrorCommand;
  };
}

interface PluginSchema {
  nodes?: { [key: string]: NodeType };
  marks?: { [key: string]: MarkType };
}

export interface EditorPlugin {
  name: string;
  toolbarComponent?: React.ElementType;
  keymaps?: EditorKeymap;
  keymapInfo?: KeymapDataMap;
  plugins?: Plugin[];
  plugin?: Plugin;
  schema?: PluginSchema;
  styles?: PluginStyleFn;
}

interface PluginConfig {
  options?: string;
  color?: {
    colors: string[];
  };
}

type ToolbarType = {
  options?: string;
  block?: { options?: string; grouped?: boolean };
  inline?: { options?: string };
} & {
  [prop: string]: any;
};

interface ToolbarConfig {
  options?: string;
  top?: ToolbarType;
  inline?: ToolbarType;
}

export interface EditorConfig {
  plugins?: PluginConfig;
  toolbar?: ToolbarConfig;
}

export interface Addon {
  createStateFromDoc?: (fn: (doc: ProseMirrorDocument) => void) => void;
  dispatchTransactionCallback?: (
    editorState: EditorState,
    tr: Transaction,
  ) => EditorState;
  getSerializableState?: () => KeyValue;
  init?: (defaultValue: KeyValue) => void;
  name: string;
  updateLicenseInfo?: (editorRef: HTMLDivElement, licenseKey?: string) => void;
  viewUpdateCallback?: (view: EditorView) => void;
  toolbar: React.ElementType[];
  keymapInfo?: KeymapDataMap;
}

export interface ProseMirrorEditorState {
  view: EditorView;
}

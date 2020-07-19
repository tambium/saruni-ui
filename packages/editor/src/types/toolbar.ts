import React from 'react';
import { EditorSharedConfig } from './editor-config';

export type ToolbarComponent = React.ReactElement | null;

type ToolbarComponentFactoryParams = Pick<
  EditorSharedConfig,
  'editorView' | 'disabled'
> & {};

export type ToolbarComponentFactory = (
  params: ToolbarComponentFactoryParams,
) => ToolbarComponent;

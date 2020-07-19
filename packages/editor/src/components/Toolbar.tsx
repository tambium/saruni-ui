import React from 'react';
import { EditorConfigConsumer } from '../context/editor-config';

export const Toolbar: React.FC = () => {
  return (
    <EditorConfigConsumer>
      {(config) => {
        if (!config) return null;
        const { disabled, editorView, toolbarComponents } = config;
        if (!toolbarComponents || !toolbarComponents.length) return null;
        return toolbarComponents.map((component, key) => {
          const props: any = { key };
          const element = component({
            editorView,
            disabled,
          });
          return element && React.cloneElement(element, props);
        });
      }}
    </EditorConfigConsumer>
  );
};

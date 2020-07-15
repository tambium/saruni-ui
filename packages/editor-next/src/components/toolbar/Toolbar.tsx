import React from 'react';
import { useEditorContext, withContext } from '../../context';
import { EditorProps } from '../../types/editor-props';

interface ToolbarProps extends EditorProps {}

export const Toolbar: React.FC<ToolbarProps> = withContext(({}) => {
  const { config } = useEditorContext();

  return (
    <div>
      {config.primaryToolbarComponents.map((component, key) => {
        const props: { key: Number } = { key };
        const element = component();
        return React.cloneElement(element, props);
      })}
    </div>
  );
});

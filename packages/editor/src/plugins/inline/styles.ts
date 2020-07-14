import { PluginStyleFn } from '../../types';

export const styleFunction: PluginStyleFn = ({ constants }) => `
  .ProseMirror code {
    background-color: blue;
    border-radius: 4px;
    border: none;
    color: pink;
  }
`;

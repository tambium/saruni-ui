import { baseKeymap } from 'prosemirror-commands';
import { EditorState } from 'prosemirror-state';
import { keymap } from 'prosemirror-keymap';

import {
  EditorPlugin,
  ProseMirrorCommand,
  ProseMirrorViewProvider,
  ProseMirrorDispatch,
} from '../types';

export interface EditorKeymapCommandList {
  [key: string]: ProseMirrorCommand[];
}

export interface EditorKeymapCommand {
  [key: string]: ProseMirrorCommand;
}

/**
 * Builds an array of keymap.
 * [[][][]]
 * Each sub-array is array for one key handlers, e.g. all handlers for Enter.
 */
const addKeyMaps = (
  oldKeymap: EditorKeymapCommandList,
  newKeyMap: EditorKeymapCommand,
) => {
  const map = { ...oldKeymap };
  Object.keys(newKeyMap).forEach((key) => {
    if (!map[key]) {
      map[key] = [newKeyMap[key]];
    } else {
      map[key].push(newKeyMap[key]);
    }
  });
  return map;
};

/**
 * Combine all handlers for one key.
 */
const combineKeyMaps = (
  keyMaps: EditorKeymapCommandList,
): EditorKeymapCommand => {
  const map: EditorKeymapCommand = {};
  Object.keys(keyMaps).forEach((key) => {
    map[key] = (editorState: EditorState, dispatch: ProseMirrorDispatch) => {
      let result = false;
      for (let i = 0; i < keyMaps[key].length; i += 1) {
        if (keyMaps[key][i](editorState, dispatch)) {
          result = true;
          break;
        }
      }
      return result;
    };
  });
  return map;
};

export const buildKeymap = (
  plugins: EditorPlugin[],
  viewProvider?: ProseMirrorViewProvider,
) => {
  let addedMap: EditorKeymapCommandList = {};
  plugins.forEach((plugin) => {
    if (plugin && plugin.keymaps) {
      addedMap = addKeyMaps(addedMap, plugin.keymaps(viewProvider));
    }
  });
  addedMap = addKeyMaps(addedMap, baseKeymap);
  // @ts-ignore
  return keymap(combineKeyMaps(addedMap));
};

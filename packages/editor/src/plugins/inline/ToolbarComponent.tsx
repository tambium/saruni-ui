import React from 'react';
import { toggleMark } from 'prosemirror-commands';
import { Mark } from 'prosemirror-model';

import { inlinePluginKey } from './plugin';
import { useStateContext } from '../../context/editor-state';

type inlineMark = 'strong' | 'em' | 'underline' | 'strike';

const MarkIcons = {
  strong: 'bold',
  em: 'italic',
  underline: 'underline',
  strike: 'strike',
  code: 'code',
};

export const ToolbarComponent = ({
  config,
}: {
  config: { options: string };
}) => {
  const { state } = useStateContext();

  if (!state) return null;

  const { view } = state;

  if (!view) return null;

  const getActiveMarks = () => {
    const { state } = view;
    const pluginState = inlinePluginKey.getState(state);
    return pluginState && pluginState.activeMarks;
  };

  const toggleMarkofType = (evt: React.MouseEvent) => {
    const markName = (evt.currentTarget as HTMLButtonElement).getAttribute(
      'data-name',
    );
    const { state, dispatch } = view;
    const markType = state.schema.marks[markName!];
    toggleMark(markType)(state, dispatch);
  };

  const toggleCodeMark = () => {
    const { state: internalState, dispatch } = state.view;
    const { schema, selection, tr } = internalState;
    const { $from, $to } = selection;
    const { marks } = schema;
    const { code } = marks;
    if (code.isInSet(getActiveMarks())) {
      tr.removeMark($from.pos, $to.pos, code).setStoredMarks([]);
    } else {
      // @ts-ignore
      Object.values(marks).forEach((mark: Mark) => {
        tr.removeMark($from.pos, $to.pos, mark);
      });
      const codeMark = code.create();
      tr.addMark($from.pos, $to.pos, codeMark).setStoredMarks([codeMark]);
    }
    dispatch(tr);
  };

  const activeMarks = getActiveMarks();

  const { marks } = view.state.schema;
  const { options } = config;

  const inlineMarks: inlineMark[] = ['strong', 'em', 'underline', 'strike'];

  return (
    <React.Fragment>
      {inlineMarks.reduce((result, mark: inlineMark) => {
        if (options.indexOf(mark) >= 0) {
          const isSelected = !!marks[mark].isInSet(activeMarks);
          result.push(
            <React.Fragment key={`inlinestyle-${mark}`}>
              <div
                css={{ fontWeight: isSelected ? 600 : undefined }}
                onClick={toggleMarkofType}
                data-name={mark}
              >
                <span>{mark}</span>
              </div>
              {/* <ToolbarButton
                  name={mark}
                  onClick={toggleMarkofType}
                  selected={isSelected}
                  title={mark}
                >
                  <Icon name={MarkIcons[mark]} selected={isSelected} />
                </ToolbarButton> */}
            </React.Fragment>,
          );
        }
        return result;
      }, [] as React.ReactElement[])}
    </React.Fragment>
  );
};

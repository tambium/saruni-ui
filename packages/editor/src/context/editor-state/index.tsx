import * as React from 'react';
import { PureComponent, createContext, useContext } from 'react';
import { EditorView } from 'prosemirror-view';

import { ProseMirrorEditorState } from '../../types';
import { ConfigContext } from '../config';

const StateContext = createContext<{
  state: ProseMirrorEditorState | undefined;
}>({ state: undefined });

export class StateContextProvider extends PureComponent {
  static contextType = ConfigContext;

  state: { state: ProseMirrorEditorState | undefined } = {
    state: undefined,
  };

  componentDidMount() {
    const { dispatcher } = this.context;
    dispatcher.addListener(this.updateView);
  }

  componentWillUnmount() {
    const { dispatcher } = this.context;
    dispatcher.removeListener(this.updateView);
  }

  updateView = (view: EditorView) => {
    this.setState({ state: { view } });
  };

  render() {
    const { state } = this.state;
    const { children } = this.props;
    return (
      <StateContext.Provider value={{ state }}>
        {children}
      </StateContext.Provider>
    );
  }
}

export const StateConsumer = StateContext.Consumer;

export const useStateContext = () => ({
  ...useContext(StateContext),
});

// import React from 'react';
// import { EditorView } from 'prosemirror-view';

// import { ProseMirrorEditorState } from '../../types';
// import { useConfigContext } from '../config';

// interface StateContextProviderProps {
//   children: React.ReactNode;
// }

// const StateContext = React.createContext<{
//   state: ProseMirrorEditorState | undefined;
// }>({ state: undefined });

// export const StateContextProvider: React.FC<StateContextProviderProps> = ({
//   children,
// }) => {
//   const { dispatcher } = useConfigContext();
//   const [state, setState] = React.useState<ProseMirrorEditorState>({});

//   React.useEffect(() => {
//     dispatcher.addListener(updateView);
//     () => dispatcher.removeListener(updateView);
//   }, []);

//   const updateView = (view: EditorView) => {
//     setState({ view });
//   };

//   return (
//     <StateContext.Provider value={{ state }}>{children}</StateContext.Provider>
//   );
// };

// export const StateContextConsumer = StateContext.Consumer;

// export const useStateContext = () => ({
//   ...React.useContext(StateContext),
// });

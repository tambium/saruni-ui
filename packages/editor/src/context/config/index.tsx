import React from 'react';

import { defaultConfig } from '../../config/editor';
import { overrideValue } from '../../utils/override-value';
import { EditorConfig } from '../../types';
import { getDispatcher } from './dispatcher';

export const ConfigContext = React.createContext<any | undefined>(undefined);

interface ConfigContextProviderProps {
  config?: EditorConfig;
  children: any;
}

export const ConfigContextProvider: React.FC<ConfigContextProviderProps> = ({
  config: newConfig,
  children,
}) => {
  const [dispatcher] = React.useState(getDispatcher());
  const editorConfig = overrideValue(defaultConfig, newConfig);

  return (
    <ConfigContext.Provider value={{ config: editorConfig, dispatcher }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const ConfigContextConsumer = ConfigContext.Consumer;

export const useConfigContext = () => ({
  ...React.useContext(ConfigContext),
});

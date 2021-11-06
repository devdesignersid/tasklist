import React, { createContext, useReducer } from 'react';

import { AppState } from '@/types';
import { AppStateContextProps } from './types';
import { appStateReducer } from './reducer';

const appData: AppState = {
  lists: [
    {
      id: '0',
      title: 'To Do',
      tasks: [{ id: 'c0', value: 'Generate app scaffold' }]
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [{ id: 'c1', value: 'Learn Typescript' }]
    },
    {
      id: '2',
      title: 'Done',
      tasks: [{ id: 'c2', value: 'Begin to use static typing' }]
    }
  ],
  draggedItem: undefined
};

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};

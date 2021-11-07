import * as React from 'react';
import { Global } from '@emotion/react';

import AppContainer from './AppContiner';
import { Column, AddNewItem } from '@/containers';
import { GlobalCss } from '@/styles';
import { useAppState } from '@/utils';
import CustomDragLayer from '../CustomDragLayer';

const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      <Global styles={GlobalCss} />

      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column isPreview={false} id={list.id} title={list.title} key={list.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(title) => dispatch({ type: 'ADD_LIST', payload: title })}
      />
    </AppContainer>
  );
};

export default App;

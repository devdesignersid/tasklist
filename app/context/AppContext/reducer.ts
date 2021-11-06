import { v4 as uuid } from 'uuid';

import { AppState } from '@/types';
import { Action } from './types';
import { findItemIndexById, moveItem } from '@/utils';

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      // Reducer logic here..
      return {
        ...state,
        lists: [...state.lists, { id: uuid(), title: action.payload, tasks: [] }]
      };
    }
    case 'ADD_TASK': {
      // Reducer logic here..
      const targetListIndex = findItemIndexById(state.lists, action.payload.id);
      state.lists[targetListIndex].tasks.push({
        id: uuid(),
        value: action.payload.value
      });
      return {
        ...state
      };
    }
    case 'MOVE_LIST': {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return {
        ...state
      };
    }
    case 'SET_DRAGGED_ITEM': {
      return { ...state, draggedItem: action.payload };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

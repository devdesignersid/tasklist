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
    case 'MOVE_TASK': {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn } = action.payload;
      const sourceListIndex = findItemIndexById(state.lists, sourceColumn);
      const targetListIndex = findItemIndexById(state.lists, targetColumn);
      const item = state.lists[sourceListIndex].tasks.splice(dragIndex, 1)[0];
      state.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);
      return { ...state };
    }

    default: {
      return {
        ...state
      };
    }
  }
};

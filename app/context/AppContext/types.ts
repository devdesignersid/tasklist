import { AppState, DragItem, Task } from '@/types';
import { Dispatch } from 'react';

export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: Task;
    }
  | {
      type: 'MOVE_LIST';
      payload: { dragIndex: number; hoverIndex: number };
    }
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | undefined;
    };

export interface AppStateContextProps {
  state: AppState;
  dispatch: Dispatch<Action>;
}

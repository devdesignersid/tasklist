import { DragItem } from './dragItem';
import List from './list';

interface AppState {
  lists: List[];
  draggedItem: DragItem | undefined;
}

export default AppState;

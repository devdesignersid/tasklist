import { useDrop } from 'react-dnd';
import { DragItem } from '@/types';
import useAppState from '../useAppState';

const useColumnDrop = ({ index, id }: { index: number; id: string }) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;
        if (sourceColumn === targetColumn) {
          return;
        }
        dispatch({
          type: 'MOVE_TASK',
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn }
        });
        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    }
  });
  return { drop };
};

export default useColumnDrop;

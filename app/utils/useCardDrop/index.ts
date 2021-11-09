import { useDrop } from 'react-dnd';
import { CardDragItem } from '@/types';
import { useAppState } from '@/utils';

const useCardDrop = ({ id, index, columnId }: { id: string; index: number; columnId: string }) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn }
      });
      item.index = hoverIndex;
      item.columnId = targetColumn;
    }
  });

  return { drop };
};

export default useCardDrop;
